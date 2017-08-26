import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';
import programImg from '../images/03_Program2_03.png';
import handbook from '../images/handbook.pdf';
import programData from '../data/programdata';
import { toAbsPath } from '../utils'

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    };
  }

  tabClick = (tab) => {
    this.setState({ tab });
  }

  render() {
    const langPath = this.props.lang;
    const lang = langPath || "en";
    const { tab } = this.state;
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;

    const getDate = (dateString) => dateString ? dateString.split('T')[0].split('-')[2] : '';
    const trimStringForMobile = (string, trimLength) => (isMobile && string.length > trimLength) ? string.substr(0, trimLength) + '...' : string;

    const July1ScheduleContent = programData.filter(data => getDate(data.Date) === '01' && data.Topic).map((program, index) =>
      (
      <div className={styles.scheduleItem} key={index}>
        <div className={styles.scheduleItemTime}>{program.Time}</div>
        <div className={styles.scheduleItemActivity}>{trimStringForMobile(`${program['Speaker 1'] && '「'}${program.Topic}${program['Speaker 1'] && '」'} ${program['Speaker 1'] || ''} ${program['Speaker 2'] || ''} ${program['Speaker 3'] || ''} ${program['Speaker 4'] || ''}`, 35)}</div>
      </div>
      )
    );
    const July1Schedule =
    (
      <div className={styles.scheduleBox}>
        {July1ScheduleContent}
      </div>
    );

    const July2ScheduleContent = programData.filter(data => getDate(data.Date) === '02' && data.Topic).map((program, index) =>
      (
      <div className={styles.scheduleItem} key={index}>
        <div className={styles.scheduleItemTime}>{program.Time}</div>
        <div className={styles.scheduleItemActivity}>{trimStringForMobile(`${program['Speaker 1'] && '「'}${program.Topic}${program['Speaker 1'] && '」'} ${program['Speaker 1'] || ''} ${program['Speaker 2'] || ''} ${program['Speaker 3'] || ''} ${program['Speaker 4'] || ''}`, 35)}</div>
      </div>
      )
    );

    const July2Schedule = (
      <div className={styles.scheduleBox}>
        {July2ScheduleContent}
      </div>
    );

    const July3ScheduleContent = programData.filter(data => getDate(data.Date) === '03' && data.Topic).map((program, index) =>
      (
      <div className={styles.scheduleItem} key={index}>
        <div className={styles.scheduleItemTime}>{program.Time}</div>
        <div className={styles.scheduleItemActivity}>{trimStringForMobile(`${program['Speaker 1'] && '「'}${program.Topic}${program['Speaker 1'] && '」'} ${program['Speaker 1'] || ''} ${program['Speaker 2'] || ''} ${program['Speaker 3'] || ''} ${program['Speaker 4'] || ''}`, 35)}</div>
      </div>
      )
    );

    const July3Schedule = (
      <div className={styles.scheduleBox}>
        {July3ScheduleContent}
      </div>
    );

    const July4ScheduleContent = programData.filter(data => getDate(data.Date) === '04' && data.Topic).map((program, index) =>
      (
      <div className={styles.scheduleItem} key={index}>
        <div className={styles.scheduleItemTime}>{program.Time}</div>
        <div className={styles.scheduleItemActivity}>{trimStringForMobile(`${program['Speaker 1'] && '「'}${program.Topic}${program['Speaker 1'] && '」'} ${program['Speaker 1'] || ''} ${program['Speaker 2'] || ''} ${program['Speaker 3'] || ''} ${program['Speaker 4'] || ''}`, 35)}</div>
      </div>
      )
    );

    const July4Schedule = (
      <div className={styles.scheduleBox}>
        {July4ScheduleContent}
      </div>
    )
    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={programImg} alt="Program icon image" className={styles.aboutImg}/></div>
        <div className={styles.tabBand}>
          <div className={tab === 0 ? styles.tabCategoryLeftActive : styles.tabCategoryProgramLeft} onClick={() => this.tabClick(0)}>
            JULY 1, SAT
          </div>
          <div className={tab === 1 ? styles.tabCategoryActive : styles.tabCategoryProgram} onClick={() => this.tabClick(1)}>
            JULY 2, SUN
          </div>
          <div className={tab === 2 ? styles.tabCategoryActive : styles.tabCategoryProgram} onClick={() => this.tabClick(2)}>
            JULY 3, MON
          </div>
          <div className={tab === 3 ? styles.tabCategoryActive : styles.tabCategoryProgram} onClick={() => this.tabClick(3)}>
            JULY 4, TUE
          </div>
          <Link to={toAbsPath(langPath, "otd")}>
            <div className={styles.tabCategoryProgram}>
              OTD
            </div>
          </Link>
        </div>
        <Container className={styles.landingBody}>
		<Row>
            {/*<div className={styles.panelDetails}>
              <div className={styles.panelDetailContent}>
                <small> July 2, Sunday 3:00 pm </small>
                <h3 className={styles.heading}> Panel Discussion 1 </h3>
                <div>
                  <h4> Track 1: 公民社會如何回應在國際戰略與經貿佈局下的台美中關係？ </h4>
                  <p> body text blah blah blah.... </p>
                </div>
                <div>
                  <h4> Track 2: g0v模式作為一種新組織經營法，以及與美東社群過去成果？ </h4>
                  <p> body text blah blah blah.... </p>
                </div>
              </div>
            </div>*/}
	          <Col md="10" md-offset="1">
              <div style={{height: 850, overflow: 'scroll'}}>
                 <p className={styles.bodyTextAbout}>
                   For the most updated information please download the <a href={handbook} target="_blank"> Program Handbook </a>
                 </p>
                 <h3 className={styles.contactHeading}>{lang === 'en' ? 'Schedule' : '節目表' }</h3>
	               <p className={styles.bodyTextAbout}>
                  {tab === 0 ? July1Schedule : (tab === 1 ? July2Schedule : (tab === 2 ? July3Schedule : July4Schedule))}
                </p>
              </div>
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
