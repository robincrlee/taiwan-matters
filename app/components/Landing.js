import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../styles.css';
import eventMarch from '../images/event-keep-taiwan-free-march.jpg'
import eventTWMatters from '../images/event-taiwan-matters.jpg'
import eventBubbleTea from '../images/event-bubble-tea.jpg'
import GoogleMapReact from 'google-map-react';

import LandingData from '../data/LandingData'

export default class Landing extends React.Component {
  render() {
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;
    const mapCenter = isMobile ? [39.9518694, -75.602182] : [39.9662578,-75.1395344];
    return (
      <div>
        <div className={styles.landingHero}>
          <Container className={styles.heroCopy}>
            <Col md="10" md-offset="1">
              <h1>2017 United Nations Membership for Taiwan/Keep Taiwan Free March</h1>
              <p>All members and allies of the Taiwanese community are invited to join this year’s UN for Taiwan/ Keep Taiwan Free rally!</p>
              <a className={styles.mainBtn} href={LandingData.links.fbEventMarch} target="_blank">GET INVOLVED</a>
            </Col>
          </Container>
        </div>
        <Container className={styles.landingBody}>
          <Row>
            <Col md="10" md-offset="1">
              <h1 className={styles.heading}>ABOUT THE MOVEMENT</h1>
              <h2>Keep Taiwan Free</h2>
              {LandingData.welcomeMessage}
              <Link to="about" className={styles.mainBtn} target="_blank">LEARN MORE</Link>
            </Col>
          </Row>
        </Container>
        <div className={styles.eventsBody}>
          <Container className={styles.eventsBody}>
            <Row>
              <Col md="4" className={styles.eventBox}>
                <img src={eventMarch} width="370" />
                <h1 className={styles.heading}>EVENTS</h1>
                <h2>2017 United Nations Membership for Taiwan / Keep Taiwan Free March</h2>
                <section className={styles.eventDetails}>
                  <section className={styles.eventSection}>
                    <p>09/16 (Sat) 3:00-3:30PM</p>
                    <h3>Assembly and Opening Remarks</h3>
                    <p className={styles.eventNotes}>Consulate General of the People's Republic of China in New York 520 12th Ave (42nd St and 12th Av)</p>
                  </section>
                  <section className={styles.eventSection}>
                    <p>09/16 (Sat) 3:30-5:00PM</p>
                    <h3>March</h3>
                  </section>
                  <section className={styles.eventSection}>
                    <p>09/16 (Sat) 5:00-5:30PM</p>
                    <h3>Rally and Closing Remarks</h3>
                    <p className={styles.eventNotes}>United Nations Plaza</p>
                    <p className={styles.eventNotes}>Dag Hammarskjold Plaza (47th St and 1st Av)</p>
                  </section>
                </section>
                <p>This year, we highlight Taiwan's achievements alongside Taiwan's increasing marginalization. We begin this year's rally at the Consulate General of the Peoples Republic of China, where allies from various activist communities will join us in condemning the human rights abuses and silencing of activists by the CCP. Then, we march across Manhattan to the United Nations Plaza, where we call upon United Nations General Assembly to hold themselves accountable to the standards they claim to uphold.</p>
              <a className={styles.mainBtn} href={LandingData.links.fbEventMarch} target="_blank">GET INVOLVED</a>
              </Col>
              <Col md="4" className={styles.eventBox}>
                <img src={eventTWMatters} width="370" />
                <h1 className={styles.heading}>EVENTS</h1>
                <h2>Taiwan Matters</h2>
                <section className={styles.eventDetails}>
                  <section className={styles.eventSection}>
                    <p>09/16 (Sat) 2PM - 7PM</p>
                    <p>09/17 (Sun) 10AM - 5PM</p>
                    <p className={styles.eventNotes}>Dag Hammarskjold Plaza</p>
                    <p className={styles.eventNotes}>833 1st Avenue New York, NY </p>
                  </section>
                  <section className={styles.eventSection}>
                    <p>09/18 (Mon) 10AM - 5PM</p>
                    <p>09/20 (Wed) 10AM - 5PM</p>
                    <p className={styles.eventNotes}>United Nations Plaza</p>
                  </section>
                </section>
                <p>This year, in order for the world to see Taiwan, a group of Taiwanese architecture designer decided to team up with activists who has long advocated for Taiwan's membership in the UN on an art installation located directly across the UN's office, titled " Taiwan Matters". The installation is consisted of six parts, all of which imitate the geographical landscape of Taiwan. Visitors will be able to move around the pieces freely, enabling the art installation a new perspective, creating new spaces and functionality.</p>
              <a className={styles.mainBtn} href={LandingData.links.fbEventArts} target="_blank">EXPLORE</a>
              <p>On September 16th, from 5:30 to 6:30pm, after the Rally for Taiwan in UN, Cafe Philo will also invite Taiwanese speakers from all kinds of communities, and background, to share their story and their experiences.</p>
              <a className={styles.mainBtn} href={LandingData.links.fbEventTalks} target="_blank">GET INVOLVED</a>
              </Col>
              <Col md="4" className={styles.eventBox}>
                <img src={eventBubbleTea} width="370" />
                <h1 className={styles.heading}>EVENTS</h1>
                <h2>NYC Bubble Tea Festival</h2>
                <p>Hello Taiwan Bubble Tea Festival is the first celbration of its kind in NYC for the delicious tasting chewy bobbles & bobas in freshly brewed tea with giant straws!</p>
              <a className={styles.mainBtn} href={LandingData.links.EventBriteBoba} target="_blank">GET INVOLVED</a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
