import React from 'react';

import styles from '../styles.css';

// import aboutImg from '../images/02_about_03.png';
// import tacecLogo from '../images/tacec_logo.png';
// import tangLogo from '../images/tang_logo.png';
// import otdLogo from '../images/otd_logo.png';

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

// format of a person:
// {
//   name: string with lang support
//   note: string with lang support (optional)
//   phone: string (optional)
//   email: string
// }
const ContactData = Object.freeze({
  contacts: [
      {
        title: {en: "TACEC", zh: "TACEC"},
        subtitle: {
          en: "TAIWANESE AMERICAN CONFERENCE / EAST COAST",
          zh: "美東台灣人夏令會",
        },
        people: [
          {
            name: {en: "Minze Chien", zh: "Minze Chien"},
            phone: "(703) 399-9888",
            email: "minzechien.tacec@gmail.com",
          },
          {
            name: {en: "Sue-Ching Lin", zh: "Sue-Ching Lin"},
            note: {en: "(Registration only)", zh: "（註冊事宜）"},
            email: "sclintacec@gmail.com",
          }
        ],
      },
      {
        title: {en: "TANG", zh: "TANG"},
        subtitle: {
          en: "TAIWANESE AMERICAN NEXT GENERATION",
          zh: "新生代臺美人協會",
        },
        people: [
          {
            name: {en: "Jenn Kao or Alex Chang", zh: "Jenn Kao 或 Alex Chang"},
            email: "hello@tangeneration.org",
          },
        ],
      },
      {
        title: {en: "OTD", zh: "OTD"},
        subtitle: {
          en: "OVERSEAS TAIWANESE FOR DEMOCRACY",
          zh: "海外台灣青年陣線",
        },
        people: [
          {
            name: {en: "Yu-Chien Tseng", zh: "曾鈺茜"},
            email: "crossover317@gmail.com",
          },
          {
            name: {en: "Yen-Ting Liu", zh: "劉彥廷"},
            email: "edsolitude@gmail.com",
          }
        ]
      }
    ]
});

export default ContactData;
