import React from 'react';

import tacecLogo from '../images/tacec_logo.png';
import tangLogo from '../images/tang_logo.png';
import otdLogo from '../images/otd_logo.png';

import styles from '../styles.css';

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
const LandingData = Object.freeze({
  welcomeMessage: {
    en: [
      <Paragraph key="p1">
        The Conference Theme of 2017 TACEC-TANG is “Generations United, Taiwanese Americans Together”. It emphasizes the importance of unifying different generations of Taiwanese and Taiwanese Americans to work together toward helping our motherland Taiwan. It also indicates the need for Taiwan and America to work together for a better world society, especially at 2017 when new administrations with new opportunity commenced in both countries.
      </Paragraph>
      ,
      <Paragraph key="p2">
        Moving along with our theme, our conference will be joined by g0v's East Coast Hackathon, an event where participants spend a few days working together to solve public issues; and the Overseas Taiwanese for Democracy, an organization that brings together 1st generation young professional Taiwanese who are passionate about Taiwan.
      </Paragraph>
    ],
    zh: [
      <Paragraph key="p1">
        今年（2017）美東夏令會主題是「世代連結、台美一起」(Generations United, Taiwanese Americans Together)，著重在連結各世代台美人，凝聚台美雙方的力量，用行動來幫助台灣。
      </Paragraph>
      ,
      <Paragraph key="p2">
        「世代連結」，是大手牽小手的牽成，是新手扶老手的傳承。——看著新一代台美人的成長與茁壯，看著新生代年輕台美人對台灣關切與熱愛，我們希望將不同世代的經驗與力量連結起來，將台美人的力量延展於無限！
      </Paragraph>
      ,
      <Paragraph key="p3">
        「台美一起」，是代表2017年，特殊的時間契機。“台美”，代表了台美關係，也代表了台美人。——面臨台美兩邊都是新政府的新時代，我們希望兩國政府都能為人民帶來更好的生活，也希望兩國的關係能夠進入更好的新紀元！——面對台美人世代連結的時機，我們要 了解台美人所面臨的問題與困境，但同時也找出台美人在美國的優勢，介紹傑出的台美人，建立台美人的自信，開創新的契機。
      </Paragraph>
      ,
      <Paragraph key="p4">
        2017 美東夏令會由三個台美人組織共同籌備，也代表了三個夏令會的參加群體：Taiwanese American Conference – East Coast (TACEC, 第一代台美移民，夏令會的創始組織)、Taiwanese American Next Generation (TANG, 第二代及以後的台美人) 以及海外台灣青年陣線 (Overseas Taiwanese for Democracy, OTD, 太陽花後成立的第一代年輕台美人組織)。
      </Paragraph>
      ,
      <Paragraph key="p5">
        三個世代，三個組織，讓我們「世代連結、台美一起」，共創台美美好的未來！
      </Paragraph>
    ]
  },
  viewMore: {
    en: "view more",
    zh: "了解詳情"
  },
  organizers: [
    {
      logoImageSource: tacecLogo,
      logoImageAlternativeText: {en: "TACEC", zh: "TACEC"},
      logoImageExtraProps: {height: "114px"},
      link: "https://www.facebook.com/TACEC.org"
    },
    {
      logoImageSource: tangLogo,
      logoImageAlternativeText: {en: "TANG", zh: "TANG"},
      logoImageExtraProps: {width: "80%"},
      link: "http://tangeneration.org/"
    },
    {
      logoImageSource: otdLogo,
      logoImageAlternativeText: {en: "OTD", zh: "OTD"},
      logoImageExtraProps: {width: "100%"},
      link: "https://www.facebook.com/overseastaiwanesefordemocracy"
    }
  ],
  downloadPaperForm: {
    en: "Download Form",
    zh: "下載報名表格",
  },
  registerOnline: {
    en: "Registration Details",
    zh: "報名詳情",
  },
  deadlines: {
    en:
      <div>  <b>Registration Deadlines: </b><br />
        Early bird (paper): <b>Sun, April 30</b> <br />
        Early bird (online): <b>Mon, May 15</b> <br />
        Paper registration: <b>Mon, May 15</b> <br />
        Online registration: <b>Wed, May 31</b> <br />
        Late registration (online only): <b>Sat, June 10</b>
      </div>,
    zh:
      <div><b>報名截止日期: </b><br />
        早鳥 (紙本報名): <b>星期日, 四月 三十</b> <br />
        早鳥 (線上報名): <b>星期一, 五月 十五</b> <br />
        紙本報名: <b>星期一, 五月 十五</b> <br />
        線上報名: <b>星期三, 五月 三十一</b> <br />
        晚期報名 (僅限線上): <b>星期六, 六月 十號</b>
      </div>
  }
});

export default LandingData;
