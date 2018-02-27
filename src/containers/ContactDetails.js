import { connect } from 'react-redux';
import { fetchContactsList } from '../actions';
import React, { Component } from 'react';
import ContactDetails from '../components/ContactDetails';
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => ({
  fetchContactsList: () => dispatch(fetchContactsList())
});

const mapStateToProps = state => ({
  list: state.contacts,
  getContact: contactId => state.contacts.find(contact => contact.id === contactId)  
});

class ContactDetailsContainer extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.fetchContactsList();
    }
  }
  render() {
    const contact = this.props.list && this.props.getContact(this.props.match.params.id);
    return (
      <div>
        {contact && <ContactDetails contact={contact} />}
      </div>
    );
  }
}

ContactDetailsContainer.PropTypes = {
  fetchContactsList: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  list: PropTypes.array
};    

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsContainer);
