import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';
import speakerImg from '../images/04_Speaker2_03.png';
import speakerData from '../data/SpeakerData';

export default class Speaker extends React.Component {
  render() {
    const lang = this.props.lang || "zh";
    const speakerBlock = (speaker,i) => (
      <div key={i}>
          <Row className={styles.speakerBio}>
            <Col lg="2" lg-offset="2" md="2" md-offset="5" xs="6" xs-offset="2">
              <div className={styles[`speakerImg${speaker.uid}`] + ' ' + styles.speakerAvatar} />
            </Col>
            <Col lg="6" lg-offset="0" md="6" md-offset="2" xs="12" className={styles.speakerDetail}>
              <h3 className={styles.speakerTitle}>{speaker.name[lang]}</h3>
              <h4 className={styles.speakerSubtitle}>{speaker.affiliation[lang]}</h4>
              {speaker.intro[lang].map((str,i) =>
                <p key={i} className={styles.staffCardBodyText}>{str}</p>
              )}
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.iceDivider} />
            </Col>
          </Row>
      </div>
    );

    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={speakerImg} alt="Speaker icon image" className={styles.aboutImg}/></div>
        <Container className={styles.landingBody}>
	        <Row>
	          <Col md="12">
              {speakerData.speakers.map((speaker,i) => speakerBlock(speaker,i))}
	          </Col>
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <Link to="register">
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </Link>
        </div>
      </div>
    );
  }
}
