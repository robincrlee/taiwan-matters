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
import social_facebook from '../images/social-facebook.png';
import social_instagram from '../images/social-instagram.png';
import social_youtube from '../images/social-youtube.png';

import { toAbsPath, getRelPath } from '../utils'

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
    const langPath = this.props.lang;
    const lang = langPath || "en";
    const relPath = getRelPath(langPath, this.props.location.pathname);
    const viewPortWidth = window.innerWidth;
    return (
      <div>
        <Appbar className={styles.bar}>
          <div className={styles.headerContainer}>
            <Row>
              <Col md="6">
                <Link to={toAbsPath(langPath, "")}>
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
                <Link to={toAbsPath(langPath, "about")} className={styles.navLink} activeClassName={styles.navLinkSelected}>About</Link>
                <Link to={toAbsPath(langPath, "facts")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Facts</Link>
                <Link to={toAbsPath(langPath, "about")} className={styles.socialIcon}><img src={social_facebook} className={styles.appBarLogo}/></Link>
                <Link to={toAbsPath(langPath, "facts")} className={styles.socialIcon}><img src={social_instagram} className={styles.appBarLogo}/></Link>
                <Link to={toAbsPath(langPath, "facts")} className={styles.socialIcon}><img src={social_youtube} className={styles.appBarLogo}/></Link>
              </Col>
            </Row>
          </div>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath(langPath, "about")} onClick={this.handleHamburgerClick}>About</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath(langPath, "facts")} onClick={this.handleHamburgerClick}>Facts</Link> </li>
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
