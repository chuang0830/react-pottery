import React, { useState, useEffect } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

function CourseTableNing(props) {
  // style ------------------------------------------------------------
  const style = {
    color: 'primary',
    fontSize: 24,
  }

  // 課程--------------------------------------------------------------
  // State ------------------------------------------------------------
  const [mycoursecart, setMyCoursecart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycoursecartDisplay, setMyCoursecartDisplay] = useState([])
  // function ----------------------------------------------------------
  function getCourseCartFromLocalStorage() {
    const newCourseCart = localStorage.getItem('utsuwacoursecart') || '[]'
    setMyCoursecart(JSON.parse(newCourseCart))
  }
  useEffect(() => {
    getCourseCartFromLocalStorage()
  }, [])
  useEffect(() => {
    let newMycoursecartDisplay = []
    for (let i = 0; i < mycoursecart.length; i++) {
      const index = newMycoursecartDisplay.findIndex(
        (value) => value.sid === mycoursecart[i].sid
      )
      if (index !== -1) {
        newMycoursecartDisplay[index].amount += mycoursecart[i].amount
      } else {
        const newCourseItem = { ...mycoursecart[i] }
        newMycoursecartDisplay = [...newMycoursecartDisplay, newCourseItem]
      }
    }
    setMyCoursecartDisplay(newMycoursecartDisplay)
  }, [mycoursecart])
  // 更新購物車中的商品數量
  function updateCourseCartToLocalStorage(itemcourse, isAdded = true) {
    const currentCourseCart =
      JSON.parse(localStorage.getItem('utsuwacoursecart')) || []
    const index = currentCourseCart.findIndex((v) => v.sid === itemcourse.sid)
    if (index > -1) {
      isAdded
        ? currentCourseCart[index].amount++
        : (currentCourseCart[index].amount = 1)
    }
    localStorage.setItem('utsuwacoursecart', JSON.stringify(currentCourseCart))
    setMyCoursecart(currentCourseCart)
  }
  //移除整個物件
  function removeCourseCart(itemcourse) {
    const index = JSON.parse(localStorage.getItem('utsuwacoursecart')) || []
    // 拿掉選取的物件
    const currentCourseCart = index.filter((v) => v.sid !== itemcourse.sid)
    localStorage.setItem('utsuwacoursecart', JSON.stringify(currentCourseCart))
    // 設定資料
    setMyCoursecart(currentCourseCart)
  }
  //移除整個localStorage
  function removeCourseCartALL() {
    const currentCourseCart =
      JSON.parse(localStorage.getItem('utsuwacoursecart')) || []
    localStorage.removeItem(
      'utsuwacoursecart',
      JSON.stringify(currentCourseCart)
    )
    localStorage.getItem('utsuwacoursecart', JSON.stringify(currentCourseCart))
    setMyCoursecart(currentCourseCart)
  }
  // 計算總價用的函式
  function sumCourse(itemcourses) {
    let coursetotal = 0
    for (let i = 0; i < itemcourses.length; i++) {
      coursetotal += itemcourses[i].amount * itemcourses[i].price
    }
    return coursetotal
  }
  const currentCourseCart = JSON.parse(localStorage.getItem('utsuwacoursecart'))
  if (currentCourseCart === null) {
    return <></>
  } else {
    return (
      <>
        <div className="row">
          <div className="cindy-table col border-bottom-0">
            <table>
              <thead>
                <tr>
                  <th scope="col">課程名稱</th>
                  <th scope="col">金額</th>
                  <th scope="col">數量</th>
                  <th scope="col">
                    <RiDeleteBinFill
                      style={style}
                      onClick={() => removeCourseCartALL()}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {mycoursecartDisplay.map((itemcourse, index) => {
                  return (
                    <tr>
                      <td> {itemcourse.product_name}</td>
                      <td> {itemcourse.price}</td>
                      <td className="d-flex justify-content-center">
                        {/* 計數器 */}
                        <div className="chang-count-border-btn col-4 d-flex flex-row justify-content-center">
                          <button
                            className="chang-count-btn"
                            onClick={() => {
                              // if (item.amount === 1) return
                              updateCourseCartToLocalStorage(itemcourse, false)
                            }}
                          >
                            -
                          </button>
                          <button className="chang-count-btn">
                            {itemcourse.amount}
                          </button>
                          <button
                            className="chang-count-btn"
                            onClick={() =>
                              updateCourseCartToLocalStorage(itemcourse, true)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            removeCourseCart(itemcourse)
                          }}
                        >
                          <svg
                            id="noun_Delete_34719"
                            xmlns="http://www.w3.org/2000/svg"
                            width={23}
                            height={20}
                            viewBox="0 0 19.111 15.884"
                          >
                            <path
                              id="Path_54"
                              data-name="Path 54"
                              d="M-134.247-16.515a21.159,21.159,0,0,0-9.085,3.9,32.518,32.518,0,0,0-5.145-3.443,4.281,4.281,0,0,0-3.693,0c-1.108.468-1.108,1.94,0,2.141a28.986,28.986,0,0,1,6.432,3.25,30.736,30.736,0,0,0-5.129,5.932,3.261,3.261,0,0,0,0,3.346c.517,1,2.142,1,2.363,0A25.964,25.964,0,0,1-143.4-8.944c5.67,4.585,8.089,9.6,7.919,7.942-.763-4.035-3.28-7.384-5.9-9.893C-136.849-14.922-132.616-16.652-134.247-16.515Z"
                              transform="translate(153.001 16.522)"
                              fill="#fcaa3e"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="mr-3 mb-5 mt-5">
            <h5 className="text-success">
              總計 &nbsp;&nbsp;{sumCourse(mycoursecartDisplay)}
            </h5>
          </div>
        </div>
      </>
    )
  }
}
export default CourseTableNing
