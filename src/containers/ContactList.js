import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

const mapStateToProps = state => ({ list: state.contacts });

const ContactListContainer = connect(mapStateToProps)(ContactList);

export default ContactListContainer;
