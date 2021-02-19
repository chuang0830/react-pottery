import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
function MMemberCoupon(props) {
  return (
    <>
      <div className="cindy-coupon-outer">
        <div className="cindy-card d-flex justify-content-center">
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
        </div>
      </div>
    </>
  )
}
export default MMemberCoupon
