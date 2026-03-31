// Black Swan Events Database
// Scores: 1-10 scale
// - unpredictability: How unlikely/unexpected was this before it happened? (10 = completely unforeseeable)
// - impact: How large was the impact? (10 = changed the world)
// - retrospectiveExplainability: How easily explained in hindsight? (10 = "obvious" in retrospect)

const BLACK_SWAN_EVENTS = [
  // ===== WORLD-LEVEL =====
  {
    id: 1,
    category: "world",
    year: 2020,
    title: { zh: "新冠疫情 (COVID-19)", en: "COVID-19 Pandemic" },
    description: {
      zh: "2019年底出现的新型冠状病毒迅速蔓延全球，导致超过600万人死亡，全球经济停摆，各国封锁边境。这是自1918年西班牙流感以来最严重的全球大流行病。",
      en: "A novel coronavirus emerged in late 2019 and rapidly spread worldwide, causing over 6 million deaths, global economic shutdowns, and border closures. It was the most severe pandemic since the 1918 Spanish Flu."
    },
    unpredictability: 8,
    impact: 10,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/COVID-19_pandemic"
  },
  {
    id: 2,
    category: "world",
    year: 2001,
    title: { zh: "9·11恐怖袭击", en: "September 11 Attacks" },
    description: {
      zh: "2001年9月11日，基地组织劫持四架民航客机，撞击世贸中心和五角大楼，近3000人遇难。事件彻底改变了全球安全格局、航空安全标准，并引发了持续二十年的反恐战争。",
      en: "On September 11, 2001, al-Qaeda hijacked four commercial airplanes, crashing them into the World Trade Center and Pentagon, killing nearly 3,000 people. It fundamentally changed global security, aviation safety, and triggered a two-decade war on terror."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/September_11_attacks"
  },
  {
    id: 3,
    category: "world",
    year: 1914,
    title: { zh: "第一次世界大战爆发", en: "Outbreak of World War I" },
    description: {
      zh: "1914年，萨拉热窝事件引发的连锁反应导致欧洲列强全面开战。战争持续四年，造成约2000万人死亡，彻底改变了世界政治版图，终结了多个帝国。",
      en: "In 1914, the assassination in Sarajevo triggered a chain reaction that plunged European powers into total war. The four-year conflict killed about 20 million people and ended multiple empires."
    },
    unpredictability: 7,
    impact: 10,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/World_War_I"
  },
  {
    id: 4,
    category: "world",
    year: 1945,
    title: { zh: "广岛和长崎原子弹轰炸", en: "Atomic Bombings of Hiroshima and Nagasaki" },
    description: {
      zh: "1945年8月，美国在日本广岛和长崎投下两枚原子弹，瞬间造成超过10万人死亡。这是人类历史上首次在战争中使用核武器，开启了核时代，彻底改变了国际关系和战争性质。",
      en: "In August 1945, the US dropped atomic bombs on Hiroshima and Nagasaki, instantly killing over 100,000 people. The first wartime use of nuclear weapons ushered in the nuclear age and fundamentally changed international relations."
    },
    unpredictability: 8,
    impact: 10,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki"
  },
  {
    id: 5,
    category: "world",
    year: 2004,
    title: { zh: "印度洋海啸", en: "Indian Ocean Tsunami" },
    description: {
      zh: "2004年12月26日，印度洋发生9.1级地震引发的海啸袭击了14个国家，造成约23万人死亡。这是有记录以来最致命的自然灾害之一，暴露了全球海啸预警系统的缺失。",
      en: "On December 26, 2004, a 9.1 magnitude earthquake in the Indian Ocean triggered a tsunami that struck 14 countries, killing approximately 230,000 people — one of the deadliest natural disasters on record."
    },
    unpredictability: 9,
    impact: 9,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami"
  },
  {
    id: 6,
    category: "world",
    year: 1986,
    title: { zh: "切尔诺贝利核灾难", en: "Chernobyl Nuclear Disaster" },
    description: {
      zh: "1986年4月26日，苏联切尔诺贝利核电站发生爆炸，释放出大量放射性物质，污染了欧洲大片地区。数千人因辐射死亡或患病，事件加速了苏联的解体进程。",
      en: "On April 26, 1986, the Chernobyl nuclear power plant exploded, releasing massive amounts of radioactive material across Europe. Thousands died or fell ill from radiation, and the disaster accelerated the USSR's collapse."
    },
    unpredictability: 8,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Chernobyl_disaster"
  },
  {
    id: 7,
    category: "world",
    year: 2011,
    title: { zh: "福岛核事故", en: "Fukushima Nuclear Disaster" },
    description: {
      zh: "2011年3月11日，日本东北部发生9.0级地震和海啸，导致福岛第一核电站严重泄漏。事故导致大规模疏散，多国重新审视核能政策，德国更因此决定全面弃核。",
      en: "On March 11, 2011, a 9.0 earthquake and tsunami caused a severe meltdown at the Fukushima Daiichi nuclear plant. The disaster led to mass evacuations and prompted multiple countries, notably Germany, to abandon nuclear power."
    },
    unpredictability: 7,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Fukushima_nuclear_disaster"
  },
  {
    id: 8,
    category: "world",
    year: 1918,
    title: { zh: "西班牙大流感", en: "Spanish Flu Pandemic" },
    description: {
      zh: "1918-1919年，一种致命的H1N1流感病毒在全球爆发，感染了约5亿人（当时世界人口的三分之一），造成2000万至5000万人死亡。它是人类历史上最致命的流行病之一。",
      en: "In 1918-1919, a deadly H1N1 influenza virus infected about 500 million people (one-third of the world's population) and killed 20-50 million. It remains one of the deadliest pandemics in human history."
    },
    unpredictability: 8,
    impact: 10,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Spanish_flu"
  },
  {
    id: 9,
    category: "world",
    year: 2022,
    title: { zh: "ChatGPT与AI革命", en: "ChatGPT and the AI Revolution" },
    description: {
      zh: "2022年11月，OpenAI发布ChatGPT，展示了大型语言模型的惊人能力。在短短两个月内获得1亿用户，引发全球AI竞赛，被认为是自互联网以来最具变革性的技术突破。",
      en: "In November 2022, OpenAI released ChatGPT, demonstrating the stunning capabilities of large language models. It reached 100 million users in two months, triggering a global AI race considered the most transformative tech breakthrough since the internet."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/ChatGPT"
  },

  // ===== CONTINENTAL/REGIONAL =====
  {
    id: 10,
    category: "continental",
    year: 2022,
    title: { zh: "俄乌战争", en: "Russia-Ukraine War" },
    description: {
      zh: "2022年2月24日，俄罗斯全面入侵乌克兰，震惊全球。战争导致数十万人伤亡，引发二战以来欧洲最大规模难民危机，重塑了全球能源格局和地缘政治版图。",
      en: "On February 24, 2022, Russia launched a full-scale invasion of Ukraine, shocking the world. The war caused hundreds of thousands of casualties, triggered Europe's largest refugee crisis since WWII, and reshaped global energy and geopolitics."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine"
  },
  {
    id: 11,
    category: "continental",
    year: 2010,
    title: { zh: "阿拉伯之春", en: "Arab Spring" },
    description: {
      zh: "2010年底，突尼斯一名小贩自焚引发的抗议运动迅速蔓延至整个中东和北非地区。多个独裁政权倒台，包括突尼斯、埃及、利比亚，但也导致叙利亚内战等长期动荡。",
      en: "In late 2010, a vendor's self-immolation in Tunisia sparked protests that rapidly spread across the Middle East and North Africa. Multiple authoritarian regimes fell, but also led to prolonged conflicts like the Syrian Civil War."
    },
    unpredictability: 9,
    impact: 9,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Arab_Spring"
  },
  {
    id: 12,
    category: "continental",
    year: 2016,
    title: { zh: "英国脱欧公投", en: "Brexit Referendum" },
    description: {
      zh: "2016年6月23日，英国公投以51.9%对48.1%的微弱优势决定脱离欧盟。这一结果出乎大多数人预料，导致英镑暴跌，首相辞职，欧洲一体化进程遭受重大打击。",
      en: "On June 23, 2016, the UK voted 51.9% to 48.1% to leave the European Union. The unexpected result caused the pound to plunge, the PM to resign, and dealt a major blow to European integration."
    },
    unpredictability: 7,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Brexit"
  },
  {
    id: 13,
    category: "continental",
    year: 1989,
    title: { zh: "柏林墙倒塌", en: "Fall of the Berlin Wall" },
    description: {
      zh: "1989年11月9日，柏林墙在民众的欢呼中被推倒，象征着冷战的结束。这一事件出乎东西方阵营所有人的预料，迅速导致了德国统一和东欧剧变。",
      en: "On November 9, 1989, the Berlin Wall fell amid public jubilation, symbolizing the end of the Cold War. Completely unexpected by both blocs, it rapidly led to German reunification and the transformation of Eastern Europe."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall"
  },
  {
    id: 14,
    category: "continental",
    year: 2023,
    title: { zh: "以哈冲突升级", en: "Israel-Hamas War Escalation" },
    description: {
      zh: "2023年10月7日，哈马斯对以色列发动突然袭击，造成约1200人死亡。以色列随后对加沙发动大规模军事行动，导致数万人伤亡，引发中东地区严重动荡。",
      en: "On October 7, 2023, Hamas launched a surprise attack on Israel, killing about 1,200 people. Israel's subsequent military operation in Gaza caused tens of thousands of casualties and severe regional instability."
    },
    unpredictability: 8,
    impact: 8,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/2023_Hamas-led_attack_on_Israel"
  },
  {
    id: 15,
    category: "continental",
    year: 2015,
    title: { zh: "欧洲难民危机", en: "European Refugee Crisis" },
    description: {
      zh: "2015年，超过100万难民和移民通过地中海进入欧洲，其中大多来自叙利亚、阿富汗和伊拉克。这场危机严重考验了欧盟的团结，助长了各国的民粹主义运动。",
      en: "In 2015, over one million refugees and migrants crossed the Mediterranean into Europe, mostly from Syria, Afghanistan, and Iraq. The crisis tested EU unity and fueled populist movements across the continent."
    },
    unpredictability: 6,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/European_migrant_crisis"
  },
  {
    id: 16,
    category: "continental",
    year: 1997,
    title: { zh: "亚洲金融危机", en: "Asian Financial Crisis" },
    description: {
      zh: "1997年7月，泰铢贬值引发连锁反应，金融危机席卷东南亚和东亚。韩国、印尼、泰国等国经济遭受重创，多国GDP暴跌，导致大规模社会动荡和政权更迭。",
      en: "In July 1997, the Thai baht collapse triggered a chain reaction. The financial crisis swept through Southeast and East Asia, devastating economies in South Korea, Indonesia, and Thailand, causing massive social upheaval."
    },
    unpredictability: 7,
    impact: 8,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis"
  },

  // ===== NATIONAL =====
  {
    id: 17,
    category: "national",
    year: 2008,
    title: { zh: "美国次贷危机", en: "US Subprime Mortgage Crisis" },
    description: {
      zh: "2007-2008年，美国房地产泡沫破裂引发全球金融危机。大量金融机构倒闭或被救助，全球股市暴跌，导致大萧条以来最严重的经济衰退，数百万人失去住房和工作。",
      en: "In 2007-2008, the US housing bubble burst triggered a global financial crisis. Massive financial institution failures, stock market crashes, and the worst recession since the Great Depression left millions without homes and jobs."
    },
    unpredictability: 6,
    impact: 10,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Subprime_mortgage_crisis"
  },
  {
    id: 18,
    category: "national",
    year: 1991,
    title: { zh: "苏联解体", en: "Dissolution of the Soviet Union" },
    description: {
      zh: "1991年12月25日，苏联正式解体为15个独立国家。作为与美国对峙半个世纪的超级大国，苏联的突然崩溃几乎出乎所有政治观察家和情报机构的预料。",
      en: "On December 25, 1991, the Soviet Union officially dissolved into 15 independent states. The sudden collapse of the superpower that had confronted the US for half a century caught virtually all political observers and intelligence agencies off guard."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union"
  },
  {
    id: 19,
    category: "national",
    year: 2016,
    title: { zh: "特朗普当选美国总统", en: "Trump Elected US President" },
    description: {
      zh: "2016年11月8日，唐纳德·特朗普击败希拉里·克林顿当选美国总统，几乎所有主流民调和媒体都预测错误。他的当选深刻改变了美国政治格局和全球贸易秩序。",
      en: "On November 8, 2016, Donald Trump defeated Hillary Clinton to become US President, defying nearly all major polls and media predictions. His election profoundly changed US politics and the global trade order."
    },
    unpredictability: 8,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/2016_United_States_presidential_election"
  },
  {
    id: 20,
    category: "national",
    year: 1979,
    title: { zh: "伊朗伊斯兰革命", en: "Iranian Islamic Revolution" },
    description: {
      zh: "1979年，伊朗爆发革命推翻了巴列维王朝，建立伊斯兰共和国。这场革命彻底改变了中东地缘政治格局，导致美伊关系断裂，影响至今。",
      en: "In 1979, a revolution in Iran overthrew the Pahlavi dynasty and established an Islamic republic. It fundamentally altered Middle Eastern geopolitics and severed US-Iran relations, with effects lasting to this day."
    },
    unpredictability: 8,
    impact: 9,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Iranian_Revolution"
  },
  {
    id: 21,
    category: "national",
    year: 1929,
    title: { zh: "大萧条", en: "The Great Depression" },
    description: {
      zh: "1929年10月，美国股市崩盘引发了持续十年的经济大萧条。全球GDP下降约15%，美国失业率飙升至25%，这是现代经济史上最严重的经济危机。",
      en: "In October 1929, the US stock market crash triggered a decade-long economic depression. Global GDP fell about 15%, US unemployment soared to 25% — the worst economic crisis in modern history."
    },
    unpredictability: 7,
    impact: 10,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Great_Depression"
  },
  {
    id: 22,
    category: "national",
    year: 2011,
    title: { zh: "日本311大地震", en: "2011 Tōhoku Earthquake" },
    description: {
      zh: "2011年3月11日，日本东北地区发生9.0级地震及随后的海啸，造成近2万人死亡，引发福岛核事故。日本经济遭受重创，全球供应链严重中断。",
      en: "On March 11, 2011, a 9.0 earthquake and tsunami struck northeastern Japan, killing nearly 20,000 and triggering the Fukushima nuclear disaster. Japan's economy was severely damaged and global supply chains were disrupted."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami"
  },
  {
    id: 23,
    category: "national",
    year: 1949,
    title: { zh: "中华人民共和国成立", en: "Founding of the People's Republic of China" },
    description: {
      zh: "1949年10月1日，毛泽东在天安门广场宣布中华人民共和国成立。共产党在内战中战胜国民党，这一结果改变了亚洲乃至世界的政治格局。",
      en: "On October 1, 1949, Mao Zedong proclaimed the founding of the People's Republic of China. The Communist Party's victory in the civil war reshaped Asian and world politics."
    },
    unpredictability: 6,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Chinese_Communist_Revolution"
  },
  {
    id: 24,
    category: "national",
    year: 1978,
    title: { zh: "中国改革开放", en: "China's Reform and Opening Up" },
    description: {
      zh: "1978年，邓小平推行改革开放政策，将中国从计划经济转向市场经济。此后四十年，中国GDP增长了数十倍，数亿人脱贫，成为世界第二大经济体。",
      en: "In 1978, Deng Xiaoping launched reform and opening-up policies, shifting China from a planned to a market economy. Over the next 40 years, China's GDP grew dozens of times over, lifting hundreds of millions out of poverty."
    },
    unpredictability: 8,
    impact: 10,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Chinese_economic_reform"
  },

  // ===== INDUSTRY =====
  {
    id: 25,
    category: "industry",
    year: 2021,
    title: { zh: "中国教培行业整顿（双减政策）", en: "China's Education Industry Crackdown (Double Reduction)" },
    description: {
      zh: "2021年7月，中国发布「双减」政策，禁止义务教育阶段学科类培训机构上市融资和资本化运作。新东方、好未来等上市公司市值蒸发超过90%，整个行业一夜之间近乎消失。",
      en: "In July 2021, China issued the 'Double Reduction' policy, banning for-profit tutoring in core school subjects. Listed companies like New Oriental and TAL Education lost over 90% of their market value — the entire industry nearly vanished overnight."
    },
    unpredictability: 8,
    impact: 8,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Double_reduction_policy"
  },
  {
    id: 26,
    category: "industry",
    year: 2000,
    title: { zh: "互联网泡沫破裂", en: "Dot-com Bubble Burst" },
    description: {
      zh: "2000年3月，纳斯达克指数从5048点的高位开始暴跌，最终下跌约78%。数百家互联网公司破产，数万亿美元的市值蒸发，许多人认为互联网只是一场骗局。",
      en: "In March 2000, the NASDAQ began its crash from 5,048 points, eventually falling about 78%. Hundreds of internet companies went bankrupt, trillions in market value evaporated, and many wrote off the internet as a fraud."
    },
    unpredictability: 6,
    impact: 8,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Dot-com_bubble"
  },
  {
    id: 27,
    category: "industry",
    year: 2007,
    title: { zh: "iPhone发布", en: "iPhone Launch" },
    description: {
      zh: "2007年1月，苹果发布了第一代iPhone。诺基亚和黑莓的CEO们嘲笑它没有物理键盘。然而iPhone彻底颠覆了手机行业，开启了智能手机时代，诺基亚等巨头最终走向衰落。",
      en: "In January 2007, Apple unveiled the original iPhone. Nokia and BlackBerry CEOs mocked its lack of a physical keyboard. Yet the iPhone disrupted the entire mobile industry, ushering in the smartphone era and leading to the decline of former giants."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)"
  },
  {
    id: 28,
    category: "industry",
    year: 2017,
    title: { zh: "比特币暴涨至2万美元", en: "Bitcoin's Rise to $20,000" },
    description: {
      zh: "2017年，比特币价格从不到1000美元飙升至近20000美元，引发全球加密货币狂潮。这让许多人一夜暴富，也让传统金融界开始认真对待区块链技术和加密资产。",
      en: "In 2017, Bitcoin surged from under $1,000 to nearly $20,000, triggering a global cryptocurrency frenzy. It created overnight millionaires and forced traditional finance to take blockchain and crypto assets seriously."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Cryptocurrency_bubble"
  },
  {
    id: 29,
    category: "industry",
    year: 2010,
    title: { zh: "深水地平线石油泄漏", en: "Deepwater Horizon Oil Spill" },
    description: {
      zh: "2010年4月20日，英国石油公司(BP)在墨西哥湾的深水地平线钻井平台爆炸，造成11人死亡，约490万桶原油泄入大海。这是美国历史上最严重的石油泄漏事故。",
      en: "On April 20, 2010, BP's Deepwater Horizon drilling rig exploded in the Gulf of Mexico, killing 11 and spilling about 4.9 million barrels of oil — the worst oil spill in US history."
    },
    unpredictability: 7,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Deepwater_Horizon_oil_spill"
  },
  {
    id: 30,
    category: "industry",
    year: 2020,
    title: { zh: "原油期货跌至负值", en: "Oil Futures Turn Negative" },
    description: {
      zh: "2020年4月20日，WTI原油5月期货价格历史上首次跌至负值，最低达到-37.63美元/桶。石油交易商不仅不用付钱买油，反而要付钱让人把油拿走，颠覆了所有人的认知。",
      en: "On April 20, 2020, WTI crude oil May futures turned negative for the first time in history, hitting -$37.63/barrel. Traders had to pay others to take oil off their hands — an outcome no one had imagined possible."
    },
    unpredictability: 10,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/2020_Russia%E2%80%93Saudi_Arabia_oil_price_war"
  },
  {
    id: 31,
    category: "industry",
    year: 2021,
    title: { zh: "GameStop股票逼空事件", en: "GameStop Short Squeeze" },
    description: {
      zh: "2021年1月，Reddit论坛的散户投资者联合买入GameStop股票，将其股价从约20美元推高至近500美元，导致多家对冲基金巨额亏损。这一事件揭示了社交媒体对金融市场的颠覆性力量。",
      en: "In January 2021, Reddit retail investors collectively bought GameStop stock, pushing it from ~$20 to nearly $500, causing massive hedge fund losses. The event revealed social media's disruptive power over financial markets."
    },
    unpredictability: 9,
    impact: 6,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/GameStop_short_squeeze"
  },
  {
    id: 32,
    category: "industry",
    year: 2022,
    title: { zh: "FTX加密交易所崩盘", en: "FTX Crypto Exchange Collapse" },
    description: {
      zh: "2022年11月，全球第二大加密货币交易所FTX在短短一周内从320亿美元估值到申请破产。创始人SBF被控挪用80亿美元客户资金，被判25年监禁。",
      en: "In November 2022, FTX — the world's second-largest crypto exchange valued at $32 billion — collapsed within a week. Founder SBF was convicted of misappropriating $8 billion in customer funds and sentenced to 25 years in prison."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/FTX_(company)"
  },

  // ===== INSTITUTIONAL =====
  {
    id: 33,
    category: "institutional",
    year: 2008,
    title: { zh: "雷曼兄弟破产", en: "Lehman Brothers Bankruptcy" },
    description: {
      zh: "2008年9月15日，拥有158年历史的投资银行雷曼兄弟申请破产，成为美国历史上最大的破产案。这一事件引爆了全球金融海啸，成为2008年金融危机的标志性事件。",
      en: "On September 15, 2008, Lehman Brothers — a 158-year-old investment bank — filed for bankruptcy, the largest in US history. This triggered the global financial tsunami and became the defining moment of the 2008 financial crisis."
    },
    unpredictability: 7,
    impact: 10,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Bankruptcy_of_Lehman_Brothers"
  },
  {
    id: 34,
    category: "institutional",
    year: 2001,
    title: { zh: "安然公司丑闻", en: "Enron Scandal" },
    description: {
      zh: "2001年，曾被评为\"美国最具创新力公司\"的安然被揭露通过系统性会计欺诈虚报利润。公司在几周内从全美第七大企业变为破产企业，2万员工失去工作和退休金。",
      en: "In 2001, Enron — once named 'America's Most Innovative Company' — was exposed for systematic accounting fraud. Within weeks, the seventh-largest US company went bankrupt, and 20,000 employees lost their jobs and pensions."
    },
    unpredictability: 7,
    impact: 8,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Enron_scandal"
  },
  {
    id: 35,
    category: "institutional",
    year: 1995,
    title: { zh: "巴林银行倒闭", en: "Barings Bank Collapse" },
    description: {
      zh: "1995年，英国最古老的商业银行巴林银行因交易员尼克·里森在新加坡的违规期货交易而倒闭。里森造成了14亿美元的损失，超过了银行的全部资本。",
      en: "In 1995, Barings Bank — Britain's oldest merchant bank — collapsed due to rogue trader Nick Leeson's unauthorized futures trading in Singapore. Leeson's losses of £827 million exceeded the bank's entire capital."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Barings_Bank"
  },
  {
    id: 36,
    category: "institutional",
    year: 1998,
    title: { zh: "长期资本管理公司崩溃", en: "LTCM Collapse" },
    description: {
      zh: "1998年，由两位诺贝尔经济学奖得主创办的对冲基金长期资本管理公司(LTCM)因俄罗斯债务违约而崩溃，损失超过46亿美元。美联储不得不组织紧急救助，以防止系统性金融危机。",
      en: "In 1998, LTCM — a hedge fund founded by two Nobel laureates — collapsed after Russia's debt default, losing over $4.6 billion. The Fed had to organize an emergency bailout to prevent systemic financial crisis."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Long-Term_Capital_Management"
  },
  {
    id: 37,
    category: "institutional",
    year: 2014,
    title: { zh: "马航MH370失联", en: "Malaysia Airlines Flight 370 Disappearance" },
    description: {
      zh: "2014年3月8日，马来西亚航空MH370航班在从吉隆坡飞往北京途中失联，机上239人全部失踪。尽管经过大规模搜索，飞机至今未找到，成为航空史上最大谜团之一。",
      en: "On March 8, 2014, Malaysia Airlines Flight 370 disappeared en route from Kuala Lumpur to Beijing with 239 people on board. Despite extensive searches, the aircraft has never been found — one of aviation's greatest mysteries."
    },
    unpredictability: 10,
    impact: 6,
    retrospectiveExplainability: 3,
    wikiLink: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370"
  },
  {
    id: 38,
    category: "institutional",
    year: 2023,
    title: { zh: "硅谷银行倒闭", en: "Silicon Valley Bank Collapse" },
    description: {
      zh: "2023年3月10日，美国第16大银行硅谷银行(SVB)在两天内遭遇挤兑而倒闭，成为2008年以来美国最大的银行倒闭事件。事件引发了对整个银行体系的信任危机。",
      en: "On March 10, 2023, Silicon Valley Bank — the 16th largest US bank — collapsed within two days due to a bank run, the largest US bank failure since 2008. It triggered a crisis of confidence in the entire banking system."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Collapse_of_Silicon_Valley_Bank"
  },
  {
    id: 39,
    category: "institutional",
    year: 2015,
    title: { zh: "大众汽车排放门丑闻", en: "Volkswagen Emissions Scandal" },
    description: {
      zh: "2015年9月，大众汽车被揭露在全球1100万辆柴油车上安装了排放检测作弊软件。公司市值在几天内蒸发超过三分之一，CEO辞职，面临数百亿美元罚款和赔偿。",
      en: "In September 2015, Volkswagen was caught installing emissions cheating software in 11 million diesel cars worldwide. The company lost over a third of its market value in days, the CEO resigned, and it faced tens of billions in fines."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal"
  },
  {
    id: 40,
    category: "institutional",
    year: 2020,
    title: { zh: "瑞幸咖啡财务造假", en: "Luckin Coffee Accounting Fraud" },
    description: {
      zh: "2020年4月，中国连锁咖啡品牌瑞幸咖啡被揭露虚增约22亿元人民币收入。曾经的\"中国星巴克\"股价暴跌超过80%，被纳斯达克强制退市。",
      en: "In April 2020, Chinese coffee chain Luckin Coffee was exposed for fabricating approximately $310 million in revenue. The once-hyped 'China's Starbucks' saw its stock crash over 80% and was delisted from NASDAQ."
    },
    unpredictability: 7,
    impact: 6,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Luckin_Coffee"
  },

  // ===== PERSONAL/INDIVIDUAL =====
  {
    id: 41,
    category: "personal",
    year: 2020,
    title: { zh: "科比·布莱恩特坠机去世", en: "Kobe Bryant Helicopter Crash" },
    description: {
      zh: "2020年1月26日，NBA传奇球星科比·布莱恩特与其13岁女儿吉安娜及其他7人在直升机坠机事故中遇难。全球亿万球迷和公众震惊悲痛，多国举行悼念活动。",
      en: "On January 26, 2020, NBA legend Kobe Bryant, his 13-year-old daughter Gianna, and seven others died in a helicopter crash. Billions of fans worldwide were shocked, and memorial events were held across multiple countries."
    },
    unpredictability: 10,
    impact: 7,
    retrospectiveExplainability: 5,
    wikiLink: "https://en.wikipedia.org/wiki/Death_of_Kobe_Bryant"
  },
  {
    id: 42,
    category: "personal",
    year: 1997,
    title: { zh: "戴安娜王妃车祸去世", en: "Princess Diana's Death" },
    description: {
      zh: "1997年8月31日，英国戴安娜王妃在巴黎遭遇车祸身亡，年仅36岁。全球约25亿人观看了她的葬礼直播，她的死亡引发了对名人隐私和狗仔文化的广泛反思。",
      en: "On August 31, 1997, Princess Diana died in a car crash in Paris at age 36. About 2.5 billion people watched her funeral, and her death sparked widespread reflection on celebrity privacy and paparazzi culture."
    },
    unpredictability: 9,
    impact: 7,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/Death_of_Diana,_Princess_of_Wales"
  },
  {
    id: 43,
    category: "personal",
    year: 1963,
    title: { zh: "肯尼迪总统遇刺", en: "JFK Assassination" },
    description: {
      zh: "1963年11月22日，美国总统约翰·F·肯尼迪在达拉斯遇刺身亡。这一事件深刻影响了美国社会心理，阴谋论至今不断，被认为是美国失去天真的时刻。",
      en: "On November 22, 1963, President John F. Kennedy was assassinated in Dallas. The event deeply affected American social psychology, spawned enduring conspiracy theories, and is considered the moment America lost its innocence."
    },
    unpredictability: 9,
    impact: 9,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/Assassination_of_John_F._Kennedy"
  },
  {
    id: 44,
    category: "personal",
    year: 2018,
    title: { zh: "沙特记者卡舒吉遇害", en: "Jamal Khashoggi Murder" },
    description: {
      zh: "2018年10月2日，沙特记者贾马尔·卡舒吉在土耳其的沙特领事馆内被杀害并肢解。事件引发国际社会对沙特政府的强烈谴责，严重影响了沙特的国际形象。",
      en: "On October 2, 2018, Saudi journalist Jamal Khashoggi was murdered and dismembered inside the Saudi consulate in Turkey. The event drew severe international condemnation and severely damaged Saudi Arabia's international image."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Assassination_of_Jamal_Khashoggi"
  },
  {
    id: 45,
    category: "personal",
    year: 2011,
    title: { zh: "本·拉登被击毙", en: "Osama bin Laden Killed" },
    description: {
      zh: "2011年5月2日，美国海豹突击队在巴基斯坦阿伯塔巴德击毙了基地组织领导人本·拉登。经过近十年的追捕，全球头号通缉犯的死亡成为反恐战争的重大转折点。",
      en: "On May 2, 2011, US Navy SEALs killed al-Qaeda leader Osama bin Laden in Abbottabad, Pakistan. After nearly a decade of pursuit, the death of the world's most wanted man marked a major turning point in the war on terror."
    },
    unpredictability: 6,
    impact: 8,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Killing_of_Osama_bin_Laden"
  },
  {
    id: 46,
    category: "personal",
    year: 2022,
    title: { zh: "安倍晋三遇刺", en: "Shinzo Abe Assassination" },
    description: {
      zh: "2022年7月8日，日本前首相安倍晋三在奈良市街头演讲时遭枪击身亡。在枪支管控极其严格的日本，这起事件震惊了全世界，引发了对统一教会影响力的广泛讨论。",
      en: "On July 8, 2022, former Japanese PM Shinzo Abe was shot dead while giving a street speech in Nara. In gun-strict Japan, the assassination shocked the world and sparked widespread discussion about the Unification Church's influence."
    },
    unpredictability: 10,
    impact: 7,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/Assassination_of_Shinzo_Abe"
  },
  {
    id: 47,
    category: "personal",
    year: 2009,
    title: { zh: "迈克尔·杰克逊突然去世", en: "Michael Jackson's Sudden Death" },
    description: {
      zh: "2009年6月25日，流行音乐之王迈克尔·杰克逊在洛杉矶突然去世，终年50岁。他的死因是私人医生过量注射麻醉药物。消息传出后，互联网流量一度瘫痪。",
      en: "On June 25, 2009, the King of Pop Michael Jackson died suddenly in Los Angeles at age 50 from an overdose of propofol administered by his personal physician. The news briefly crashed internet traffic worldwide."
    },
    unpredictability: 8,
    impact: 7,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Death_of_Michael_Jackson"
  },
  {
    id: 48,
    category: "personal",
    year: 2025,
    title: { zh: "李在镕领导三星AI转型", en: "Samsung's AI Pivot Under Lee Jae-yong" },
    description: {
      zh: "备注：此为占位事件。个人级别黑天鹅事件往往来自个体生命的突然转折，如意外死亡、丑闻曝光或出人意料的决策。",
      en: "Note: This is a placeholder. Personal-level black swans often arise from sudden turns in individual lives — unexpected deaths, scandal revelations, or surprising decisions."
    },
    unpredictability: 5,
    impact: 5,
    retrospectiveExplainability: 5,
    wikiLink: ""
  }
];

// Remove placeholder
const EVENTS = BLACK_SWAN_EVENTS.filter(e => e.id !== 48);

// ===== POTENTIAL BLACK SWANS =====
const POTENTIAL_BLACK_SWANS = [
  {
    id: 101,
    category: "world",
    title: { zh: "人工智能失控/超级智能出现", en: "AI Loss of Control / Superintelligence Emergence" },
    description: {
      zh: "AI系统的能力正在以指数速度增长。如果某个AI系统突然展现出远超人类的能力并脱离人类控制，可能在极短时间内重塑整个人类文明的结构。多位AI研究者认为这一风险在未来10-20年内是真实存在的。",
      en: "AI capabilities are growing exponentially. If an AI system suddenly demonstrates abilities far beyond human control, it could reshape human civilization in an extremely short time. Multiple AI researchers consider this risk real within 10-20 years."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 10,
    timeframe: { zh: "5-20年", en: "5-20 years" }
  },
  {
    id: 102,
    category: "world",
    title: { zh: "全球性网络攻击瘫痪关键基础设施", en: "Global Cyberattack on Critical Infrastructure" },
    description: {
      zh: "现代社会高度依赖互联网和数字基础设施。一次针对全球金融系统、电力网络或通信卫星的协调攻击可能导致全球性的社会瘫痪。随着量子计算的发展，现有加密体系也面临被攻破的风险。",
      en: "Modern society is highly dependent on internet and digital infrastructure. A coordinated attack on global financial systems, power grids, or communication satellites could cause global social paralysis. Quantum computing also threatens current encryption."
    },
    likelihood: { zh: "中高", en: "Medium-High" },
    potentialImpact: 10,
    timeframe: { zh: "随时可能", en: "Anytime" }
  },
  {
    id: 103,
    category: "continental",
    title: { zh: "台海冲突爆发", en: "Taiwan Strait Conflict" },
    description: {
      zh: "台湾海峡一直是全球最敏感的地缘政治热点之一。如果发生军事冲突，不仅会影响中美关系，更会导致全球半导体供应链断裂（台积电供应全球90%以上最先进芯片），冲击全球经济。",
      en: "The Taiwan Strait remains one of the world's most sensitive geopolitical hotspots. A military conflict would affect US-China relations and disrupt the global semiconductor supply chain (TSMC supplies 90%+ of advanced chips), devastating the world economy."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 10,
    timeframe: { zh: "未知", en: "Unknown" }
  },
  {
    id: 104,
    category: "world",
    title: { zh: "超级火山喷发或小行星撞击", en: "Supervolcano Eruption or Asteroid Impact" },
    description: {
      zh: "黄石超级火山的喷发周期约为60-70万年，上一次喷发已经是64万年前。一旦喷发，将导致全球性的火山冬天，粮食产量可能下降90%。同样，大型小行星撞击地球的概率虽低，但影响是文明毁灭级的。",
      en: "The Yellowstone supervolcano's eruption cycle is ~600-700K years, with the last eruption 640K years ago. An eruption would cause a volcanic winter, potentially reducing food production by 90%. Similarly, a large asteroid impact would be civilization-ending."
    },
    likelihood: { zh: "极低", en: "Very Low" },
    potentialImpact: 10,
    timeframe: { zh: "地质时间尺度", en: "Geological timescale" }
  },
  {
    id: 105,
    category: "national",
    title: { zh: "美国国债违约", en: "US National Debt Default" },
    description: {
      zh: "美国国债已超过34万亿美元，债务上限危机反复出现。如果美国真正发生国债违约，将摧毁美元作为全球储备货币的地位，引发全球金融市场崩溃，影响程度将远超2008年金融危机。",
      en: "US national debt exceeds $34 trillion with recurring debt ceiling crises. An actual default would destroy the dollar's status as global reserve currency, triggering a global financial market collapse far worse than 2008."
    },
    likelihood: { zh: "低", en: "Low" },
    potentialImpact: 10,
    timeframe: { zh: "政治周期相关", en: "Tied to political cycles" }
  },
  {
    id: 106,
    category: "industry",
    title: { zh: "全球粮食危机", en: "Global Food Crisis" },
    description: {
      zh: "气候变化、战争和供应链中断正在威胁全球粮食安全。如果多个主要产粮国同时遭遇极端天气或地缘冲突，可能引发全球性饥荒，导致大规模社会动荡和难民潮。",
      en: "Climate change, wars, and supply chain disruptions threaten global food security. If multiple major food-producing nations simultaneously face extreme weather or conflict, it could trigger global famine, mass unrest, and refugee waves."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 9,
    timeframe: { zh: "5-15年", en: "5-15 years" }
  },
  {
    id: 107,
    category: "industry",
    title: { zh: "抗生素耐药性危机", en: "Antibiotic Resistance Crisis" },
    description: {
      zh: "世界卫生组织警告，抗生素耐药性是全球公共卫生面临的最大威胁之一。如果超级细菌大规模爆发，人类可能重返无法治疗简单感染的前抗生素时代，医疗系统将不堪重负。",
      en: "The WHO warns antimicrobial resistance is among the greatest threats to global health. A superbug outbreak could return humanity to the pre-antibiotic era where simple infections become deadly, overwhelming healthcare systems."
    },
    likelihood: { zh: "中高", en: "Medium-High" },
    potentialImpact: 9,
    timeframe: { zh: "10-30年", en: "10-30 years" }
  },
  {
    id: 108,
    category: "national",
    title: { zh: "中国房地产全面崩盘", en: "China Real Estate Total Collapse" },
    description: {
      zh: "中国房地产占GDP约30%，恒大、碧桂园等巨头已陷入债务危机。如果房价出现系统性暴跌，将冲击银行系统、地方政府财政和居民财富，可能引发全面经济危机。",
      en: "Real estate accounts for ~30% of China's GDP, with giants like Evergrande and Country Garden already in debt crisis. A systemic price collapse could devastate the banking system, local government finances, and household wealth."
    },
    likelihood: { zh: "中高", en: "Medium-High" },
    potentialImpact: 9,
    timeframe: { zh: "正在发生", en: "Ongoing" }
  },
  {
    id: 109,
    category: "world",
    title: { zh: "新型大流行病（Disease X）", en: "Novel Pandemic (Disease X)" },
    description: {
      zh: "世界卫生组织将\"疾病X\"列入优先研究名单——一种目前尚未知的病原体可能引发比新冠更致命的大流行。生物技术的进步也增加了人工合成病原体泄漏或被恶意使用的风险。",
      en: "The WHO has listed 'Disease X' as a priority — an unknown pathogen could trigger a pandemic deadlier than COVID. Advances in biotechnology also increase risks of synthetic pathogen leaks or deliberate misuse."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 10,
    timeframe: { zh: "随时可能", en: "Anytime" }
  },
  {
    id: 110,
    category: "world",
    title: { zh: "全球去美元化加速", en: "Accelerated Global De-dollarization" },
    description: {
      zh: "金砖国家扩员、人民币国际化、央行数字货币兴起等趋势正在挑战美元霸权。如果多国同时大规模抛售美元资产，可能引发美元信用崩溃，彻底重塑全球金融秩序。",
      en: "BRICS expansion, RMB internationalization, and CBDC development are challenging dollar hegemony. If multiple nations simultaneously dump dollar assets, it could trigger a dollar credit collapse and reshape global financial order."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 9,
    timeframe: { zh: "5-15年", en: "5-15 years" }
  },
  {
    id: 111,
    category: "industry",
    title: { zh: "大型科技公司被拆分", en: "Major Tech Company Breakup" },
    description: {
      zh: "全球反垄断监管压力持续升级，美国和欧盟正在对苹果、谷歌、Meta等科技巨头提起反垄断诉讼。如果某家万亿市值公司被强制拆分，将重塑整个科技行业的格局。",
      en: "Global antitrust pressure is mounting, with the US and EU pursuing cases against Apple, Google, and Meta. A forced breakup of a trillion-dollar company would reshape the entire tech industry landscape."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 8,
    timeframe: { zh: "3-10年", en: "3-10 years" }
  },
  {
    id: 112,
    category: "world",
    title: { zh: "核战争", en: "Nuclear War" },
    description: {
      zh: "随着地缘政治紧张加剧，核武器使用的风险重新上升。俄乌冲突期间，俄罗斯多次暗示可能使用战术核武器。即使是有限核冲突，也会导致数百万人死亡和全球性核冬天。",
      en: "Nuclear weapon use risk is rising with geopolitical tensions. Russia has repeatedly hinted at tactical nuclear use during the Ukraine conflict. Even a limited nuclear exchange could kill millions and trigger global nuclear winter."
    },
    likelihood: { zh: "低", en: "Low" },
    potentialImpact: 10,
    timeframe: { zh: "不确定", en: "Uncertain" }
  }
];

// Category labels
const CATEGORY_LABELS = {
  world: { zh: "世界级", en: "World" },
  continental: { zh: "洲际/区域", en: "Continental/Regional" },
  national: { zh: "国家级", en: "National" },
  industry: { zh: "行业级", en: "Industry" },
  institutional: { zh: "机构级", en: "Institutional" },
  personal: { zh: "个人级", en: "Personal" }
};

// UI text translations
const UI_TEXT = {
  siteTitle: { zh: "黑天鹅事件档案馆", en: "Black Swan Archive" },
  siteSubtitle: {
    zh: "基于纳西姆·尼古拉斯·塔勒布的黑天鹅理论",
    en: "Based on Nassim Nicholas Taleb's Black Swan Theory"
  },
  heroQuote: {
    zh: "\"黑天鹅事件是一种具有以下三个特征的事件：稀有性、极端冲击性、事后可预测性。\"",
    en: "\"A Black Swan is an event with three attributes: rarity, extreme impact, and retrospective predictability.\""
  },
  heroAuthor: {
    zh: "—— 纳西姆·尼古拉斯·塔勒布《黑天鹅》",
    en: "— Nassim Nicholas Taleb, The Black Swan"
  },
  navEvents: { zh: "历史事件", en: "Historical Events" },
  navRankings: { zh: "排行榜", en: "Rankings" },
  navPotential: { zh: "潜在黑天鹅", en: "Potential Black Swans" },
  navAbout: { zh: "关于", en: "About" },
  filterAll: { zh: "全部", en: "All" },
  unpredictability: { zh: "不可预测性", en: "Unpredictability" },
  impact: { zh: "影响力", en: "Impact" },
  retrospectiveExplainability: { zh: "事后可解释性", en: "Retrospective Explainability" },
  totalScore: { zh: "综合评分", en: "Total Score" },
  year: { zh: "年份", en: "Year" },
  category: { zh: "类别", en: "Category" },
  learnMore: { zh: "了解更多 →", en: "Learn more →" },
  rankByTotal: { zh: "按综合评分", en: "By Total Score" },
  rankByUnpredictability: { zh: "按不可预测性", en: "By Unpredictability" },
  rankByImpact: { zh: "按影响力", en: "By Impact" },
  rankByExplainability: { zh: "按事后可解释性", en: "By Explainability" },
  potentialTitle: { zh: "潜在的黑天鹅事件", en: "Potential Black Swan Events" },
  potentialSubtitle: {
    zh: "以下事件目前看似不太可能发生，但一旦发生将产生极大影响——这正是黑天鹅的定义",
    en: "These events currently seem unlikely, but would have extreme impact if they occur — the very definition of a Black Swan"
  },
  likelihood: { zh: "发生可能性", en: "Likelihood" },
  potentialImpact: { zh: "潜在影响", en: "Potential Impact" },
  timeframe: { zh: "时间框架", en: "Timeframe" },
  aboutTitle: { zh: "什么是黑天鹅？", en: "What is a Black Swan?" },
  aboutText1: {
    zh: "「黑天鹅」这一概念由黎巴嫩裔美国作家纳西姆·尼古拉斯·塔勒布（Nassim Nicholas Taleb）在其2007年出版的《黑天鹅：如何应对不可预知的未来》一书中系统阐述。",
    en: "The 'Black Swan' concept was systematically explained by Lebanese-American author Nassim Nicholas Taleb in his 2007 book 'The Black Swan: The Impact of the Highly Improbable'."
  },
  aboutText2: {
    zh: "塔勒布定义的黑天鹅事件具有三个核心特征：",
    en: "Taleb defines Black Swan events by three core characteristics:"
  },
  feature1Title: { zh: "稀有性（不可预测性）", en: "Rarity (Unpredictability)" },
  feature1Text: {
    zh: "事件超出常规预期范围，事前没有任何令人信服的迹象表明它会发生。",
    en: "The event lies outside the realm of regular expectations — nothing in the past convincingly points to its occurrence."
  },
  feature2Title: { zh: "极端影响", en: "Extreme Impact" },
  feature2Text: {
    zh: "事件产生极大的影响，改变了历史进程或深刻影响了大量人的生活。",
    en: "The event carries enormous consequences, changing the course of history or profoundly affecting many lives."
  },
  feature3Title: { zh: "事后可解释性", en: "Retrospective Explainability" },
  feature3Text: {
    zh: "尽管事件本身出人意料，但事后人们总能找到合理的解释，使其看起来似乎是可以预测的。",
    en: "Despite the event being a surprise, after the fact we concoct explanations that make it appear predictable."
  },
  aboutText3: {
    zh: "本网站收集了历史上真实发生的黑天鹅事件，并根据这三个特征进行评分和排名，同时展望可能即将发生的潜在黑天鹅事件。",
    en: "This site collects real Black Swan events from history, scores them on these three characteristics, and also looks ahead at potential Black Swans that may be on the horizon."
  },
  scoring: { zh: "评分说明", en: "Scoring Guide" },
  scoringText: {
    zh: "每个事件按1-10分评分。综合评分 = 不可预测性 + 影响力 + 事后可解释性（满分30分）。分数越高越符合黑天鹅特征。",
    en: "Each event is scored 1-10 on each dimension. Total score = Unpredictability + Impact + Retrospective Explainability (max 30). Higher scores indicate a stronger Black Swan."
  },
  footer: {
    zh: "基于塔勒布黑天鹅理论 | 仅供教育参考 | 数据来源：维基百科等公开资料",
    en: "Based on Taleb's Black Swan Theory | For educational reference only | Sources: Wikipedia and public records"
  },
  rank: { zh: "排名", en: "Rank" },
  event: { zh: "事件", en: "Event" },
  score: { zh: "评分", en: "Score" }
};
