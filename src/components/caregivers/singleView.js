import React, { Component } from 'react';
import Button from '../uielements/button';
import IntlMessages from '../utility/intlMessages';
import { Link } from 'react-router-dom';

const customStyle = {
  marginTop: 20, 
  marginLeft: '40%'
}

export default class SingleCaregiverView extends Component {
  render() {
    const { caregiver, otherAttributes } = this.props;
    const name = caregiver.name ? caregiver.name : 'No Name';
    const extraInfos = [];
    otherAttributes.forEach(attribute => {
      const value = caregiver[attribute.value];
      if (value) {
        extraInfos.push(
          <div className="isoContactCardInfos" key={attribute.value}>
            <p className="isoInfoLabel">{`${attribute.title}`}</p>
            <p className="isoInfoDetails">{value}</p>
          </div>,
        );
      }
    });
    return (
      <div className="isoContactCard">
        <div className="isoContactCardHead">
          <div className="isoPersonImage">
            {caregiver.avatar ? <img alt="#" src={caregiver.avatar} /> : ''}
          </div>
          <h1 className="isoPersonName">{name}</h1>
        </div>
        <div className="isoContactInfoWrapper">
          {extraInfos}
          <Button 
            type="primary" 
            className="isoAddContactBtn"
            style={customStyle}
          >
            <Link to={`/dashboard/calendar`}>
              <IntlMessages id="caregiverlist.addCalendar" />
            </Link>
          </Button>
          <Button 
            type="primary" 
            className="isoAddContactBtn"
            style={customStyle}
          >
            <Link to={`/dashboard/calendar`}>
              <IntlMessages id="caregiverlist.addException" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}
