// ===== State =====
let currentLang = 'zh';
let currentFilter = 'all';
let currentRankBy = 'total';

// ===== Language =====
function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.getElementById('langToggle').textContent = currentLang === 'zh' ? 'EN' : '中文';
  const mobileLangBtn = document.getElementById('langToggleMobile');
  if (mobileLangBtn) mobileLangBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
  document.documentElement.lang = currentLang;
  updateAllText();
  renderEvents();
  renderRankings();
  renderPotential();
  updateFilterLabels();
}

function t(key) {
  return UI_TEXT[key] ? UI_TEXT[key][currentLang] : key;
}

function updateAllText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (UI_TEXT[key]) {
      el.textContent = UI_TEXT[key][currentLang];
    }
  });
  document.title = currentLang === 'zh'
    ? '黑天鹅事件档案馆 | Black Swan Archive'
    : 'Black Swan Archive | 黑天鹅事件档案馆';
}

function updateFilterLabels() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const filter = btn.dataset.filter;
    if (filter === 'all') {
      btn.textContent = t('filterAll');
    } else if (CATEGORY_LABELS[filter]) {
      btn.textContent = CATEGORY_LABELS[filter][currentLang];
    }
  });
}

// ===== Mobile Menu =====
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
}

// ===== Events =====
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const filtered = currentFilter === 'all'
    ? EVENTS
    : EVENTS.filter(e => e.category === currentFilter);

  grid.innerHTML = filtered.map(event => {
    const total = event.unpredictability + event.impact + event.retrospectiveExplainability;
    return `
      <div class="event-card fade-in" onclick="openModal(${event.id})">
        <div class="event-card-header">
          <span class="event-card-year">${event.year}</span>
          <span class="event-card-category">${CATEGORY_LABELS[event.category][currentLang]}</span>
        </div>
        <h3 class="event-card-title">${event.title[currentLang]}</h3>
        <p class="event-card-desc">${event.description[currentLang]}</p>
        <div class="event-card-scores">
          <div class="score-badge">
            <div class="score-badge-label">${currentLang === 'zh' ? '不可预测' : 'Unpredict.'}</div>
            <div class="score-badge-value">${event.unpredictability}</div>
          </div>
          <div class="score-badge">
            <div class="score-badge-label">${currentLang === 'zh' ? '影响力' : 'Impact'}</div>
            <div class="score-badge-value">${event.impact}</div>
          </div>
          <div class="score-badge">
            <div class="score-badge-label">${currentLang === 'zh' ? '可解释性' : 'Explain.'}</div>
            <div class="score-badge-value">${event.retrospectiveExplainability}</div>
          </div>
          <div class="score-badge score-badge-total">
            <div class="score-badge-label">${currentLang === 'zh' ? '总分' : 'Total'}</div>
            <div class="score-badge-value">${total}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Trigger fade-in
  requestAnimationFrame(() => {
    grid.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

// ===== Filter =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderEvents();
    });
  });

  document.querySelectorAll('.ranking-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ranking-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentRankBy = tab.dataset.rank;
      renderRankings();
    });
  });

  // Initialize
  updateAllText();
  updateFilterLabels();
  renderEvents();
  renderRankings();
  renderPotential();
  setupScrollObserver();
});

// ===== Rankings =====
function renderRankings() {
  const wrapper = document.getElementById('rankingTable');
  const sorted = [...EVENTS].sort((a, b) => {
    if (currentRankBy === 'total') {
      const totalA = a.unpredictability + a.impact + a.retrospectiveExplainability;
      const totalB = b.unpredictability + b.impact + b.retrospectiveExplainability;
      return totalB - totalA;
    }
    return b[currentRankBy] - a[currentRankBy];
  });

  const maxScore = currentRankBy === 'total' ? 30 : 10;

  wrapper.innerHTML = `
    <table class="ranking-table">
      <thead>
        <tr>
          <th>${t('rank')}</th>
          <th>${t('event')}</th>
          <th>${t('year')}</th>
          <th>${t('category')}</th>
          <th>${currentRankBy === 'total' ? t('totalScore') : t(currentRankBy)}</th>
          <th class="rank-bar-cell"></th>
        </tr>
      </thead>
      <tbody>
        ${sorted.map((event, i) => {
          const score = currentRankBy === 'total'
            ? event.unpredictability + event.impact + event.retrospectiveExplainability
            : event[currentRankBy];
          const pct = (score / maxScore * 100).toFixed(0);
          return `
            <tr onclick="openModal(${event.id})" style="cursor:pointer">
              <td><span class="rank-number ${i < 3 ? 'top-3' : ''}">${i + 1}</span></td>
              <td><span class="rank-title">${event.title[currentLang]}</span></td>
              <td><span class="rank-year">${event.year}</span></td>
              <td><span class="rank-year">${CATEGORY_LABELS[event.category][currentLang]}</span></td>
              <td><span class="rank-score ${i < 3 ? 'highlight' : ''}">${score}${currentRankBy === 'total' ? '/30' : '/10'}</span></td>
              <td class="rank-bar-cell"><div class="rank-bar"><div class="rank-bar-fill" style="width:${pct}%"></div></div></td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

// ===== Potential Black Swans =====
function renderPotential() {
  const grid = document.getElementById('potentialGrid');
  grid.innerHTML = POTENTIAL_BLACK_SWANS.map(item => `
    <div class="potential-card fade-in">
      <div class="potential-card-category">${CATEGORY_LABELS[item.category][currentLang]}</div>
      <h3 class="potential-card-title">${item.title[currentLang]}</h3>
      <p class="potential-card-desc">${item.description[currentLang]}</p>
      <div class="potential-card-meta">
        <div class="potential-meta-item">
          <span class="potential-meta-label">${t('likelihood')}</span>
          <span class="potential-meta-value">${item.likelihood[currentLang]}</span>
        </div>
        <div class="potential-meta-item">
          <span class="potential-meta-label">${t('timeframe')}</span>
          <span class="potential-meta-value">${item.timeframe[currentLang]}</span>
        </div>
        <div class="potential-meta-item potential-impact-bar">
          <span class="potential-meta-label">${t('potentialImpact')}</span>
          <div class="impact-dots">
            ${Array.from({length: 10}, (_, i) =>
              `<span class="impact-dot ${i < item.potentialImpact ? 'filled' : ''}"></span>`
            ).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

// ===== Modal =====
function openModal(id) {
  const event = EVENTS.find(e => e.id === id);
  if (!event) return;
  const total = event.unpredictability + event.impact + event.retrospectiveExplainability;
  const modal = document.getElementById('eventModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <div class="modal-year">${event.year}</div>
    <div class="modal-category">${CATEGORY_LABELS[event.category][currentLang]}</div>
    <h2 class="modal-title">${event.title[currentLang]}</h2>
    <p class="modal-desc">${event.description[currentLang]}</p>
    <div class="modal-scores">
      <div class="modal-score-item">
        <div class="modal-score-label">${t('unpredictability')}</div>
        <div class="modal-score-value">${event.unpredictability}</div>
        <div class="modal-score-bar"><div class="modal-score-bar-fill" style="width:${event.unpredictability * 10}%"></div></div>
      </div>
      <div class="modal-score-item">
        <div class="modal-score-label">${t('impact')}</div>
        <div class="modal-score-value">${event.impact}</div>
        <div class="modal-score-bar"><div class="modal-score-bar-fill" style="width:${event.impact * 10}%"></div></div>
      </div>
      <div class="modal-score-item">
        <div class="modal-score-label">${t('retrospectiveExplainability')}</div>
        <div class="modal-score-value">${event.retrospectiveExplainability}</div>
        <div class="modal-score-bar"><div class="modal-score-bar-fill" style="width:${event.retrospectiveExplainability * 10}%"></div></div>
      </div>
      <div class="modal-score-item total">
        <div class="modal-score-label">${t('totalScore')}</div>
        <div class="modal-score-value">${total}/30</div>
        <div class="modal-score-bar"><div class="modal-score-bar-fill" style="width:${total / 30 * 100}%;background:var(--red)"></div></div>
      </div>
    </div>
    ${event.wikiLink ? `<a href="${event.wikiLink}" target="_blank" rel="noopener" class="modal-link">${t('learnMore')}</a>` : ''}
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('eventModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== Scroll Observer =====
function setupScrollObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Re-observe after renders
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

// ===== Navbar scroll effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  lastScroll = scrollTop;
});
