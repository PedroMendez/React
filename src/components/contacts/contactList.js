import React, { Component } from 'react';
import IntlMessages from '../utility/intlMessages';
import Input from '../uielements/input';
import DeleteButton from './deleteButton';
import { PropTypes } from 'prop-types';
import Button from '../uielements/button';
import { Icon } from "antd";
import Tooltip from '../uielements/tooltip';

const Search = Input.Search;
function filterContacts(contacts, search) {
  search = search.toUpperCase();
  return search
    ? contacts.filter(contact => contact.name.toUpperCase().includes(search))
    : contacts;
}

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.singleContact = this.singleContact.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: '',
    };
  }
  singleContact(contact) {
    const { seectedId, deleteContact, changeContact } = this.props;
    const activeClass = seectedId === contact.id ? 'active' : '';
    const onChange = () => changeContact(contact.id);
    return (
      <div
        key={contact.id}
        className={`${activeClass} isoSingleContact`}
      >
        <div className="isoAvatar" onClick={onChange}>
          {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
        </div>
        <div className="isoContactName">
          <h3 onClick={onChange}>
            {contact.name ? contact.name : 'No Name'}
          </h3>
        </div>
        <Button type="button" style={{ marginLeft: 20 }}>
          <Tooltip 
            title={<IntlMessages id="contactlist.addCalendar" />}
          >
            <a href="/dashboard/calendar">
              <Icon type="plus" />
            </a>
          </Tooltip>  
        </Button>
        <Button type="button" style={{ marginLeft: 20 }}>
          <Tooltip 
            title={<IntlMessages id="contactlist.addCalendar" />}
          >
            <a href="/dashboard/calendar">
              <Icon type="edit" />
            </a>
          </Tooltip> 
        </Button>
        <DeleteButton deleteContact={deleteContact} contact={contact} />
      </div>
    );
  }
  onChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const { search } = this.state;
    const contacts = filterContacts(this.props.contacts, search);
    return (
      <div className="isoContactListWrapper">
        <Search
          placeholder={this.context.intl.formatMessage({
            id: 'contactlist.searchContacts',
          })}
          value={search}
          onChange={this.onChange}
          className="isoSearchBar"
        />
        {contacts && contacts.length > 0
          ? <div className="isoContactList">
              {contacts.map(contact => this.singleContact(contact))}
            </div>
          : <span className="isoNoResultMsg">{<IntlMessages id="Component.contacts.noOption" />}</span>}
      </div>
    );
  }
}

ContactList.contextTypes = {
  intl: PropTypes.object.isRequired,
};
