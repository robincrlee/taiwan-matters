import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../styles.css';
import logo from '../images/ktf-logo.jpg';
import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import socialFacebook from '../images/social-facebook.png';
import socialYoutube from '../images/social-youtube.png';

const fbLink = "https://www.facebook.com/KeepTaiwanFree/";
const youtubeLink = "https://www.youtube.com/channel/UCyz03iSQ6BZXOIFXSo0JDWQ";

export default class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleHamburgerClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Appbar>
          <div className={styles.headerContainer}>
            <Row>
              <Col md="6">
                <Link to="/">
                  <img src={logo} className={styles.appBarLogo}/>
                </Link>
                <span
                  className={styles.hamburger}
                  onClick={this.handleHamburgerClick}
                >
                  ☰
                </span>
              </Col>
              <Col md="4" className={styles.appBarNav}>
                <Link to="about" className={styles.navLink} activeClassName={styles.navLinkSelected}>About</Link>
                <Link to="facts" className={styles.navLink} activeClassName={styles.navLinkSelected}>Facts</Link>
                <a href={fbLink} target="_blank" className={styles.socialIcon}><img src={socialFacebook} className={styles.appBarLogo}/></a>
                <a href={youtubeLink} target="_blank" className={styles.socialIcon}><img src={socialYoutube} className={styles.appBarLogo}/></a>
              </Col>
            </Row>
          </div>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to="about" onClick={this.handleHamburgerClick}>About</Link></li>
            <li className={styles.headerItemResponsive}><Link to="facts" onClick={this.handleHamburgerClick}>Facts</Link></li>
            <li className={styles.headerItemResponsive}>
              <a href={fbLink} target="_blank" className={styles.socialIcon}><img src={socialFacebook} className={styles.appBarLogo}/></a>
              <a href={youtubeLink} target="_blank" className={styles.socialIcon}><img src={socialYoutube} className={styles.appBarLogo}/></a>
            </li>
          </ul>
        }
	{children}
        <Appbar className={styles.footer}>
          <div>
            <Row>
              <Col md="12">
                <div className={styles.footerContact}>
                  <h3>CONTACT US</h3>
                  <h1>We’d like to hear from you.</h1>
                  <h3>Email Us</h3>
                  <p><a href="mailto:un4tw.keeptaiwanfree@gmail.com">un4tw.keeptaiwanfree@gmail.com</a></p>
                  <h3>Follow Us</h3>
                  <div>
                    <a href={fbLink} target="_blank" className={styles.socialIcon}><img src={socialFacebook} className={styles.appBarLogo}/></a>
                    <a href={youtubeLink} target="_blank" className={styles.socialIcon}><img src={socialYoutube} className={styles.appBarLogo}/></a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md="12">
                <div className={styles.footerCopyright}>
                  Copyright © 2017 Keep Taiwan Free
                </div>
              </Col>
            </Row>
          </div>
        </Appbar>
      </div>
    );
  }
}
