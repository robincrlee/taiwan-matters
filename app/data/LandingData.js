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
        Join us to help the 23 million people of Taiwan achieve full recognition and equal treatment in the international community. We promote peace, security, democracy, and human rights. We hope to engage everyone in creating and raising awareness about Taiwan’s history and current situation.
      </Paragraph>
    ],
    zh: [
      <Paragraph key="p1">
        「四百萬年以來，在歐亞板塊與菲律賓海板塊的相互碰撞中，台灣一直就是持續向上、仰望星空 ，未來也就是這樣。」唐鳳, 2016
      </Paragraph>
      ,
      <Paragraph key="p2">
        如果有人問你，你對台灣的願景是甚麼，當你心中想到台灣的時候，你會如何想像它的未來？這是政務委員唐鳳去年接受香港電子媒體採訪時被問到的問題，而他跳脫傳統的回答方式也在網路上造成一片討論。探究唐鳳的回答，其實也不過就是本質上去描述台灣地裡形成的現象，然而這直白簡樸的回答卻剛好在這紛擾不安的動盪之際，不慌不忙，傳遞到每個台灣人的耳裡。Taiwan Matters裝置便以這樣的想像當作起點，透過空間裝置上的互動提供一種思考台灣的方式。
      </Paragraph>
      ,
      <Paragraph key="p3">
        此作品是由六件形貌各異的量體來構成台灣的山脈谷地、平原與其四周海床等地貌。每件量體在滑行游離和組合之際提供了多種使用的可能——東南方的海岸山脈延著呂宋島弧成了一個可供人躺臥的沙發、西南方的陸緣隱沒成為了一個桌子、西北方的台灣海峽則成為了一個有階梯的小舞台。這些可被推動的板塊們讓參觀者觸摸並感受到那真實存在卻又變動的台灣島，同時透過不同的量體配置提供多樣的空間行動，如集會演講與公民論壇等。配合在廣場上張起的圓形平台和其上的圖形與文字，在每次板塊被推移的過程中，參觀者都可以發現到有關於台灣不同面向的信息與線索。
        Taiwan Matters裝置希望能夠在這樣互動過程中讓更多參觀者可以親身體驗，並逐步地理解到台灣的存在、其困境與可能的未來，最後記錄下來成為我們在國際間繼續向上成長的養分。
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
  }
});

export default LandingData;
