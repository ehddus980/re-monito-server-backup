import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import CalendarBody from './CalendarBody';
import { AlignTitle } from '../../Presenter/Calendar/CalendarTitlePresenter';

const Calendar = () => {
  return (
    <>
      <AlignTitle>
        <h1>일정 관리</h1>
      </AlignTitle>
      <CalendarBody />
    </>
  )
}
export default Calendar;