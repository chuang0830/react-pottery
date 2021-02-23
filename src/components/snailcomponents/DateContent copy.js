import * as Styles from './styles'
import getWeeksInMonth from './utils'
import React, { useState, useEffect } from 'react'

function DateContent() {
  const [course1, setCourse1] = useState([])

  //接資料庫
  async function getCourse1FromServer1() {
    // 開啟載入指示
    //setDataLoading(true)

    // 連接的伺服器資料網址
    const url = `http://localhost:3000/course/json`

    //header格式設定為json格式
    const request1 = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log(url)
    console.log('course1', course1)
    const response1 = await fetch(request1)
    const data1 = await response1.json()
    console.log('data1', data1)
    //設定資料給Course1
    setCourse1(data1)
  }

  //componentdidmount 進入頁面即渲染
  useEffect(() => {
    getCourse1FromServer1()
  }, [])

  console.log('course1', course1)
  let weekContentList = getWeeksInMonth()
  let result = []
  return (
    <div className="DateContainer" style={Styles.DateContainer}>
      {weekContentList.map((week, wIdx) => {
        console.log('week', week)
        let aWeek = []
        week.map((day, dIdx) =>
          aWeek.push(
            <div
              className="dateContent-day d-flex flex-cloumn"
              style={Styles.dayStyle}
              key={`${day}-${dIdx}`}
            >
            {/* fetch資料庫日期課程 */}
              {course1.length > 0 ? (
                <div>
                  <div style={{ width: '20px' }}>
                    {day > 0 &&
                      course1[day - 1] &&
                      course1[day - 1].product_name}{' '}
                  </div>
                </div>
              ) : (
                ''
              )}
              {day === 0 ? '' : day}
              <span></span>
            </div>
          )
        )
        console.log('week', week)

        result.push(
          <div
            className="aweek"
            style={Styles.aWeekStyle}
            key={`${week}-${wIdx}`}
          >
            {aWeek}
          </div>
        )
      })}
      {result}
    </div>
  )
}

export default DateContent
