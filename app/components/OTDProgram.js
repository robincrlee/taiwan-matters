import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Motion, spring } from 'react-motion';
import Dialog from 'material-ui/Dialog';

import styles from '../styles.css';
import otdImg from '../images/otd_summit.png';

import logo from '../images/tacec_logo.png';
import tangLogo from '../images/tang_logo.png';
import otdLogo from '../images/otd_logo.png';
import plusSign from '../images/plusSign.jpg';
import minusSign from '../images/minusSign.jpg';
import carImg from '../images/car.jpg';
import planeImg from '../images/plane.jpg';

import OTDProgramData, {isMobile} from '../data/OTDProgramData';

export default class OTDProgram extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openedTitle: null, // null means everything is closed
      isSubsidyDialogOpen: false,
      isProjectListDialogOpen: false
    };
  }

  handleProgramClick = (title) => {
    this.setState({
      openedTitle: this.state.openedTitle === title ? null : title
    });
  }

  handleOpen = () => {
    this.setState({isSubsidyDialogOpen: true});
  };

  handleClose = () => {
    this.setState({isSubsidyDialogOpen: false});
  };

  render() {
    const lang = this.props.lang || "zh";
    const { tab } = this.state;
    const OTDSummitText = (
      <Col md="10" md-offset="1">
        {OTDProgramData.otdIntro[lang]}
        <h3 className={styles.heading}> G0V HACKATHON </h3>
        <div className={styles.headingBottom} />
        {OTDProgramData.g0vIntro[lang]}
      </Col>
    );

    const subsidyDialogTitleStyle = {
      fontSize: 33,
      color: '#64a680',
      fontWeight: 'bolder',
      paddingTop: isMobile ? 35 : 65,
      paddingLeft: isMobile ? 45: 65,
      letterSpacing: isMobile ? 2 : 9
    };

    const subsidyDialogBodyStyle = {
      padding: isMobile ? '0px 25px 24px' : '0px 65px 24px',
      letterSpacing: 0.5
    };

    const OTDProgramBody = ({title, time, speakers, description}, index) => {
      const { openedTitle } = this.state;
      const amIClicked = openedTitle === title;
      return (
        <div key={["session",index].join("-")}>
          <div className={styles.OTDProgramBody} onClick={() => this.handleProgramClick(title)}>
            <Col md="6">
              <div style={{display: 'flex'}}>
                <img src={amIClicked ? minusSign : plusSign} className={styles.OTDPlusSign} />
                <div className={styles.OTDProgramDesc}>
                  {title[lang]}
                </div>
              </div>
            </Col>
            <Col md="2">
              <div>
                {time}
              </div>
            </Col>
            <Col md="4">
              <div className={styles.OTDProgramSpeakers}>
                {speakers[lang]}
              </div>
            </Col>
          </div>
          <Motion defaultStyle={{ h: 0}} style={{ h: amIClicked ? spring(130) : spring(0)}}>
              {({ h }) =>
                <div className={styles.OTDProgramDetails} style={{height: h}}>
                  <p style={{margin: 30, marginTop: 20}}>{description[lang]}</p>
                </div>
              }
          </Motion>
        </div>
    )};

    const panelDiscussion = (
      <Col md="10" md-offset="1">
        <h3 className={styles.heading}> PANEL DISCUSSION </h3>
        <div className={styles.headingBottom} />
        {OTDProgramData.panelsByDate.map((panel, panelIndex) => [
          <img src={panel.dateImageSource} style={{marginTop: panelIndex === 0 ? 0 : 50}} />,
          panel.tracks.map(track =>
            <div>
              <h3 className={styles.OTDProgramHeading}>
                {track.title[lang]}
                <span className={styles.OTDProgramSubHeading}>
                  {track.subtitle[lang]}
                </span>
              </h3>
              {track.sessions.map(OTDProgramBody)}
            </div>
          )
        ])}
      </Col>
    );

    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={otdImg} alt="OTD Summit image" className={styles.otdImg}/></div>
        <Container className={styles.landingBody}>
		<Row style={{marginBottom: 55}}>
            {OTDSummitText}
          </Row>
          <Row>
            <a href={OTDProgramData.projectList.link} target="_blank">
              <Button color="primary" className={styles.OTDButton}>{OTDProgramData.projectList.buttonText[lang]}</Button>
            </a>
            <Button
              color="primary"
              className={styles.OTDButton}
              style={{marginLeft: window.innerWidth < 500 ? 0 : 7}}
              onClick={this.handleOpen}
            >
              {OTDProgramData.grantPolicy.buttonText[lang]}
            </Button>
          </Row>
          <Row>
            {panelDiscussion}
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </a>
        </div>
        <Dialog
          title={OTDProgramData.grantPolicy.dialogue.title[lang]}
          titleStyle={subsidyDialogTitleStyle}
          bodyStyle={subsidyDialogBodyStyle}
          modal={false}
          open={this.state.isSubsidyDialogOpen}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {OTDProgramData.grantPolicy.dialogue.feeBox[lang]}
          <div style={{width: '100%', borderBottom: '3px solid #17906a', padding: '10px 0px 10px', fontSize: 12}}>
            {OTDProgramData.grantPolicy.dialogue.feeFootnote[lang]}
          </div>
          <div style={{padding: '50px 0px 10px'}}>
            <div style={{fontSize: 15}}>{OTDProgramData.grantPolicy.dialogue.grantText[lang]}</div>
            {OTDProgramData.grantPolicy.dialogue.feeGrantBox[lang]}
            <div style={{marginBottom: 25, color: '#64a680', fontWeight: 'bolder'}}>
              {OTDProgramData.grantPolicy.dialogue.travelGrantText[lang]}
            </div>
            <div className={styles.popupBoxContainer}>
              <div className={styles.popupBox} style={isMobile ? {borderBottom: 'none'} : {borderRight: 'none'}}>
                <img src={carImg} style={{marginLeft: '25%'}}/>
                {OTDProgramData.grantPolicy.dialogue.drivingTravelGrantBox[lang]}
              </div>
              <div className={styles.popupBox}>
                <img src={planeImg} style={{marginLeft: '25%'}}/>
                {OTDProgramData.grantPolicy.dialogue.airborneTravelGrantBox[lang]}
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
