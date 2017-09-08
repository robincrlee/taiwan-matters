import React from 'react';

import styles from '../styles.css';

import card1 from '../images/sdg-3.jpg';
import card2 from '../images/sdg-5.jpg';
import card3 from '../images/sdg-9.jpg';
import card4 from '../images/sdg-10.jpg';
import card5 from '../images/sdg-13.jpg';
import card6 from '../images/sdg-16.jpg';

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
const FactsData = Object.freeze({
  hero: {
    title: ['UN Sustainable Development Goals:', 'How does Taiwan stack up?'],
    subtitle: 'We shouldn’t have to do it alone… tell the UN the rest of the world is missing out on Taiwan. #KeepTaiwanFree #UNforTaiwan',
  },
  factCards: [
      {
        cardImg: card1,
        description: [
          'Taiwan’s',
          'universal healthcare system',
          'is both cost-efficient and high-quality, with an 80% satisfaction rate. The system offers free choice of healthcare providers and, low copays, and home care.'
        ],
        referenceLink: '#'
      },
      {
        cardImg: card2,
        description: [
          'Based on the UN Gender Inequality Index, Taiwan had the',
          '2nd highest gender equality ranking in the world in 2013,',
          'due to female participation in politics, educational attainment, and workforce participation.'
        ],
        referenceLink: '#'
      },
      {
        cardImg: card3,
        description: ['In 2016, the Taiwanese government launched a new',
          'industrial development policy based on promoting Taiwan’s existing “Five Innovative Industries”,',
          'with a focus on developing new “green” materials and the circular economy.'],
        referenceLink: '#'
      },
      {
        cardImg: card4,
        description: ['Taiwan routinely contributes funds for humanitarian assistance and disaster relief, as well as',
          'knowledge sharing to improve infrastructure-',
          'from farming in Haiti to improving access to institutions for vulnerable populations in Nepal.'],
        referenceLink: '#'
      },
      {
        cardImg: card5,
        description: ['Despite being left out of UNFCCC discussions, Taiwan has implemented its own ambitious plans to',
          'reduce carbon emissions and build sustainable communities,',
          'as well as training experts around the world on building environmental protection capacities.'],
        referenceLink: '#'
      },
      {
        cardImg: card6,
        description: [
          'A',
          'thriving and free civil society',
          'keeps Taiwan’s democratic institutions robust and accountable. In early 2017, a historic court ruling made Taiwan',
          'the first country in Asia to legalize gay marriage.'],
        referenceLink: '#'
      }
    ]
});

export default FactsData;
