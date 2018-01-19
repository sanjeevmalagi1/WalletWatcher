import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import Console from 'containers/Console/Console.jsx';
import App from 'containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
  );

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/wallet" name="Wallet info" component={App} />
                <Route path="/" name="Console" component={Console}/>
            </Switch>
        </HashRouter>
    </Provider>
),document.getElementById('root'));
