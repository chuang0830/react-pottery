// Calendar.js
import React, { useReducer, createContext } from 'react'
import getWeeksInMonth from './utils'
import moment from 'moment'
import reducers from './reducers'

// components
import Header from './Header'
import WeekDay from './WeekDay'
import DateContent from './DateContent'

// 引入樣式
import * as Styles from './styles'

// context store
export const AppStore = createContext()

// Calendar component
export default function Calendar() {
  const mmt = new moment()
  const timeReducer = useReducer(reducers, mmt.format('YYYY-MM-DD'))

  return (
    <AppStore.Provider value={{ timeReducer: timeReducer }}>
      <div>
        <h1>{'Calendar Demo'}</h1>
        <div className="calendar-container" style={Styles.calendarContainer}>
          <Header />
          <WeekDay />
          <DateContent />
        </div>
      </div>
    </AppStore.Provider>
  )
}
