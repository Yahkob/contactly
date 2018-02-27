import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import ContactDetails from './containers/ContactDetails'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={ContactDetails} />
      </div>  
    </Router>
  </Provider>,
    document.getElementById('root'));
  registerServiceWorker();
