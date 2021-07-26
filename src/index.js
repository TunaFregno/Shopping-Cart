import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkout from './components/Checkout';
import { Provider } from 'react-redux';
import store from './store';
//import { withAuth } from './components/withAuth';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true}  component={ App } />
          <Route path='/checkout' exact={true}  component={ /* withAuth */(Checkout) } />     
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
