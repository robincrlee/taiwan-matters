import React from 'react';

import styles from '../styles.css';

import aboutImg from '../images/02_about_03.png';
import tacecLogo from '../images/tacec_logo.png';
import tangLogo from '../images/tang_logo.png';
import otdLogo from '../images/otd_logo.png';

const textStyle = styles.bodyTextAbout

function Paragraph (props) {
  return <p className={textStyle}>{props.children}</p>
}
function Item (props) {
  return <span className={textStyle}>{props.children}</span>
}
function Itemize (props) {
  return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
}

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
const AboutData = Object.freeze({
  aboutImageSource: aboutImg,
  aboutImageAlternativeText: {
    en: 'About icon',
    zh: 'About 圖標',
  },
  organizations: [
    {
      name: {
        en: "TACEC",
        zh: "TACEC",
      },
      logoImageSource: tacecLogo,
      logoImageAlternativeText: {
        en: "TACEC Logo",
        zh: "TACEC 標誌",
      },
      introduction: {
        en: [
          <Paragraph key="p1">
            The first Taiwanese American Conference-East Cost (TACEC) was held in 1970 at Downingtown, Pennsylvania. It was a summer retreat for the area's Christian families but has turned into an event for the entire Taiwanese American community. Over the years, the conference has expanded its programs to encompass cultural and social activities, as well as issues related to human rights, the environment and current events in Taiwan. The number of participants has steadily grown, numbering over 2,000 in the late 80s and 90s.
          </Paragraph>
          ,
          <Paragraph key="p2">
            TACEC is hosted by Taiwanese Communities in five different areas: New York, New Jersey, Boston, Washington and Philadelphia (including south Jersey and Delaware). Each region is on a five year rotation and takes turns chairing the TACEC board that overseas the operation of TACEC.
          </Paragraph>
          ,
          <Paragraph key="p3">
            The conference now has a participation of about 600 - 800 people annually, with the majority being comprised of first generation Taiwanese Americans. Many second generation Taiwanese Americans who now have children have eagerly expressed interest in developing TACEC programs for their children and in boosting participation among their generational peers.
          </Paragraph>
        ],
        zh: [
          <Paragraph key="p1">
            第一屆美東台灣人夏令會於 1970 年在賓州的單靈頓舉行。開辦之初，由信奉基督的台灣鄉親籌劃，主要是作為教友夏日靈修，聚會之用。時過境遷，夏令會已不再是單純的宗教性活動。它的節目包涵了更多台美人關心的議題，也包含了有關台灣人權及重大歷史社會，政治事件的研討。夏令會每年均邀請各行各業的傑出台灣人至大會演講及經驗傳承。因此，參加夏令會的人數，最多時期參加人數高達二千人以上。
          </Paragraph>
          ,
          <Paragraph key="p2">
            夏令會由美東各地區台灣同鄉會輪流舉辦，參加的同鄉大多數居住在新英格蘭各州，包括麻州，康州，紐約，紐澤西，還有賓州，德拉瓦，馬里蘭，華府及維吉尼亞州等。參加夏令會的同鄉大多數是早期來美的留學生及他們家庭成員。一般而言，加夏令會的人員具有兩大特色，一是教育水準特別高，另一是年齡差距大，各年齡階層均有。
          </Paragraph>
          ,
          <Paragraph key="p3">
            現在夏令會每年均有六百至八百人參加，大多為第一代的台美人。過去參加的第二代台美人也開始養育小孩，也認為夏令會可以提供新一代台美人寶貴的經驗。他們也積極的參與，希望可以吸引更多過去參加過的世代再度參與。
          </Paragraph>
        ],
      },
      mission: {
        en: [
          <Itemize key="p1">
            <Item>
              To stimulate public interest in the cultural, religious, educational, social economic and other activities of the Taiwanese Americans.
            </Item>
            <Item>
              To enhance the Taiwanese cultural and religious heritage among Taiwanese Americans.
            </Item>
            <Item>
              To facilitate social contacts and exchanges among Taiwanese Americans and to promote friendship, mutual assistance and cooperation within the Taiwanese American community and between Taiwanese and other ethnic community.
            </Item>
            <Item>
              To organize and hold an annual conference or workshops at various college campus in the Northeastern region for the consideration and discussion of various topics relevant to life in the United States and issues related to current and future development of Taiwan.
            </Item>
          </Itemize>
        ],
        zh: [
          <Itemize key="p1">
            <Item>
              促進公眾對台美人在文化、宗教、教育、社會經濟等相關活動的興趣
            </Item>
            <Item>
              提升台美人文化與宗教的傳承
            </Item>
            <Item>
              推動台美人社群交流，並促進與其他台美人、台灣人或其他族裔等相關社團的友好交流與互助合作
            </Item>
            <Item>
              組織與籌辦年度美東夏令會或工作坊，廣納多元主題探討美國與台灣當前和未來發展的相關議題
            </Item>
          </Itemize>
        ],
      },
    },
    {
      name: {
        en: "TANG",
        zh: "TANG",
      },
      logoImageSource: tangLogo,
      logoImageAlternativeText: {
        en: "TANG Logo",
        zh: "TACEC 標誌",
      },
      introduction: {
        en: [
          <Paragraph key="p1">
            TANG is an all-volunteer organization focused on creating a nurturing community for Taiwanese American youth. We mentor our TA siblings and encourage them to become involved members of society by exploring our four themes: Identity, Community, Growth, and Family.  We also see ourselves as a convener for our 1st, 2nd, and 3rd generation Taiwanese Americans, providing a rare opportunity for families and old friends to reunite. We serve community members of all ages, with programs geared towards children age 3-6 up through Taiwanese American parents in their 30s-40s with children.
          </Paragraph>
          ,
          <Paragraph key="p2">
            TANG traces its roots back to TACEC (Taiwanese American Conference East Coast), a conference formed by the first wave of Taiwanese immigrants arriving in America in the 70’s and 80’s. Though it began as a retreat for families living in the Northeast, TACEC’s focus soon grew to incorporate issues related to human rights and advancing freedom and democracy on the island nation of Taiwan. Parents attending TACEC brought their children in tow, creating an impromptu community for second generation Taiwanese Americans. These youth eventually organized to create their own programming and served as one of the nation’s earliest communities for native born Taiwanese Americans, formally becoming TANG (Taiwanese American Next Generation) in 2003.
          </Paragraph>
        ],
        zh: [
          <Paragraph key="p1">
            「新生代臺美人協會」（Taiwanese American Next Generation, TANG）是一個志願者組織，致力於促進臺裔美籍青年的交流與成長。我們透過輔導系統，鼓勵參與的成員從「身份認同」、「社區關懷」、「成長陪伴」、「家庭交流」等四大主題去探索與發展。我們也肩負起召集臺裔美籍第一代到第三代的使命，透過舉辦活動，提供難得的機會讓家人與老朋友得以團聚。我們所服務的臺裔美籍對象不限年齡，包括了從3歲至6歲的兒童，到30歲至40歲的為人父母等。
          </Paragraph>
          ,
          <Paragraph key="p2">
            TANG 的組織起源自美東台美人夏令會（Taiwanese American Conference East Coast, TACEC）。美東台美人夏令會（TACEC）是由第一代台灣移民(追溯自美國七零與八零年代的移民潮)所創辦，為住在美東的臺灣移民家庭舉辦聯誼交流活動; 其後更開始廣納各種關心台灣公共事務的相關議題辦理活動，諸如人權、民主、與自由等。隨著第一代的台灣移民父母帶著孩子來參與，也間接促成了第二代的臺裔美籍青年建立起成長的社群團體。這些第二代台美青年隨後於2003年創建了全美第一個服務於臺裔美籍的交流組織：「新生代臺美人協會」(Taiwanese American Next Generation, TANG)。
          </Paragraph>
        ],
      },
      mission: {
        en: [
          <Paragraph key="p1">
            For the youth to be enriched by a loving Taiwanese community, so they can obtain a stronger sense of self and passionately pursue their convictions.
          </Paragraph>
        ],
        zh: [
          <Paragraph key="p1">
            讓年輕世代的臺美人能透過台灣人社群豐富的交流，培養出更堅強的自我認同與熱情去追求自身信念。
          </Paragraph>
        ],
      },
    },
    {
      name: {
        en: "OTD",
        zh: "OTD",
      },
      logoImageSource: otdLogo,
      logoImageAlternativeText: {
        en: "OTD Logo",
        zh: "OTD 標誌",
      },
      introduction: {
        en: [
          <Paragraph key="p1">
            Overseas Taiwanese for Democracy (OTD) is an alliance of students and young professionals who is devoted to the democratic development of Taiwan that has formed since the global solidarity actions for Sunflower Movement in 2014. In the past three years, members of OTD have established Cafe Philo (an intellectual and cultural salon), g0v (coders for government transparency), and study groups,  and planned numerous documentary screenings and street protests on the issues of textbook reforms and marriage equality.  OTD calls attention to local issues, and builds international channels of communication between civic societies, in hopes that Taiwan will continue to strive as a democratic society. OTD believes that the development of civic consciousness shall lead Taiwan grow into an equal and just society regardless of ethnicity, gender, sexuality, and class, and a sovereign nation that is built upon the foundations of comprehensive social justice.
          </Paragraph>
        ],
        zh: [
          <Paragraph key="p1">
            「海外臺灣青年陣線」(Overseas Taiwanese for Democracy) 源自於 2014 年，是各地聲援太陽花學運的組織串連的延續。近三年來，我們的成員在海外各城市持續經營哲學星期五、g0v、讀書會、紀錄片放映以及街頭倡議，也在反黑箱課綱與割闌尾計畫和婚姻平權議題上，串起連結國際公民社會的聲援力量。我們希望藉由持續關懷臺灣與在地社群，連結國際公民社會，推動臺灣民主憲政的深化與改革。「海外臺灣青年陣線」相信，公民意識的持續培力不輟是達成臺灣作為一個種族、性別、階級平等社會的必要途徑；而具有論述能力與責任承擔的成熟公民將會成為不可撼動的基柱，捍衛臺灣作為公義為尚、主權獨立的國家。
          </Paragraph>
        ],
      },
      mission: {
        en: [
          <Paragraph key="p1">
            Establish a political community of oversea Taiwanese students and young professionals, enhance local community ties, and advocate of for the development of Taiwanese independence, democracy, and human rights.  
          </Paragraph>
        ],
        zh: [
          <Paragraph key="p1">
            建立以旅居海外台灣青年為主的政治社群，促進各地連結，支持台灣獨立、民主、人權運動的發展。
          </Paragraph>
        ],
      },
    },
  ],
});

export default AboutData;
