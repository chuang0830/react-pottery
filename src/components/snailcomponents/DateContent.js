import * as Styles from './styles'
import getWeeksInMonth from './utils'
import { AppStore } from './Calendar'
import moment from 'moment'
import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

export default function DateContent() {
  const { timeReducer } = useContext(AppStore)
  const date = timeReducer[0]
  const mmt = new moment(date)
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

  //componentdidmount 進入頁面即渲染，完成後course1才會有資料
  useEffect(() => {
    getCourse1FromServer1()
  }, [])

  //檢查資料匯入
  console.log('course1', course1)

  let weekContentList = getWeeksInMonth(mmt)
  let result = []
  return (
    <div className="DateContainer" style={Styles.DateContainer}>
      {weekContentList.map((week, wIdx) => {
        let aWeek = []
        aWeek = week.map((day, dIdx) => (
          <div
            className="dateContent-day"
            style={Styles.dayStyle}
            key={`${day}-${dIdx}`}
            onClick={(e) => {
              //console.log(e.target.innerHTML)
            }}
          >
            {' '}
            {/* fetch資料庫日期課程 */}
            {course1.length > 0 ? (
              <div style={{ display: 'none' }}>
                <div style={{ fontSize: '2px' }}>
                  {/* day需大於零，否則arry索引變-1會報錯 */}
                  {day > 0 &&
                    course1[day - 1] &&
                    course1[day - 1].product_name}{' '}
                </div>
              </div>
            ) : (
              ''
            )}
            <span
              onClick={(e) => {
                console.log(e.target.innerHTML)
                console.log(e.target.previousElementSibling)
                e.target.previousElementSibling.style.display = 'block'
              }}
            >
              {day === 0 ? '' : day}
            </span>
          </div>
        ))
        return (
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
