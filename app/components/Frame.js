import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../styles.css';
import logo from '../images/logo.png';
import smallLogo from '../images/logo_small.png';
import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

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
              <Col md="5">
                <Link to={toAbsPath(langPath, "")}>
                  <h3>Taiwan Matters</h3>
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
                <Link to={toAbsPath(langPath, "schedule")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Program</Link>
                <Link to={toAbsPath(langPath, "speaker")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Speaker</Link>
                <Link to={toAbsPath(langPath, "contact")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Contact</Link>
              </Col>
              <Col md="3" className={styles.appBarExtra}>
                <Link className={styles.langLinkCh} to={toAbsPath("zh",relPath)}>中文</Link>
                <span>|</span>
                <Link className={styles.langLinkEn} to={toAbsPath("en",relPath)}>EN</Link>
              </Col>
            </Row>
          </div>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath(langPath, "about")} onClick={this.handleHamburgerClick}>About</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath(langPath, "schedule")} onClick={this.handleHamburgerClick}>Program</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath(langPath, "speaker")} onClick={this.handleHamburgerClick}>Speaker</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath(langPath, "contact")} onClick={this.handleHamburgerClick}>Contact</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={toAbsPath((lang==="en"?"zh":"en"),relPath)} onClick={this.handleHamburgerClick}>{(lang==="en"?"中文":"English")}</Link> </li>
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
                  © 2017 Taiwan Matters. All Rights Reserved
                </div>
              </Col>
            </Row>
          </Container>
        </Appbar>
      </div>
    );
  }
}
