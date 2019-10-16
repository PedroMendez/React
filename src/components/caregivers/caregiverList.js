import React, { Component } from 'react';
import IntlMessages from '../utility/intlMessages';
import Input from '../uielements/input';
import DeleteButton from './deleteButton';
import { PropTypes } from 'prop-types';
import Button from '../uielements/button';
import { Icon } from "antd";
import Tooltip from '../uielements/tooltip';

const Search = Input.Search;
function filterCaregivers(caregivers, search) {
  search = search.toUpperCase();
  return search
    ? caregivers.filter(caregiver => caregiver.name.toUpperCase().includes(search))
    : caregivers;
}

export default class CaregiverList extends Component {
  constructor(props) {
    super(props);
    this.singleCaregiver = this.singleCaregiver.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: '',
    };
  }
  singleCaregiver(caregiver) {
    const { seectedId, deleteCaregiver, changeCaregiver } = this.props;
    const activeClass = seectedId === caregiver.id ? 'active' : '';
    const onChange = () => changeCaregiver(caregiver.id);
    return (
      <div
        key={caregiver.id}
        className={`${activeClass} isoSingleContact`}
        onClick={onChange}
      >
        <div className="isoAvatar">
          {caregiver.avatar ? <img alt="#" src={caregiver.avatar} /> : ''}
        </div>
        <div className="isoContactName">
          <h3>
            {caregiver.name ? caregiver.name : 'No Name'}
          </h3>
        </div>
        <Button type="button" style={{ marginLeft: 20 }}>
          <Tooltip 
            title={<IntlMessages id="caregiverlist.addCalendar" />}
          >
            <a href="/dashboard/calendar">
              <Icon type="plus" />
            </a>
          </Tooltip>  
        </Button>
        <Button type="button" style={{ marginLeft: 20 }}>
          <Tooltip 
            title={<IntlMessages id="caregiverlist.addException" />}
          >
            <a href="/dashboard/calendar">
              <Icon type="edit" />
            </a>
          </Tooltip> 
        </Button>        
        <DeleteButton deleteCaregiver={deleteCaregiver} caregiver={caregiver} />
      </div>
    );
  }
  onChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const { search } = this.state;
    const caregivers = filterCaregivers(this.props.caregivers, search);
    return (
      <div className="isoContactListWrapper">
        <Search
          placeholder={this.context.intl.formatMessage({
            id: 'caregiverlist.searchCaregivers',
          })}
          value={search}
          onChange={this.onChange}
          className="isoSearchBar"
        />
        {caregivers && caregivers.length > 0
          ? <div className="isoContactList">
              {caregivers.map(caregiver => this.singleCaregiver(caregiver))}
            </div>
          : <span className="isoNoResultMsg">{<IntlMessages id="Component.caregivers.noOption" />}</span>}
      </div>
    );
  }
}

CaregiverList.contextTypes = {
  intl: PropTypes.object.isRequired,
};
