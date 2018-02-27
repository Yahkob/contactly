import React from 'react';
import './Contact.css';
import { Link } from "react-router-dom";

const Contact = ({ contact }) => (
  <div className="contact">
    <Link to={contact.id}>
      <div className="name">
        {contact.name}
      </div>
    </Link>
  </div>
);

export default Contact;
