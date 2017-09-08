import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../styles.css';
import logo from '../images/ktf-logo.jpg';
import smallLogo from '../images/logo_small.png';
import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import socialFacebook from '../images/social-facebook.png';
// TODO: instagram and youtube links avaialable?
import socialInstagram from '../images/social-instagram.png';
import socialYoutube from '../images/social-youtube.png';

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
    const viewPortWidth = window.innerWidth;
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
                <a href="https://www.facebook.com/KeepTaiwanFree/" target="_blank" className={styles.socialIcon}><img src={socialFacebook} className={styles.appBarLogo}/></a>
                <a href="#" className={styles.socialIcon}><img src={socialInstagram} className={styles.appBarLogo}/></a>
                <a href="#" className={styles.socialIcon}><img src={socialYoutube} className={styles.appBarLogo}/></a>
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
                <a href="https://www.facebook.com/KeepTaiwanFree/" target="_blank" className={styles.socialIcon}><img src={socialFacebook} className={styles.appBarLogo}/></a>
                <a href="#" className={styles.socialIcon}><img src={socialInstagram} className={styles.appBarLogo}/></a>
                <a href="#" className={styles.socialIcon}><img src={socialYoutube} className={styles.appBarLogo}/></a>
            </li>
          </ul>
        }
	{children}
        <Appbar className={styles.footer}>
          <Container>
            <Row>
              <Col md="6">
                {
                  viewPortWidth < 600 ?
                    (<img src={smallLogo} className={styles.footerLogo}/>) :
                    (<img src={logo} className={styles.footerLogo}/>)
                }
              </Col>
              <Col md="6">
                <div className={styles.footerDisclaimer}>
                  © 2017 Keep Taiwan Free.
                </div>
              </Col>
            </Row>
          </Container>
        </Appbar>
      </div>
    );
  }
}
