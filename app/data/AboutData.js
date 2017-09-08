import React from 'react';

import styles from '../styles.css';

import history1 from '../images/history-image-1.png';
import history2 from '../images/history-image-2.png';

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
  whoweare: "We are a coalition of passionate community activists who aim to safeguard Taiwan's democracy, human rights, press freedom and civil liberties. We are not affiliated or run by any organization or political party.",
  banner: "Join us to help the 23 million people of Taiwan achieve full recognition and equal treatment in the international community. We promote peace, security, democracy, and human rights. We hope to engage everyone in creating and raising awareness about Taiwan’s history and current situation.",
  history: [
    "In 1992, the Democratic Progressive Party (DPP) in Taiwan proposed that the ruling Chinese Nationalist Party (KMT) administration of Taiwan (Republic of China) should acknowledge the many consequences of Taiwan’s political isolation from the international community. Taiwan’s lack of recognition by the United Nations has been a political reality that sidelines its national and cultural status in the global community. Since this time, various groups have been active in trying to rectify this continued marginalization by lobbying for Taiwan’s inclusion as an independent member nation of the United Nations. Given that New York is where the United Nations headquarters is located, it motivated the Taiwanese Americans living in the Greater New York area to organize the “Committee for Admission of Taiwan to the United Nations” and start an annual rally, along with a number of activities, during the United Nations assembly session in September.  For the first several years, we promoted the theme of “UN membership for Taiwan”, emphasizing the legality of Taiwan as a sovereign state in the international community.",
    "In 1996, receiving the first official letter from the UN responding to the movement opened up a series of questions regarding the ambiguity of Taiwan’s international status."
  ],
  historyImg: [
    history1,
    history2
  ]

});

export default AboutData;
