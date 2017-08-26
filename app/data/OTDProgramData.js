import React from 'react';

import july2img from '../images/july2.jpg';
import july3img from '../images/july3.jpg';
import styles from '../styles.css';

// Minimum style setup for the data

const viewPortWidth = window.innerWidth;
const isMobile = viewPortWidth < 600;

const textStyle = styles.bodyTextOTD

function Paragraph (props) {
  return <p className={textStyle}>{props.children}</p>
}
function Item (props) {
  return <span className={textStyle}>{props.children}</span>
}
function Itemize (props) {
  return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
}
function Link (props) {
  return <a {...props} target="_blank">{props.children}</a>
}
function FeeBox (props) {
  return <div {...props} style={{display: 'flex', color: '#64a680'}}>{props.children}</div>
}
function FeeText (props) {
  return <div {...props} style={{paddingTop: 10, paddingLeft: 10, fontWeight: 'bolder'}}>{props.children}</div>
}
function FeeNum (props) {
  return <div {...props} style={{fontSize: 33, paddingTop: isMobile ? 18 : 0}}>{props.children}</div>
}
function FeeNote (props) {
  return <div {...props} style={{fontSize: 12, paddingTop: 25, color: '#777'}}>{props.children}</div>
}
function FeeGrantBox (props) {
  return <div {...props} style={{display: 'flex', color: '#64a680'}}>{props.children}</div>
}
function FeeGrantText (props) {
  return <div {...props} style={{paddingTop: 10, fontWeight: 'bolder'}}>{props.children}</div>
}
function FeeGrantNum (props) {
  return <div {...props} style={{fontSize: 33}}>{props.children}</div>
}
function TravelGrantDetailBox (props) {
  return <p {...props} style={{fontSize: 12, marginTop: 25}}>{props.children}</p>
}

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
const OTDProgramData = Object.freeze({
  otdIntro: {
    en: [
      <Paragraph key="p1">
        Overseas Taiwanese Democracy, aka OTD,
        <br />
        is an activist organization that has been established since the 318 Sunflower Movement in 2014.
      </Paragraph>
      ,
      <Paragraph key="p2">
        The OTD Summit of 2017 will combine NGO social activism and g0v hackathon to focus on empowering the overseas Taiwanese to make impacts on the particular international politics between Taiwan, the US, and China under globalization.
        <br />
        Utilizing the geographical advantages, the OTD Summit aims to support Taiwan in the current geopolitical contests and advance the process of domestic transnational justice and social transformation.
      </Paragraph>
    ],
    zh: [
      <Paragraph key="p1">
        海外台灣青年陣線（Overseas Taiwanese for Democracy），
        <br />
        又稱海台青或 OTD，是後 318 的海外台灣人社運組織。
      </Paragraph>
      ,
      <Paragraph key="p2">
        2017海台青年會結合NGO和g0v黑客松，聚焦在全球化及台美中特殊國際政治下，台灣人在海外所能發揮的影響力。
        <br />
        我們希望利用地利之便，一方面幫助台灣對外抗衡全球化浪潮和區域政治角力，一方面加速台灣內部轉型正義和社會改革的腳步！
      </Paragraph>
    ]
  },
  g0vIntro: {
    en: [
      <Paragraph key="p1">
        A 36-hour marathon for open data and data visualization. Meet people with all kinds of skills!
      </Paragraph>
      ,
      <Paragraph key="p2">
        The <Link href="http://g0v.tw/en-US/about.html">g0v</Link> community aims to transform the government with fully transparent and decentralized framework of culture and technology, and  have demonstrated a new way to combine activism online and offline in Taiwan. Since the introduction of the g0v model to the Taiwanese civil society in the US in 2014, it has brought together hundreds of people in the previous g0v hackathon sessions to create projects of data visualization and open-source softwares that have been influential to the democratic progression in Taiwan. This year, we bring together the g0v hackathon model with local NGOs and social activist groups, such as FAPA and OTD, to produce projects helpful for the Taiwanese society in various ways. If you are a designer, web developer, or have participated in FAPA or other NGOs and social activist groups, please join the hackthon and contribute your experience and talent.
      </Paragraph>
      ,
      <Paragraph key="p3">
        Ask not why nobody is doing this. You are the “nobody”, and “nobody” can do everything!
      </Paragraph>
    ],
    zh: [
      <Paragraph key="p1">
        36 小時熱血衝刺，規劃行動方案、開發資訊與資料工具、認識十八般武藝的朋友！
      </Paragraph>
      ,
      <Paragraph key="p2">
        Hackathon 給人的印象就是coding…coding…coding…但參加過 g0v 黑客松的人都知道，程式只是專案的一部份；專案的完成，更仰賴議題的發掘、強大的宣傳、有效率的地面組織戰、或對開放資料做出有影響力的詮釋。廣義來說，社運組織的輿情監控、<Link href="https://www.facebook.com/simpleinfo">《圖文不符》</Link>的各種懶人包、開放政治獻金的監察院影印部隊，都是不含程式的專案呢！今年，我們想嘗試一個新想法，將 g0v 黑客松的概念帶進美東的 NGO 和社運模式！
      </Paragraph>
      ,
      <Itemize key="p3">
        <Item>
          所有專案初期保持開源，開放，共同協作的模式
        </Item>
        <Item>
          扭轉社運圈遇到議題先開冗長共識營的運作模式，兩天做出可行的成果、時間表、組織分工
        </Item>
        <Item>
          接力完成過去兩屆美東 g0v 中持續推動的專案
        </Item>
      </Itemize>
      ,
      <Paragraph key="p4">
        不要問為什麼沒有人做這個，先承認你就是「沒有人」，因為「沒有人」是萬能的！
      </Paragraph>
    ]
  },
  projectList: {
    buttonText: {
      en: "Hackfoldr",
      zh: "黑客松 Hackfoldr",
    },
    link: "https://beta.hackfoldr.org/otd-hackathon",
  },
  grantPolicy: {
    buttonText: {
      en: "Reimbursement",
      zh: "補助辦法",
    },
    dialogue: {
      title: {
        en: "Fee and Reimbursement",
        zh: "報名費與補助",
      },
      feeBox: {
        en: <FeeBox>
              <FeeText>Early bird  $</FeeText><FeeNum>180</FeeNum><FeeNote>&nbsp;(before 5/15)</FeeNote>
              <FeeText>Regular  $</FeeText><FeeNum>190</FeeNum>
            </FeeBox>,
        zh: <FeeBox>
              <FeeText>早鳥  $</FeeText><FeeNum>180</FeeNum><FeeNote>（5/15 之前）</FeeNote>
              <FeeText>一般  $</FeeText><FeeNum>190</FeeNum>
            </FeeBox>,
      },
      feeFootnote: {
        en : "Contributors of the hackathon are eligible for reimbursement of registration fee and travel.",
        zh : "黑客松貢獻者能獲得交通補助以及 $80 的報名費補助",
      },
      grantText: {
        en: "If your name appears on the contributor list of any of the projects, OTD provides registration and travel reimbursements:",
        zh: "若您參與的專案有在最後一天的大會中進行成果報告，並且您在專案小組名單上，OTD 可提供通交通費以及報名費補助：",
      },
      feeGrantBox: {
        en: <FeeGrantBox>
              <FeeGrantText>- Registration fee reimbursement:  $</FeeGrantText><FeeGrantNum>80</FeeGrantNum>
            </FeeGrantBox>,
        zh: <FeeGrantBox>
              <FeeGrantText>- 報名費補助  $</FeeGrantText><FeeGrantNum>80</FeeGrantNum>
            </FeeGrantBox>,
      },
      travelGrantText: {
        en: "- Travel reimbursement (choose one):",
        zh: "- 旅遊補助（以下擇一）",
      },
      drivingTravelGrantBox: {
        en:
          <TravelGrantDetailBox>
            By car: $0.50 per car per mile, $100 max.
          </TravelGrantDetailBox>,
        zh:
          <TravelGrantDetailBox>
            開車：每車每英哩補助 $0.50, 最高 $100
          </TravelGrantDetailBox>,
      },
      airborneTravelGrantBox: {
        en:
          <TravelGrantDetailBox>
            By air, train, or bus (with receipt):<br/>
            - Eastern timezone: $100 max.<br/>
            - Central timezone: $200 max.<br/>
            - Pacific/Mountain timezones: $300 max.
          </TravelGrantDetailBox>,
        zh:
          <TravelGrantDetailBox>
            飛機,火車及公車 (皆為實報實銷)：<br/>
            - 東岸時區：最高 $100 <br/>
            - 中部時區: 最高 $200 <br/>
            - 西岸時區 (包含山區時區): 最高 $300
          </TravelGrantDetailBox>,
      },
    },
  },
  panelsByDate: [
    {
      dateImageSource: july2img,
      tracks: [
        {
          title: {
            en: 'Take Action in the US',
            zh: '在美行動施力點',
          },
          subtitle: {
            en: 'There are certain things that can only be done in the US',
            zh: '因為我們在美國，有些事只有我們能做！',
          },
          sessions: [
            {
              title: {
                en: 'Create more authentic narratives about Taiwan in the American media',
                zh: '讓美國媒體對台灣的敘述更貼近真實',
              },
              time: '14:00 - 14:50',
              speakers: {
                en: 'Yen-Ting Edward Liu | Ho-Chou Tu',
                zh: '劉彥廷 | 杜荷洲',
              },
              description: {
                en: 'The American media often contains false information and misguided reports about Taiwan, creating obstacles for Americans to understand the actual relationship between Taiwan and China and prevented them from supporting Taiwan. This panel will discuss the political issues behind the misrepresentations of Taiwan in American media, and brainstormed on ways to intervene these mainstream representations through grassroots media relation building.',
                zh: '美國媒體對台灣的報導常常充滿誤解，不少報導呈現出的台灣印象停留在台灣是中國內戰後分離的政權，並且認為台灣才是威脅兩岸和平的因子。台灣人民真正的國族認同，以及中國對台灣的打壓威脅常常被忽略。這樣的報導敘事有礙美國人真正了解台美中關係，並支持台灣。本場 Panel 將討論美國媒體報導台灣的模式以及背後的政治原因，並且從草根組織媒體關係經營的角度討論相應之道。',
              },
            },
            {
              title: {
                en: 'How to advocate for Taiwan in the American policy circle?',
                zh: '如何爭取美國政策圈支持台灣',
              },
              time: '15:00 - 15:50',
              speakers: {
                en: 'Russell Hisao | Hsi-Ming Lin',
                zh: 'Russell Hsiao | 林希明',
              },
              description: {
                en: 'In D.C., the political forces are separated into three areas: the Congress, the state department, and the think tanks. The civil society can usually influence policy making through the routes of revealing information to the think tanks and creating policy suggestions. This panel will invite experts from the think tanks and the state department to discuss how NGOs and private citizens can sway the policy-making direction about Taiwan in the US and international society.',
                zh: '在華府，影響美國政策與國際政治作用力集中的三個領域分別為國會、國務院與智庫；而能夠以草根組織或公民力量影響的途徑則主要為國會遊說與智庫資訊揭露/政策建議。這場座談將邀請曾從事與智庫或國會相關工作的講者，分享各自領域的特性與政治力作用方式，了解非政府代表的組織和個人怎麼以自身力量槓桿美國與國際社會對台灣的政策走向。',
              },
            },
            {
              title: {
                en: 'Coalition building between Taiwanese and American civil society',
                zh: '台美公民社會結盟的預期成效與挑戰',
              },
              time: '16:00 - 16:50',
              speakers: {
                en: 'Ciwang Teyra | Lee Tzu-Tung | Jennifer Lu',
                zh: 'Ciwang Teyra | 李紫彤 | 呂欣潔',
              },
              description: {
                en: 'Besides the nation-state diplomatic relationship between the R.O.C. and the US government, NGOs are also building coalitions and alliances over various types of global issues. This panel will discuss how civil societies and NGOs can create international advocacy work through the cases of indigenous rights and LGBTQ rights to improve the lives and human rights of diverse communities.',
                zh: '在中華民國與美國政府政治交涉之外，各個公民 NGO 也在各種全球性議題上互相串連結盟。本場座談將以原住民權益、LGBTQ 人權為例，討論在政府主導的國際關係之外，公民團體可以怎麼進行國際串連，以及如何有效的藉由這些非政府組織串連來改善各族群的基本人權及生活。',
              },
            },
          ],
        },
        {
          title: {
            en: 'Workshop on organizational building',
            zh: '組織經營工作坊',
          },
          subtitle: {
            en: 'Experience sharing on organizational building and taking action in the U.S.',
            zh: '分享在美國組織行動的技巧與經驗',
          },
          sessions: [
            {
              title: {
                en: 'g0v as a new model of organizational building',
                zh: 'g0v 模式作為一種新組織經營法',
              },
              time: '14:00 - 14:50',
              speakers: {
                en: 'Hsin Hsiao',
                zh: '蕭新晟',
              },
              description: {
                en: 'Since 2012, the anarchist style of g0v community has created a new kind of organizational building model that reached tens and thousands of netizens and created projects that makes civic participation easier. From the East Coast g0v community to the DC hackathon, NJ hackathon, and NY hackathon to the OTD hackathon, how do projects of various scales and sizes create social impacts for the Taiwanese society across the ocean without the “real presence” of any person?',
                zh: '從 2012 年第一個黑客松做出「中央政府預算視覺化」、到 318 後大松小松落玉盤的空前盛況，g0v 的無政府經營模式到底用了什麼樣的魔力召喚出神通廣大的鄉民？而美東的 g0v 社群從華府黑客松、紐澤西黑客松、紐約黑客松、到這次海台青社運松，各種美東土生土長的大小型專案又如何讓遠在海外的「沒有人」跨海對台灣社會改革作出驚人的貢獻呢？',
              },
            },
            {
              title: {
                en: 'Activism abroad: from grassroots community building to global solidarity',
                  zh: '海外怎麼搞社運？從在地草根組織到全球串連',
              },
              time: '15:00 - 15:50',
              speakers: {
                en: 'Chia-Chun Jennie Chung | Annabelle Hsin-Hui Hsu | Jian-geng Chiou | Ning Chiang',
                zh: '鍾佳君 | 徐歆惠 | 邱澗庚 | 姜寧',
              },
              description: {
                en: 'The persistence in building local organizations, issue awareness, and social networks is the necessary ground work of political activism. However, activist organizations often face issues of lacking idea inspiration or lacking resources to continue the operation. This panel aims to create a platform for local organizers to share ideas of creating sustainable organizations and large-scale solidarity action building for future activities. ',
                zh: '常常我們會問，你的社運「啟蒙」是什麼？得到的答案往往是因為朋友圈，或是參加了某次活動聽了某場演講。持續在地扎根的組織培力、議題關注、以及人脈網絡的建立都是必須的。但在承平時期，社運組織常常面臨靈感或資源不足等各種組織經營問題。這場 Panel 除了希望能藉由組織交流，讓各地潛在組織者找到長久經營的模式，也分享幾次大型串連活動的經驗，為之後可能的串連行動鋪路。',
              },
            },
            {
              title: {
                en: 'Digital marketing for grassroots organization',
                zh: '透過社群網路讓非同溫層變成同溫層:自媒體X公民運動',
              },
              time: '16:00 - 16:50',
              speakers: {
                en: 'Zu Yi Lin',
                zh: '林祖儀',
              },
              description: {
                en: 'Organizers often hope to promote our visions to target audiences and push them to take actions such as donation, petition, reposting articles, and participating an event. Thus, good marketing is the key to successful activism. This panel will discuss how to improve the reachability and conversion rates through the online technologies such as social network sites and landing pages.',
                zh: '對於組織者來說，我們總是希望能夠透過網路讓我們的理念觸及到更多我們的目標群眾，也希望這些人能夠被我們感動，並採取行動，如捐款、連署、轉貼文章、參加活動等。所以，好的行銷是運動成功的關鍵，這場 Panel 將分享如何有效地透過社群媒體、landing pages 等網路工具來行銷，提升觸及率以及轉換率。',
              },
            },
          ],
        },
      ],
    },
    {
      dateImageSource: july3img,
      tracks: [
        {
          title: {
            en: 'Conversations on Taiwan-US Relations',
            zh: '台美議題思辨',
          },
          subtitle: {
            en: 'Establishing a strategy in the long run.',
            zh: '在行動時，怎麼才知道什麼才是對的方向？'
          },
          sessions: [
            {
              title: {
                en: 'How should the civil society respond to the Taiwan-US relations?',
                zh: '如何回應在國際戰略與經貿佈局下的台美中關係',
              },
              time: '14:00 - 14:50',
              speakers: {
                en: 'Chung-chiang Lai | Jun-yan Wu | June Lin',
                zh: '賴中強 | 吳濬彥 | 林倢',
              },
              description: {
                en: 'While NGOs are usually not at the front line of international political contests, they play a critical role in protecting ordinary people’s basic rights in the face of globalization and neoliberalism, where multinational corporations and the nation-states exploit the everyday living of citizens. This panel will discuss how NGOs respond to the increasing pressure of trades and politics on Taiwan from the two empires . ',
                zh: '雖然公民團體往往無法躍升於國際政治競技場中第一線，但很可能是台灣面對全球化與新自由主義浪潮、跨國政商集團日益綿密的剝削網絡，在以國家為單位的全球治理現況中，捍衛基層人民權益的最後一道防線。本場 Panel 將討論在台美中戰略關係的角力中，公民團體如何回應在兩大強國對台灣施加的貿易與政治壓力。',
              },
            },
          ],
        },
      ],
    },
  ],
});

export default OTDProgramData;
