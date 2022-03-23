import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import CalendarBody from './CalendarBody';

const eventListener = () => {
  return (
    <>
      <CalendarBody />
    </>
  )
}
export default eventListener;