import React from 'react';

import styles from '../styles.css';

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
//
//
// spakers: [{
//   uid: string, // to link with program
//   name: {en: string, zh: string},
//   affliation: ({en: string, zh: string} || null),
//   intro: {en: string, zh: string},
//   profile: string,
//   profileProps:
// }]

const SpeakerData = Object.freeze({
  speakers: [
    { // 1
      uid: 'TangF',
      name: {
        en: '唐鳳',
        zh: '唐鳳',
      },
      affiliation: {
        en: 'g0v、行政院',
        zh: 'g0v、行政院',
      },
      intro: {
        en: [
          '自2016年10月1日起擔任行政院數位政務委員，負責「開放政府」、「社會企業」與「青年諮詢委員會」等三項業務。',
          '過去，唐鳳曾擔任過行政院虛擬世界法規調適計劃顧問、國家發展委員會開放資料諮詢委員，以及十二年國民基本教育課程發展委員會委員。另外，唐鳳也是「g0v零時政府」網路社群的專案貢獻者，並積極參與線上法規討論平台vTaiwan的相關活動。'

        ],
        zh: [
          '自2016年10月1日起擔任行政院數位政務委員，負責「開放政府」、「社會企業」與「青年諮詢委員會」等三項業務。',
          '過去，唐鳳曾擔任過行政院虛擬世界法規調適計劃顧問、國家發展委員會開放資料諮詢委員，以及十二年國民基本教育課程發展委員會委員。另外，唐鳳也是「g0v零時政府」網路社群的專案貢獻者，並積極參與線上法規討論平台vTaiwan的相關活動。'
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'TsaiWN',
      name: {
        en: '蔡武男',
        zh: '蔡武男',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '1944出生於雲林北港，1970畢業於台北醫學院醫科，受訓於耶魯大學為小兒麻醉醫師 2014退休。曾任：北美洲台灣人醫師協會會長、FAPA總會副會長、2016華府蔡英文後援會召集人。'
        ],
        zh: [
          '1944出生於雲林北港，1970畢業於台北醫學院醫科，受訓於耶魯大學為小兒麻醉醫師 2014退休。曾任：北美洲台灣人醫師協會會長、FAPA總會副會長、2016華府蔡英文後援會召集人。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'TsaoHY',
      name: {
        en: '趙弘雅',
        zh: '趙弘雅',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '台灣雲林人。Ph.D Polytechnic University of New York，參與台語工作29年，無什麼成就，不過對救台灣人ee母語到今無死心。講題﹕增加對咱ee母語音ee認識。',
          '台語si上典型ee聲調語言。公元前5世紀，印度人就分析出梵語ee語音結構了。分析台語音ee結構對認識咱ee台語音非常u幫助。事實上，所有ee語言攏真類似，每種語言ee語音ee結構ma真共款。語言學大師Noam Chomsky講，從火星來ee科學家會講咱地球人攏講同一種語言。'
        ],
        zh: [
          '台灣雲林人。Ph.D Polytechnic University of New York，參與台語工作29年，無什麼成就，不過對救台灣人ee母語到今無死心。講題﹕增加對咱ee母語音ee認識。',
          '台語si上典型ee聲調語言。公元前5世紀，印度人就分析出梵語ee語音結構了。分析台語音ee結構對認識咱ee台語音非常u幫助。事實上，所有ee語言攏真類似，每種語言ee語音ee結構ma真共款。語言學大師Noam Chomsky講，從火星來ee科學家會講咱地球人攏講同一種語言。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'GvdW',
      name: {
        en: 'Gerrit van der Wees',
        zh: 'Gerrit van der Wees',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'Connecting Taiwan to the World in the 17 Century「十七世紀與世界接軌的台灣」(English)',
          'Gerrit van der Wees is a long-time observer of developments in Taiwan.  In 1980 – while doing graduate work at the University of Washington in Seattle -- he and his Taiwan-born wife Mei-chin Chen started the Taiwan Communique, a publication chronicling Taiwan’s transition to democracy.',
          'From 1982 through 2005 he served various positions in the Dutch government, while doing the Taiwan publication in evenings and weekends. In 2005 he retired from the Dutch government, and became full-time liaison for the Formosan Association for Public Affairs (FAPA) for relations with the US Senate and State Department.',
          'Since 2011 he has taught History of Taiwan at George Mason University.'
        ],
        zh: [
          'Connecting Taiwan to the World in the 17 Century「十七世紀與世界接軌的台灣」(English)',
          'Gerrit van der Wees is a long-time observer of developments in Taiwan.  In 1980 – while doing graduate work at the University of Washington in Seattle -- he and his Taiwan-born wife Mei-chin Chen started the Taiwan Communique, a publication chronicling Taiwan’s transition to democracy.',
          'From 1982 through 2005 he served various positions in the Dutch government, while doing the Taiwan publication in evenings and weekends. In 2005 he retired from the Dutch government, and became full-time liaison for the Formosan Association for Public Affairs (FAPA) for relations with the US Senate and State Department.',
          'Since 2011 he has taught History of Taiwan at George Mason University.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'ChenYS',
      name: {
        en: '陳怡奾',
        zh: '陳怡奾',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '成功大學護理學系畢業、成功大學附設醫院護理師、新樓醫院護理師。',
          'Benson Yu 內科診所助理、Sunrise Assistance Living Medication Technician、華府台灣同鄉會2017理事。'
        ],
        zh: [
          '成功大學護理學系畢業、成功大學附設醫院護理師、新樓醫院護理師。',
          'Benson Yu 內科診所助理、Sunrise Assistance Living Medication Technician、華府台灣同鄉會2017理事。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'Ouyang',
      name: {
        en: '歐陽吉林',
        zh: '歐陽吉林',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '投資講座:Financial Concept',
          'Chi-Lin (Mike) O’Young is a registered representative and investment advisor representative who offers securities and investment advisory services through AXA Advisors, LLC (NY,NY 212-314-4600) member FINRA/SPIC. and is an agent who offers annuity and insurance products through AXA Network, LLC and its insurance agency subsidiaries. '
        ],
        zh: [
          '投資講座:Financial Concept',
          'Chi-Lin (Mike) O’Young is a registered representative and investment advisor representative who offers securities and investment advisory services through AXA Advisors, LLC (NY,NY 212-314-4600) member FINRA/SPIC. and is an agent who offers annuity and insurance products through AXA Network, LLC and its insurance agency subsidiaries. '
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LiuYB',
      name: {
        en: '劉斌碩',
        zh: '劉斌碩',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '台灣屏東人。畢業於台大地理環境資源學系，加州大學河濱校區地理學博士。現任紐澤西州威廉彼得遜州立大學地理及都市研究學系教授。他曾任田納西州孟菲斯州立大學 (University of Memphis) 地理及規劃學系教授數年。曾擔任孟菲斯市都市規劃委員會委員，跨220個縣市的密西西比河谷地空間資訊中心委員，及擔任美國疾病管制中心全面撲滅梅毒計劃的咨詢顧問。他是紐澤西州環境保護廳2個研究計劃的負責人。'
        ],
        zh: [
          '台灣屏東人。畢業於台大地理環境資源學系，加州大學河濱校區地理學博士。現任紐澤西州威廉彼得遜州立大學地理及都市研究學系教授。他曾任田納西州孟菲斯州立大學 (University of Memphis) 地理及規劃學系教授數年。曾擔任孟菲斯市都市規劃委員會委員，跨220個縣市的密西西比河谷地空間資訊中心委員，及擔任美國疾病管制中心全面撲滅梅毒計劃的咨詢顧問。他是紐澤西州環境保護廳2個研究計劃的負責人。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'ChoCJ',
      name: {
        en: '邱正鵑',
        zh: '邱正鵑',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '高中畢業後先後留學新加坡及美國。取得美國金融學士及多媒體碩士。積極參與許多台美人組織，熱愛台灣支持許多台灣運動。2009年開始接觸各種理財資訊，發現許多有關教育基金、節稅、退休等財務規劃並未為一般人所認知。進而進修取得各項財經專業證照。目前服務於Transamerica Financial Advisors，同時也在World Financial Group 擔任資深經理。希望幫助更多台美人家庭善用各種財務知識，健全財務規劃。'
        ],
        zh: [
          '高中畢業後先後留學新加坡及美國。取得美國金融學士及多媒體碩士。積極參與許多台美人組織，熱愛台灣支持許多台灣運動。2009年開始接觸各種理財資訊，發現許多有關教育基金、節稅、退休等財務規劃並未為一般人所認知。進而進修取得各項財經專業證照。目前服務於Transamerica Financial Advisors，同時也在World Financial Group 擔任資深經理。希望幫助更多台美人家庭善用各種財務知識，健全財務規劃。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HuangCS',
      name: {
        en: '黃慶三',
        zh: '黃慶三',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '在農村長大，家裡有兩個菜園，喜歡涉獵有關植物花卉圖書、資訊，參觀花園、植物園；或為文描述不同植物，花草。一、二十年來，先後在《太平洋時報》、《台灣公論報》、及《華府新聞報》刊登，以就正於高賢。台中高工土木科、成大土木系及環境工程研究所畢業、以及紐約州 SUNY Buffalo 環境工程博士。曾任華府同鄉會會長。已退休，目前在「華府台灣基督長老教會」打雜、幫忙。'
        ],
        zh: [
          '在農村長大，家裡有兩個菜園，喜歡涉獵有關植物花卉圖書、資訊，參觀花園、植物園；或為文描述不同植物，花草。一、二十年來，先後在《太平洋時報》、《台灣公論報》、及《華府新聞報》刊登，以就正於高賢。台中高工土木科、成大土木系及環境工程研究所畢業、以及紐約州 SUNY Buffalo 環境工程博士。曾任華府同鄉會會長。已退休，目前在「華府台灣基督長老教會」打雜、幫忙。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'ChangCH',
      name: {
        en: '張之豪',
        zh: '張之豪',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '蔡英文總統文膽、基隆青年陣線理事長、茶某行號企業負責人、想想網站「雞籠勃露斯」專欄作家。UBC大學學士，臺大政治學碩士、政大亞太所博士班。參與發起野草莓運動、反旺中媒體壟斷、三一八運動。於加拿大就讀中學時，受彭明敏參選總統啟發，投身臺獨運動。大學時閱讀史明，認同「臺獨主戰場在島內」，畢業後返臺就學，同時從事政治組織工作與社會運動。 現準備參選基隆市安樂區市議員。'
        ],
        zh: [
          '蔡英文總統文膽、基隆青年陣線理事長、茶某行號企業負責人、想想網站「雞籠勃露斯」專欄作家。UBC大學學士，臺大政治學碩士、政大亞太所博士班。參與發起野草莓運動、反旺中媒體壟斷、三一八運動。於加拿大就讀中學時，受彭明敏參選總統啟發，投身臺獨運動。大學時閱讀史明，認同「臺獨主戰場在島內」，畢業後返臺就學，同時從事政治組織工作與社會運動。 現準備參選基隆市安樂區市議員。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HuangYH',
      name: {
        en: '黄耀勳',
        zh: '黄耀勳',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '畢業於東吳大學會計系，加州大學柏克萊 (UC, Berkeley) 獲企業管理碩士。先服務於紐約的輝瑞製藥廠(Chas. Pfizer) 世界總部；後加入IBM總公司，擔任財務部門中多項要職直至退休。卅年前黃君首次接觸到整脊醫學；有感於它極佳的療效，遂拜加拿大的施義雄醫生為師。頗多同鄉都曾受惠於黃君之助。五年前，他在美東夏令會，首次與同鄉分享他多年的経驗。今年應濟濟同鄉的要求，再次談論”脊椎調整與健康”。'
        ],
        zh: [
          '畢業於東吳大學會計系，加州大學柏克萊 (UC, Berkeley) 獲企業管理碩士。先服務於紐約的輝瑞製藥廠(Chas. Pfizer) 世界總部；後加入IBM總公司，擔任財務部門中多項要職直至退休。卅年前黃君首次接觸到整脊醫學；有感於它極佳的療效，遂拜加拿大的施義雄醫生為師。頗多同鄉都曾受惠於黃君之助。五年前，他在美東夏令會，首次與同鄉分享他多年的経驗。今年應濟濟同鄉的要求，再次談論”脊椎調整與健康”。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'YangYH',
      name: {
        en: '楊遠薰',
        zh: '楊遠薰',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '國立政治大學新聞系學士，美國愛荷華州立大學企業管理碩士。曾任職幼獅編譯中心、台灣交通部、美國國稅局、梅西百貨總部、 Paragon 電腦專業公司等機構 。自1996年起，開始為台灣公論報、自由時報美東版與太平洋時報撰稿，著有《咱的故事》、《北美洲台灣人故事》與《Our Stories》等書。目前經營「海外台灣人部落格」與「Carole 777部落格」，並致力探討台美族裔 (Taiwanese Americans) 的形成、發展、挑戰與前景。'
        ],
        zh: [
          '國立政治大學新聞系學士，美國愛荷華州立大學企業管理碩士。曾任職幼獅編譯中心、台灣交通部、美國國稅局、梅西百貨總部、 Paragon 電腦專業公司等機構 。自1996年起，開始為台灣公論報、自由時報美東版與太平洋時報撰稿，著有《咱的故事》、《北美洲台灣人故事》與《Our Stories》等書。目前經營「海外台灣人部落格」與「Carole 777部落格」，並致力探討台美族裔 (Taiwanese Americans) 的形成、發展、挑戰與前景。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LinWC',
      name: {
        en: '林文政',
        zh: '林文政',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '台灣苗栗後龍人，台大化工系畢業，美國雪城大學(Syracuse University)化工碩士。現任太平洋時報社長、美國台灣研究院董事長、北美洲台灣工程師協會總會理事、美國臺灣人獅子會第一副會長兼秘書長。曾任洛杉磯聖東台灣同鄉會會長、北美洲台灣工程師協會南加州分會會長、南加州嘉中校友會會長、FAPA全國委員、洛杉磯台美商會副會長、台美人筆會創會會員 會長。'
        ],
        zh: [
          '台灣苗栗後龍人，台大化工系畢業，美國雪城大學(Syracuse University)化工碩士。現任太平洋時報社長、美國台灣研究院董事長、北美洲台灣工程師協會總會理事、美國臺灣人獅子會第一副會長兼秘書長。曾任洛杉磯聖東台灣同鄉會會長、北美洲台灣工程師協會南加州分會會長、南加州嘉中校友會會長、FAPA全國委員、洛杉磯台美商會副會長、台美人筆會創會會員 會長。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'WuPY',
      name: {
        en: '吳沛憶',
        zh: '吳沛憶',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '1987年生，就讀台灣大學政治學系政治理論組期間，與《台大濁水溪社》夥伴共同發起野草莓學運。2014年參與太陽花運動媒體組。畢業後進入小英教育基金會社會力發展中心，負責NGO合作及青年培訓專案。2014年加入民主進步黨，擔任台灣民主學院副主任、文宣部副主任。2016年擔任蔡英文總統競選辦公室媒體創意中心副主任。2016年擔任台灣民主學院主任，現兼任民進黨發言人。'
        ],
        zh: [
          '1987年生，就讀台灣大學政治學系政治理論組期間，與《台大濁水溪社》夥伴共同發起野草莓學運。2014年參與太陽花運動媒體組。畢業後進入小英教育基金會社會力發展中心，負責NGO合作及青年培訓專案。2014年加入民主進步黨，擔任台灣民主學院副主任、文宣部副主任。2016年擔任蔡英文總統競選辦公室媒體創意中心副主任。2016年擔任台灣民主學院主任，現兼任民進黨發言人。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'WangWC',
      name: {
        en: '王威中',
        zh: '王威中',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '學歷：建國中學、台灣大學政治系學士、台灣大學國家發展研究所碩士。',
          '經歷：臺大學生會會長、2011-12小英主席民進黨副秘書長辦公室主任、小英總統競選總部組織群執秘、2013莊瑞雄主委民進黨臺北市黨部副執行場、嘉義立委陳明文特助。'

        ],
        zh: [
          '學歷：建國中學、台灣大學政治系學士、台灣大學國家發展研究所碩士。',
          '經歷：臺大學生會會長、2011-12小英主席民進黨副秘書長辦公室主任、小英總統競選總部組織群執秘、2013莊瑞雄主委民進黨臺北市黨部副執行場、嘉義立委陳明文特助。'

        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LiHC',
      name: {
        en: '李黃貞',
        zh: '李黃貞',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'PAST INVESTMENT EXPERIENCES: Held position as STOCK BROKER at former SMITH BARNEY INC. and NATIONAL FINANCIAL SERVICES, etc.',
          'I’ll like to discuss with you about closed-end mutual funds, ETF, current market trends, sector rotation, investment strategy. We’ll have open discussion about various subjects and stock selection in different market environment. 本投資論壇將提供給有興趣或有經驗的投資者一個平台，共同討論投資策略，集思廣益，共創多贏！'

        ],
        zh: [
          'PAST INVESTMENT EXPERIENCES: Held position as STOCK BROKER at former SMITH BARNEY INC. and NATIONAL FINANCIAL SERVICES, etc.',
          'I’ll like to discuss with you about closed-end mutual funds, ETF, current market trends, sector rotation, investment strategy. We’ll have open discussion about various subjects and stock selection in different market environment. 本投資論壇將提供給有興趣或有經驗的投資者一個平台，共同討論投資策略，集思廣益，共創多贏！'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'WangCZ',
      name: {
        en: '王巧蓉',
        zh: '王巧蓉',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '台灣嘉義人，自1999年起就投入華府的台美人草根組織─台灣人公共事務會(FAPA)工作，將近二十個年頭。在這期間，美國國會參、眾兩院，歷經過由同一黨同時掌握兩院多數席次、或民主或共和黨分佔多數黨，加上台灣和美國各有三次政黨輪替、四位總統，行政和立法有總總不同的排列組合。她在美國國會的獨特工作經驗，向大家分析在新政府下，所有有關台灣的議題如何在美國國會山莊運作，並得到行政部門的支持。'
        ],
        zh: [
          '台灣嘉義人，自1999年起就投入華府的台美人草根組織─台灣人公共事務會(FAPA)工作，將近二十個年頭。在這期間，美國國會參、眾兩院，歷經過由同一黨同時掌握兩院多數席次、或民主或共和黨分佔多數黨，加上台灣和美國各有三次政黨輪替、四位總統，行政和立法有總總不同的排列組合。她在美國國會的獨特工作經驗，向大家分析在新政府下，所有有關台灣的議題如何在美國國會山莊運作，並得到行政部門的支持。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'PengYC',
      name: {
        en: '彭郁靜',
        zh: '彭郁靜',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'Zumba instructor for 6 years of health and wellness experience across fitness. In helping and achieve fitness goals through customized Latino dance programs and consistently improve fitness targets.',
          'She is a Zumba instructor in Washington DC Taiwanese School 華府台灣語文學校, Washington School of Chinese Language and Culture 華府中文學校 and 桐花 zumba now.'
        ],
        zh: [
          'Zumba instructor for 6 years of health and wellness experience across fitness. In helping and achieve fitness goals through customized Latino dance programs and consistently improve fitness targets.',
          'She is a Zumba instructor in Washington DC Taiwanese School 華府台灣語文學校, Washington School of Chinese Language and Culture 華府中文學校 and 桐花 zumba now.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LoHC',
      name: {
        en: '羅惠珍',
        zh: '羅惠珍',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '曾任教於台北YMCA &amp; 救國團之拼布、插花及國標舞等班級十餘年、台塑集團才藝評審老師。現任：彰化縣北斗鎮社區大學拼布班老師、DIY教師、協助學校舉辦拼布展。熱心參與社區活動，例如：農民節慶典，為農民表演舞蹈。為農產品特展之攤位設計花藝、拼布、蔬果……各式各樣不同之藝術巧思設計。'
        ],
        zh: [
          '曾任教於台北YMCA &amp; 救國團之拼布、插花及國標舞等班級十餘年、台塑集團才藝評審老師。現任：彰化縣北斗鎮社區大學拼布班老師、DIY教師、協助學校舉辦拼布展。熱心參與社區活動，例如：農民節慶典，為農民表演舞蹈。為農產品特展之攤位設計花藝、拼布、蔬果……各式各樣不同之藝術巧思設計。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HsiehBL',
      name: {
        en: '謝博六',
        zh: '謝博六',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '畢業於國立中興大學法商學院，West Virginia University, Ohio State University, 主修生物統計。曾任敎於West Virginia University, Uniform Service University of the Health Science. 現任職於FDA。 活躍台灣人社團，曾任台灣同學會，台灣同鄉會會長，大華府地區陳水扁及謝長廷總統競選後援會召集人。2008 年美東夏令會召集人。 練習鄭子太極拳已有20幾年的歲月，師承李仁旭老師，李老師師承鄭曼青大師的第一代大弟子羅邦楨老師。現在華府台灣學校義務教授太極拳。'
        ],
        zh: [
          '畢業於國立中興大學法商學院，West Virginia University, Ohio State University, 主修生物統計。曾任敎於West Virginia University, Uniform Service University of the Health Science. 現任職於FDA。 活躍台灣人社團，曾任台灣同學會，台灣同鄉會會長，大華府地區陳水扁及謝長廷總統競選後援會召集人。2008 年美東夏令會召集人。 練習鄭子太極拳已有20幾年的歲月，師承李仁旭老師，李老師師承鄭曼青大師的第一代大弟子羅邦楨老師。現在華府台灣學校義務教授太極拳。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HongCL',
      name: {
        en: '洪健棣',
        zh: '洪健棣',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '專業訓練與經驗：2006 – 2008完成基礎關顧與協談訓練（Basic Residency training in Care and Counseling Center of GA），2000 – 2002擔任台灣神學院實踐神學助理教授。教會事奉：2009 – 華府台灣基督長老教會主任牧師、August – May 亞特蘭大台語長老教會主任牧師、1985 – 1990新竹大專學生中心工作者、1985 – 1987 新竹香山教會傳道師。'
        ],
        zh: [
          '專業訓練與經驗：2006 – 2008完成基礎關顧與協談訓練（Basic Residency training in Care and Counseling Center of GA），2000 – 2002擔任台灣神學院實踐神學助理教授。教會事奉：2009 – 華府台灣基督長老教會主任牧師、August – May 亞特蘭大台語長老教會主任牧師、1985 – 1990新竹大專學生中心工作者、1985 – 1987 新竹香山教會傳道師。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'YanMW',
      name: {
        en: '顏銘緯',
        zh: '顏銘緯',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '21歲，高雄人。高師大附中畢業，目前就讀中山大學社會學系。經歷：2014~2014.11.29擔任基進側翼全國聯合競選辦公室主任、2014.09.26曾拿《被出賣的台灣》丟向出賣台灣的馬英九、至今擔任基進黨發言人。'
        ],
        zh: [
          '21歲，高雄人。高師大附中畢業，目前就讀中山大學社會學系。經歷：2014~2014.11.29擔任基進側翼全國聯合競選辦公室主任、2014.09.26曾拿《被出賣的台灣》丟向出賣台灣的馬英九、至今擔任基進黨發言人。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'TsaiMF',
      name: {
        en: '蔡明峰',
        zh: '蔡明峰',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '台灣台中市人，中原理工大學畢業。曾任台灣海外網（WWW.TAIWANUS.NET）創辦主持人300,000人次/天、紐約台灣會館前理事長、前民進黨美東主委、前NY &amp; NJ台灣同鄉會會長、台電化工師、台灣化學纖維工程師、明志工專、勤益工專、聯合工專、逢甲學院：程控副教授。'
        ],
        zh: [
          '台灣台中市人，中原理工大學畢業。曾任台灣海外網（WWW.TAIWANUS.NET）創辦主持人300,000人次/天、紐約台灣會館前理事長、前民進黨美東主委、前NY &amp; NJ台灣同鄉會會長、台電化工師、台灣化學纖維工程師、明志工專、勤益工專、聯合工專、逢甲學院：程控副教授。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LamC',
      name: {
        en: 'Clarence Lam',
        zh: 'Clarence Lam',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'Ms. Meei-huey Lin is a native of Taiwan, whose interest in Ikebana was influenced by her mother. She has been teaching Ikebana classes since 2004. Recently Ms. Lin has been promoted by the Sogetsu headquarter in Japan to be Teacher, 2nd Grade, Jonin Sanyo.',
          'So many of her students has taken lessons from her for years. Some of them had been promoted to be Teacher, 4th Grace. This is a Study Group full of talent and passionate ikebana enthusiasts.'
        ],
        zh: [
          'Ms. Meei-huey Lin is a native of Taiwan, whose interest in Ikebana was influenced by her mother. She has been teaching Ikebana classes since 2004. Recently Ms. Lin has been promoted by the Sogetsu headquarter in Japan to be Teacher, 2nd Grade, Jonin Sanyo.',
          'So many of her students has taken lessons from her for years. Some of them had been promoted to be Teacher, 4th Grace. This is a Study Group full of talent and passionate ikebana enthusiasts.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'TsaiDK',
      name: {
        en: '蔡丁貴',
        zh: '蔡丁貴',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '1949年出生於台灣高雄蚵子寮。成功大學土木工程研究所碩士，美國康乃爾大學環境工程博士。',
          '現為：公投護台灣聯盟總召。 曾任：國立中興大學講師、國立台灣大學土木工程學系教授、美國Syracuse University 土木工程學系助理教授及副教授、台北縣政府秘書、兼代國宅局局長、行政院環保署代理署長、副署長；研考會副主委、台灣教授協會秘書長、副會長、會長。'
        ],
        zh: [
          '1949年出生於台灣高雄蚵子寮。成功大學土木工程研究所碩士，美國康乃爾大學環境工程博士。',
          '現為：公投護台灣聯盟總召。 曾任：國立中興大學講師、國立台灣大學土木工程學系教授、美國Syracuse University 土木工程學系助理教授及副教授、台北縣政府秘書、兼代國宅局局長、行政院環保署代理署長、副署長；研考會副主委、台灣教授協會秘書長、副會長、會長。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'WuHH',
      name: {
        en: '吳新興',
        zh: '吳新興',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '澳洲國立墨爾本大學政治學研究所（政治系）博士。曾任工商時報財經要聞採訪組主任兼大陸新聞中心主任1989~1991、國立成功大學政治經濟學研究所副教授、教授兼所長1992~1998、財團法人海峽交流基金會副秘書長 1998~2000、中華民國僑務委員會副委員長 2000~2003、中華民國駐菲律賓特派代表（大使）2003~2008、南台科技大學行政副校長 2008-2014、銘傳大學講座教授兼社會科學院院長 2014-2016。'
        ],
        zh: [
          '澳洲國立墨爾本大學政治學研究所（政治系）博士。曾任工商時報財經要聞採訪組主任兼大陸新聞中心主任1989~1991、國立成功大學政治經濟學研究所副教授、教授兼所長1992~1998、財團法人海峽交流基金會副秘書長 1998~2000、中華民國僑務委員會副委員長 2000~2003、中華民國駐菲律賓特派代表（大使）2003~2008、南台科技大學行政副校長 2008-2014、銘傳大學講座教授兼社會科學院院長 2014-2016。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'MichaelF',
      name: {
        en: 'Michael J. Fonte（彭光理）',
        zh: 'Michael J. Fonte（彭光理）',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'Educator. Michael is a Director, Washington Office, Democratic Progressive Party. Information liaison between Taiwan’s DPP and policy makers in Washington. In 1972-76, He is a Director in Education, University of Michigan, leading this outreach program of the University’s Asian Studies Programs.',
          'In 1967-1970, He worked within the Roman Catholic Church structures in Taiwan, doing credit union organizing and other social work.'
        ],
        zh: [
          'Educator. Michael is a Director, Washington Office, Democratic Progressive Party. Information liaison between Taiwan’s DPP and policy makers in Washington. In 1972-76, He is a Director in Education, University of Michigan, leading this outreach program of the University’s Asian Studies Programs.',
          'In 1967-1970, He worked within the Roman Catholic Church structures in Taiwan, doing credit union organizing and other social work.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'ChiuTP',
      name: {
        en: '朱約信／豬頭皮',
        zh: '朱約信／豬頭皮',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '一張「朱約信專輯」。七張「豬頭皮」專輯。1994年，「豬頭皮首張專輯」登上美國告示牌(Billboard)雜誌封面故事。2000年，金曲獎「台語歌王」。2005/2006「台客搖滾」主力歌手。演電影、寫電影主題曲/提名金馬獎、出版電影原聲帶。廣告音樂。電視/電台節目主持。出書。',
          '大學開課講授「流行音樂研究vs電影流行文化」。福音搖滾樂團【搖滾主耶穌】團長。2016出版睽違十六年個人專輯 朱頭皮【人生半百古來嘻】(CD版)。【人生半百才開始】(彩膠版)。'
        ],
        zh: [
          '一張「朱約信專輯」。七張「豬頭皮」專輯。1994年，「豬頭皮首張專輯」登上美國告示牌(Billboard)雜誌封面故事。2000年，金曲獎「台語歌王」。2005/2006「台客搖滾」主力歌手。演電影、寫電影主題曲/提名金馬獎、出版電影原聲帶。廣告音樂。電視/電台節目主持。出書。',
          '大學開課講授「流行音樂研究vs電影流行文化」。福音搖滾樂團【搖滾主耶穌】團長。2016出版睽違十六年個人專輯 朱頭皮【人生半百古來嘻】(CD版)。【人生半百才開始】(彩膠版)。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'YaoCW',
      name: {
        en: '姚嘉文',
        zh: '姚嘉文',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '臺灣彰化縣和美鎮人，執業律師，曾任「台灣政論」法律顧問1975, 美麗島事件入獄 1979 ~1987, 第二屆民主進步黨主席 1987~1988, 第二屆立法委員1993~1996, 總統府資政2000~2002, 考試院長2002~2008, 台灣國家聯盟總召集人2008~2014。現任‧總統府資政 2016~、台灣國家聯盟 執行委員、決策委員2014~、世界台灣人大會 顧問。'
        ],
        zh: [
          '臺灣彰化縣和美鎮人，執業律師，曾任「台灣政論」法律顧問1975, 美麗島事件入獄 1979 ~1987, 第二屆民主進步黨主席 1987~1988, 第二屆立法委員1993~1996, 總統府資政2000~2002, 考試院長2002~2008, 台灣國家聯盟總召集人2008~2014。現任‧總統府資政 2016~、台灣國家聯盟 執行委員、決策委員2014~、世界台灣人大會 顧問。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'JohnNJ',
      name: {
        en: 'John J. Norris Jr.',
        zh: 'John J. Norris Jr.',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'John J. Norris Jr. became the Managing Director of the Washington Office of the American Institute in Taiwan (AIT/W) in 2016. He leads the day-to- day operations of AIT/W, including overseeing AIT’s $60 million annual budget and maintaining contacts with senior Taiwan authorities.',
          'AIT is a non-profit, private corporation established pursuant to the Taiwan Relations Act to manage the U.S. unofficial relationship with Taiwan.'
        ],
        zh: [
          'John J. Norris Jr. became the Managing Director of the Washington Office of the American Institute in Taiwan (AIT/W) in 2016. He leads the day-to- day operations of AIT/W, including overseeing AIT’s $60 million annual budget and maintaining contacts with senior Taiwan authorities.',
          'AIT is a non-profit, private corporation established pursuant to the Taiwan Relations Act to manage the U.S. unofficial relationship with Taiwan.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'ChenTS',
      name: {
        en: '陳唐山',
        zh: '陳唐山',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '台南市鹽水區人（原台南縣鹽水鎮），台灣大學畢業，美國奧克拉荷馬大學碩士，美國普渡大學地球物理學博士。1992年黑名單解禁，陳唐山返台後投入政壇，歷仼三屆立法委員、二任台南縣長。2004年起，先後被延攬為外交部長、總統府秘書長、國安會秘書長。2016年擔任遠景基金會董事長。'
        ],
        zh: [
          '台南市鹽水區人（原台南縣鹽水鎮），台灣大學畢業，美國奧克拉荷馬大學碩士，美國普渡大學地球物理學博士。1992年黑名單解禁，陳唐山返台後投入政壇，歷仼三屆立法委員、二任台南縣長。2004年起，先後被延攬為外交部長、總統府秘書長、國安會秘書長。2016年擔任遠景基金會董事長。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HuangMY',
      name: {
        en: '黃美月',
        zh: '黃美月',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '2001 年取得AAAI/ISMA 有氧舞蹈敎練證照。業餘從事有氧舞蹈教學長達十七年。',
          'AAAI/ISMA Certified Aerobic Instructor (2001 - 2017)',
          'Zumba Basic Instructor (2015-2017)',
          'Zumba Gold (for seniors) Instructor (2016-2017)'
        ],
        zh: [
          '2001 年取得AAAI/ISMA 有氧舞蹈敎練證照。業餘從事有氧舞蹈教學長達十七年。',
          'AAAI/ISMA Certified Aerobic Instructor (2001 - 2017)',
          'Zumba Basic Instructor (2015-2017)',
          'Zumba Gold (for seniors) Instructor (2016-2017)'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HsuHC',
      name: {
        en: '許學加',
        zh: '許學加',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '許學加博士於2013從麥漷密克(McCormick)傑出研究員職位退休，負責和產品開發上市有關的生產程序和材料的研究。麥漷密克公司服務之前，他曾任職於納必斯可食品公司擔任首要工程師，和艾荷華州立大學的食品科技系任食品工程副教授。他的專業在於應用食品科學和食品工程的原理來解決食品工業在產品的材料、設計、生產、上市等挑戰。'
        ],
        zh: [
          '許學加博士於2013從麥漷密克(McCormick)傑出研究員職位退休，負責和產品開發上市有關的生產程序和材料的研究。麥漷密克公司服務之前，他曾任職於納必斯可食品公司擔任首要工程師，和艾荷華州立大學的食品科技系任食品工程副教授。他的專業在於應用食品科學和食品工程的原理來解決食品工業在產品的材料、設計、生產、上市等挑戰。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LaiCC',
      name: {
        en: '賴中強',
        zh: '賴中強',
      },
      affiliation: {
        en: '經濟民主連合',
        zh: '經濟民主連合',
      },
      intro: {
        en: [
          '執業律師，承辦公益案件，包括：公平稅改聯盟抗稅行動，2004年選舉無效訴訟擔任被告中選會之訴訟代理人(原告為連戰宋楚瑜)、2008年選制改革訴訟、2009年野草莓李明璁集遊法案。2009年台灣守護民主平台的成立，擔任執委、理事，並擔任台灣人權促進會執委、副會長、會長(2012)，台灣勞工陣線理事(2013~2016)，組織「兩岸協議」監督聯盟(2010)、反黑箱服貿民主陣線(2013)，擔任召集人，2017年成立台灣北北新巢協會擔任常務理事。'
        ],
        zh: [
          '執業律師，承辦公益案件，包括：公平稅改聯盟抗稅行動，2004年選舉無效訴訟擔任被告中選會之訴訟代理人(原告為連戰宋楚瑜)、2008年選制改革訴訟、2009年野草莓李明璁集遊法案。2009年台灣守護民主平台的成立，擔任執委、理事，並擔任台灣人權促進會執委、副會長、會長(2012)，台灣勞工陣線理事(2013~2016)，組織「兩岸協議」監督聯盟(2010)、反黑箱服貿民主陣線(2013)，擔任召集人，2017年成立台灣北北新巢協會擔任常務理事。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'HsiaoR',
      name: {
        en: 'Russell Hsiao',
        zh: 'Russell Hsiao',
      },
      affiliation: {
        en: 'Global Taiwan Institute',
        zh: 'Global Taiwan Institute',
      },
      intro: {
        en: [
          'Russell Hsiao is the Executive Director of GTI. He previously served as a Senior Research Fellow at the Project 2049 Institute and National Security Fellow at the Foundation for Defense of Democracies. Prior to those positions he was the Editor of China Brief at The Jamestown Foundation from October 2007­ to July 2011 and a Special Associate in the International Cooperation Department at the Taiwan Foundation for Democracy. While in law school, he clerked within the Office of the Chairman at the Federal Communications Commission and the Interagency Trade Enforcement Center at the Office of the U.S. Trade Representative.',
          'Mr. Hsiao received his J.D. and certificate from the Law and Technology Institute at the Catholic University of America’s Columbus School of Law where he served as the Editor-in-Chief of the Catholic University Journal of Law and Technology. He received a B.A. in International Studies from the American University’s School of International Service and the University Honors Program. Mr. Hsiao is proficient in Mandarin Chinese.'

        ],
        zh: [
          'Russell Hsiao is the Executive Director of GTI. He previously served as a Senior Research Fellow at the Project 2049 Institute and National Security Fellow at the Foundation for Defense of Democracies. Prior to those positions he was the Editor of China Brief at The Jamestown Foundation from October 2007­ to July 2011 and a Special Associate in the International Cooperation Department at the Taiwan Foundation for Democracy. While in law school, he clerked within the Office of the Chairman at the Federal Communications Commission and the Interagency Trade Enforcement Center at the Office of the U.S. Trade Representative.',
          'Mr. Hsiao received his J.D. and certificate from the Law and Technology Institute at the Catholic University of America’s Columbus School of Law where he served as the Editor-in-Chief of the Catholic University Journal of Law and Technology. He received a B.A. in International Studies from the American University’s School of International Service and the University Honors Program. Mr. Hsiao is proficient in Mandarin Chinese.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LiMC',
      name: {
        en: '林希明',
        zh: '林希明',
      },
      affiliation: {
        en: '台灣人公共事務會',
        zh: '台灣人公共事務會',
      },
      intro: {
        en: [
          '希明在2016年成為台灣人公共事務會(FAPA)的副會長。陪伴著他對於台灣議題的熱忱，林希明在自身領域擁有超過三十年團隊管理的經歷，致力於為市場帶來更多創新的產品，他現為一間保險金融公司DocVentive的Managing Partner。他希望他可以以其管理方面的豐富經驗來支持FAPA的組織運作，以及為台灣倡議。他碩士畢業於Georgia Institute of Technology 得資訊與電腦科學系。 ',
          'Hsi-Ming became FAPA Vice President in 2016. Along with his passion in the serving the Taiwan cause, Hsi-Ming has over 30 years of experience managing development teams, and bringing new and innovative products to market. He currently serves as Managing Partner of DocVentive, a provider of professional services and document automation solutions to the Insurance, Financial services and Utility markets. He hopes he can use his management  experience to support FAPA in any shape, way, and form. He graduated from Georgia Institute of Technology with a M.S. in Information and Computer Science.'
        ],
        zh: [
          '希明在2016年成為台灣人公共事務會(FAPA)的副會長。陪伴著他對於台灣議題的熱忱，林希明在自身領域擁有超過三十年團隊管理的經歷，致力於為市場帶來更多創新的產品，他現為一間保險金融公司DocVentive的Managing Partner。他希望他可以以其管理方面的豐富經驗來支持FAPA的組織運作，以及為台灣倡議。他碩士畢業於Georgia Institute of Technology 得資訊與電腦科學系。 ',
          'Hsi-Ming became FAPA Vice President in 2016. Along with his passion in the serving the Taiwan cause, Hsi-Ming has over 30 years of experience managing development teams, and bringing new and innovative products to market. He currently serves as Managing Partner of DocVentive, a provider of professional services and document automation solutions to the Insurance, Financial services and Utility markets. He hopes he can use his management  experience to support FAPA in any shape, way, and form. He graduated from Georgia Institute of Technology with a M.S. in Information and Computer Science.'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LuHC',
      name: {
        en: '呂欣潔',
        zh: '呂欣潔',
      },
      affiliation: {
        en: '社會民主黨',
        zh: '社會民主黨',
      },
      intro: {
        en: [
          '呂欣潔｜性別與政治工作者',
          '家庭照顧者、社工、女同志、作家、綠社盟立委落選人。在唸台大社工系時加入台灣同志諮詢熱線協會，從此投入性別和同志運動14年，走過台灣無數圈也飛到國外去訴說自己在台灣的生命故事，也熱愛聆聽各種不同生命的性別故事。這些年來，努力倡議地方與中央政府在各個施行政策中，納入多元性別視角。多次擔任同志大遊行總舞台主持人，以及透過各種方式讓台灣更認識多元性別，進而認識人權平等的理想',
          '因有個需要長期照顧的小妹而開始關注政治與社會福利議題。出國念書之後感受到台灣在國際上的弱勢處境，開始努力投身國際事務工作，曾應邀進入聯合國向各國大使遊說倡議，並在歐盟發表演說，讓更多人看見台灣。投入政治改革的最大夢想是人人能夠平等地活著，當個台灣人。'
        ],
        zh: [
          '呂欣潔｜性別與政治工作者',
          '家庭照顧者、社工、女同志、作家、綠社盟立委落選人。在唸台大社工系時加入台灣同志諮詢熱線協會，從此投入性別和同志運動14年，走過台灣無數圈也飛到國外去訴說自己在台灣的生命故事，也熱愛聆聽各種不同生命的性別故事。這些年來，努力倡議地方與中央政府在各個施行政策中，納入多元性別視角。多次擔任同志大遊行總舞台主持人，以及透過各種方式讓台灣更認識多元性別，進而認識人權平等的理想',
          '因有個需要長期照顧的小妹而開始關注政治與社會福利議題。出國念書之後感受到台灣在國際上的弱勢處境，開始努力投身國際事務工作，曾應邀進入聯合國向各國大使遊說倡議，並在歐盟發表演說，讓更多人看見台灣。投入政治改革的最大夢想是人人能夠平等地活著，當個台灣人。'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LinHMH',
      name: {
        en: '林許美惠',
        zh: '林許美惠',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          'We are a group of Sogetsu teachers and students who are dedicated to the advancement of Ikebana in the Greater Philadelphia area.  The Sogetsu BuxMont Study Group was established by Ms. Meei-huey Lin',
          'On May 2016.  The group has actively participated at many flower arrangement exhibitions in the area, including Philadelphia Flower Show; Longwood Gardens; Shofuso Japanese House at Fairmont Park; the Liberty Place during the Cherry Blossom Festival; Pearl Bucks House; the exhibits at a local church and Taiwanese-American East Coast Conference.  On October 2016, the Group presented a huge and successful exhibition to commemorate the establishment of the Study Group.  The exhibitions demonstrated the creativity and talents of the group and were well received. ',
          'Ms. Meei-huey Lin is a native of Taiwan, whose interest in Ikebana was influenced by her mother.  She has been teaching Ikebana classes since 2004.  Recently Ms. Lin has been promoted by the Sogetsu headquarter in Japan to be Teacher, 2nd Grade, Jonin Sanyo.  So many of her students has taken lessons from her for years.  Some of them had been promoted to be Teacher, 4th Grace.  This is a Study Group full of talent and passionate ikebana enthusiasts. ',
          'The Study Group’s website:  www.sogetsubuxmont.org',
          'Sogetsu.bm@gmail.com'
        ],
        zh: [
          'We are a group of Sogetsu teachers and students who are dedicated to the advancement of Ikebana in the Greater Philadelphia area.  The Sogetsu BuxMont Study Group was established by Ms. Meei-huey Lin',
          'On May 2016.  The group has actively participated at many flower arrangement exhibitions in the area, including Philadelphia Flower Show; Longwood Gardens; Shofuso Japanese House at Fairmont Park; the Liberty Place during the Cherry Blossom Festival; Pearl Bucks House; the exhibits at a local church and Taiwanese-American East Coast Conference.  On October 2016, the Group presented a huge and successful exhibition to commemorate the establishment of the Study Group.  The exhibitions demonstrated the creativity and talents of the group and were well received. ',
          'Ms. Meei-huey Lin is a native of Taiwan, whose interest in Ikebana was influenced by her mother.  She has been teaching Ikebana classes since 2004.  Recently Ms. Lin has been promoted by the Sogetsu headquarter in Japan to be Teacher, 2nd Grade, Jonin Sanyo.  So many of her students has taken lessons from her for years.  Some of them had been promoted to be Teacher, 4th Grace.  This is a Study Group full of talent and passionate ikebana enthusiasts. ',
          'The Study Group’s website:  www.sogetsubuxmont.org',
          'Sogetsu.bm@gmail.com'
        ]
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'LinZY',
      name: {
        en: '林祖儀',
        zh: '林祖儀',
      },
      affiliation: {
        en: '沃草',
        zh: '沃草',
      },
      intro: {
        en: [
          '政大哲學系、政大經濟所。擔任Ｐｔｔ粉絲團主編期間的選文過程中，間接看見台灣許多社會與政治議題，他領悟『強化選舉權、推動罷免權』是一切的解方。他投入『割闌尾計畫』團隊，團隊創造了20年來第一次立委罷免投票，也在2016年底順利推動罷免法規下修。他創辦新媒體『沃草！Watchout』，提供大眾執行政治監督的平台，非選舉期間讓民眾可以監督政府；選舉期間則提供資訊讓民眾判斷，投票給心目中最棒的人。透過選舉與罷免權，為台灣建立更加完善的民主制度。沃草秉持著降低公民參與政治的門檻、開放政府的精神，藉由『國會無雙』、『市長給問嗎』、『給問擂台』，以及協助打造蒐集民眾意見到國是會議議程的『總統府司法改革國是會議網站』，讓民眾能參與或關注政府事務。',
        ],
        zh: [
          '政大哲學系、政大經濟所。擔任Ｐｔｔ粉絲團主編期間的選文過程中，間接看見台灣許多社會與政治議題，他領悟『強化選舉權、推動罷免權』是一切的解方。他投入『割闌尾計畫』團隊，團隊創造了20年來第一次立委罷免投票，也在2016年底順利推動罷免法規下修。他創辦新媒體『沃草！Watchout』，提供大眾執行政治監督的平台，非選舉期間讓民眾可以監督政府；選舉期間則提供資訊讓民眾判斷，投票給心目中最棒的人。透過選舉與罷免權，為台灣建立更加完善的民主制度。沃草秉持著降低公民參與政治的門檻、開放政府的精神，藉由『國會無雙』、『市長給問嗎』、『給問擂台』，以及協助打造蒐集民眾意見到國是會議議程的『總統府司法改革國是會議網站』，讓民眾能參與或關注政府事務。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'ChiangN',
      name: {
        en: '姜寧',
        zh: '姜寧',
      },
      affiliation: {
        en: '',
        zh: '',
      },
      intro: {
        en: [
          '海外臺灣青年陣線紐澤西分會成員、臺灣人公共事務會會員、紐澤西臺灣同鄉會理事、羅格斯大學臺灣研究社社員、羅格斯大學神經科學博士生。在臺灣時從野草莓開始接觸社運，之後參與反媒體壟斷；到美國後參加太陽花學運串聯、婚姻平權串聯、聲援臺灣參加世界衛生大會以及定期在普林斯頓街頭宣傳臺灣的國際困境。只是個參與者，但是想朝著組織者邁進。平時在實驗室與細胞和大鼠為伴，其他時間則盡其所能地不務正業。目前最關注的是臺灣主權、性別暴力以及平權相關議題，希望有一天被壓迫的人們都能獲得自由。'
        ],
        zh: [
          '海外臺灣青年陣線紐澤西分會成員、臺灣人公共事務會會員、紐澤西臺灣同鄉會理事、羅格斯大學臺灣研究社社員、羅格斯大學神經科學博士生。在臺灣時從野草莓開始接觸社運，之後參與反媒體壟斷；到美國後參加太陽花學運串聯、婚姻平權串聯、聲援臺灣參加世界衛生大會以及定期在普林斯頓街頭宣傳臺灣的國際困境。只是個參與者，但是想朝著組織者邁進。平時在實驗室與細胞和大鼠為伴，其他時間則盡其所能地不務正業。目前最關注的是臺灣主權、性別暴力以及平權相關議題，希望有一天被壓迫的人們都能獲得自由。'
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 1
      uid: 'Liu',
      name: {
        en: '劉彥廷',
        zh: '劉彥廷',
      },
      affiliation: {
        en: '紐約哲學星期五、海外台灣青年陣線、紐約 g0v',
        zh: '紐約哲學星期五、海外台灣青年陣線、紐約 g0v',
      },
      intro: {
        en: [
          '因人脈廣闊故有「美東王金平，紐約彭于晏」之稱，2014年參與初始籌辦紐約哲五，至今紐哲已經超過 1000 人次參加。2016 年號招志工主辦紐約 g0v，也吸引超過 100 人參與。',
          '「聲援婚姻平權」、「營救李明哲」等紐約街頭運動發起人，也曾投書刊登在如《想想論壇》、《菜市場政治學》、《報導者》等海內外平面媒體。',
        ],
        zh: [
          '因人脈廣闊故有「美東王金平，紐約彭于晏」之稱，2014年參與初始籌辦紐約哲五，至今紐哲已經超過 1000 人次參加。2016 年號招志工主辦紐約 g0v，也吸引超過 100 人參與。',
          '「聲援婚姻平權」、「營救李明哲」等紐約街頭運動發起人，也曾投書刊登在如《想想論壇》、《菜市場政治學》、《報導者》等海內外平面媒體。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 3
      uid: 'Du',
      name: {
        en: '杜荷洲',
        zh: '杜荷洲',
      },
      affiliation: {
        en: '台灣人公共事務會麻州分會',
        zh: '台灣人公共事務會麻州分會',
      },
      intro: {
        en: [
          '台北長大，成長在一個” 美麗島時還沒出生，野百合時還太小，野草莓時已出國，太陽花時年已過三十” 的世代；一個台灣主體意識雖已漸漸萌芽，但還是徹底接受了完整的黨國教育的世代。我的夢想是希望台灣能夠正正常常的享有一個「國家」的身分。我覺得，既然我們人在美國，就應該做只有在海外才能為台灣做的事: 將台灣介紹到世界的舞台上. 2011 年到Boston工作後，加入FAPA草根民運的行列，向美國大眾介紹台灣, 也到國會遊說有利於台灣及台美關係的法案。我也是CafePhilo@Boston的義工，還有Boston Taiwanese Biotechnology Association (BTBA) 的創會會員之一。',
        ],
        zh: [
          '台北長大，成長在一個” 美麗島時還沒出生，野百合時還太小，野草莓時已出國，太陽花時年已過三十” 的世代；一個台灣主體意識雖已漸漸萌芽，但還是徹底接受了完整的黨國教育的世代。我的夢想是希望台灣能夠正正常常的享有一個「國家」的身分。我覺得，既然我們人在美國，就應該做只有在海外才能為台灣做的事: 將台灣介紹到世界的舞台上. 2011 年到Boston工作後，加入FAPA草根民運的行列，向美國大眾介紹台灣, 也到國會遊說有利於台灣及台美關係的法案。我也是CafePhilo@Boston的義工，還有Boston Taiwanese Biotechnology Association (BTBA) 的創會會員之一。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 4
      uid: 'Hsu',
      name: {
        en: '徐歆惠',
        zh: '徐歆惠',
      },
      affiliation: {
        en: '紐約哲學星期五、海外台灣青年陣線',
        zh: '紐約哲學星期五、海外台灣青年陣線',
      },
      intro: {
        en: [
          '紐約哲五志工、紐約大學國際事務碩士，研究興趣是經濟發展對人權與武裝衝突的影響，特別關注中國在緬甸的投資與緬甸的和平進程。是個老草莓，從大學起在一些抗爭運動沾過醬油，在紐約參與組織過聲援太陽花學運、支持台灣加入WHA等活動。對於組織與社群經營，不懂的比懂的多，希望與大家多切磋學習。',
        ],
        zh: [
          '紐約哲五志工、紐約大學國際事務碩士，研究興趣是經濟發展對人權與武裝衝突的影響，特別關注中國在緬甸的投資與緬甸的和平進程。是個老草莓，從大學起在一些抗爭運動沾過醬油，在紐約參與組織過聲援太陽花學運、支持台灣加入WHA等活動。對於組織與社群經營，不懂的比懂的多，希望與大家多切磋學習。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 5
      uid: 'Chiu',
      name: {
        en: '邱澗庚',
        zh: '邱澗庚',
      },
      affiliation: {
        en: '北卡草根論壇、海外台灣青年陣線',
        zh: '北卡草根論壇、海外台灣青年陣線',
      },
      intro: {
        en: [
          '海外台灣青年陣線成員、北卡草根論壇發起人及美編，是研究生物數學的理工宅，從330海外串連之後才開始接觸社運組織，兩年來搞組織搞串聯，把各種錯誤都犯盡，連累許多人之後，想把試誤的歷史開源，讓大家多走點我沒走過的冤枉路（？）做理論的人喜歡幻想，但持續在天真幻想和接地的中間找尋自己的位置。',
        ],
        zh: [
          '海外台灣青年陣線成員、北卡草根論壇發起人及美編，是研究生物數學的理工宅，從330海外串連之後才開始接觸社運組織，兩年來搞組織搞串聯，把各種錯誤都犯盡，連累許多人之後，想把試誤的歷史開源，讓大家多走點我沒走過的冤枉路（？）做理論的人喜歡幻想，但持續在天真幻想和接地的中間找尋自己的位置。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 6
      uid: 'Chong',
      name: {
        en: '鍾佳君',
        zh: '鍾佳君',
      },
      affiliation: {
        en: '台灣人公共事務會麻州分會、波士頓哲學星期五',
        zh: '台灣人公共事務會麻州分會、波士頓哲學星期五',
      },
      intro: {
        en: [
          '曾任波士頓台灣同鄉會幹事、 FAPA 麻州分會會長及區域委員。2011 年擔任紀錄片《好國好民》英文字幕翻譯及北美巡迴宣傳志工，三個月內趁周末造訪各地共十一州，主持了十七場電影放映討論。2010 年與朋友共同發起在哈佛廣場直接向公眾闡述台灣議題的 “Taiwan Outreach” 活動，每個月固定行動從無間斷至今。平常是個工程師, 致力於推動美國紡織產業的的下一波創新。喜歡以腳踏車的速度看世界。',
        ],
        zh: [
          '曾任波士頓台灣同鄉會幹事、 FAPA 麻州分會會長及區域委員。2011 年擔任紀錄片《好國好民》英文字幕翻譯及北美巡迴宣傳志工，三個月內趁周末造訪各地共十一州，主持了十七場電影放映討論。2010 年與朋友共同發起在哈佛廣場直接向公眾闡述台灣議題的 “Taiwan Outreach” 活動，每個月固定行動從無間斷至今。平常是個工程師, 致力於推動美國紡織產業的的下一波創新。喜歡以腳踏車的速度看世界。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 7
      uid: 'LinJ',
      name: {
        en: '林倢',
        zh: '林倢',
      },
      affiliation: {
        en: '台灣人公共事務會（FAPA）',
        zh: '台灣人公共事務會（FAPA）',
      },
      intro: {
        en: [
          '作為318運動參與者之一，林倢在佔領行動結束後積極投入社會運動工作，與議場內其他參與者共組青年團體「民主鬥陣」（現與臺左維新合併為「民主維新」），持續針對兩岸政治、經貿問題進行倡議與監督。除體制外倡議工作之外，2014年林倢曾作為台灣戰略模擬學會的研究助理，組成柯文哲台北市長選舉中的戰情部；2015至16年，她曾任李登輝基金會的研究部專員，並在2016選舉後成為蘇治芬委員的國會助理。現在，林倢在華府的台灣人公共事務會擔任政策助理（Policy Associate），持續關心兩岸關係、台美關係與青年世代正義、分配正義等相關議題，並致力於拓展台灣國際空間與促進國家正常化。',
        ],
        zh: [
          '作為318運動參與者之一，林倢在佔領行動結束後積極投入社會運動工作，與議場內其他參與者共組青年團體「民主鬥陣」（現與臺左維新合併為「民主維新」），持續針對兩岸政治、經貿問題進行倡議與監督。除體制外倡議工作之外，2014年林倢曾作為台灣戰略模擬學會的研究助理，組成柯文哲台北市長選舉中的戰情部；2015至16年，她曾任李登輝基金會的研究部專員，並在2016選舉後成為蘇治芬委員的國會助理。現在，林倢在華府的台灣人公共事務會擔任政策助理（Policy Associate），持續關心兩岸關係、台美關係與青年世代正義、分配正義等相關議題，並致力於拓展台灣國際空間與促進國家正常化。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 9
      uid: 'WuJY',
      name: {
        en: '吳濬彥',
        zh: '吳濬彥',
      },
      affiliation: {
        en: '民主維新',
        zh: '民主維新',
      },
      intro: {
        en: [
          '1988年出生，現為民主維新協會理事長（臺左維新與民主鬥陣青年組織合併）目標帶青年推動正名、制憲、入聯工作；同時與一些NGO工作者、學者、律師與地方工作者成立北北新巢協會，研究傳統產業轉型與在地經濟議題。目前正在推動大稻埕永樂布市的訪調與轉型計畫。',
        ],
        zh: [
          '1988年出生，現為民主維新協會理事長（臺左維新與民主鬥陣青年組織合併）目標帶青年推動正名、制憲、入聯工作；同時與一些NGO工作者、學者、律師與地方工作者成立北北新巢協會，研究傳統產業轉型與在地經濟議題。目前正在推動大稻埕永樂布市的訪調與轉型計畫。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 10
      uid: 'Hsiao',
      name: {
        en: '蕭新晟',
        zh: '蕭新晟',
      },
      affiliation: {
        en: '紐約 g0v 主辦人，國家寶藏、台灣正名器專案核心推手',
        zh: '紐約 g0v 主辦人，國家寶藏、台灣正名器專案核心推手',
      },
      intro: {
        en: [
          '是美東 g0v 社群的靈魂人物之一，專長囊括前端後端的「全端」工程師。除了歷屆美東黑客松無役不與之外，更在婚姻平權串連時，發動一人黑客松連夜做出打卡聲援地圖。',
        ],
        zh: [
          '是美東 g0v 社群的靈魂人物之一，專長囊括前端後端的「全端」工程師。除了歷屆美東黑客松無役不與之外，更在婚姻平權串連時，發動一人黑客松連夜做出打卡聲援地圖。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 14
      uid: 'Miao',
      name: {
        en: '苗博雅',
        zh: '苗博雅',
      },
      affiliation: {
        en: '社會民主黨',
        zh: '社會民主黨',
      },
      intro: {
        en: [
          '努力在現實中實現理想的青年政治工作者。社會民主黨全國委員，台大法律財經法學士。',
          '曾於律師事務所及科技公司擔任法務。在成為全職NGO工作者後，開啟一段雖千夫所指吾往矣的人生。',
          '318佔領運動後，參與籌組社會民主黨，參加2016年台北市立法委員選舉，在兩大黨夾殺之下取得12.5%選民認同。',
          '關注勞工權益、司法改革、性別平等、憲政民主發展、國家正常化。希望能讓台灣的下一代，在團結、平等、自由的國家，快樂成長。',
        ],
        zh: [
          '努力在現實中實現理想的青年政治工作者。社會民主黨全國委員，台大法律財經法學士。',
          '曾於律師事務所及科技公司擔任法務。在成為全職NGO工作者後，開啟一段雖千夫所指吾往矣的人生。',
          '318佔領運動後，參與籌組社會民主黨，參加2016年台北市立法委員選舉，在兩大黨夾殺之下取得12.5%選民認同。',
          '關注勞工權益、司法改革、性別平等、憲政民主發展、國家正常化。希望能讓台灣的下一代，在團結、平等、自由的國家，快樂成長。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 17
      uid: 'Wu',
      name: {
        en: '吳崢',
        zh: '吳崢',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: [
          '曾任林昶佐國會辦公室助理、林昶佐競選團隊總幹事。參與2014年318運動。從街頭、社會運動、選舉到政黨，不知不覺加入時代力量的行列已將近兩年，這兩年來在不同的崗位上，從不同角度參與和實踐政治工作，深深體會政治的複雜以及推動改革的不易，但仍希望在可預見的將來，能夠為時代力量和台灣的發展出一份心力。',
        ],
        zh: [
          '曾任林昶佐國會辦公室助理、林昶佐競選團隊總幹事。參與2014年318運動。從街頭、社會運動、選舉到政黨，不知不覺加入時代力量的行列已將近兩年，這兩年來在不同的崗位上，從不同角度參與和實踐政治工作，深深體會政治的複雜以及推動改革的不易，但仍希望在可預見的將來，能夠為時代力量和台灣的發展出一份心力。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 18
      uid: 'Chen',
      name: {
        en: '陳乃嘉',
        zh: '陳乃嘉',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: [
          '時代力量新聞輿情部聯絡人。曾任時代力量立法院黨團法案助理、外商商用房地產租賃公司總經理特助既行銷助理。台灣大學政治系國際關係組學士。大學畢業後先到私部門工作，在318學運之後才開始認真思考投入政治工作的可能性，2016年大選後加入時代力量，雖然政治工作似乎與日常生活非常遙遠，但每一分鐘的努力都扎實地在為生活爭取更好一點點的可能。'
        ],
        zh: [
          '時代力量新聞輿情部聯絡人。曾任時代力量立法院黨團法案助理、外商商用房地產租賃公司總經理特助既行銷助理。台灣大學政治系國際關係組學士。大學畢業後先到私部門工作，在318學運之後才開始認真思考投入政治工作的可能性，2016年大選後加入時代力量，雖然政治工作似乎與日常生活非常遙遠，但每一分鐘的努力都扎實地在為生活爭取更好一點點的可能。'
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 19
      uid: 'LinMY',
      name: {
        en: '林穎孟',
        zh: '林穎孟',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: [
          '時代力量發言人、林昶佐國會辦公室法案助理。曾任GAMANIA APP開發資深產品企劃、遊戲媒體社群企劃、台灣大學婦女研究室學程助理。清華大學人文社會學系學士、台灣大學社會學碩士。大學以來不斷思考「如何改變社會」，積極參與人權相關社會運動，畢業後在企業界打滾四年多，抱持持續關注政治的理念和行動。2016年為了實踐更多理想進入國會；但國會運作真正不簡單，有更多事要面對。',
        ],
        zh: [
          '時代力量發言人、林昶佐國會辦公室法案助理。曾任GAMANIA APP開發資深產品企劃、遊戲媒體社群企劃、台灣大學婦女研究室學程助理。清華大學人文社會學系學士、台灣大學社會學碩士。大學以來不斷思考「如何改變社會」，積極參與人權相關社會運動，畢業後在企業界打滾四年多，抱持持續關注政治的理念和行動。2016年為了實踐更多理想進入國會；但國會運作真正不簡單，有更多事要面對。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 19
      uid: 'LinYC',
      name: {
        en: '林鈺傑',
        zh: '林鈺傑',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: [
          '徐永明國會辦公室主任。曾任台北醫學大學語言中心秘書。東吳大學政治系學士及碩士。我在立法院關心棒球議題、關心體育、關心所有對台灣有益的事！國小開始看棒球比賽，三商虎是我第一支喜歡支持的球隊，後來陸續支持興農牛、義大犀牛，到現在支持富邦悍將。因為真的很喜歡棒球，所以國高中時打壘球，大學時參加東吳政治系棒球隊，身體力行的去參與棒球運動。體育是台灣堅強的軟實力，希望大家一起支持以台灣為名參加國際賽事！'
        ],
        zh: [
          '徐永明國會辦公室主任。曾任台北醫學大學語言中心秘書。東吳大學政治系學士及碩士。我在立法院關心棒球議題、關心體育、關心所有對台灣有益的事！國小開始看棒球比賽，三商虎是我第一支喜歡支持的球隊，後來陸續支持興農牛、義大犀牛，到現在支持富邦悍將。因為真的很喜歡棒球，所以國高中時打壘球，大學時參加東吳政治系棒球隊，身體力行的去參與棒球運動。體育是台灣堅強的軟實力，希望大家一起支持以台灣為名參加國際賽事！'
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    { // 19
      uid: 'YangYT',
      name: {
        en: '楊雅婷',
        zh: '楊雅婷',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: [
          '時代力量國際部。曾任環境研究技師、土壤物理實驗室助理。加州大學洛杉磯分校進修部建築和室內設計進修證照、加州大學河濱分校環境科學學士。318之後，在洛杉磯參與和舉辦與台灣相關的討論會或活動，協助推動台灣事務，進而幸運地認識了海外台灣青年陣線的一群熱血夥伴，2015年返台加入時代力量，繼續為台灣在國際上發聲而努力。',
        ],
        zh: [
          '時代力量國際部。曾任環境研究技師、土壤物理實驗室助理。加州大學洛杉磯分校進修部建築和室內設計進修證照、加州大學河濱分校環境科學學士。318之後，在洛杉磯參與和舉辦與台灣相關的討論會或活動，協助推動台灣事務，進而幸運地認識了海外台灣青年陣線的一群熱血夥伴，2015年返台加入時代力量，繼續為台灣在國際上發聲而努力。',
        ],
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
  ],
});

export default SpeakerData;
