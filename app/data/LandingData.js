import React from 'react';

import tacecLogo from '../images/tacec_logo.png';
import tangLogo from '../images/tang_logo.png';
import otdLogo from '../images/otd_logo.png';

import styles from '../styles.css';

const textStyle = styles.bodyText

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
  welcomeMessage: [
    <Paragraph key="p1">
			Join us to help the 23 million people of Taiwan achieve full recognition and equal treatment in the international community. We promote peace, security, democracy, and human rights. We hope to engage everyone in creating and raising awareness about Taiwan’s history and current situation.
    </Paragraph>
  ],
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
    links: {
        fbEvent: "https://www.facebook.com/events/854089958084652"
    },
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
