// Black Swan Events Database
// Scores: 1-10 scale
// - unpredictability: How unlikely/unexpected was this before it happened? (10 = completely unforeseeable)
// - impact: How much real-world STRUCTURAL CHANGE did it cause? (10 = permanently reshaped the world)
//   NOT media attention or emotional shock. Measures lasting change in systems, institutions, borders, industries, or how people live.
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
    impact: 7,
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
    impact: 7,
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
    impact: 6,
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
    impact: 3,
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
    impact: 3,
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
    impact: 9,
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
    impact: 4,
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
    impact: 2,
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
    impact: 5,
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
    impact: 3,
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
    impact: 3,
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
    impact: 4,
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
    impact: 7,
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
    impact: 4,
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
    impact: 6,
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
    impact: 4,
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
    impact: 2,
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
  },

  // ===== NEW EVENTS: ANCIENT/MEDIEVAL =====
  {
    id: 49,
    category: "world",
    year: 1347,
    title: { zh: "黑死病席卷欧洲", en: "The Black Death Sweeps Europe" },
    description: {
      zh: "1347-1352年间，鼠疫沿丝绸之路从中亚传入欧洲，导致约2500-5000万人死亡，占欧洲人口的30%-60%。这场瘟疫彻底改变了欧洲的社会结构、劳动力市场和宗教信仰，间接催生了文艺复兴。",
      en: "Between 1347 and 1352, bubonic plague spread from Central Asia along the Silk Road into Europe, killing 25-50 million people — 30-60% of Europe's population. It fundamentally reshaped European social structures, labor markets, and religious faith, indirectly catalyzing the Renaissance."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Black_Death"
  },
  {
    id: 50,
    category: "world",
    year: 1206,
    title: { zh: "蒙古帝国崛起", en: "Rise of the Mongol Empire" },
    description: {
      zh: "成吉思汗统一蒙古各部后建立了人类历史上最大的连续陆地帝国，横跨欧亚大陆。蒙古铁骑以闪电般的速度征服了从中国到东欧的广大地区，造成约4000万人死亡，重塑了世界贸易路线和文化交流格局。",
      en: "Genghis Khan united the Mongol tribes and built the largest contiguous land empire in history, spanning from China to Eastern Europe. The Mongol conquests killed an estimated 40 million people and reshaped global trade routes and cultural exchange."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Mongol_Empire"
  },
  {
    id: 51,
    category: "world",
    year: 79,
    title: { zh: "庞贝城毁灭", en: "Destruction of Pompeii" },
    description: {
      zh: "公元79年，维苏威火山突然爆发，将繁华的罗马城市庞贝和赫库兰尼姆埋于数米厚的火山灰下，约2000人瞬间遇难。该城直到1748年才被重新发现，成为了解古罗马生活的最重要考古遗址。",
      en: "In 79 AD, Mount Vesuvius erupted suddenly, burying the thriving Roman cities of Pompeii and Herculaneum under meters of volcanic ash, killing about 2,000 people instantly. The city was not rediscovered until 1748, becoming the most important archaeological site for understanding ancient Roman life."
    },
    unpredictability: 8,
    impact: 4,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD"
  },
  {
    id: 52,
    category: "world",
    year: 1453,
    title: { zh: "君士坦丁堡陷落", en: "Fall of Constantinople" },
    description: {
      zh: "1453年奥斯曼帝国苏丹穆罕默德二世攻陷千年古都君士坦丁堡，终结了延续1100年的拜占庭帝国。这一事件标志着中世纪的终结，大量希腊学者西逃推动了文艺复兴，同时改变了东西方贸易格局，间接促成了大航海时代。",
      en: "In 1453, Ottoman Sultan Mehmed II conquered Constantinople, ending the 1,100-year Byzantine Empire. This event marked the end of the Middle Ages, drove Greek scholars westward fueling the Renaissance, and disrupted East-West trade routes, indirectly spurring the Age of Exploration."
    },
    unpredictability: 7,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Fall_of_Constantinople"
  },
  {
    id: 53,
    category: "continental",
    year: 1755,
    title: { zh: "里斯本大地震", en: "Great Lisbon Earthquake" },
    description: {
      zh: "1755年万圣节，一场估计9级的大地震摧毁了葡萄牙首都里斯本，随后的海啸和大火导致约6万人死亡。这场灾难深刻影响了欧洲启蒙运动的哲学思想，伏尔泰和康德均对此进行了深入反思。",
      en: "On All Saints' Day 1755, an estimated magnitude-9 earthquake destroyed Lisbon, Portugal. The subsequent tsunami and fires killed about 60,000 people. The disaster profoundly influenced Enlightenment philosophy, with Voltaire and Kant both reflecting deeply on its implications."
    },
    unpredictability: 9,
    impact: 6,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake"
  },
  {
    id: 54,
    category: "world",
    year: 1588,
    title: { zh: "西班牙无敌舰队覆灭", en: "Defeat of the Spanish Armada" },
    description: {
      zh: "1588年，号称'无敌'的西班牙舰队在入侵英国时被击溃，一半战舰损失，约1.5万人丧生。这一事件标志着西班牙海上霸权的衰落和英国崛起的开端，深刻改变了欧洲乃至世界的力量格局。",
      en: "In 1588, the 'Invincible' Spanish Armada was defeated while attempting to invade England, losing half its fleet and about 15,000 men. This marked the decline of Spanish naval supremacy and the rise of England, fundamentally shifting the European and global balance of power."
    },
    unpredictability: 8,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Spanish_Armada"
  },
  {
    id: 55,
    category: "continental",
    year: 1791,
    title: { zh: "海地奴隶革命", en: "Haitian Revolution" },
    description: {
      zh: "1791年，法属圣多明戈的奴隶发动起义，经过13年斗争于1804年建立了海地共和国。这是人类历史上唯一一次奴隶起义成功建国的案例，震惊了整个殖民世界，深刻影响了拉丁美洲独立运动。",
      en: "In 1791, enslaved people in French Saint-Domingue launched a revolution, establishing Haiti in 1804 after 13 years of struggle. It was the only successful slave revolt leading to an independent state in history, shocking the colonial world and profoundly influencing Latin American independence movements."
    },
    unpredictability: 9,
    impact: 9,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Haitian_Revolution"
  },

  // ===== NEW EVENTS: SCIENTIFIC/TECHNOLOGICAL BREAKTHROUGHS =====
  {
    id: 56,
    category: "world",
    year: 1928,
    title: { zh: "青霉素的意外发现", en: "Accidental Discovery of Penicillin" },
    description: {
      zh: "1928年，亚历山大·弗莱明在度假归来后发现培养皿上的霉菌杀死了周围的细菌，由此发现了青霉素。这一意外发现开创了抗生素时代，挽救了数亿人的生命，彻底改变了现代医学的面貌。",
      en: "In 1928, Alexander Fleming returned from holiday to find mold on a petri dish had killed surrounding bacteria, leading to the discovery of penicillin. This accidental discovery launched the antibiotic era, saving hundreds of millions of lives and transforming modern medicine."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Penicillin"
  },
  {
    id: 57,
    category: "world",
    year: 1938,
    title: { zh: "核裂变的发现", en: "Discovery of Nuclear Fission" },
    description: {
      zh: "1938年，德国化学家哈恩和斯特拉斯曼在用中子轰击铀时意外发现了核裂变现象，物理学家迈特纳和弗里施随后给出了理论解释。这一发现直接导致了原子弹和核能的开发，从根本上改变了地缘政治和能源格局。",
      en: "In 1938, German chemists Hahn and Strassmann accidentally discovered nuclear fission while bombarding uranium with neutrons. Physicists Meitner and Frisch provided the theoretical explanation. This discovery directly led to atomic weapons and nuclear power, fundamentally changing geopolitics and energy."
    },
    unpredictability: 8,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Discovery_of_nuclear_fission"
  },
  {
    id: 58,
    category: "world",
    year: 1908,
    title: { zh: "通古斯大爆炸", en: "Tunguska Event" },
    description: {
      zh: "1908年6月30日，西伯利亚偏远森林上空发生了相当于1000颗广岛原子弹威力的爆炸，夷平了2000平方公里的森林，却未留下任何陨石坑。如果这一爆炸发生在人口密集区域，后果将是毁灭性的。",
      en: "On June 30, 1908, an explosion with the force of 1,000 Hiroshima bombs occurred over remote Siberian forests, flattening 2,000 square kilometers of trees yet leaving no crater. Had this explosion occurred over a populated area, the consequences would have been catastrophic."
    },
    unpredictability: 10,
    impact: 1,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/Tunguska_event"
  },
  {
    id: 59,
    category: "world",
    year: 2025,
    title: { zh: "DeepSeek R1震撼硅谷", en: "DeepSeek R1 Shocks Silicon Valley" },
    description: {
      zh: "2025年1月，中国杭州小型AI公司DeepSeek发布了R1推理模型，以不到600万美元的训练成本达到了与OpenAI旗舰模型相当的性能。消息公布后英伟达股价暴跌18%，动摇了'AI需要天量算力'的行业共识，证明中国AI能力远超西方预期。",
      en: "In January 2025, small Chinese AI company DeepSeek released its R1 reasoning model, matching OpenAI's flagship performance at under $6 million training cost. Nvidia's stock dropped 18% on the news, shaking the industry consensus that AI requires massive compute, and proving China's AI capabilities far exceeded Western expectations."
    },
    unpredictability: 9,
    impact: 6,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/DeepSeek"
  },

  // ===== NEW EVENTS: MILITARY SURPRISES =====
  {
    id: 60,
    category: "world",
    year: 1941,
    title: { zh: "珍珠港事件", en: "Attack on Pearl Harbor" },
    description: {
      zh: "1941年12月7日，日本海军出动353架飞机突袭美国太平洋舰队基地珍珠港，击沉击伤近20艘军舰和300多架飞机，造成2403人死亡。这次袭击直接将美国拖入二战，彻底改变了战争走向和世界格局。",
      en: "On December 7, 1941, Japan launched a surprise attack on Pearl Harbor with 353 aircraft, sinking or damaging nearly 20 warships and over 300 planes, killing 2,403 Americans. The attack brought the US into WWII, fundamentally changing the war's trajectory and the global order."
    },
    unpredictability: 8,
    impact: 9,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor"
  },
  {
    id: 61,
    category: "continental",
    year: 1973,
    title: { zh: "赎罪日战争（第四次中东战争）", en: "Yom Kippur War" },
    description: {
      zh: "1973年10月6日，埃及和叙利亚在犹太教赎罪日当天对以色列发动突然袭击，以色列情报部门完全未能预警。战争初期以色列损失惨重，虽最终反败为胜，但这场战争引发了1973年石油危机，永久改变了中东地缘政治。",
      en: "On October 6, 1973, Egypt and Syria launched a surprise attack on Israel during Yom Kippur, catching Israeli intelligence completely off guard. Despite early heavy losses, Israel ultimately prevailed, but the war triggered the 1973 oil crisis and permanently reshaped Middle Eastern geopolitics."
    },
    unpredictability: 8,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Yom_Kippur_War"
  },
  {
    id: 62,
    category: "continental",
    year: 1968,
    title: { zh: "越南春节攻势", en: "Tet Offensive" },
    description: {
      zh: "1968年1月，北越和越共在越南春节期间对南越100多个城市同时发动大规模进攻，令美军和南越完全措手不及。虽然军事上未能成功，但其政治影响巨大，彻底扭转了美国国内对越战的支持，最终导致美国撤军。",
      en: "In January 1968, North Vietnam and the Viet Cong launched simultaneous attacks on over 100 South Vietnamese cities during the Tet holiday, completely surprising US and ARVN forces. Though a military failure, its political impact was enormous, turning American public opinion against the war and ultimately leading to US withdrawal."
    },
    unpredictability: 8,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Tet_Offensive"
  },

  // ===== NEW EVENTS: POLITICAL UPHEAVALS =====
  {
    id: 63,
    category: "continental",
    year: 1994,
    title: { zh: "卢旺达大屠杀", en: "Rwandan Genocide" },
    description: {
      zh: "1994年4月至7月，卢旺达胡图族极端分子在100天内系统性屠杀了约50-80万图西族人。国际社会的冷漠和联合国的不作为令世界震惊，这场种族灭绝成为20世纪最黑暗的篇章之一。",
      en: "From April to July 1994, Hutu extremists in Rwanda systematically killed an estimated 500,000-800,000 Tutsis in just 100 days. The international community's indifference and the UN's inaction shocked the world, making this genocide one of the darkest chapters of the 20th century."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Rwandan_genocide"
  },
  {
    id: 64,
    category: "national",
    year: 2021,
    title: { zh: "缅甸军事政变", en: "Myanmar Military Coup" },
    description: {
      zh: "2021年2月1日，缅甸军方在昂山素季领导的民盟赢得压倒性选举胜利后发动政变，推翻民选政府并宣布紧急状态。这一事件终结了缅甸十年的民主化进程，引发大规模抗议和持续至今的内战。",
      en: "On February 1, 2021, Myanmar's military staged a coup after Aung San Suu Kyi's NLD won a landslide election, overthrowing the democratic government and declaring a state of emergency. The coup ended a decade of democratization, sparking mass protests and an ongoing civil war."
    },
    unpredictability: 7,
    impact: 6,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/2021_Myanmar_coup_d%27%C3%A9tat"
  },
  {
    id: 65,
    category: "continental",
    year: 2023,
    title: { zh: "尼日尔政变与萨赫勒多米诺效应", en: "Niger Coup and Sahel Domino Effect" },
    description: {
      zh: "2023年7月，尼日尔总统卫队扣押民选总统巴祖姆并发动政变。这是继马里(2020/2021)和布基纳法索(2022)之后萨赫勒地区的第三场政变，三国随后退出西非经济共同体并组建萨赫勒国家联盟，西方在非洲的影响力遭受重大打击。",
      en: "In July 2023, Niger's presidential guard detained the elected president and staged a coup — the third in the Sahel after Mali (2020/2021) and Burkina Faso (2022). The three countries subsequently left ECOWAS and formed the Alliance of Sahel States, dealing a major blow to Western influence in Africa."
    },
    unpredictability: 7,
    impact: 5,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/2023_Nigerien_coup_d%27%C3%A9tat"
  },
  {
    id: 66,
    category: "national",
    year: 2022,
    title: { zh: "斯里兰卡经济崩溃与总统出逃", en: "Sri Lanka Economic Collapse" },
    description: {
      zh: "2022年，斯里兰卡经济全面崩溃，通胀飙升至54.6%，食品价格暴涨81%，成为该国独立以来首次主权债务违约。大规模抗议迫使总统拉贾帕克萨于7月仓皇出逃，留下一个燃料、药品和食品严重短缺的国家。",
      en: "In 2022, Sri Lanka's economy collapsed entirely — inflation soared to 54.6%, food prices surged 81%, and the country experienced its first sovereign default since independence. Mass protests forced President Rajapaksa to flee the country in July, leaving behind severe shortages of fuel, medicine, and food."
    },
    unpredictability: 7,
    impact: 5,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Sri_Lankan_economic_crisis_(2019%E2%80%932024)"
  },
  {
    id: 67,
    category: "national",
    year: 1973,
    title: { zh: "智利军事政变推翻阿连德", en: "Chilean Military Coup Against Allende" },
    description: {
      zh: "1973年9月11日，皮诺切特将军发动军事政变推翻民选总统阿连德，阿连德在总统府内身亡。政变开启了长达17年的军事独裁统治，数千人被杀害或失踪，成为冷战期间拉美政治最黑暗的篇章之一。",
      en: "On September 11, 1973, General Pinochet overthrew democratically elected President Allende in a military coup. Allende died in the presidential palace. The coup initiated 17 years of military dictatorship during which thousands were killed or disappeared, becoming one of Latin America's darkest Cold War chapters."
    },
    unpredictability: 6,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/1973_Chilean_coup_d%27%C3%A9tat"
  },
  {
    id: 68,
    category: "national",
    year: 2024,
    title: { zh: "韩国戒严风波", en: "South Korea Martial Law Crisis" },
    description: {
      zh: "2024年12月3日，韩国总统尹锡悦突然宣布戒严令，指控在野党从事'反国家活动'。190名国会议员紧急集结并在数小时内投票解除戒严，戒严仅持续约6小时。尹锡悦最终因叛乱罪被判处无期徒刑，成为韩国民主史上最荒诞的一幕。",
      en: "On December 3, 2024, South Korean President Yoon Suk Yeol suddenly declared martial law, accusing the opposition of 'anti-state activities.' 190 legislators gathered at the National Assembly and voted to lift it within hours — martial law lasted only about 6 hours. Yoon was ultimately sentenced to life in prison for insurrection, making it one of the most surreal episodes in Korean democratic history."
    },
    unpredictability: 9,
    impact: 5,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/2024_South_Korean_martial_law_crisis"
  },
  {
    id: 69,
    category: "national",
    year: 2024,
    title: { zh: "阿萨德政权闪电式崩塌", en: "Lightning Collapse of the Assad Regime" },
    description: {
      zh: "2024年12月8日，叙利亚反对派武装在仅10天的闪电攻势后推翻了执政53年的阿萨德家族政权。阿萨德仓皇逃往俄罗斯。政权军队几乎未做抵抗便土崩瓦解，其速度之快令全世界震惊，深刻改变了中东地缘政治格局。",
      en: "On December 8, 2024, Syrian opposition forces toppled the 53-year Assad dynasty after just a 10-day lightning offensive. Assad fled to Russia. Regime forces collapsed with almost no resistance at a speed that shocked the world, profoundly reshaping Middle Eastern geopolitics."
    },
    unpredictability: 9,
    impact: 7,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Fall_of_the_Assad_regime"
  },
  {
    id: 70,
    category: "national",
    year: 1975,
    title: { zh: "柬埔寨红色高棉大屠杀", en: "Khmer Rouge Genocide in Cambodia" },
    description: {
      zh: "1975年红色高棉夺取政权后，在不到四年时间里通过强制劳动、饥荒和大规模处决杀害了约200万柬埔寨人，占全国人口的四分之一。这场由极端意识形态驱动的社会实验造成了20世纪最惨烈的人道灾难之一。",
      en: "After seizing power in 1975, the Khmer Rouge killed approximately 2 million Cambodians — one quarter of the population — through forced labor, famine, and mass executions in under four years. This extreme ideological social experiment produced one of the 20th century's worst humanitarian catastrophes."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Cambodian_genocide"
  },

  // ===== NEW EVENTS: ECONOMIC =====
  {
    id: 71,
    category: "world",
    year: 2025,
    title: { zh: "特朗普'解放日'关税震荡", en: "Trump 'Liberation Day' Tariff Shock" },
    description: {
      zh: "2025年4月2日，特朗普宣布'解放日'，对所有进口商品征收10%的基础关税，对数十个国家额外加征更高关税，为自1930年斯穆特-霍利关税法以来最大规模的关税上调。2026年2月最高法院裁定其中部分关税违宪，但已造成平均每户1700美元的额外负担和8.9万个制造业岗位流失。",
      en: "On April 2, 2025, Trump declared 'Liberation Day,' imposing a 10% baseline tariff on all imports plus higher tariffs on dozens of countries — the largest tariff hike since the 1930 Smoot-Hawley Act. The Supreme Court ruled parts unconstitutional in February 2026, but not before costing households an extra $1,700 and 89,000 manufacturing jobs."
    },
    unpredictability: 7,
    impact: 8,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Liberation_Day_tariffs"
  },
  {
    id: 72,
    category: "national",
    year: 2018,
    title: { zh: "土耳其里拉崩盘", en: "Turkish Lira Currency Crisis" },
    description: {
      zh: "2018年，土耳其里拉在数月内暴跌超过40%，从1美元兑4里拉跌至7.22里拉。埃尔多安总统坚持非正统的低利率政策加剧了危机，引发新兴市场连锁恐慌，波及黎巴嫩、南非等国。",
      en: "In 2018, the Turkish lira plunged over 40% in months, from 4 to 7.22 per dollar. President Erdogan's insistence on unorthodox low interest rates exacerbated the crisis, triggering contagion fears across emerging markets including Lebanon and South Africa."
    },
    unpredictability: 6,
    impact: 5,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Turkish_economic_crisis_(2018%E2%80%93current)"
  },
  {
    id: 73,
    category: "world",
    year: 1883,
    title: { zh: "喀拉喀托火山大爆发", en: "Eruption of Krakatoa" },
    description: {
      zh: "1883年8月27日，印尼喀拉喀托火山发生了人类有记录以来最猛烈的火山爆发之一，爆炸声传遍了全球三分之一的地表。引发的海啸高达30米，造成约3.6万人死亡，喷发物遮蔽阳光导致全球平均温度下降1.2度，持续数年。",
      en: "On August 27, 1883, Indonesia's Krakatoa volcano produced one of the most violent eruptions in recorded history — the sound was heard across one-third of Earth's surface. The resulting 30-meter tsunami killed about 36,000 people, and ejected material lowered global temperatures by 1.2°C for years."
    },
    unpredictability: 8,
    impact: 8,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa"
  },

  // ===== NEW EVENTS: NATURAL DISASTERS =====
  {
    id: 74,
    category: "continental",
    year: 2010,
    title: { zh: "冰岛火山灰瘫痪欧洲航空", en: "Eyjafjallajokull Eruption Shuts Down European Airspace" },
    description: {
      zh: "2010年4月，冰岛埃亚菲亚德拉冰盖火山喷发产生的火山灰云导致欧洲航空史上二战以来最大规模的空域关闭。超过10万架次航班被取消，700万旅客滞留，航空公司损失达17亿美元。讽刺的是，这次喷发在火山学意义上只是一次中小规模事件。",
      en: "In April 2010, ash from Iceland's Eyjafjallajokull volcano caused the largest airspace closure since WWII. Over 100,000 flights were cancelled, 7 million passengers stranded, and airlines lost $1.7 billion. Ironically, the eruption was only moderate in volcanological terms — a classic example of disproportionate systemic impact."
    },
    unpredictability: 9,
    impact: 4,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Air_travel_disruption_after_the_2010_Eyjafjallaj%C3%B6kull_eruption"
  },
  {
    id: 75,
    category: "world",
    year: 2022,
    title: { zh: "汤加海底火山大爆发", en: "Hunga Tonga Submarine Volcanic Eruption" },
    description: {
      zh: "2022年1月15日，汤加洪阿哈阿帕伊海底火山发生大规模喷发，产生了现代仪器记录到的最大大气爆炸。爆发引发的海啸波及太平洋沿岸十多个国家，汤加通信电缆被切断，整个国家与世隔绝数周。",
      en: "On January 15, 2022, the Hunga Tonga-Hunga Ha'apai submarine volcano produced the largest atmospheric explosion recorded by modern instruments. The eruption generated tsunamis affecting over a dozen Pacific nations and severed Tonga's communications cables, isolating the entire nation for weeks."
    },
    unpredictability: 9,
    impact: 3,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/2022_Hunga_Tonga%E2%80%93Hunga_Ha%CA%BBapai_eruption_and_tsunami"
  },

  // ===== NEW EVENTS: PANDEMIC/HEALTH =====
  {
    id: 76,
    category: "world",
    year: 1981,
    title: { zh: "HIV/AIDS全球大流行", en: "HIV/AIDS Pandemic" },
    description: {
      zh: "1981年首次被识别的HIV/AIDS在随后几十年演变为全球性大流行，至今已感染超过7000万人、导致超过3500万人死亡。这种源自黑猩猩的病毒彻底改变了公共卫生体系、性行为规范和社会对传染病的认知。",
      en: "First identified in 1981, HIV/AIDS became a global pandemic infecting over 70 million people and killing over 35 million to date. This virus, originating from chimpanzees, fundamentally changed public health systems, sexual behavior norms, and society's understanding of infectious disease."
    },
    unpredictability: 9,
    impact: 10,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/HIV/AIDS"
  },
  {
    id: 77,
    category: "continental",
    year: 2014,
    title: { zh: "西非埃博拉疫情大爆发", en: "West African Ebola Epidemic" },
    description: {
      zh: "2013-2016年间，埃博拉病毒在西非爆发，感染约2.8万人、导致1.1万人死亡，病例数是此前所有埃博拉疫情总和的100倍。这是埃博拉首次在城市大规模传播并跨越国境，暴露了全球公共卫生应急体系的严重不足。",
      en: "Between 2013 and 2016, Ebola ravaged West Africa, infecting about 28,000 and killing 11,000 — 100 times more cases than all previous Ebola outbreaks combined. It was the first time Ebola spread extensively in cities and across borders, exposing severe gaps in global public health emergency systems."
    },
    unpredictability: 8,
    impact: 6,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Western_African_Ebola_virus_epidemic"
  },
  {
    id: 78,
    category: "world",
    year: 2022,
    title: { zh: "猴痘全球意外扩散", en: "Global Mpox Outbreak" },
    description: {
      zh: "2022年5月，原本仅限于中西非地区的猴痘（mpox）突然在全球多国出现社区传播，这是该病毒首次大规模在非洲以外扩散。世卫组织于7月宣布其为国际关注的突发公共卫生事件，最终在110多个国家报告了超过8.7万例病例。",
      en: "In May 2022, mpox — previously confined to Central and West Africa — suddenly appeared in community transmission across multiple countries globally for the first time. The WHO declared a public health emergency in July, with over 87,000 cases eventually reported across 110+ countries."
    },
    unpredictability: 8,
    impact: 3,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/2022%E2%80%932023_mpox_outbreak"
  },

  // ===== NEW EVENTS: CORPORATE/INSTITUTIONAL =====
  {
    id: 79,
    category: "institutional",
    year: 2008,
    title: { zh: "麦道夫庞氏骗局曝光", en: "Madoff Ponzi Scheme Exposed" },
    description: {
      zh: "2008年12月，伯纳德·麦道夫被揭露经营着人类历史上最大的庞氏骗局，涉案金额高达648亿美元，受害者包括4800名投资者。美国证监会此前多次调查却未能发现骗局，麦道夫最终被判处150年监禁。",
      en: "In December 2008, Bernard Madoff was exposed as running the largest Ponzi scheme in history, totaling $64.8 billion and defrauding 4,800 investors. The SEC had investigated multiple times without detecting the fraud. Madoff was sentenced to 150 years in prison."
    },
    unpredictability: 8,
    impact: 6,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Madoff_investment_scandal"
  },
  {
    id: 80,
    category: "institutional",
    year: 2020,
    title: { zh: "Wirecard会计造假崩盘", en: "Wirecard Accounting Fraud Collapse" },
    description: {
      zh: "2020年6月，德国DAX指数成分股Wirecard在承认19亿欧元'凭空消失'后申请破产，成为首家破产的DAX30成分股公司。尽管《金融时报》多年来持续报道其财务造假嫌疑，德国监管机构BaFin却反而打击做空者保护该公司。",
      en: "In June 2020, German DAX member Wirecard filed for insolvency after admitting that EUR 1.9 billion had 'gone missing,' becoming the first DAX 30 company ever to go bankrupt. Despite years of Financial Times reporting on fraud allegations, German regulator BaFin had instead attacked short-sellers to protect the company."
    },
    unpredictability: 7,
    impact: 4,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Wirecard_scandal"
  },
  {
    id: 81,
    category: "institutional",
    year: 2015,
    title: { zh: "Theranos血液检测骗局", en: "Theranos Blood Testing Fraud" },
    description: {
      zh: "Theranos创始人伊丽莎白·霍姆斯声称发明了革命性的微量血液检测技术，公司估值一度高达90亿美元。2015年《华尔街日报》揭露其技术从未真正工作，霍姆斯最终因欺诈罪被判处11年监禁，成为硅谷'假装成功直到成功'文化的最大丑闻。",
      en: "Theranos founder Elizabeth Holmes claimed to have invented revolutionary blood testing using just drops of blood, reaching a $9 billion valuation. In 2015, The Wall Street Journal exposed the technology as non-functional. Holmes was sentenced to 11+ years in prison for fraud, becoming Silicon Valley's biggest 'fake it till you make it' scandal."
    },
    unpredictability: 7,
    impact: 4,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Theranos"
  },
  {
    id: 82,
    category: "institutional",
    year: 2019,
    title: { zh: "波音737 MAX空难丑闻", en: "Boeing 737 MAX Crashes Scandal" },
    description: {
      zh: "2018年10月和2019年3月，两架波音737 MAX客机先后坠毁，共造成346人死亡。调查揭露波音为节省成本隐瞒了关键的MCAS飞控系统缺陷，并欺骗了FAA监管机构。全球所有737 MAX被停飞近两年，波音面临数十亿美元的罚款和赔偿。",
      en: "In October 2018 and March 2019, two Boeing 737 MAX aircraft crashed, killing all 346 people aboard. Investigations revealed Boeing had concealed critical MCAS flight control system flaws to save costs and deceived the FAA. All 737 MAX aircraft were grounded worldwide for nearly two years, with Boeing facing billions in fines and compensation."
    },
    unpredictability: 7,
    impact: 6,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings"
  },
  {
    id: 83,
    category: "world",
    year: 2024,
    title: { zh: "CrowdStrike更新引发全球IT瘫痪", en: "CrowdStrike Update Causes Global IT Outage" },
    description: {
      zh: "2024年7月19日，网络安全公司CrowdStrike的一次错误软件更新导致全球约850万台Windows系统崩溃蓝屏，成为信息技术史上最大规模的宕机事件。航空、银行、医院、媒体和政府服务大面积瘫痪，美国财富500强公司损失估计达54亿美元。",
      en: "On July 19, 2024, a faulty CrowdStrike software update crashed approximately 8.5 million Windows systems globally — the largest IT outage in history. Airlines, banks, hospitals, media, and government services were massively disrupted, costing US Fortune 500 companies an estimated $5.4 billion."
    },
    unpredictability: 9,
    impact: 5,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/2024_CrowdStrike-related_IT_outages"
  },

  // ===== NEW EVENTS: SPORTS/CULTURAL SHOCKS =====
  {
    id: 84,
    category: "industry",
    year: 1980,
    title: { zh: "冰上奇迹：美国击败苏联冰球队", en: "Miracle on Ice" },
    description: {
      zh: "1980年冬奥会上，由大学生组成的美国冰球队以4-3击败了四届奥运金牌得主、由职业球员组成的苏联队。这被认为是体育史上最大的冷门之一，在冷战背景下具有巨大的象征意义，极大地鼓舞了美国民众士气。",
      en: "At the 1980 Winter Olympics, a team of American college players defeated the four-time gold medal Soviet professional hockey team 4-3. Considered one of the greatest sports upsets in history, it carried enormous symbolic significance during the Cold War and greatly boosted American morale."
    },
    unpredictability: 10,
    impact: 2,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Miracle_on_Ice"
  },
  {
    id: 85,
    category: "industry",
    year: 2016,
    title: { zh: "莱斯特城奇迹夺冠", en: "Leicester City's Miracle Premier League Title" },
    description: {
      zh: "2015-16赛季，前一年差点降级的莱斯特城以5000:1的赔率赢得英超联赛冠军，创造了现代足球乃至整个体育史上最不可思议的奇迹。这一事件证明了在高度竞争的职业体育中，极端不可能的事件确实会发生。",
      en: "In the 2015-16 season, Leicester City — who nearly got relegated the previous year — won the Premier League at 5,000-to-1 odds, creating arguably the greatest miracle in modern sports history. It proved that extremely unlikely events do occur even in highly competitive professional sports."
    },
    unpredictability: 10,
    impact: 1,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Leicester_City_F.C._in_the_2015%E2%80%9316_season"
  },
  {
    id: 86,
    category: "industry",
    year: 2022,
    title: { zh: "沙特阿拉伯世界杯击败阿根廷", en: "Saudi Arabia Defeats Argentina at World Cup" },
    description: {
      zh: "2022年卡塔尔世界杯小组赛中，沙特阿拉伯以2-1逆转击败由梅西领衔的夺冠热门阿根廷队，创造了世界杯历史上最大的冷门之一。沙特政府随即宣布全国放假一天庆祝这一历史性胜利。",
      en: "In the 2022 FIFA World Cup group stage, Saudi Arabia stunned tournament favorites Argentina 2-1 in a shocking comeback, creating one of the greatest upsets in World Cup history. The Saudi government declared a national holiday to celebrate the historic victory."
    },
    unpredictability: 9,
    impact: 1,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Argentina_v_Saudi_Arabia_(2022_FIFA_World_Cup)"
  },
  {
    id: 87,
    category: "industry",
    year: 1990,
    title: { zh: "道格拉斯击倒泰森", en: "Buster Douglas Knocks Out Mike Tyson" },
    description: {
      zh: "1990年2月，42:1的大冷门选手巴斯特·道格拉斯在东京击倒了被认为不可战胜的世界重量级拳王迈克·泰森，夺得世界冠军。这是拳击史上最大的冷门，泰森此前37场职业比赛从未被击倒过。",
      en: "In February 1990, 42-to-1 underdog Buster Douglas knocked out the seemingly invincible world heavyweight champion Mike Tyson in Tokyo. It remains the biggest upset in boxing history — Tyson had never been knocked down in his 37 previous professional fights."
    },
    unpredictability: 10,
    impact: 1,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Buster_Douglas_vs._Mike_Tyson"
  },
  {
    id: 88,
    category: "industry",
    year: 2015,
    title: { zh: "日本橄榄球爆冷击败南非", en: "Japan's Stunning Rugby Upset Over South Africa" },
    description: {
      zh: "2015年橄榄球世界杯上，日本队在比赛最后时刻以34-32击败两届世界冠军南非队，被BBC称为'体育史上最大的冷门'。日本此前在世界杯历史上仅赢过一场比赛，这场胜利开启了日本橄榄球的崛起之路。",
      en: "At the 2015 Rugby World Cup, Japan defeated two-time champions South Africa 34-32 with a try in the dying moments, called 'the greatest upset in sports history' by the BBC. Japan had won only one previous World Cup match in their entire history; this victory launched Japan's rugby renaissance."
    },
    unpredictability: 10,
    impact: 1,
    retrospectiveExplainability: 6,
    wikiLink: "https://en.wikipedia.org/wiki/Japan_v_South_Africa_(2015_Rugby_World_Cup)"
  },

  // ===== NEW EVENTS: SUPPLY CHAIN/INFRASTRUCTURE =====
  {
    id: 89,
    category: "world",
    year: 2021,
    title: { zh: "长赐号堵塞苏伊士运河", en: "Ever Given Blocks the Suez Canal" },
    description: {
      zh: "2021年3月，巨型集装箱船'长赐号'在苏伊士运河搁浅，堵塞了全球最重要的航运通道长达6天。432艘船舶被困，每天约90亿美元的贸易受阻，全球供应链损失约1370亿美元。一艘船便暴露了全球化供应链的极端脆弱性。",
      en: "In March 2021, the mega container ship 'Ever Given' ran aground in the Suez Canal, blocking the world's most critical shipping lane for six days. 432 vessels were trapped, $9 billion in daily trade was disrupted, and global supply chain losses totaled about $137 billion. One ship exposed the extreme fragility of globalized supply chains."
    },
    unpredictability: 9,
    impact: 4,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/2021_Suez_Canal_obstruction"
  },

  // ===== NEW EVENTS: MORE HISTORICAL =====
  {
    id: 90,
    category: "world",
    year: 1492,
    title: { zh: "哥伦布发现新大陆", en: "Columbus Reaches the Americas" },
    description: {
      zh: "1492年，哥伦布在寻找通往亚洲的西行航线时意外到达美洲大陆。这一发现引发了殖民时代、跨大西洋奴隶贸易和'哥伦布大交换'——旧大陆的疾病导致美洲原住民人口减少了约90%，从根本上改变了人类文明的进程。",
      en: "In 1492, Columbus accidentally reached the Americas while seeking a westward route to Asia. This triggered the colonial era, the transatlantic slave trade, and the 'Columbian Exchange' — Old World diseases killed approximately 90% of indigenous Americans, fundamentally altering the course of human civilization."
    },
    unpredictability: 8,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus"
  },
  {
    id: 91,
    category: "world",
    year: 1789,
    title: { zh: "法国大革命爆发", en: "French Revolution" },
    description: {
      zh: "1789年法国大革命推翻了延续千年的君主制度，提出了'自由、平等、博爱'的理念。革命引发了拿破仑战争，重塑了整个欧洲的政治版图，其思想影响了此后两个世纪全球范围内的民主运动和革命浪潮。",
      en: "The 1789 French Revolution overthrew a millennium-old monarchy, proclaiming 'Liberty, Equality, Fraternity.' It triggered the Napoleonic Wars, reshaped Europe's political map, and its ideals influenced democratic movements and revolutions worldwide for the next two centuries."
    },
    unpredictability: 7,
    impact: 10,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/French_Revolution"
  },
  {
    id: 92,
    category: "continental",
    year: 1986,
    title: { zh: "挑战者号航天飞机爆炸", en: "Space Shuttle Challenger Disaster" },
    description: {
      zh: "1986年1月28日，挑战者号航天飞机在发射后73秒爆炸解体，7名宇航员全部遇难，其中包括首位参与太空任务的教师麦考利夫。数百万观众通过电视直播目睹了这一悲剧。调查发现O型密封圈在低温下失效是直接原因，NASA的组织文化和决策失误受到严厉批评。",
      en: "On January 28, 1986, the Space Shuttle Challenger broke apart 73 seconds after launch, killing all 7 crew members including teacher Christa McAuliffe. Millions watched the tragedy on live TV. The investigation found O-ring seal failure in cold weather was the direct cause, and NASA's organizational culture and decision-making were severely criticized."
    },
    unpredictability: 8,
    impact: 5,
    retrospectiveExplainability: 9,
    wikiLink: "https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster"
  },
  {
    id: 93,
    category: "national",
    year: 1947,
    title: { zh: "印巴分治", en: "Partition of India" },
    description: {
      zh: "1947年英国撤离印度时，将南亚次大陆仓促分割为印度和巴基斯坦两个国家，引发了人类历史上最大规模的人口迁徙——约1500万人流离失所，100-200万人在宗教冲突中丧生。这一分治的遗产至今仍影响着南亚地缘政治。",
      en: "When Britain withdrew from India in 1947, the hasty partition of the subcontinent into India and Pakistan triggered the largest mass migration in human history — about 15 million displaced and 1-2 million killed in religious violence. The partition's legacy continues to shape South Asian geopolitics to this day."
    },
    unpredictability: 6,
    impact: 10,
    retrospectiveExplainability: 8,
    wikiLink: "https://en.wikipedia.org/wiki/Partition_of_India"
  },
  {
    id: 94,
    category: "national",
    year: 1965,
    title: { zh: "印尼九三零事件", en: "Indonesian Mass Killings of 1965-66" },
    description: {
      zh: "1965年9月30日政变未遂后，印尼军方在苏哈托领导下发动了针对共产党及其同情者的大规模屠杀，估计50万至100万人遇难。这场清洗彻底改变了印尼的政治走向，苏哈托由此建立了长达32年的威权统治。",
      en: "After a failed coup on September 30, 1965, the Indonesian military under Suharto launched mass killings targeting communists and sympathizers, with an estimated 500,000 to 1 million killed. This purge fundamentally altered Indonesia's political trajectory, with Suharto establishing 32 years of authoritarian rule."
    },
    unpredictability: 7,
    impact: 9,
    retrospectiveExplainability: 7,
    wikiLink: "https://en.wikipedia.org/wiki/Indonesian_mass_killings_of_1965%E2%80%9366"
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
    zh: "事件对现实世界造成了巨大的结构性变化——不是新闻声量的大小，而是对制度、行业、国界、生活方式产生了多大程度的持久改变。",
    en: "The event causes massive structural change in the real world — not measured by media attention, but by the lasting transformation of systems, industries, borders, and how people live."
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
    zh: "每个事件按1-10分评分。综合评分 = 不可预测性 + 影响力 + 事后可解释性（满分30分）。注意：影响力衡量的是对现实世界造成的结构性变化，而非新闻声量或情感冲击。例如，名人去世新闻声量巨大但对世界结构几乎没有改变，评分较低；而青霉素的发现挽救了数十亿生命，评分为满分。",
    en: "Each event is scored 1-10 per dimension. Total = Unpredictability + Impact + Explainability (max 30). Note: Impact measures real-world structural change, not media attention or emotional shock. For example, a celebrity death may dominate headlines but changes little structurally (low score), while penicillin's discovery saved billions of lives (score: 10)."
  },
  footer: {
    zh: "基于塔勒布黑天鹅理论 | 仅供教育参考 | 数据来源：维基百科、Polymarket、Metaculus、Manifold Markets、Saxo Bank 等",
    en: "Based on Taleb's Black Swan Theory | For educational reference only | Sources: Wikipedia, Polymarket, Metaculus, Manifold Markets, Saxo Bank"
  },
  rank: { zh: "排名", en: "Rank" },
  event: { zh: "事件", en: "Event" },
  score: { zh: "评分", en: "Score" },
  sortBy: { zh: "排序", en: "Sort" },
  sortYearDesc: { zh: "年份 新→旧", en: "Year: Newest First" },
  sortYearAsc: { zh: "年份 旧→新", en: "Year: Oldest First" },
  sortScoreDesc: { zh: "综合评分 高→低", en: "Score: High to Low" },
  sortUnpredDesc: { zh: "不可预测性 高→低", en: "Unpredictability: High to Low" },
  sortImpactDesc: { zh: "影响力 高→低", en: "Impact: High to Low" },
  yearRange: { zh: "时代", en: "Era" },
  eraAll: { zh: "全部时代", en: "All Eras" },
  eraAncient: { zh: "1900年以前", en: "Before 1900" },
  era1900: { zh: "1900-1949", en: "1900-1949" },
  era1950: { zh: "1950-1999", en: "1950-1999" },
  era2000: { zh: "2000-2009", en: "2000-2009" },
  era2010: { zh: "2010-2019", en: "2010-2019" },
  era2020: { zh: "2020年代", en: "2020s" },
  eventCountText: { zh: "共 {n} 个事件", en: "{n} events" }
};
