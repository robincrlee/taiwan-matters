import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';

import FactsData from '../data/FactsData'

export default class Contact extends React.Component {
  render() {
    const factCard = (factItem, i) => (
      <Col md="4" className={styles.factCard}>
        <div className={styles[`factCard${i}`]}>
          <img className={styles.factCardImg} src={factItem.cardImg} />
          <p className={styles.factDesc}>{factItem.description.join(' ')}</p>
        </div>
      </Col>
    );

    return (
      <div>
        <div className={styles.factsHero}>
          <Container className={styles.heroCopy}>
            <Col md="10" md-offset="1">
              <img className={styles.factsHeroIcon} src={FactsData.hero.icon} />
              <h1>{FactsData.hero.title}</h1>
              <p>{FactsData.hero.subtitle}</p>
            </Col>
          </Container>
        </div>
        <div>
          <Container className={styles.factCards}>
            <Row>
              {FactsData.factCards.map((factItem, i) => factCard(factItem, i + 1))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
