import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = ({ contact }) => (
  <div className="contact">
    <Link to={contact.id}>
      <div className="name">
        {contact.name}
      </div>
    </Link>
  </div>
);

Contact.Proptypes = {
  contact: PropTypes.object
};

export default Contact;
