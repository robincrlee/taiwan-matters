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
// import heroImgSmall from '../images/hero_small.png';
import logoMarker from '../images/map-07.png';
import mapInfo from '../images/map_info.png';
import dotImg from '../images/dot.png';
import regForm from '../images/form.pdf';
import GoogleMapReact from 'google-map-react';

import { toAbsPath } from '../utils'

import LandingData from '../data/LandingData'

export default class Landing extends React.Component {
  render() {
    const langPath = this.props.lang;
    const lang = langPath || "en";
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;
    const mapCenter = isMobile ? [39.9518694, -75.602182] : [39.9662578,-75.1395344];
    return (
      <div>
        <div className={styles.landingHero}>
          <img src={heroImg} alt="TACEC 2017 main image" className={styles.landingHeroImg}/>
        </div>
        <Container className={styles.landingBody}>
          <Row>
            <Col md="10" md-offset="1">
              <h3 className={styles.heading}> GENERATIONS UNITED,<br/> TAIWANESE AMERICANS TOGETHER. </h3>
              {LandingData.welcomeMessage[lang]}
              <div className={styles.homepageBoxContainer} style={isMobile ? {marginLeft: -10 + (viewPortWidth - 260) / 2} : {}}>
                <Link to={toAbsPath(langPath, "schedule")}>
                  <div className={styles.homepageBox} style={isMobile ? {borderBottom: 'none'} : {borderRight: 'none'}}>
                    <h3 className={styles.hpBoxHeading}>TACEC<br/>PROGRAM</h3>
                    <p className={styles.hpViewMore}> {LandingData.viewMore[lang]} </p>
                    <img src={dotImg} style={{marginTop: -33}}/>
                  </div>
                </Link>
                <a href='http://tangeneration.org/programs/' target='_blank'>
                  <div className={styles.homepageBox} style={isMobile ? {borderBottom: 'none'} : {borderRight: 'none'}}>
                    <h3 className={styles.hpBoxHeading}>TANG CONFERENCE</h3>
                    <p className={styles.hpViewMore}> {LandingData.viewMore[lang]} </p>
                    <img src={dotImg} style={{marginTop: -33}}/>
                  </div>
                </a>
                <Link to={toAbsPath(langPath, "otd")}>
                  <div className={styles.homepageBox}>
                    <h3 className={styles.hpBoxHeading}>OTD<br/>SUMMIT</h3>
                    <p className={styles.hpViewMore}> {LandingData.viewMore[lang]} </p>
                    <img src={dotImg} style={{marginTop: -33}}/>
                  </div>
                </Link>
              </div>
	           </Col>
            </Row>
            <Row>
              <Col md="4" md-offset="4">
                <div className={styles.bodyTextAbout} style={{textAlign: 'center', marginTop: 90}}>
                  {LandingData.deadlines[lang]}
                </div>
              </Col>
            </Row>
            <Row>
              <Link to="/register">
                <Button color="primary" className={styles.OTDButton} style={{fontSize: 15}}>{LandingData.registerOnline[lang]}</Button>
              </Link>
            </Row>
        </Container>
        {viewPortWidth < 700 && (
        <img
          src={mapInfo}
          width="100%"
        />)}
        <div style={{height: 480, width: '100%'}}>
          <GoogleMapReact
             bootstrapURLKeys={{key: 'AIzaSyDeZuJsUlNfaMcKn0JBHDfMl2TzALkPwUk'}}
             defaultCenter={mapCenter}
             defaultZoom={10}
             options={{draggable: false, zoomControl: false, scrollwheel: false, scaleControl: false, disableDoubleClickZoom: true}}
             disableDefaultUI={true}
           >
             <div
               lat={39.9518694}
               lng={-75.602182}
             >
               <img
                 src={logoMarker}
                 width={60}
               />
             </div>
             {viewPortWidth > 700 && (
               <div
                 lat={40.2201578}
                 lng={-74.9695344}
               >
                 <img
                   src={mapInfo}
                 />
               </div>
             )}
           </GoogleMapReact>
         </div>
        <Container className={styles.landingBody}>
	  <Row>
	    <Col md="4" md-offset="4">
	      <h3 className={styles.heading}> ORGANIZERS </h3>
	    </Col>
          </Row>
          <Row>
            {LandingData.organizers.map((organizer, index) =>
              <Col md="4" key={index}>
                <a href={organizer.link} target="_blank">
                  <img src={organizer.logoImageSource} className={styles.hostLogo}
                       alt={organizer.logoImageAlternativeText[lang]}
                       {...organizer.logoImageExtraProps} />
                </a>
              </Col>
            )}
	  </Row>
        </Container>
      </div>
    );
  }
}
