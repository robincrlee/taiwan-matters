import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';

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
    const org = AboutData.organizations[tab];
    const text =
      <Col md="10" md-offset="1">
        {org.introduction[lang]}
        <h3 className={styles.heading}> MISSION </h3>
        <div className={styles.headingBottom} />
        {org.mission[lang]}
      </Col>;

    return (
      <div>
        <div className={styles.aboutImgContainer}>
          <img src={AboutData.aboutImageSource} alt={AboutData.aboutImageAlternativeText[lang]} className={styles.aboutImg}/>
        </div>
        <div className={styles.tabBand}>
          {AboutData.organizations.map((org, index) =>
            <div key={index} className={tab === index
              ? (index === 0 ? styles.tabCategoryLeftActive : styles.tabCategoryActive)
              : (index === 0 ? styles.tabCategoryLeft : styles.tabCategory)} onClick={() => this.tabClick(index)}>
              {org.name[lang]}
            </div>
          )}
        </div>
        <Container className={styles.landingBody}>
          <Row>
            <img src={org.logoImageSource} alt={org.logoImageAlternativeText[lang]} className={styles.hostLogo} height="114px" />
            {text}
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
