/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { School, Course, ChecklistItem, Tutor } from './types';

export const INITIAL_SCHOOLS: School[] = [
  {
    id: 'st-paul',
    name: '聖●●幼稚園',
    englishName: "St. Paul's Kindergarten (St. P●●l)",
    district: '銅鑼灣',
    type: '傳統名校 | 頂級設施',
    features: ['傳統背景', '頂級設施', '直升女校'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cysIQ1MfACuFgrHiPIPR3rtLDdERRtsFWpgY55zFx4mteb6Vdn9YqjVzMwKX4EVMJ2ESBsEpzvyPTB5n7Z2ZQLe3YRQ_-etDOhrVwAaVh_SCw6hU3VjaZFaWHsct-nc7vG077dEwcF_YEVlzsfFGHP5kHtu7VxcMjMSTYW3YGsR_86mcUsMtILRT3vJ4abbA2rlH_C_DLEYnQlYr2mhMjHd7qDc4GsFCRe2GnkdG9enJu8krzxhFlZ0GAm9nPZ1OvAIb-Rkl5sK8',
    isHot: true,
    intro: '聖●●幼稚園以深厚的歷史底蘊、優良的學風，以及頂級的校園設施設備著著稱，致力於培養學童的品格發展與學術潛力，是香港家長極其嚮往的傳統名校。',
    pastPaperCount: '150+',
    interviewProcess: '首輪通常為小組遊戲觀察，評估學童的社交合作能力、自主性與大肌肉活動；次輪為個別家庭面談，與校長及資深主任直接交流教育理念。',
    interviewerPreferences: '極其看重家校合作精神與育兒觀點的一致性，期望家長對學校教育體系有深度認同，學童展現自然、有禮的家庭教養。'
  },
  {
    id: 'dbs',
    name: '拔萃●●●附屬小學/幼稚園',
    englishName: "Diocesan Boys' School Primary Division / Kindergarten (D●S)",
    district: '旺角',
    type: '男校首選 | 升小直升',
    features: ['男校首選', '直升男拔', '英語環境', '學術頂尖'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgoSXPTxPVcfXgOCh7GxiVLG72PS_fl_VUqneG5lusiRoNZFZk2r3C7iJxyWjigVX2XjarNBzzhiQBYw6qNmSFYXG1T3OvSYHEtjSceTXQsXCmCg-i2UF-6rkKmYLeyfFxQrcY9C4XZ5_J3EPQ0S1NxhHlXA8oSCKSO3PYlToY-kE0wwawxYaK9NosFFLmmicgjLo52CAaNXfzEpXK1MUezibC8J0siCE7N07K2HGlHNNiR25kipn10lLR5Nvbeskh4NOHprVgJrbp',
    isHot: true,
    intro: '作為香港最具聲望的男子學校之一，拔萃●●●附屬部為男孩提供多元、具有挑戰性的學習環境，著重體育、音樂及學術全面卓越，是直升男拔的頂級途徑。',
    pastPaperCount: '200+',
    interviewProcess: '一對一獨立觀察及小技巧測試（如拼圖、圖形辨識、聽從指令、日常生活基本自理能力問答），隨後與家長進行綜合面談。',
    interviewerPreferences: '青睞思維敏捷、充滿好奇心、熱愛探索且不怕犯錯的男孩。非常注重家長是否能提供平衡且不緊繃的啟發式家庭成長氛圍。'
  },
  {
    id: 'victoria',
    name: '維多●●國際幼稚園',
    englishName: 'Victoria International Kindergarten (V●ctoria)',
    district: '香港/九龍',
    type: '雙語教學 | 熱門直升',
    features: ['雙語卓越', 'IB探究型', '多元文化', '熱門直升'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '維多●●國際幼稚園推行全球認可的 IB 課程體系，高質量的兩文三語環境及高比例的探究式自主學習，深受重視國際性教學理念的家庭喜愛。',
    pastPaperCount: '120+',
    interviewProcess: '外籍與普通話教師進行小組故事分享，觀察學童的主動反饋、提問意願、表達能力與手眼協調度，並安排家長面談探討輔助學習方式。',
    interviewerPreferences: '偏好樂於溝通、英文/中文口語流暢且有濃厚合作意願的家庭。重視家長對自主學習與非死記硬背教育模式的積極認同。'
  },
  {
    id: 'hkis',
    name: '香港●●學校 (HK●S)',
    englishName: 'Hong Kong International School (HK●S)',
    district: '大潭',
    type: '美式教育 | 國際視野',
    features: ['美式教學', '國際思維', '寬廣校園', '全英語'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-eKpuuuvGDecI0e51xfARVn9VW8YlYR1DtY5Ltb0OZnx1tAmqkw-SQ0hs7jizoJsZSd41rXeMZq1rcVO8bxcDOdFu9hfjIF88kziAVnG5fXENq6BI9QB0gZVECIbrGvaDUzG0ZAfTxsVmIkDO1fKDLqD2u9FkT7pYCFwOPNaoMOkQ2wMHTj3hLop__HFme32T0-yGu8FoAXmb_ZcFKO8t5kjDfC2mDblhM7m6RAEy-HRA--sZVgLSiokMDY3Ax8SVRc5CruCUQb0o',
    intro: '座落於大潭的香港●●學校 (HK●S)提供純美式頂尖教育體系，頂尖配置的校園及前瞻性的探究學習環境，為孩子搭建通往歐美頂尖高中的世界級橋樑。',
    pastPaperCount: '80+',
    interviewProcess: '全英語情境互動：孩子在活動角進行自主遊戲，評估專家在一旁默默觀察其專注力、溝通意願與同理心。隨後是家長的全英文面見。',
    interviewerPreferences: '十分看重孩子的獨立自主性、創意展現以及英語母語般的流利程度。家長需要展現對國際社群參與 and 奉獻的熱忱。'
  },
  {
    id: 'st-stephen',
    name: '聖士●●書院附屬幼稚園',
    englishName: "St. Stephen's College Preparatory School (St. St●ph●n)",
    district: '赤柱',
    type: '傳統名校 | 寄宿優勢',
    features: ['傳統典範', '寄宿優越', '環境大氣', '升小配套'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '聖士●●書院附屬學府以其優美的赤柱校園、嚴謹的學習氛圍及全方位的寄宿體驗著稱。注重知書識禮與團隊協作，完美傳承全面發展的優秀品質。',
    pastPaperCount: '110+',
    interviewProcess: '小組合作任務（如共同拼砌大塊積木或聽故事回答問題），以此考驗孩子的耐性、秩序感、聽指令能力，以及是否有禮讓同伴的心。',
    interviewerPreferences: '賞識自信端莊、懂規矩及自理能力強的孩子。家庭方面，看重誠信、樸素家風，以及對學校全人教育路線的高度支持。'
  },
  {
    id: 'lasalle',
    name: '喇●小學/幼稚園',
    englishName: "La Salle Primary School (L● S●lle)",
    district: '九龍城',
    type: '男校首選 | 升小直升',
    features: ['傳統背景', '直升喇沙', '英語卓越', '全面發展'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgoSXPTxPVcfXgOCh7GxiVLG72PS_fl_VUqneG5lusiRoNZFZk2r3C7iJxyWjigVX2XjarNBzzhiQBYw6qNmSFYXG1T3OvSYHEtjSceTXQsXCmCg-i2UF-6rkKmYLeyfFxQrcY9C4XZ5_J3EPQ0S1NxhHlXA8oSCKSO3PYlToY-kE0wwawxYaK9NosFFLmmicgjLo50CAaNXfzEpXK1MUezibC8J0siCE7N07K2HGlHNNiR25kipn10lLR5Nvbeskh4NOHprVgJrbp',
    intro: '喇●小學以其高素質的傳統教學和全面發展體育、學術而知名，旨在培育全方位的棟樑之材，直升名校喇沙書院。',
    pastPaperCount: '90+',
    interviewProcess: '拼砌模型或日常小手工，回答基本的兩文三語簡單提問，以此觀察學童表達和反應速度。',
    interviewerPreferences: '看重具有良好禮儀、口齒清晰、勇於探索並熱心參與課外和運動的男孩子。'
  },
  {
    id: 'dgs',
    name: '拔萃●●女小學/幼稚園',
    englishName: "Diocesan Girls' Junior School (D●S)",
    district: '佐敦',
    type: '女校首選 | 直升拔萃女',
    features: ['女校首選', '卓越學術', '頂尖藝術', '全能女傑'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cysIQ1MfACuFgrHiPIPR3rtLDdERRtsFWpgY55zFx4mteb6Vdn9YqjVzMwKX4EVMJ2ESBsEpzvyPTB5n7Z2ZQLe3YRQ_-etDOhrVwAaVh_SCw6hU3VjaZFaWHsct-nc7vG077dEwcF_YEVlzsfFGHP5kHtu7VxcMjMSTYW3YGsR_86mcUsMtILRT3vJ4abbA2rlH_C_DLEYnQlYr2mhMjHd7qDc4GsFCRe2GnkdG9enJu8krzxhFlZ0GAm9nPZ1OvAIb-Rkl5sK8',
    intro: '全港神級女校，致力提供無與倫比的學術、鋼琴樂理與中英雙語特調訓練，是培育全港領袖女英才的最熱搖籃。',
    pastPaperCount: '180+',
    interviewProcess: '一對一常規認讀與情景故事聯想，小組遊戲內進行角色分工合作，隨後家長晤談。',
    interviewerPreferences: '偏愛落落大方、談吐流利、自信且有獨特學科特長或藝術修養的女學童，家長須展示頂級的培育責任感。'
  },
  {
    id: 'spcc',
    name: '聖保羅●●小學/幼稚園',
    englishName: "St. Paul's Co-educational College Primary School",
    district: '黃竹坑',
    type: '神級男女校 | 一條龍直升',
    features: ['一條龍', '頂尖學術', '思維考察', '全人領袖'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '全港家長推崇的神級男女校，學術考核與邏輯思維並重，是全港狀元輩出的傳統一條龍精英培育核心。',
    pastPaperCount: '210+',
    interviewProcess: '首輪為幼兒生活自理與邏輯圖形解構，次輪為高難度學術提問及校長全家面見。',
    interviewerPreferences: '極其欣賞邏輯清晰、應對生動、學術基礎極佳的學童，以及深諳當代前沿家庭教育理念的卓越家長。'
  },
  {
    id: 'heep-yunn',
    name: '協●小學/幼稚園',
    englishName: "Heep Yunn School Private Section / Kindergarten",
    district: '土瓜灣',
    type: '淑女搖籃 | 全能發展',
    features: ['傳統女校', '中英雙語', '體藝卓越', '熱門推薦'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cysIQ1MfACuFgrHiPIPR3rtLDdERRtsFWpgY55zFx4mteb6Vdn9YqjVzMwKX4EVMJ2ESBsEpzvyPTB5n7Z2ZQLe3YRQ_-etDOhrVwAaVh_SCw6hU3VjaZFaWHsct-nc7vG077dEwcF_YEVlzsfFGHP5kHtu7VxcMjMSTYW3YGsR_86mcUsMtILRT3vJ4abbA2rlH_C_DLEYnQlYr2mhMjHd7qDc4GsFCRe2GnkdG9enJu8krzxhFlZ0GAm9nPZ1OvAIb-Rkl5sK8',
    intro: '培育氣質端莊、知書識禮的淑女名校。著重發掘學童的體育、音樂及美學潛能，為直升名牌女校奠定堅實基建。',
    pastPaperCount: '130+',
    interviewProcess: '模擬餐桌或禮儀互動，拼插積木遊戲中隨機觀察抗挫折力，最後由主任面談。',
    interviewerPreferences: '重視孩子的合群性格、謙遜態度與語言領悟力。家長需支持全能特長發展的培育戰略。'
  },
  {
    id: 'ying-wa',
    name: '英●小學/幼稚園',
    englishName: "Ying Wa Primary School (Y●ng W●)",
    district: '深水埗',
    type: '男校典範 | 多元探索',
    features: ['男校經典', 'STEM領先', '歷史悠久', '陽光男孩'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgoSXPTxPVcfXgOCh7GxiVLG72PS_fl_VUqneG5lusiRoNZFZk2r3C7iJxyWjigVX2XjarNBzzhiQBYw6qNmSFYXG1T3OvSYHEtjSceTXQsXCmCg-i2UF-6rkKmYLeyfFxQrcY9C4XZ5_J3EPQ0S1NxhHlXA8oSCKSO3PYlToY-kE0wwawxYaK9NosFFLmmicgjLo52CAaNXfzEpXK1MUezibC8J0siCE7N07K2HGlHNNiR25kipn10lLR5Nvbeskh4NOHprVgJrbp',
    intro: '英●有著極其深厚的歷史底蘊。推崇科學探索與動手實戰（STEM），致力培養陽光自信、善於溝通、富同理心的優秀男童。',
    pastPaperCount: '140+',
    interviewProcess: '首輪小組協同探索實驗或積木搭建，次輪獨立故事複述常識問答，包含校長親子同聊。',
    interviewerPreferences: '青睞求知欲旺盛、不怕失敗、能大方配合群體紀律的陽光男孩。家長宜展示高能量的陪伴實態。'
  },
  {
    id: 'shcc',
    name: '嘉諾撒●●學校/幼稚園',
    englishName: "Sacred Heart Canossian School Private Section",
    district: '半山',
    type: '天主教天后 | 升中極優',
    features: ['半山名校', '良好德育', '直升女校', '傳統底蘊'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '位於半山的頂級天主教女校，以端正崇高的淑女德育、踏實深厚的常規學科根基，以及穩健的直升中學配套著稱。',
    pastPaperCount: '120+',
    interviewProcess: '小組講述繪本繪畫、兩文三語音律模仿，考察學童基本的生活秩序與傾聽習慣。',
    interviewerPreferences: '注重女童的修養禮貌、同理心及是否專注認真。重視家長對天主教辦學信條的尊重。'
  },
  {
    id: 'maryknoll',
    name: '瑪利●修院學校/幼稚園',
    englishName: "Maryknoll Convent School (M●ryknoll)",
    district: '九龍塘',
    type: '紅磚傳奇 | 英語高雅',
    features: ['全英授課', '氣質典雅', '悠久紅磚', '直升中學'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cysIQ1MfACuFgrHiPIPR3rtLDdERRtsFWpgY55zFx4mteb6Vdn9YqjVzMwKX4EVMJ2ESBsEpzvyPTB5n7Z2ZQLe3YRQ_-etDOhrVwAaVh_SCw6hU3VjaZFaWHsct-nc7vG077dEwcF_YEVlzsfFGHP5kHtu7VxcMjMSTYW3YGsR_86mcUsMtILRT3vJ4abbA2rlH_C_DLEYnQlYr2mhMjHd7qDc4GsFCRe2GnkdG9enJu8krzxhFlZ0GAm9nPZ1OvAIb-Rkl5sK8',
    intro: '以九龍塘經典紅磚校園馳名，提供高雅的全英語學習方案，培育在各行各業中具備卓越思維與同理心的一代淑女。',
    pastPaperCount: '160+',
    interviewProcess: '全英語及雙語遊戲互動、物件對比與拼圖，隨機詢問孩子在日常場景的表達和情緒流露。',
    interviewerPreferences: '青睞自信大方、思維富創造力且英文表達能力極佳的女童。家庭需有開明、平等的教育風格。'
  },
  {
    id: 'tsl',
    name: '保良局●●●小學/幼稚園',
    englishName: "PLK Camões Tan Siu Lin Primary School",
    district: '油尖旺',
    type: '直資名牌 | 多語系發展',
    features: ['高性價比', '多語教學', 'STEM先進', '強勢直資'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '極具口碑的頂尖直資學校，以開設多種第三外國語（法/西/日）及卓著的英文和數理基礎、豐富的活動配套吸引全港報考。',
    pastPaperCount: '190+',
    interviewProcess: '多輪拼圖、中英文圖書配對問答、電腦常識遊戲與動態大肌肉群體操，評估綜合硬實力。',
    interviewerPreferences: '青睞硬核學科底子好、表達敏捷流暢、適應極快且有多元文化包容度的學童，家長需支持多元活動課。'
  },
  {
    id: 'kau-yan',
    name: '救●學校/幼稚園',
    englishName: "Kau Yan School (K●u Y●n)",
    district: '港島西',
    type: '愉快學習 | 動手實踐',
    features: ['全人關愛', '科研探究', '高性價比', '口碑極佳'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '救●以愉快中富學術深度的探索課表而聞名，營造家一般的關愛 and 信任氛圍，是近年全港家長點名推介的熱門之選。',
    pastPaperCount: '100+',
    interviewProcess: '情景繪本對話、日常生活習慣分享、同儕協作砌圖，考驗基本社交、語言及愛心。',
    interviewerPreferences: '鍾情於性格開朗、擁有優良思考和表達習慣、大方有同理心的孩子，家長需實踐溫和有愛的家庭教育。'
  },
  {
    id: 'creative',
    name: '啟●小學/幼稚園',
    englishName: "Creative Primary School & Kindergarten",
    district: '九龍塘',
    type: '探究雙語 | 藝術豐富',
    features: ['雙語並重', '文藝薰陶', '全人關懷', '一條龍'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '全港歷史悠久的探究型小學，將藝術修養與兩文三語完美融合，全方位挖掘並呵護每一個幼兒獨一無二的長處。',
    pastPaperCount: '110+',
    interviewProcess: '小組聽讀引導與童畫創作分享，評估學童的靈活巧手和表達自信，隨後進行家長諮商。',
    interviewerPreferences: '偏愛具有優良創造力、個性活潑、大膽嘗試新事物的學童。家庭重視親自陪伴與日常美學熏陶。'
  },
  {
    id: 'good-hope',
    name: '德●學校/幼稚園',
    englishName: "Good Hope Primary School (G●●d H●p●)",
    district: '牛池灣',
    type: '卓越女校 | 英語頂尖',
    features: ['英語頂級', '氣質高雅', '藝術雄厚', '升小配套'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '以深厚的英語辦學實力和頂尖的音樂、合唱特長馳名的天主教神級女校，重在養成富有愛心、兼具領導才能的新世代淑女。',
    pastPaperCount: '140+',
    interviewProcess: '小組音樂律動與繪本日語/中英發音模仿，配以生活常見常識和禮數的小問答及家長面考。',
    interviewerPreferences: '十分看重學童是否具備純真禮貌、專注聆聽能力與豐富的雙語語感。家長需支持積極自信型教育。'
  },
  {
    id: 'pui-ching',
    name: '培●小學/幼稚園',
    englishName: "Pui Ching Primary School / Kindergarten",
    district: '九龍城',
    type: '百年傳統 | 母語科學卓越',
    features: ['百年名校', '超強合唱', '直升中學', '校友凝聚'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgoSXPTxPVcfXgOCh7GxiVLG72PS_fl_VUqneG5lusiRoNZFZk2r3C7iJxyWjigVX2XjarNBzzhiQBYw6qNmSFYXG1T3OvSYHEtjSceTXQsXCmCg-i2UF-6rkKmYLeyfFxQrcY9C4XZ5_J3EPQ0S1NxhHlXA8oSCKSO3PYlToY-kE0wwawxYaK9NosFFLmmicgjLo52CAaNXfzEpXK1MUezibC8J0siCE7N07K2HGlHNNiR25kipn10lLR5Nvbeskh4NOHprVgJrbp',
    intro: '紅藍精神代代相傳之百年傳統名校。在中文教育和理科、奧數啟蒙領域傲視全港，校友社群關係網絡堅實，一條龍升學穩妥。',
    pastPaperCount: '170+',
    interviewProcess: '一對一中文故事及圖案因果聯繫提問，玩滑梯大肌肉常規觀察，家庭面見重在了解親職陪伴。',
    interviewerPreferences: '重視學童的中文口頭邏輯、動手自理力。家長需要展現對百年紅藍文化及校方辦學細節的真心契合。'
  },
  {
    id: 'st-joseph',
    name: '聖若●小學/幼稚園',
    englishName: "St. Joseph's Primary School (St. J●s●ph)",
    district: '灣仔',
    type: '港島男校 | 歷史優良',
    features: ['紳士底蘊', '體藝非凡', '升小直升', '灣仔核心'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '位於灣仔核心的天主教傳統男校，致力於將活潑好動的小男孩，培育為知書達禮、熱愛體能、敢於拼搏的優雅紳士。',
    pastPaperCount: '110+',
    interviewProcess: '一對一英文與廣東語物件功能提問，以及與其他男童進行合作小拼圖等秩序測試，隨後親子小晤。',
    interviewerPreferences: '賞識活潑爽朗、能大方接受指令並具有良好抗挫折和合群底線的男童。'
  },
  {
    id: 'spc-primary',
    name: '聖保羅●●小學/幼稚園',
    englishName: "St. Paul's Primary School (St. P●●l)",
    district: '跑馬地',
    type: '傳統女校 | 德育模範',
    features: ['女校首選', '直升聖保羅', '德性端淑', '跑馬地'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cysIQ1MfACuFgrHiPIPR3rtLDdERRtsFWpgY55zFx4mteb6Vdn9YqjVzMwKX4EVMJ2ESBsEpzvyPTB5n7Z2ZQLe3YRQ_-etDOhrVwAaVh_SCw6hU3VjaZFaWHsct-nc7vG077dEwcF_YEVlzsfFGHP5kHtu7VxcMjMSTYW3YGsR_86mcUsMtILRT3vJ4abbA2rlH_C_DLEYnQlYr2mhMjHd7qDc4GsFCRe2GnkdG9enJu8krzxhFlZ0GAm9nPZ1OvAIb-Rkl5sK8',
    intro: '深得家長信賴的跑馬地傳統女校。完美承襲修院作風，強調純良德智體群開發及氣質沈澱，直升系統穩若磐石。',
    pastPaperCount: '120+',
    interviewProcess: '小組手工剪紙或撕紙貼畫、常識看圖問答，評估女童手指靈活性、禮貌應答與安靜守序程度。',
    interviewerPreferences: '看重女童純樸真誠的教養、對長輩有禮貌、不嬌氣。家教需體現實踐低調內斂作風。'
  },
  {
    id: 'true-light',
    name: '真●小學/幼稚園',
    englishName: "True Light Middle School of HK Primary / Kindergarten",
    district: '灣仔/大坑',
    type: '百年傳奇 | 雙語氣質',
    features: ['百年藍袍', '中英文強', '品學兼優', '直升女中'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cysIQ1MfACuFgrHiPIPR3rtLDdERRtsFWpgY55zFx4mteb6Vdn9YqjVzMwKX4EVMJ2ESBsEpzvyPTB5n7Z2ZQLe3YRQ_-etDOhrVwAaVh_SCw6hU3VjaZFaWHsct-nc7vG077dEwcF_YEVlzsfFGHP5kHtu7VxcMjMSTYW3YGsR_86mcUsMtILRT3vJ4abbA2rlH_C_DLEYnQlYr2mhMjHd7qDc4GsFCRe2GnkdG9enJu8krzxhFlZ0GAm9nPZ1OvAIb-Rkl5sK8',
    intro: '「真光」百年經典校園，象徵高雅與智慧。通過平衡紮實的語文及數理啟發，栽培出無數知性端正、熱愛真理的卓越高徒。',
    pastPaperCount: '110+',
    interviewProcess: '中英文故事演練及角色扮演，看配對大卡並說出兩者的相同與不同，以此觀測高階邏輯思維與雙語轉換。',
    interviewerPreferences: '鍾情於回答完整、發音字字千金、眼神專注且沉穩懂常理的孩子。'
  },
  {
    id: 'rosaryhill',
    name: '玫●崗學校/幼稚園',
    englishName: "Rosaryhill School (R●s●ryh●ll)",
    district: '司徒拔道',
    type: '國際雙語 | 西式探索',
    features: ['司徒拔道', '多元英語', '天主教作風', '愉快環境'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '景色秀美的半山大氣校園，為學童配備豐富的中英文社交實戰，培養兼修信仰之美的世界級小公民。',
    pastPaperCount: '90+',
    interviewProcess: '動態遊戲室自由活動，探測協作分工與玩具用後歸位細節，輔以家庭日常起居問答。',
    interviewerPreferences: '偏愛活潑爽直、能大方分享教具、英語流利的學童。家校合作期望高，家長宜展露極高的親近感。'
  },
  {
    id: 'isf',
    name: '弘●書院/幼稚園',
    englishName: "The ISF Academy (ISF)",
    district: '薄扶林',
    type: '頂級雙語 | 弘立IB探究',
    features: ['百萬提名', '頂級設施', '雙語探究', '學術狂飆'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '香港頂尖的昂貴私校，提供高階的雙語（普通話及英語）雙向教學。融入中國文化「八德十二智」，對接世界一流IB體系。',
    pastPaperCount: '150+',
    interviewProcess: '全普通話遊戲大課與全英文拼圖，高頻考察幼兒快速切換思維媒介 and 回應雙語指令的能力，有深度的家長高管面試。',
    interviewerPreferences: '要求學童在中英雙語上有極強的口才和邏輯支撐。家長需能深度認同雙文化教育戰略底蘊。'
  },
  {
    id: 'yew-chung',
    name: '耀●國際學校/幼稚園',
    englishName: "Yew Chung International School (YC●S)",
    district: '九龍塘',
    type: '國際神校 | 雙校長制',
    features: ['九龍塘', '雙校長制', '生活化英語', 'IB直升'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '首創中外雙校長協同管理機制，致力培養熟稔兩文三語及多元宇宙跨文化交往能力的精英國際化學童，一條龍至高中IB。',
    pastPaperCount: '100+',
    interviewProcess: '在佈置溫和的教室與中外籍教師進行生活情境故事演練、拼裝玩具，多重感官考察。',
    interviewerPreferences: '期待孩子在英文及中文上均具備自然的自薦能力，家教融洽、願意投身多元社群探索合作。'
  },
  {
    id: 'cais',
    name: '宣●國際學校/幼稚園',
    englishName: "Christian Alliance International School (CA●S)",
    district: '荔枝角',
    type: '基督教名校 | 加拿大課程',
    features: ['良好氣氛', '加拿大體系', '荔枝角校區', '英語優越'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '宣●國際學校提供備受好評的加拿大（亞伯達省）高階核心課程。融入真切關愛與聖經智慧，為香港孩子鋪墊優雅寬廣的留學大道。',
    pastPaperCount: '80+',
    interviewProcess: '全英語情景看圖說故事、小組大肢體協作，並評估對外籍口音的理解與接納。',
    interviewerPreferences: '期待孩子具有謙遜真誠、主動和樂與人交、高英語回應率。家長亦需深度認可基督教全德育價值。'
  },
  {
    id: 'harrow',
    name: '哈●香港國際學校',
    englishName: "Harrow International School Hong Kong",
    district: '屯門',
    type: '英式傳奇 | 首相搖籃',
    features: ['首相搖籃', '屯門貴族', '全英授課', '氣勢不凡'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '香港首屈一指的英式貴族私立寄宿學校，傳習英式頂尖「領袖特質」教育，在優美的屯門城堡式校園環境提供世界級英美高校預備班。',
    pastPaperCount: '130+',
    interviewProcess: '考官帶領小組進行主題式探索，如「我們的超級森林」，觀察其英語領導力、協調度與自信講述，隨後是嚴苛的面見。',
    interviewerPreferences: '尋找有膽識口才、英文純正、善於表達獨特創見和具備小領袖風範的孩子。'
  },
  {
    id: 'kellett',
    name: '啟●學校/幼稚園',
    englishName: "Kellett School (The British International School)",
    district: '薄扶林/九龍灣',
    type: '正統英式 | 家長運營',
    features: ['家長運營', '薄扶林校園', '原汁原味', '高比例直升'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '由英國僑民社群一手締造的正統英式學校，沿襲原汁原味的英國國家課標（EYFS），培育思想獨立、富有修養的小紳士。',
    pastPaperCount: '70+',
    interviewProcess: '英文故事繪本朗讀與簡單的算術概念與形狀配對，觀察與考官對視、社交反饋及英文字根拼讀敏捷度。',
    interviewerPreferences: '重視孩子的天然英語表達能力、合群端正的姿態。家長需能高度參與學校的家長互助圈和義工。'
  },
  {
    id: 'sjs',
    name: '啓●/英基小學/幼稚園',
    englishName: "ESF Sha Tin Junior School / Kindergartens",
    district: '新界/沙田',
    type: '英基最大網絡 | 愉快IB',
    features: ['英基核心', '愉快IB', '高直升率', '多元教案'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '英基學校協會（ESF）最大規模的幼兒、小學一體化網路之一。實行高保真 IB 探究課表，崇尚在玩耍和體驗中極大發掘好奇心。',
    pastPaperCount: '110+',
    interviewProcess: '探究角落自行尋寶拼圖、日常生活實踐口語演講，專家在一旁對其主動性、溝通接納度做出多維打分。',
    interviewerPreferences: '尋求活潑、肯分享、有大膽英文交際基礎、熱愛與外國面談官對視發散思維的孩子。'
  },
  {
    id: 'singapore',
    name: '新加●國際學校/幼稚園',
    englishName: "Singapore International School (Hong Kong)",
    district: '黃竹坑',
    type: '新式數理 | 硬核高分',
    features: ['黃竹坑', '超強數理', '新加坡體系', '學術狂魔'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '以嚴謹、紮實的新加坡學術架構著稱。其奧數、英文邏輯拼寫及基礎中文讀寫，在全港國際化社群中享有高度硬核盛譽。',
    pastPaperCount: '150+',
    interviewProcess: '英文與普通話常識口語問答、空間幾何圖形疊加拼圖演練、簡單聽力，以及家長面試。',
    interviewerPreferences: '看重孩子在幼齡階段展現出的小數理邏輯、專注思考定力、以及高強度規律性學術適應度。'
  },
  {
    id: 'vsa',
    name: '滬江●●●書院',
    englishName: "Victoria Shanghai Academy (VSA)",
    district: '深灣/黃竹坑',
    type: '一條龍IB私校 | 滬江背景',
    features: ['滬江維多', '全IB鏈', '一條龍', '普通話英語'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGwill-SQU1M1v4bZa8cWovVZCI2355Zy3F8c9PqGX6NorIzMoQyQ4lbWGaDstaCZ_N4OSgdXYun7ZAFEG2qIpcKdHCIcZkGppdxTklsjqgtNSzmctL-TvJX76nmT2f9g-6NefJQBBA_AywXAzuEbdiJn8olWFwRU9Of03IgcbSA8TfCaJ7PqhpZ3Z6HvHztjdWVXJoFZH6uY6EVoQE4xD7eVmUEIlPZ0McCkepYSXxaE3sPOU8BHVJKBWPBmIeuac8iMMId9rgwO',
    intro: '滬資背景和維多利亞教育機構底蘊之強強聯手。提供貫流小學、中學及大學預科之完整高標準 IB 學習與高分狀元方案。',
    pastPaperCount: '130+',
    interviewProcess: '普通話與全英文小組伴讀、小火車排隊和分發積木，外加考量家庭對探究式雙語學術戰略的支持。',
    interviewerPreferences: '要求學童具備極佳的普通話和英文雙語對白技巧，不怯場、樂於大方與人主動交往。'
  },
  {
    id: 'cdnis',
    name: '加拿大●●學校/幼稚園',
    englishName: "Canadian International School of Hong Kong",
    district: '深灣',
    type: '全能IB | 多元體藝',
    features: ['港島深灣', '全能IB', '氣候宜人', '海外知名'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxRsqy_CC6a8cxycgKZvKwAUgWmb3nXQg2Wr_iawtHWpUHkObnAvXuO9S3ckP9dEkgL5IS9IF0-1LAnkqhiJ2lfIe-o0KeoZxOIWQ_93wXSjWSqMkAE23uUI0u_enTa8pJuCZoHgwZmZ7_01sS8MnhuGFY48GXBIoGZ2lARB7FkYHOqKrPvducA58GtMhgEkmK2OmfZpw8tUABo1GIXGGEhmbfK2UWXM9kU7SKSo8kNRpLTfZ9VScwIcptmcKhLpZ-quNCU3fBXRq',
    intro: '香港頂尖的加拿大體系並行 IB 課程名校。校風開朗包容，在深灣宏大校區內兼顧體育、音樂、藝術及頂尖理工科發展。',
    pastPaperCount: '120+',
    interviewProcess: '全英語情景模擬，外籍教師和學童一起搭小火車、唱歌律動、辨識顏色 and 數字。家長需用英文深度交流理念。',
    interviewerPreferences: '欣賞性格慷慨大氣、願意在小組中樂觀合作、並具備自然英文問答基礎的孩子。'
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-1',
    title: '套餐 1：名校歷年真題全庫',
    subtitle: '歷年 Past Paper 真題精選',
    price: 6399,
    originalPrice: 9699,
    description: '全港名校題目全庫，每日更新。包含 100+ 名校歷年 Past Paper 真題，搭配專家精選答案及詳盡名師錄音指導。',
    iconName: 'auto_stories',
    tag: '熱門推薦',
    isHot: false,
    category: 'package',
    features: [
      '100+ 名校歷年全真試題',
      '名師錄音參考答案與思路點撥',
      '每日更新最新升學面試情報與方向',
      '隨時隨地在線刷題，離線可直接打印'
    ],
    longDescription: '這是專為面試備考家庭準備的真題核心庫。收錄了包含聖●●、拔萃●●●、維多●●等頂尖名校歷年真實題目的第一手還原資料，解決家長無題可練、不知深淺的備考痛點。',
    curriculumSteps: [
      { title: '獲取真題', englishTitle: 'Access Library', desc: '一鍵解鎖 100+ 名校數據庫' },
      { title: '精準演練', englishTitle: 'Daily Practice', desc: '按題型、難易度在線針對性刷題' }
    ],
    syllabus: [
      '第一模塊：語音與表達能力——自我介紹高分突破',
      '第二模塊：常規邏輯與圖形觀察——拼圖與規律推導',
      '第三模塊：指令理解與身體協調——小組社交指令模擬',
      '第四模塊：情商心智與反應——突發小狀況應對思考'
    ],
    testimonials: [
      { author: '林先生', school: '入讀 拔萃●●●附屬小學', rating: 5, text: '真題庫還原度極高，非常有用！考試當天剛好遇到了極其類似的圖形觀察題目，兒子完全不害怕，非常自信地完成了。感謝！' }
    ]
  },
  {
    id: 'course-2',
    title: '套餐 2：家長專屬面試攻略',
    subtitle: '家長面試全攻略',
    price: 1299,
    originalPrice: 2000,
    description: '200+ 名校校長真實提問庫。家長應對技巧及常見問題集。過往學員回饋當場命中，助您從容應對名校面試，掌握高分應對邏輯。',
    iconName: 'supervisor_account',
    tag: '攻略入門',
    isHot: true,
    category: 'package',
    features: [
      '200+ 名校校長面試高頻真實提問',
      '育兒理念、家校合作完美作答技巧',
      '名師視頻示範——掌握最完美的儀態與儀表',
      '突發哭鬧等高難度現場狀況一鍵應對指南',
      '限時贈送 1 對 1 專家潤色草稿機會一次'
    ],
    longDescription: '很多家長以為面試只看小孩，其實名校校長更在乎家長！本攻略深度剖析家長面見環節，根據真實大數據將題目精準劃分為四大必考範疇，讓您做好正確的事，說對校長想聽的話。',
    curriculumSteps: [
      { title: '剖析範疇', englishTitle: 'Anatomy', desc: '熟悉四大範疇（育兒理念、報讀原因、突發處理、家事背景）' },
      { title: "高分Do's & Don'ts", englishTitle: "Do and Don't", desc: '掌握黃金語氣，規避致命扣分點' },
      { title: '名師指導視頻', englishTitle: 'Video Snaps', desc: '實戰模擬與真題示範' }
    ],
    syllabus: [
      '第一講：家庭教育的一致性——如何不矛盾地回答育兒分工',
      '第二講：為什麼看中我們學校——完美契合點的三大關鍵詞',
      '第三講：孩子突發哭鬧現場處理——如何展現超高家長情商',
      '第四講：Portfolio 製作精要與面試內容對齊攻略'
    ],
    testimonials: [
      { author: '陳太', school: '入讀 聖●●幼稚園', rating: 5, text: '原本我很擔心自己口才不好，攻略教的回答育兒理念例子非常落地。校長聽了直點頭，極力推薦各位必備！' },
      { author: 'Wong 媽媽', school: '入讀 M●ryk●oll 學校', rating: 5, text: '一站式的培訓省卻了家長很多煩惱。尤其是突發情境處理，讓平日工作繁忙的我們，也能事半功倍教好孩子。' }
    ]
  },
  {
    id: 'course-3',
    title: '套餐 3：N班/K1 幼兒全套衝名校課程',
    subtitle: 'N班/K1 Interview Mastery',
    price: 9999,
    originalPrice: 16000,
    description: '最強全包方案！包含 12堂頂級幼兒全套名校特訓、Past Paper 題庫、24堂名師錄製輔導、以及 1 對 1 履歷表 (Portfolio) 專家會診。',
    iconName: 'child_care',
    tag: '獨家皇牌',
    isHot: true,
    category: 'package',
    features: [
      '包含套餐 1 真題庫及套餐 2 攻略（價值 $7,698）全部內容',
      '24堂名師錄製幼兒思維與自理專項訓練課',
      '1對1專家親自診斷 Portfolio，提供客製化修飾意見',
      '獨家 2 堂跟進式一對一模擬面試及導師精準點評'
    ],
    longDescription: '這是最完整的名校入學解決方案。由前香港名校面試官與教務主任領銜打造，針對學童的言語、社交、秩序感進行360度訓練，免除家長東奔西跑找班的繁重壓力，升學率最高保障。',
    curriculumSteps: [
      { title: '地基建構', englishTitle: 'Foundation Building', desc: '專注表達、基本邏輯與單詞量養成' },
      { title: '場景實踐', englishTitle: 'Scenario Training', desc: '社交禮儀、小組遊戲分享規矩訓練' },
      { title: '抗壓挑戰', englishTitle: 'Simulated Stress', desc: '面對陌生面試官，保持高水準自信禮貌' },
      { title: '最終衝刺', englishTitle: 'Final Polish', desc: '一對一實戰點評，補足細節上的小缺陷' }
    ],
    syllabus: [
      '單元 1：自我介紹——如何大方得體介紹自己，贏得完美第一印象',
      '單元 2：色彩、圖形與動植物辨識——高壓自信作答思維訓練',
      '單元 3：故事理解與序列排列——鍛鍊因果邏輯與口齒流暢度',
      '單元 4：小組遊戲指令觀察——如何表現高社交情商與同理心'
    ],
    testimonials: [
      { author: '林太', school: '入讀 協恩●●幼稚園', rating: 5, text: '老師的細緻點評太讚了！一開始女兒很容易分心，上了幾節課後懂得如何直視老師說謝謝，真的進步極大！非常感恩！' }
    ]
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: '1', category: 'school', text: '閱讀目標學校的辦學宗旨與教育理念', checked: true },
  { id: '2', category: 'school', text: '查看目標學校近期舉辦的公開活動或簡介會', checked: true },
  { id: '3', category: 'school', text: '下載並打印各校歷年全真 Past Paper 題庫', checked: false },
  { id: '4', category: 'school', text: '準備並精簡 1-2 頁精緻 Portfolio（手冊說明）', checked: false },
  { id: '5', category: 'practice', text: '準備 1 分鐘大方得體、亮點突出的自我介紹', checked: true },
  { id: '6', category: 'practice', text: '與孩子模擬演練多語指令（拼圖與分發積木）', checked: false },
  { id: '7', category: 'practice', text: '練習各種突發情境問答（如答錯、哭鬧、搶玩具）', checked: false },
  { id: '8', category: 'practice', text: '錄影並回放練習片段，調整言行神情與小動作', checked: false },
  { id: '9', category: 'day-prep', text: '熨平及備好面試當日服裝（孩子斯文、家長端莊）', checked: false },
  { id: '10', category: 'day-prep', text: '二次檢查所有報名信、身份證明及文具文件', checked: false },
  { id: '11', category: 'day-prep', text: '提前規劃行車路線，預留至少 20 分鐘餘裕時間', checked: false }
];

export const TUTORS: Tutor[] = [
  {
    id: 't-1',
    name: '陳主任',
    title: '前港島區一線名校教學主任',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb5r7rpBDkKKVTtgsa9kKQ1FN5MZOQkQI8WPmR7kIAAMvzF7OViyVE99KsACFsrQYtleJi_HO_fBnPZDTRoJ-mTP3z70YmA7uDCbRHPh9mNGpmqDm_t2yDe0p9jsqdIFfCtq5yGkD8DkrnBH3vQ7RHQlSmrNL5P96z0XdDD9W-wIohH2_-EplgmQhqbLpuVk_10AO9R_uG63ot3CEBvBi68wKfAeW6as8QSCr5aHXtSMN6-7U_fwd_lwVN39iJOnvlxKL52nBXJ-Wg',
    tags: ['資深升學顧問', '15年+面試官背景', '廣東話諮詢']
  },
  {
    id: 't-2',
    name: '林顧問',
    title: '知名國際幼兒教育特級專家',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR_n8kYQeK7aWzegCsbFTwJKbdvgS3EysAvWSFrUhntTg89h289plwhLHSLvlfs0ri9nWR1rQXOOieEKI0wQRvVQASr-gegmriXoaFiAuJygcgfzfxL1WlTOJRPItANuzV6sj6RjFobDMjilFAbnjAniHff9l-ui2DbSA44Ev-4lHUcWJFgtG44cTv5JWZvFSwOsUj5LXQfF36TDIbCN7B740VFZR4J0y79Gj_xq3nZAJwZs_51NeUp0SyGS1nu7Ys_t6w01871GDg',
    tags: ['英語教學專家', '10年+升學輔導', '雙語溝通專家']
  }
];

export interface MockPastPaperQuestion {
  q: string;
  evaluation: string;
  tip: string;
}

export interface MockPastPaper {
  id: string;
  schoolId: string;
  schoolName: string;
  title: string;
  type: 'past-paper' | 'final';
  badge: string;
  year: string;
  recommendationRate: string;
  qCount: string;
  questions: MockPastPaperQuestion[];
}

export const MOCK_PAST_PAPERS: MockPastPaper[] = [
  {
    id: 'paper-stpaul',
    schoolId: 'st-paul',
    schoolName: '聖●●幼稚園',
    title: 'K1 首輪及次輪入學全真經典 Past Paper',
    type: 'past-paper',
    badge: '經典必考',
    year: '2025/2026',
    recommendationRate: '99%',
    qCount: '15 題全解',
    questions: [
      {
        q: '小組自由拼圖與日常生活用品辨識（首輪）',
        evaluation: '觀察學童是否能聽懂「請拿一排綠色積木給我」等含有兩重特徵的指令、以及玩完後是否主動整理卡片和積木。',
        tip: '家長可訓練孩子在家自我做「玩具歸位」並用雙手歸還給老師，不要全權幫孩子代勞。'
      },
      {
        q: '英文單詞卡翻牌配對遊戲（次輪）',
        evaluation: '評估孩子面對未知卡牌或不認得的詞時的眼神接觸、發音狀態與遇到挫折時的反應。',
        tip: '如讀錯音，引導孩子看著老師真誠地笑並說「Thank you for teaching me」能得到超高逆境情商附加分。'
      }
    ]
  },
  {
    id: 'paper-stpaul-final',
    schoolId: 'st-paul',
    schoolName: '聖●●幼稚園',
    title: '家長教育理念與突發情商考題 (Final inside Past Paper)',
    type: 'final',
    badge: '校長親考 (Final in)',
    year: '2026 最新校長提問',
    recommendationRate: '98%',
    qCount: '8 題精華',
    questions: [
      {
        q: '「如果你們的教育理念與學校有衝突，你們會如何處理？」',
        evaluation: '考校家長是否真心認同該校的宗教、校訓與辦學背景底蘊，抑或只是盲從跟風報讀。',
        tip: '最佳回答：強調家校一體，家庭教育是學校教育的延伸，會主動向班主任預約見面傾談，傾聽了解學校做法背後的專業經驗考量，並在家庭管教中進行雙向對齊與積極配合。'
      }
    ]
  },
  {
    id: 'paper-dbs',
    schoolId: 'dbs',
    schoolName: '拔萃●●●附屬小學/幼稚園',
    title: '幼兒綜合思維、常規邏輯及空間探索 Past Paper',
    type: 'past-paper',
    badge: '高難度挑戰',
    year: '2025/2026',
    recommendationRate: '97%',
    qCount: '25 題精選',
    questions: [
      {
        q: '聽英文故事後回答情節因果邏輯關係（首輪必考）',
        evaluation: '孩子能否迅速指出「猴子為什麼拿不到香蕉？」並用清晰、有條理的口語或手勢進行表達。',
        tip: '不要回答單個詞彙（如「高」），應訓練孩子大方回答完整句子：「因為香蕉掛在很高的地方，小猴子手不夠長，拿不到。」'
      }
    ]
  },
  {
    id: 'paper-dbs-final',
    schoolId: 'dbs',
    schoolName: '拔萃●●●附屬小學/幼稚園',
    title: '拔萃●●●附屬卓越精選家庭 Final In 真題對策 (Final inside Past Paper)',
    type: 'final',
    badge: '終極衝刺 (Final in)',
    year: '2026 最終面試',
    recommendationRate: '99%',
    qCount: '12 題必考',
    questions: [
      {
        q: '「請形容一下您孩子的最大缺點，以及您是如何通過日常管教來改善它的？」',
        evaluation: '校長想看到家長有極高的家庭教育觀察力，且具備具體、科學、溫和但堅定的管教思維，而非給出虛無或逃避的完美模板。',
        tip: '切忌回答「他太執著/太專注」等隱形優點。應真誠回答如「他有時在堅持自己的任務順序時會有些固執」，接著說明具體引導計策：例如「我們和孩子制定了計時小火車機制，提前 5 分鐘和他做心理解讀和倒數，現在他能很好地做好任務心態切換。」'
      }
    ]
  },
  {
    id: 'paper-victoria',
    schoolId: 'victoria',
    schoolName: '維多●●國際幼稚園',
    title: 'IB 探究式兩文三語故事會與大肌肉社交 Past Paper',
    type: 'past-paper',
    badge: '探究評估',
    year: '2025',
    recommendationRate: '95%',
    qCount: '18 題精選',
    questions: [
      {
        q: '普通話/英文雙語角色伴讀與社交分享評估（首輪）',
        evaluation: '觀察學童在小組玩具遭到其他小朋友推擋時，是由自己有禮協商「We can play together!」還是只會大聲哭叫、找老師代辦。',
        tip: '平時多帶孩子去公共兒童游樂設施進行社交練習，教授孩子學會社交性禮讓與共享物品的示範口語。'
      }
    ]
  },
  {
    id: 'paper-victoria-final',
    schoolId: 'victoria',
    schoolName: '維多●●國際幼稚園',
    title: '探究型學習認同及高難度家校合作 (Final inside Past Paper)',
    type: 'final',
    badge: '創科雙語 (Final in)',
    year: '2026 家長專場',
    recommendationRate: '96%',
    qCount: '10 題精華',
    questions: [
      {
        q: '「我們學校推行的是 IB 探究式教育，並不提倡傳統多做功課和機械默寫，您在家裏會如何輔助學童學術？」',
        evaluation: '測試家長是否真正懂得、欣賞 IB 的探究式核心精神，還是私底下依舊崇拜高壓填鴨模式，以至於在家中給孩子不一致的管教壓力。',
        tip: '表明家長十分推崇生活即教育的思維，分享自己如何引導孩子一邊去自然步道收集落葉一邊探究植物分類與基礎加減法的例子。'
      }
    ]
  },
  {
    id: 'paper-hkis',
    schoolId: 'hkis',
    schoolName: '香港●●學校 (HK●S)',
    title: '美式探究遊戲評估與自主性格特寫 Past Paper',
    type: 'past-paper',
    badge: '全英語情境',
    year: '2025',
    recommendationRate: '94%',
    qCount: '10 題精華',
    questions: [
      {
        q: 'Creative Drawing & Story Sharing Session (First Round Past Paper)',
        evaluation: 'Check whether the child expresses confidence in drawing unconventional shapes and can explain their "masterpiece" proudly in simple English.',
        tip: 'Encourage kids to draw freely and practice expressing "This is my blue rocket flying to space!" instead of copying rigid templates.'
      }
    ]
  },
  {
    id: 'paper-hkis-final',
    schoolId: 'hkis',
    schoolName: '香港●●學校 (HK●S)',
    title: '美式教育核心觀、國際社群志願協定 (Final inside Past Paper)',
    type: 'final',
    badge: '全英領袖 (Final in)',
    year: '2026 全英面考',
    recommendationRate: '96%',
    qCount: '6 題精華',
    questions: [
      {
        q: '"As an international community, how can your family contribute to our school as active volunteers?"',
        evaluation: '评估家庭能否為校友會、慈善籌款及課外探索與運動社群帶入實質的志願奉獻力量。',
        tip: 'Highlight specific professional skills or hobbies (e.g., event planning, reading workshops) and state clearly: "We would love to share our event management insights or host storytelling circles to help build a richer bilingual community."'
      }
    ]
  },
  {
    id: 'paper-ststephen',
    schoolId: 'st-stephen',
    schoolName: '聖士●●書院附屬幼稚園',
    title: '小組搭建與聽從複雜邏輯指令能力 Past Paper',
    type: 'past-paper',
    badge: '雙語全真題',
    year: '2025',
    recommendationRate: '95%',
    qCount: '15 題精華',
    questions: [
      {
        q: '配合音樂指令進行肢體協同與色彩垃圾收納（首輪）',
        evaluation: '觀察學童是否具備卓越的專注聆聽能力，在音樂停下時能立刻依照指令將綠色積木歸位、紅色積木放入相應網格。',
        tip: '孩子需要展現基本的自律與規則感，平常在家可以看電視、放音樂時玩遊戲「123紅綠燈木頭人」增加抗干擾的規則順應。'
      }
    ]
  },
  {
    id: 'paper-ststephen-final',
    schoolId: 'st-stephen',
    schoolName: '聖士●●書院附屬幼稚園',
    title: '聖士●●高寄宿期待及家族學風考核 (Final inside Past Paper)',
    type: 'final',
    badge: '大氣家風 (Final in)',
    year: '2026 最終面試',
    recommendationRate: '97%',
    qCount: '8 題必考',
    questions: [
      {
        q: '「我們十分注重學童的端莊獨立性與大方禮讓，您將如何培育孩子在團體中保持不嬌氣的性格？」',
        evaluation: '考察家庭生活是否過度溺愛（如衣食起居皆由外傭包辦而不做常規鍛鍊），學校期望孩子很快適應全方位的自主動手。',
        tip: '分享家庭中製定的自我服務規範：例如限定孩子在3歲開始自己穿鞋、收拾餐盤，即使孩子動作慢或手腳笨重，家長也會給予時間肯定其自主，不予代勞。'
      }
    ]
  },
  {
    id: 'paper-lasalle',
    schoolId: 'lasalle',
    schoolName: '喇●小學/幼稚園',
    title: '紳士邏輯辨別與多步驟動作指令理解 Past Paper',
    type: 'past-paper',
    badge: '經典必考',
    year: '2025',
    recommendationRate: '96%',
    qCount: '10 題全解',
    questions: [
      {
        q: '看卡片排列卡片因果順序，並講出完整生活故事（首輪）',
        evaluation: '孩子能不能在 3 分鐘內將「澆花-花開-採摘-插瓶」的亂序卡片排好，並有邏輯地口頭陳述故事。',
        tip: '多引導男孩子用連接詞「首先..接著..最後..」把事情的前因後果連貫大方敘述。'
      }
    ]
  },
  {
    id: 'paper-lasalle-final',
    schoolId: 'lasalle',
    schoolName: '喇●小學/幼稚園',
    title: '聖若望精神、男兒品格及家庭教育支持度 (Final inside Past Paper)',
    type: 'final',
    badge: '校長親考 (Final in)',
    year: '2026 最新校長提問',
    recommendationRate: '98%',
    qCount: '6 題精選',
    questions: [
      {
        q: '「如果您的孩子在學校與其他好動的男孩子發生推搡摩擦，您作為家長會怎麼引導他？」',
        evaluation: '校方期望看到家長有著開明但堅定的教養機制，既不護短，也能有理有據地引導男孩在挫折與競爭中維持紳士風度。',
        tip: '回答應著重於教導孩子「先冷靜、用口語協商、若無果尋求老師幫助，並且學會反思自己的責任感。」'
      }
    ]
  },
  {
    id: 'paper-dgs',
    schoolId: 'dgs',
    schoolName: '拔萃●●女小學/幼稚園',
    title: '全能智慧、中英雙語及藝術直覺觀察 Past Paper',
    type: 'past-paper',
    badge: '神級難度',
    year: '2025/2026',
    recommendationRate: '99%',
    qCount: '18 題精選',
    questions: [
      {
        q: '一對一進行快速英語認字與音律辨識（首輪）',
        evaluation: '評估女童對高密度英語發音指令的轉換速度、對鋼琴高低音或節奏快慢的身體感知和禮儀儀態。',
        tip: '培養女孩坐姿端莊，回答時保持眼神接觸並微笑發音，這在第一印象中能獲得極高的印象分。'
      }
    ]
  },
  {
    id: 'paper-dgs-final',
    schoolId: 'dgs',
    schoolName: '拔萃●●女小學/幼稚園',
    title: '狀元素質、卓越女領袖情商及鋼性培育 (Final inside Past Paper)',
    type: 'final',
    badge: '校長終審 (Final in)',
    year: '2026 終極面試',
    recommendationRate: '99%',
    qCount: '10 題精華',
    questions: [
      {
        q: '「我們學校學姐學妹競爭非常激烈，若您的女兒在某次大考或藝術比賽中拿到最後一名，您會如何和她開導？」',
        evaluation: '校長希望測試家長如何引導孩子修煉韌性，以及家庭是否能給予孩子正面的情緒支撐，而不是把名次和母女關係捆綁。',
        tip: '回答應展示出積極的逆境情商：肯定孩子付出的全部細膩努力，將輸贏看作是一次極佳的、改進學習機器的反饋機會，教孩子欣賞對手的卓越之處。'
      }
    ]
  },
  {
    id: 'paper-spcc',
    schoolId: 'spcc',
    schoolName: '聖保羅●●小學/幼稚園',
    title: '頂客神級思維、數理圖形與高階推理 Past Paper',
    type: 'past-paper',
    badge: '神校必刷',
    year: '2025/2026',
    recommendationRate: '99%',
    qCount: '20 題精選',
    questions: [
      {
        q: '空間幾何圖形折疊與多特徵拼圖歸類（首輪）',
        evaluation: '考察學童面對混亂堆積、有多個洞口或顏色漸變的積木時，能否在短時間內理清邏輯秩序，並完成不對稱拼圖。',
        tip: '平時多玩有挑戰性的實體立體拼圖、七巧板與邏輯數理遊戲，訓練幼兒在做題時輕拿輕放、不煩躁。'
      }
    ]
  },
  {
    id: 'paper-spcc-final',
    schoolId: 'spcc',
    schoolName: '聖保羅●●小學/幼稚園',
    title: '全港狀元家風、深層社會意識與教育配合度 (Final inside Past Paper)',
    type: 'final',
    badge: '狀元精選 (Final in)',
    year: '2026 終面真考',
    recommendationRate: '99%',
    qCount: '15 題必刷',
    questions: [
      {
        q: '「在資訊科技和人工智慧爆炸的年代，您如何控制和利用電子產品來引導您年幼的孩子學習？」',
        evaluation: '校長想了解家長對當代科技與孩子心智發展的深層洞察，是否具備定時、定量的實操約束，以及如何主動將科技轉化為創造工具而不是玩樂媒介。',
        tip: '展示清晰、有邊界的家庭守則：例如「我們家規定平時週一至週五不使用屏幕。週末會安排 30 分鐘，由父母陪同一起观看英文原版科學探險紀錄片或編程啟蒙積木遊戲，把電子產品視作一起探索大自然的顯微鏡和望遠鏡，而不是托兒保姆。」'
      }
    ]
  },
  {
    id: 'paper-isf',
    schoolId: 'isf',
    schoolName: '弘●書院/幼稚園',
    title: '弘立探索、普通話/英文雙向切換語感 Past Paper',
    type: 'past-paper',
    badge: '雙語大課',
    year: '2025',
    recommendationRate: '96%',
    qCount: '12 題必學',
    questions: [
      {
        q: '外師與中師交替講述故事並在繪畫角自由創作（首輪必考）',
        evaluation: '高難度考察小朋友在純英文和純普通話對話情景中的交替切換敏捷度、以及是否樂於動手、不扭捏。',
        tip: '平日與孩子做交替語言角色遊戲，讓孩子習慣與不同膚色和口音的考官落落大方、有眼神禮貌交流。'
      }
    ]
  },
  {
    id: 'paper-isf-final',
    schoolId: 'isf',
    schoolName: '弘●書院/幼稚園',
    title: '「八德十二智」人文情懷與國際領袖理念 (Final inside Past Paper)',
    type: 'final',
    badge: '經典必考 (Final in)',
    year: '2026 最新終面',
    recommendationRate: '98%',
    qCount: '8 題精選',
    questions: [
      {
        q: '「我們學校提倡弘立書院的『八德十二智』，您作爲家長，平時如何用具体的日常生活故事向孩子解釋及踐行『孝、友、忠、信』？」',
        evaluation: '評估家長的人文涵養、對儒家傳統品格與世界公民兼容教育的深刻踐行實態，而不是死板背誦書本套話。',
        tip: '可以分享家庭中長幼共聚、孩子主動為長輩遞茶並傾聽長輩講述家族奮鬥歷史的具體生活實例，顯露自然孝悌家訓。'
      }
    ]
  }
];
