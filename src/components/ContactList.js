import React from 'react';
import Proptypes from 'prop-types';
import Contact from './Contact';
import './ContactList.css';

const ContactList = ({ list }) => (
  <div className="contacts">
    {!list && 'Loading...'}
    {list && list.map(contact => <Contact key={contact.id} contact={contact} />)}
  </div>
);

ContactList.Proptypes = {
  list: Proptypes.array
};

export default ContactList;
