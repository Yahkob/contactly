import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContactsList } from './actions';
import ContactListContainer from './containers/ContactList';
import './App.css';

const mapDispatchToProps = dispatch => ({
  fetchContactsList: () => dispatch(fetchContactsList())
});

const mapStateToProps = state => ({ list: state.contacts });

export class App extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.fetchContactsList();
    }
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
  fetchContacts: PropTypes.func.isRequired,
  list: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
