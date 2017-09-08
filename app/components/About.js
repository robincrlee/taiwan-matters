import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';
import heroImg from '../images/hero_big.jpg';

import AboutData from '../data/AboutData';

export default class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
  }

  tabClick = (tab) => {
    this.setState({ tab });
  }

  render() {
    const lang = this.props.lang || "en";
    const { tab } = this.state;

    return (
      <div>
        <div className={styles.aboutHero}>
          <Container className={styles.heroCopy}>
            <Col md="10" md-offset="1">
              <h1>About the Movement</h1>
              <p>{AboutData.banner}</p>
            </Col>
          </Container>
        </div>
        <div className={styles.sectionBodyWhite}> 
          <Container className={styles.homeBody}>
            <Row>
              <Col md="8">
                <h3 className={styles.homeHeading}> WHO WE ARE</h3>
                <p>{AboutData.whoweare}</p>
              </Col>
              <Col md="4">
                <h3 className={styles.homeHeading}> WHAT WE DO</h3>
                <ul>
                  <li>Advocacy</li>
                  <li>Outreach</li>
                  <li>Relationship-building</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.sectionBodyBlack}> 
          <Container className={styles.homeBody}>
            <Row>
              <Col md="6">
                <h3 className={styles.homeHeadingBlack}> History</h3>
                <p>{AboutData.history[0]}</p>
                <p>{AboutData.history[1]}</p>
              </Col>
              <Col md="6">
                <img src={AboutData.historyImg[0]} className={styles.historyImg} />
                <img src={AboutData.historyImg[1]} className={styles.historyImg} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
