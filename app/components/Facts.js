import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';

import FactsData from '../data/FactsData'

export default class Contact extends React.Component {
  render() {
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;
    return (
      <div>
      </div>
    );
  }
}
