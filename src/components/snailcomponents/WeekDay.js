import * as Styles from './styles'
import React from 'react'

const WeekDayNameList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
//...
function WeekDay() {
  let weekDayList = []
  return (
    <div style={Styles.weekDayContainerStyle}>
      {
        (weekDayList = WeekDayNameList.map((name, idx) => (
          <span
            className="weekday-name"
            key={`name-${idx}`}
            style={Styles.weekDayStyle}
          >
            {name}
          </span>
        )))
      }
    </div>
  )
}
export default WeekDay
