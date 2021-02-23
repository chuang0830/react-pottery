import React, { useContext } from 'react'
import * as Styles from './styles'
import { AppStore } from './Calendar'
import moment from 'moment'

export default function Header() {
  const { timeReducer } = useContext(AppStore)
  const dateInfo = timeReducer[0]
  const mmt = new moment(dateInfo)

  const dispatch = timeReducer[1]

  return (
    <div className="header-container" style={Styles.headerContainer}>
      <span style={Styles.headerMonthYearStyle} className="month-year">
        {mmt.format('MMM-YYYY')}
      </span>
      <span
        style={Styles.headerButtonStyle}
        onClick={() => dispatch({ type: 'LAST_MONTH' })}
      >
        {' '}
        {'<'}{' '}
      </span>
      <span
        style={Styles.headerButtonStyle}
        onClick={() => dispatch({ type: 'NEXT_MONTH' })}
      >
        {' '}
        {'>'}{' '}
      </span>
    </div>
  )
}
