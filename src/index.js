import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../src/components/Container/Calendar/reducers';
import CalendarBody from './components/Container/Calendar/CalendarBody';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from 'axios';

const store = createStore(rootReducer, applyMiddleware(thunk))

const element = (
  <Provider store={store}>
  <Router> 
    <App />
  </Router>,
    {/* <CalendarBody /> */}
  </Provider>
);
console.log('log:', store);
const container = document.getElementById("root");

ReactDOM.render(element, container);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
