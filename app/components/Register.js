import React from 'react';

import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'muicss/lib/react/divider';
import { Link } from 'react-router';
import registerImg from '../images/register.png';
import regForm from '../images/form.pdf';
import styles from '../styles.css';

export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={styles.aboutImgContainer}>
          <img src={registerImg} className={styles.aboutImg}/>
        </div>
        <Container className={styles.registerBody}>
          <Row>
            <Col md="10" md-offset="1">
              <h3 className={styles.heading}> REGISTER </h3>
              <div className={styles.headingBottom} />
              <div>
                <p className={styles.registerSubheading}>How to register online: </p>
                <p>We highly recoomend registering online! We'll be able to process your registration much faster,
                  and you'll be much more likely to be guaranteed a spot. Click <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017" target="_blank"> here </a> to register online
                </p>
                <ul>
                  <li style={{marginTop: 14}}>Early bird online deadline: Mon, May 15</li>
                  <li style={{marginTop: 14}}>Regular registration online deadline: Wed, May 31</li>
                  <li style={{marginTop: 14}}>Late registration (online only) deadline: Sat, June 10</li>
                  <li style={{marginTop: 14}}>Register all your family members at the same time by clicking "Add Registrant" (not "Finish and Pay") at the end of each application</li>
                  <li style={{marginTop: 14}}>Pay by credit card or check. Postmark your checks by the deadline above</li>
                  <li style={{marginTop: 14}}>After you register, you'll get an email with a link to indicate your preferred roommates</li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>How to register via paper: </p>
                <p>Please download paper registration <a href={regForm} target="_blank"> here </a> (you may have to print some pages multiple times.)
                </p>
                <ul>
                  <li style={{marginTop: 14}}>Early bird paper deadline: Sun, April 30</li>
                  <li style={{marginTop: 14}}>Regular registration paper deadline: Mon, May 15</li>
                  <li style={{marginTop: 14}}>There will be no late registration via paper</li>
                </ul>
              </div>
              <h3 className={styles.heading}> 2017 RATES </h3>
              <div className={styles.headingBottom} />
              <div>
                <p className={styles.registerSubheading}>Rates include full weekend meals: </p>
                <p>
                  Below are the Full Weekend rates for TACEC, TANG and OTD. This inlcudes 4 days for conference, 3 nights
                  of lodging, and 9 meals. The meals included are:
                </p>
                <ul>
                  <li style={{marginTop: 14}}>Saturday, 7/1 - dinner</li>
                  <li style={{marginTop: 14}}>Sunday, 7/2 - breakfast, lunch, dinner</li>
                  <li style={{marginTop: 14}}>Monday, 7/3 - breakfast, lunch, dinner</li>
                  <li style={{marginTop: 14}}>Tuesday, 7/4 - breakfast, lunch </li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>Full Weekend TACEC options: </p>
                <p>
                  If you plean on attending TACEC's workshops and events, please make sure to register for the TACEC conference.
                  For more information about TACEC, please visit TACEC's <a href="https://www.facebook.com/events/1512759972149251/?acontext=%7B%22action_history%22%3A%22null%22%7D">Facebook</a> event.
                </p>
                <ul style={{listStyle: 'none'}}>
                  <li style={{marginTop: 14}}>
                    <div style={{display: 'flex', color: '#64a680', marginTop: 40}}>
                      <div style={{paddingTop: 10, paddingLeft: 10, fontWeight: 'bolder', marginRight: 5}}>Regular</div>
                      <div style={{fontSize: 33, paddingTop: 0, marginRight: 5}}>$325</div>
                      <div style={{fontSize: 12, paddingTop: 25, color: '#777'}}>(older than 40)</div>
                    </div>
                  </li>
                  <li style={{marginTop: 14}}>
                    <div style={{display: 'flex', color: '#64a680', marginTop: 40}}>
                      <div style={{paddingTop: 10, paddingLeft: 10, fontWeight: 'bolder', marginRight: 5}}>Junior</div>
                      <div style={{fontSize: 33, paddingTop: 0, marginRight: 5}}>$240</div>
                      <div style={{fontSize: 12, paddingTop: 25, color: '#777'}}>(younger than 40)</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>TACEC Commuter options: </p>
                <ul>
                  <li style={{marginTop: 14}}>TACEC Commuter 1 day: No Meals $40, With Meals $80</li>
                  <li style={{marginTop: 14}}>TACEC Commuter 2 days: No Meals $50, With Meals $130</li>
                  <li style={{marginTop: 14}}>TACEC Commuter 3 days: No Meals $60, With Meals $160</li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>Full Weekend TANG options: </p>
                <p>
                  For more information about each program, please check out our <a href="http://tangeneration.org/programs/" target="_blank">Program</a> page.
                </p>
                <ul style={{listStyle: 'none'}}>
                  <li style={{marginTop: 14}}>
                    <div style={{display: 'flex', color: '#64a680', marginTop: 40}}>
                      <div style={{paddingTop: 10, paddingLeft: 10, fontWeight: 'bolder', marginRight: 5}}>Regular</div>
                      <div style={{fontSize: 33, paddingTop: 0, marginRight: 5}}>$240</div>
                      <div style={{fontSize: 12, paddingTop: 25, color: '#777'}}>(TANG parents, Young Adults - out of university)</div>
                    </div>
                  </li>
                  <li style={{marginTop: 14}}>
                    <div style={{display: 'flex', color: '#64a680', marginTop: 40}}>
                      <div style={{paddingTop: 10, paddingLeft: 10, fontWeight: 'bolder', marginRight: 5}}>Junior</div>
                      <div style={{fontSize: 33, paddingTop: 0, marginRight: 5}}>$190</div>
                      <div style={{fontSize: 12, paddingTop: 25, color: '#777'}}>(Young Adults with Univ ID, High school, juniors, tiny tots)</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>TACEC / TANG Discounts and Fees: </p>
                <ul>
                  <li style={{marginTop: 14}}>Early Bird DiscountL $10 per person</li>
                  <li style={{marginTop: 14}}>Family Discount: $10 per person for families of 4 or more. Please register all at the same time</li>
                  <li style={{marginTop: 14}}>If you miss deadlines, you can only register online for a flat fee of $400 per registration until June 10th.</li>
                  <li style={{marginTop: 14}}>Discount only applies to full-weekend attendees</li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>Full Weekend OTD options: </p>
                <p>
                  For more information about each program, please check out our <Link to="/otd">OTD Program</Link> page.
                </p>
                <ul style={{listStyle: 'none'}}>
                  <li style={{marginTop: 14}}>
                    <div style={{display: 'flex', color: '#64a680', marginTop: 40}}>
                      <div style={{paddingTop: 10, paddingLeft: 10, fontWeight: 'bolder', marginRight: 5}}>Regular</div>
                      <div style={{fontSize: 33, paddingTop: 0, marginRight: 5}}>$190</div>
                      <div style={{fontSize: 12, paddingTop: 25, color: '#777'}}>(only available to OTD attendees)</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className={styles.registerSubheading}>Frequently Asked Questions: </p>
                <ul>
                  <li style={{marginTop: 14}}>
                    <p>
                      Are there service fees if I pay by credit card?
                    </p>
                    <p>
                      You won't have to pay any extra fees. TACEC and TANG will cover this cost for you. The cost you see is what you pay!
                    </p>
                  </li>
                  <li style={{marginTop: 14}}>
                    <p>
                      Can I pay by check?
                    </p>
                    <p>
                      Make sure your check is postmarked before the deadlines above
                    </p>
                  </li>
                  <li style={{marginTop: 14}}>
                    <p>
                      Can I register late?
                    </p>
                    <p>
                      If you miss your deadline, you can register late online until June 10th using credit card (paper registration takes longer to process)
                      at a rate of $400 per person (regardless of program or age).
                      After June 10th, registration is officially closed - no exceptions.
                    </p>
                  </li>
                  <li style={{marginTop: 14}}>
                    <p>
                      Why is the paper registration earlier than the online registration?
                    </p>
                    <p>
                      Paper registration takes longer to process, so we need to receive them earlier.
                    </p>
                  </li>
                  <li style={{marginTop: 14}}>
                    <p>
                      What if I can't stay for the whole conference?
                    </p>
                    <p>
                      Email us at minzechien.tacec@gmail.com or hello@tangeneration.org and tell us more about your needs.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Divider />
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </a>
        </div>
      </div>
    );
  }
}
