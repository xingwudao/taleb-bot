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
// Sources: Polymarket, Metaculus, Kalshi, Manifold Markets, Saxo Bank Outrageous Predictions
const POTENTIAL_BLACK_SWANS = [
  // --- WORLD-LEVEL ---
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
    title: { zh: "全球性网络攻击瘫痪关键基础设施", en: "Grid-Down Cyberattack on Critical Infrastructure" },
    description: {
      zh: "安全专家预测2026年将出现针对关键基础设施的高影响网络事件，极可能与地缘政治冲突挂钩。俄罗斯和伊朗被认为是最可能的发起者。Forrester、IBM和Palo Alto Networks均将此列为2026年首要风险。现代社会从未经历过长时间的网络攻击导致的大规模断电。",
      en: "Security experts predict a high-impact cyber incident on OT/critical infrastructure in 2026, likely tied to geopolitical conflict. Russia and Iran are identified as most likely perpetrators. Forrester, IBM, and Palo Alto Networks all flag this as a top 2026 risk."
    },
    likelihood: { zh: "中高", en: "Medium-High" },
    potentialImpact: 9,
    timeframe: { zh: "随时可能", en: "Anytime" }
  },
  {
    id: 109,
    category: "world",
    title: { zh: "H5N1禽流感演变为人类大流行", en: "H5N1 Bird Flu Human Pandemic" },
    description: {
      zh: "H5N1已感染数亿农场动物并在美国奶牛群中建立传播链。历史上全球已知人类H5N1感染病例的致死率接近50%。科学家警告病毒获得人际高效传播能力只是时间问题。一旦爆发，致死率将远超新冠。",
      en: "H5N1 has infected hundreds of millions of farm animals and established itself in US dairy cattle. Historically, nearly half of known human H5N1 infections have been fatal. Scientists warn sustained human-to-human transmission is a matter of 'when, not if.'"
    },
    likelihood: { zh: "低 (5-15%)", en: "Low (5-15%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },
  {
    id: 112,
    category: "world",
    title: { zh: "核武器在冲突中被引爆", en: "Nuclear Weapon Detonation in Conflict" },
    description: {
      zh: "Polymarket曾开设核武器引爆预测市场（因伦理争议后下架），交易量达83.8万美元，显示约22%的概率。随着美伊冲突升级和俄乌战争持续，核升级路径真实存在。1945年以来核武器从未在冲突中使用，任何引爆都将跨越终极禁忌。",
      en: "Polymarket briefly hosted a nuclear detonation market (pulled for ethical concerns) showing ~22% probability with $838K traded. With US-Iran conflict active and Russia-Ukraine ongoing, nuclear escalation pathways exist. No nuclear weapon has been used in conflict since 1945."
    },
    likelihood: { zh: "极低 (5-10%)", en: "Very Low (5-10%)" },
    potentialImpact: 10,
    timeframe: { zh: "不确定", en: "Uncertain" }
  },
  {
    id: 104,
    category: "world",
    title: { zh: "卡灵顿级超级太阳风暴", en: "Carrington-Level Solar Superstorm" },
    description: {
      zh: "NASA确认太阳活动极大期持续到2026年。2026年2月已爆发X8.1级耀斑。ESA模拟显示卡灵顿级事件可能摧毁地球轨道卫星。低地球轨道在此类事件中\"距灾难仅2.8天\"。将导致GPS、通信卫星、电网和互联网基础设施全球瘫痪，预估损失2-20万亿美元。",
      en: "NASA confirms solar maximum is ongoing through 2026. X8.1-class flares erupted in February 2026. ESA simulations show a Carrington-level event could destroy Earth-orbiting satellites. Low-Earth orbit is '2.8 days from disaster.' Estimated damage: $2-20 trillion."
    },
    likelihood: { zh: "极低 (每年1-2%)", en: "Very Low (1-2%/year)" },
    potentialImpact: 10,
    timeframe: { zh: "2026 (太阳极大期)", en: "2026 (peak solar cycle)" }
  },
  {
    id: 130,
    category: "world",
    title: { zh: "量子计算攻破公钥加密体系（Q日）", en: "Quantum Computing Breaks Public-Key Cryptography (Q-Day)" },
    description: {
      zh: "Manifold Markets共识认为2030年前不会发生密码学崩溃，但Michele Mosca博士估计2026年前有1/7的概率。JVG算法可能仅需不到5000个量子比特即可破解RSA/ECC。如果加密突然被攻破，所有数字银行、加密货币（2万亿美元+）、军事通信和互联网安全将同时失效。",
      en: "Manifold consensus says no cryptographic collapse before 2030, but Dr. Michele Mosca estimates a 1-in-7 chance by 2026. The JVG Algorithm may require fewer than 5,000 qubits to break RSA/ECC. If encryption breaks suddenly, all digital banking, cryptocurrency ($2T+), military communications, and internet security fail simultaneously."
    },
    likelihood: { zh: "极低 (5-14%)", en: "Very Low (5-14%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026-2028", en: "2026-2028" }
  },
  {
    id: 131,
    category: "world",
    title: { zh: "全球去美元化加速与美元崩溃", en: "Accelerated De-dollarization & Dollar Collapse" },
    description: {
      zh: "美国公共债务已达GDP的100%，年利息支出突破1万亿美元。美元指数趋势线承压，\"高概率突破可能在2026年底前确认\"。《外交事务》杂志警告\"美国即将到来的崩溃\"。金砖国家扩员和央行数字货币同时挑战美元霸权。",
      en: "US public debt at 100% of GDP with annual interest exceeding $1 trillion. The DXY trendline is under sustained pressure. Foreign Affairs warns of 'America's Coming Crash.' BRICS expansion and CBDCs simultaneously challenge dollar hegemony."
    },
    likelihood: { zh: "极低 (急性危机~5%)", en: "Very Low (acute ~5%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026-2028", en: "2026-2028" }
  },

  // --- CONTINENTAL/REGIONAL ---
  {
    id: 103,
    category: "continental",
    title: { zh: "台海冲突爆发", en: "Taiwan Strait Conflict" },
    description: {
      zh: "Polymarket台海入侵预测市场价格为13%（2026年底前），交易量超过330万美元。如果发生军事冲突，不仅会导致中美直接军事对抗的可能，更会切断全球半导体供应（台积电供应全球90%以上最先进芯片）。",
      en: "Polymarket prices China-Taiwan invasion at 13% before end of 2026, with $3.3M+ in trading volume. A conflict would risk direct US-China military confrontation and sever the global semiconductor supply (TSMC produces 90%+ of advanced chips)."
    },
    likelihood: { zh: "低 (13%)", en: "Low (13%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },
  {
    id: 132,
    category: "continental",
    title: { zh: "美伊全面战争与伊朗政权崩溃", en: "US-Iran Full-Scale War & Regime Collapse" },
    description: {
      zh: "Polymarket伊朗打击市场交易额达5.29亿美元。\"美国2027年前入侵伊朗\"交易价格为19%。伊朗政权存续概率定价为66.5%，Manifold预测政权崩溃概率为27%。全面地面入侵或政权崩溃将动摇整个中东、推高油价，并可能引发与俄罗斯/中国的更大冲突。",
      en: "Polymarket's Iran strike market saw $529M traded. 'US invades Iran before 2027' trades at 19%. Iranian regime survival priced at 66.5%, Manifold prices regime fall at 27%. A full invasion or regime collapse would destabilize the Middle East and risk wider conflict."
    },
    likelihood: { zh: "中低 (19-33%)", en: "Low-Medium (19-33%)" },
    potentialImpact: 9,
    timeframe: { zh: "2026", en: "2026" }
  },
  {
    id: 133,
    category: "continental",
    title: { zh: "北约成员国退出联盟", en: "NATO Member State Withdrawal" },
    description: {
      zh: "Polymarket将北约解散定价为8%。法国\"不屈法兰西\"党已提交决议草案，要求法国退出北约军事一体化指挥系统。特朗普质疑北约安全保障。自1949年以来北约一直是西方安全基石，法国或土耳其的退出将从根本上重塑欧洲防务格局。",
      en: "Polymarket prices NATO dissolution at 8%. France's La France Insoumise party submitted a draft resolution to withdraw from NATO's integrated military command. Trump has questioned NATO guarantees. NATO has been the cornerstone of Western security since 1949."
    },
    likelihood: { zh: "低 (8%)", en: "Low (8%)" },
    potentialImpact: 9,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },
  {
    id: 134,
    category: "continental",
    title: { zh: "俄乌停火崩溃演变为北约正面冲突", en: "Russia-Ukraine Ceasefire Collapse into NATO Confrontation" },
    description: {
      zh: "Metaculus预测2026年俄乌停火概率为40%。但反向情景——停火崩溃并升级至北约卷入——才是真正的黑天鹅。美国注意力转向伊朗时，俄罗斯可能利用窗口期。北约内部分歧正在加深。直接北约-俄罗斯对抗将是古巴导弹危机以来最危险的军事冲突。",
      en: "Metaculus prices Russia-Ukraine ceasefire in 2026 at 40%. But the inverse — ceasefire collapses and escalation draws in NATO — is the Black Swan. With US attention diverted to Iran, Russia could exploit the window. This would be the most dangerous confrontation since the Cuban Missile Crisis."
    },
    likelihood: { zh: "极低 (3-5%)", en: "Very Low (3-5%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026", en: "2026" }
  },
  {
    id: 135,
    category: "continental",
    title: { zh: "欧盟成员国退出", en: "EU Member State Withdrawal (Post-Brexit Sequel)" },
    description: {
      zh: "Polymarket开设\"2027年前是否有国家退出欧盟\"市场，概率虽低但非零。中东欧民粹主义者（匈牙利、斯洛伐克）被形容为\"一边靠欧盟养活一边试图瓦解欧盟\"。英国脱欧本身就是黑天鹅，第二个退出（尤其是法国或意大利）将意味着欧洲一体化的终结。",
      en: "Polymarket hosts 'Any country withdraws from EU before 2027' with low but non-zero probability. Central European populists (Hungary, Slovakia) are described as 'trying to break the EU while living off it.' A second departure (especially France or Italy) would signal terminal decline of the European project."
    },
    likelihood: { zh: "极低 (3-5%)", en: "Very Low (3-5%)" },
    potentialImpact: 9,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },

  // --- NATIONAL ---
  {
    id: 105,
    category: "national",
    title: { zh: "美国主权债务危机", en: "US Sovereign Debt Crisis" },
    description: {
      zh: "美国国债已超过34万亿美元，年利息支出突破1万亿美元，债务上限危机反复出现。如果美国真正发生国债违约，将摧毁美元作为全球储备货币的地位，引发全球金融市场崩溃。《外交事务》警告\"美国即将到来的崩溃\"。",
      en: "US national debt exceeds $34 trillion with annual interest over $1 trillion. Foreign Affairs warns of 'America's Coming Crash.' An actual default would destroy the dollar's status as global reserve currency, triggering financial collapse far worse than 2008."
    },
    likelihood: { zh: "极低 (~5%)", en: "Very Low (~5%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026-2028", en: "2026-2028" }
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
    id: 137,
    category: "national",
    title: { zh: "特朗普被援引第25修正案免职", en: "Trump Removed via 25th Amendment" },
    description: {
      zh: "Polymarket将第25修正案免职定价为14%，在伊朗空袭期间特朗普打高尔夫时一度飙升至40%。弹劾在任期结束前发生的概率定价为70%（受2026年中期选举翻转预期推动）。从未有总统通过第25修正案被免职，这将引发前所未有的宪政危机。",
      en: "Polymarket prices 25th Amendment removal at 14%, spiking to 40% when Trump was golfing during Iran strikes. Impeachment before term ends priced at 70% (driven by expected 2026 midterm flip). No president has ever been removed via the 25th Amendment — this would trigger an unprecedented constitutional crisis."
    },
    likelihood: { zh: "低 (14%)", en: "Low (14%)" },
    potentialImpact: 9,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },

  // --- INDUSTRY ---
  {
    id: 138,
    category: "industry",
    title: { zh: "AI泡沫破裂 — NVIDIA暴跌与AI公司崩溃", en: "AI Bubble Burst — NVIDIA Crash & AI Company Collapse" },
    description: {
      zh: "Polymarket将AI泡沫在2026年底前破裂的概率定价为22%。触发条件包括：NVIDIA从最高点下跌50%、半导体ETF下跌40%、OpenAI或Anthropic破产/被收购、H100租赁价格崩溃。MIT报告95%的生成式AI项目失败率；NBER发现90%的企业报告AI未带来生产力提升。OpenAI估值7500亿、Anthropic估值3500亿，但实际回报有限。",
      en: "Polymarket assigns 22% probability of AI bubble bursting by Dec 2026. Resolution requires 3+ of: NVIDIA down 50% from ATH, semiconductor ETF down 40%, OpenAI or Anthropic bankruptcy/acquisition, H100 rental price collapse. MIT reports 95% failure rates for generative AI initiatives; NBER finds 90% of firms report no productivity impact."
    },
    likelihood: { zh: "中低 (22%)", en: "Low-Medium (22%)" },
    potentialImpact: 9,
    timeframe: { zh: "2026", en: "2026" }
  },
  {
    id: 139,
    category: "industry",
    title: { zh: "比特币崩盘跌破38,000美元", en: "Bitcoin Crash Below $38,000" },
    description: {
      zh: "Stifel基于15年趋势线分析指向38,000美元。Polymarket显示BTC跌破70,000美元的概率为69%。BTC在2026年已触及81,000美元低点。从2025年10月126,000美元高点计算，80%跌幅意味着25,000美元。稳定币脱锚风险加剧了这一场景。比特币现已嵌入传统金融（ETF、企业资产负债表、主权储备），崩盘将引发连锁清算。",
      en: "Stifel's 15-year trendline analysis points to $38,000. Polymarket shows 69% probability of BTC below $70K. An 80% decline from the Oct 2025 high of $126K would put BTC at $25K. Bitcoin is now embedded in traditional finance (ETFs, corporate balance sheets, sovereign reserves). A crash would trigger cascading liquidations and potential stablecoin collapse."
    },
    likelihood: { zh: "中低 (8-15%)", en: "Low-Medium (8-15%)" },
    potentialImpact: 8,
    timeframe: { zh: "2026", en: "2026" }
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
    id: 111,
    category: "industry",
    title: { zh: "大型科技公司被强制拆分", en: "Major Tech Company Forced Breakup" },
    description: {
      zh: "全球反垄断监管压力持续升级，美国和欧盟正在对苹果、谷歌、Meta等科技巨头提起反垄断诉讼。如果某家万亿市值公司被强制拆分，将重塑整个科技行业的格局。",
      en: "Global antitrust pressure is mounting, with the US and EU pursuing cases against Apple, Google, and Meta. A forced breakup of a trillion-dollar company would reshape the entire tech industry landscape."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 8,
    timeframe: { zh: "3-10年", en: "3-10 years" }
  },
  {
    id: 140,
    category: "industry",
    title: { zh: "GLP-1减肥药大规模副作用与召回", en: "GLP-1 Weight Loss Drug Mass Recall" },
    description: {
      zh: "司美格鲁肽（Ozempic/Wegovy）和替尔泊肽（Mounjaro）等GLP-1药物已成为史上增长最快的药物类别，全球数千万人在服用，但长期副作用未知。如果出现严重的延迟副作用（甲状腺癌、肌肉萎缩、器官损伤），大规模召回将影响数千万用户，诺和诺德和礼来市值可能蒸发数千亿美元。",
      en: "GLP-1 drugs (Ozempic/Wegovy/Mounjaro) are the fastest-growing drug class in history, with tens of millions of users, but long-term effects are unknown. If severe delayed side effects emerge (thyroid cancer, muscle wasting, organ damage), a mass recall would affect tens of millions and wipe hundreds of billions from Novo Nordisk and Eli Lilly."
    },
    likelihood: { zh: "低 (5-10%)", en: "Low (5-10%)" },
    potentialImpact: 8,
    timeframe: { zh: "2026-2028", en: "2026-2028" }
  },
  {
    id: 141,
    category: "industry",
    title: { zh: "AI代理大规模失控 —\"AI清洁工\"危机", en: "AI Agent Mass Misfire — 'AI Janitor' Crisis" },
    description: {
      zh: "Saxo Bank 2026年\"离谱预测\"：治理不善的AI代理和自动化大规模失控，造成万亿美元的清理成本，催生\"AI清洁工\"新职业。马斯克承认xAI\"构建不当\"，需要从头重建。AI代理正以前所未有的规模部署，但监管几乎为零。金融交易、医疗、自动驾驶或基础设施中的关联性失败可能导致级联损害。",
      en: "Saxo Bank's 2026 outrageous prediction: poorly governed AI agents misfire en masse, generating trillion-dollar cleanup costs and a new 'AI janitor' profession. Musk admitted xAI was 'not built right.' AI agents are deployed at unprecedented scale with minimal governance. Correlated failures across trading, healthcare, or infrastructure could cascade."
    },
    likelihood: { zh: "低 (10-15%)", en: "Low (10-15%)" },
    potentialImpact: 8,
    timeframe: { zh: "2026", en: "2026" }
  },
  {
    id: 142,
    category: "industry",
    title: { zh: "OpenAI宣布实现通用人工智能（AGI）", en: "OpenAI Declares AGI Achievement" },
    description: {
      zh: "Polymarket开设\"OpenAI在2027年前宣布实现AGI\"市场。OpenAI现金消耗速度超过每年140亿美元，已关闭Sora并终止与迪士尼的10亿美元合作。尚无基准测试符合OpenAI自己定义的AGI标准（\"在经济上有价值的任务中超越人类\"）。但一旦发出可信的AGI声明，将引发监管恐慌、大规模资本重新配置，以及美中AI军备竞赛的升级。",
      en: "Polymarket hosts 'OpenAI announces AGI before 2027.' OpenAI burns $14B+/year, shut down Sora, and terminated a $1B Disney deal. No benchmarks meet OpenAI's own AGI criteria. But a credible AGI announcement would trigger regulatory panic, massive capital reallocation, and AI arms race escalation between US and China."
    },
    likelihood: { zh: "极低 (5-10%)", en: "Very Low (5-10%)" },
    potentialImpact: 10,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },
  {
    id: 143,
    category: "industry",
    title: { zh: "VEI 6级以上超级火山喷发", en: "VEI 6+ Major Volcanic Eruption" },
    description: {
      zh: "Polymarket将2026年VEI 6+火山喷发的概率定价为11%。历史上VEI 6级事件（如1991年皮纳图博火山）会导致全球降温、农作物减产和航空中断。在当前地缘政治不稳定的背景下，级联效应将更加严重。",
      en: "Polymarket prices a VEI 6+ eruption in 2026 at 11%. Historically, VEI 6 events (like Pinatubo 1991) cause global cooling, crop failures, and aviation disruption. Combined with current geopolitical instability, cascading effects would be severe."
    },
    likelihood: { zh: "低 (11%)", en: "Low (11%)" },
    potentialImpact: 8,
    timeframe: { zh: "2026", en: "2026" }
  },
  {
    id: 144,
    category: "industry",
    title: { zh: "8.5级以上超级地震", en: "Magnitude 8.5+ Megaquake" },
    description: {
      zh: "Polymarket的\"3月31日前发生超级地震\"市场交易概率为15%。USGS每年追踪约15次7.0+级地震，但8.5+级极为罕见。如果发生在人口密集地区（东京、伊斯坦布尔、太平洋西北部），可能造成数十万人死亡和超过1万亿美元损失。若引发大规模海啸，伤亡和经济损失将成倍增加。",
      en: "Polymarket's 'Megaquake by March 31' traded at 15%. USGS tracks ~15 magnitude 7.0+ events annually, but 8.5+ is extremely rare. In a populated area (Tokyo, Istanbul, Pacific Northwest), it could kill hundreds of thousands and cause $1T+ damage. A major tsunami would multiply casualties."
    },
    likelihood: { zh: "极低 (每年2-5%)", en: "Very Low (2-5%/year)" },
    potentialImpact: 9,
    timeframe: { zh: "随时可能", en: "Anytime" }
  },

  // --- INSTITUTIONAL ---
  {
    id: 110,
    category: "institutional",
    title: { zh: "全球去美元化 — SWIFT替代系统崛起", en: "De-dollarization — SWIFT Alternative Systems Rise" },
    description: {
      zh: "金砖国家扩员至10国、人民币跨境支付系统（CIPS）交易量激增、央行数字货币兴起。如果多国同时大规模抛售美元资产并转向替代支付系统，可能引发美元信用崩溃，彻底重塑全球金融秩序。这不仅是货币问题，更是对二战后美国主导的国际秩序的根本性挑战。",
      en: "BRICS expanded to 10 nations, China's CIPS transaction volume is surging, and CBDCs are proliferating. If multiple nations simultaneously dump dollar assets and switch to alternative payment systems, it could trigger a dollar credit collapse and fundamentally reshape the post-WWII US-led international order."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 9,
    timeframe: { zh: "5-15年", en: "5-15 years" }
  },
  {
    id: 145,
    category: "institutional",
    title: { zh: "马斯克商业帝国崩塌", en: "Elon Musk Empire Unraveling" },
    description: {
      zh: "马斯克承认xAI\"构建不当\"需要重建。特斯拉向xAI投资20亿美元。SpaceX以2500亿美元估值收购xAI，合并实体价值达1.25万亿美元。马斯克已辞去DOGE职位（Polymarket概率100%）。风险高度集中于特斯拉、SpaceX、xAI和X之间的交叉补贴和声誉传染——任一领域的失败都可能级联扩散。",
      en: "Musk admitted xAI was 'not built right.' Tesla invested $2B in xAI. SpaceX acquired xAI at $250B in a combined $1.25T entity. Musk resigned from DOGE (100% on Polymarket). Concentration of risk across Tesla, SpaceX, xAI, and X creates systemic fragility — failure in one domain could cascade through cross-subsidization and reputational contagion."
    },
    likelihood: { zh: "低 (~10%)", en: "Low (~10%)" },
    potentialImpact: 8,
    timeframe: { zh: "2026-2027", en: "2026-2027" }
  },

  // --- PERSONAL ---
  {
    id: 146,
    category: "personal",
    title: { zh: "重要国家领导人突然去世或丧失能力", en: "Sudden Death or Incapacitation of Key World Leader" },
    description: {
      zh: "多位关键世界领导人年事已高或健康状况受到质疑。普京（73岁）多次传出健康问题，拜登（83岁）已因年龄问题退出竞选。习近平（72岁）的继任安排是全球最大的政治不确定性之一。任何一位领导人的突然丧失能力都可能在权力真空中引发不稳定。",
      en: "Multiple key world leaders are aging or have questioned health. Putin (73) has had repeated health rumors, Biden (83) withdrew from re-election over age concerns. Xi's (72) succession plan is one of the world's biggest political uncertainties. Sudden incapacitation of any could create destabilizing power vacuums."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 9,
    timeframe: { zh: "随时可能", en: "Anytime" }
  },
  {
    id: 147,
    category: "personal",
    title: { zh: "知名科技CEO因AI安全事故被追责入狱", en: "Tech CEO Jailed Over AI Safety Incident" },
    description: {
      zh: "随着AI系统越来越多地参与关键决策（医疗诊断、自动驾驶、金融交易），一旦AI系统导致大规模伤亡或财务损失，公众舆论和政治压力可能推动对科技公司CEO个人的刑事追责。这将彻底改变科技行业的风险偏好和创新节奏。",
      en: "As AI systems increasingly make critical decisions (medical diagnosis, autonomous driving, financial trading), a large-scale AI-caused casualty or financial loss event could generate public and political pressure to criminally prosecute tech CEOs personally. This would fundamentally change the tech industry's risk appetite and innovation pace."
    },
    likelihood: { zh: "低", en: "Low" },
    potentialImpact: 8,
    timeframe: { zh: "3-10年", en: "3-10 years" }
  },
  {
    id: 148,
    category: "personal",
    title: { zh: "重大体育赛事恐怖袭击", en: "Major Sporting Event Terrorist Attack" },
    description: {
      zh: "随着2026年世界杯（美国/加拿大/墨西哥）和2028年洛杉矶奥运会临近，大型国际体育赛事面临的恐怖袭击风险上升。1972年慕尼黑奥运会和2013年波士顿马拉松爆炸案证明体育赛事是高价值目标。在当前地缘政治紧张和\"独狼\"式袭击增多的背景下，风险尤为突出。",
      en: "With the 2026 FIFA World Cup (US/Canada/Mexico) and 2028 LA Olympics approaching, the terror threat to major international sporting events is elevated. The 1972 Munich Olympics and 2013 Boston Marathon bombing show sports events are high-value targets. Current geopolitical tensions and 'lone wolf' attack trends heighten this risk."
    },
    likelihood: { zh: "低", en: "Low" },
    potentialImpact: 8,
    timeframe: { zh: "2026-2028", en: "2026-2028" }
  },
  {
    id: 149,
    category: "personal",
    title: { zh: "深度伪造引发国际危机", en: "Deepfake-Triggered International Crisis" },
    description: {
      zh: "AI生成的深度伪造音视频已达到难以辨别真假的水平。如果一段伪造的国家领导人宣战或发出核打击命令的视频被广泛传播，在被核实之前就可能引发军事响应或金融市场崩溃。2023年五角大楼爆炸的AI生成假图片曾短暂引发股市波动，但下一次可能后果严重得多。",
      en: "AI-generated deepfake audio and video have reached near-indistinguishable quality. A fabricated video of a world leader declaring war or ordering a nuclear strike could trigger military response or market collapse before verification. A 2023 AI-generated fake Pentagon explosion image briefly moved markets — the next incident could be far more severe."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 8,
    timeframe: { zh: "随时可能", en: "Anytime" }
  },
  {
    id: 150,
    category: "personal",
    title: { zh: "大规模名人/政要丑闻连锁曝光", en: "Cascading Celebrity/Political Scandal Exposure" },
    description: {
      zh: "类似#MeToo运动或爱泼斯坦案的连锁曝光事件可能再次发生。如果涉及多位现任国家元首或全球最大企业CEO，可能导致多国政治危机同时爆发，引发全球治理真空。随着数字取证和举报人保护的进步，隐藏的大规模丑闻更容易被揭露。",
      en: "A cascading exposure event like #MeToo or the Epstein case could recur. If it involves multiple sitting heads of state or CEOs of the world's largest corporations, it could trigger simultaneous political crises across countries. Advances in digital forensics and whistleblower protections make hidden scandals easier to expose."
    },
    likelihood: { zh: "中等", en: "Medium" },
    potentialImpact: 7,
    timeframe: { zh: "随时可能", en: "Anytime" }
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
    zh: "以下事件目前看似不太可能发生，但一旦发生将产生极大影响——这正是黑天鹅的定义。数据来源包括 Polymarket、Metaculus、Manifold Markets、Saxo Bank 等预测市场",
    en: "These events currently seem unlikely, but would have extreme impact if they occur — the very definition of a Black Swan. Data sourced from Polymarket, Metaculus, Manifold Markets, Saxo Bank and other prediction markets"
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
    zh: "基于塔勒布黑天鹅理论 | 仅供教育参考 | 数据来源：维基百科、Polymarket、Metaculus、Manifold Markets、Saxo Bank 等",
    en: "Based on Taleb's Black Swan Theory | For educational reference only | Sources: Wikipedia, Polymarket, Metaculus, Manifold Markets, Saxo Bank"
  },
  rank: { zh: "排名", en: "Rank" },
  event: { zh: "事件", en: "Event" },
  score: { zh: "评分", en: "Score" }
};
