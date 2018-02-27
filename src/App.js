import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContactsList } from './actions';
import ContactListContainer from './containers/ContactList';
import './App.css';

const mapDispatchToProps = dispatch => ({
  fetchContactsList: () => dispatch(fetchContactsList())
});
class App extends Component {
  componentDidMount() {
    this.props.fetchContactsList();
  }
  onSearchKeyUp() {
    this.setState();
  }
  render() {
    return (
      <div className="App">
        <ContactListContainer />
      </div>
    );
  }
}

App.PropTypes = {
  fetchContacts: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
