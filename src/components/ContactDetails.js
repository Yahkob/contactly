import React from 'react';
import Proptypes from 'prop-types';
import { Link } from "react-router-dom";
import './ContactDetails.css';

const ContactDetails = ({ contact }) => {
  return (
    <div className="contactDetail">
      <Link to="/">◀ Back</Link>
      <div className="contactIcon" />
      <div className="contactInfo">
        <div className="name">
          {contact.name}
        </div>
        <div className="number">
          {contact.number}
        </div>
        <div className="email">
          {contact.email}
        </div>
      </div>
    </div>
  );
};

ContactDetails.Proptypes = {
  contact: Proptypes.object
};

export default ContactDetails;
