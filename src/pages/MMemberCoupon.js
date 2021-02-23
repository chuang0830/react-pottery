import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
function MMemberCoupon(props) {
  const sid = localStorage.getItem('member-sid')
  const [coupon, setCoupon] = useState('')
  async function getUserFromServer(sid) {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/coupon/' + sid

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      //拿資料
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料

    setCoupon(data)
  }
  useEffect(() => {
    getUserFromServer(sid)
  }, [])
  return (
    <>
      <div className="cindy-coupon-outer d-flex flex-wrap">
        {coupon.length &&
          coupon.map((value, index) => {
            let exp_date = new Date(value.date)
            return (
              <div className="cindy-card d-flex justify-content-center">
                <div className="cindy-card-left ">
                  <p>{value.name}</p>
                  <h2>{value.price}元</h2>
                  <p>折扣碼：{value.code}</p>
                </div>
                <div className="cindy-card-right ">
                  <p>使用期限至</p>
                  <p className="cindy-card-date">
                    {exp_date.getFullYear()}-{exp_date.getMonth() + 1}-
                    {exp_date.getDate()}
                  </p>
                  <button>copy</button>
                </div>
              </div>
            )
          })}

        {/* <div className="cindy-card d-flex justify-content-center">
          <div className="cindy-card-left ">
            <p>生日優惠券</p>
            <h2>100元</h2>
            <p>折扣碼：BB0304</p>
          </div>
          <div className="cindy-card-right ">
            <p>使用期限至</p>
            <p className="cindy-card-date">2021-12-31</p>
            <button>copy</button>
          </div>
        </div> */}
      </div>
    </>
  )
}
export default MMemberCoupon
