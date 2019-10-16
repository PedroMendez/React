import React, { Component } from 'react';
import Button from '../uielements/button';
import IntlMessages from '../utility/intlMessages';
import { Link } from 'react-router-dom';

const customStyle = {
  marginTop: 20, 
  marginLeft: '40%'
}

export default class SingleContactView extends Component {
  render() {
    const { contact, otherAttributes } = this.props;
    const name = contact.name ? contact.name : 'No Name';
    const extraInfos = [];
    otherAttributes.forEach(attribute => {
      const value = contact[attribute.value];
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
            {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
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
              <IntlMessages id="contactlist.addCalendar" />
            </Link>
          </Button>
          <Button 
            type="primary" 
            className="isoAddContactBtn"
            style={customStyle}
          >
            <Link to={`/dashboard/calendar`}>
              <IntlMessages id="contactlist.editCalendar" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}
