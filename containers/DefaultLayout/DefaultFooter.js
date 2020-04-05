import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {most_recent_data} from '../../data/data'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>joaopfcruz @ {(new Date().getFullYear())}</span>
        <span className="ml-auto">Powered by <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a>, <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a> / COVID-19 data source: <a href="https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide" target="_blank" rel="noopener noreferrer">ECDC</a>. Most recent data reported for: {most_recent_data}</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
