// import { BrowserRouter as Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { RiDeleteBinFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//元件
import LogoNing from './../components/ningcomponents/LogoNing'
import RecentView from './../components/ningcomponents/RecentView'
import ProductTableNing from './../components/ningcomponents/ProductTableNing'
import CourseTableNing from './../components/ningcomponents/CourseTableNing'
import ChienFooter from './../components/ChienFooter'
import ChienPolicycard from './../components/ChienPolicycard'

function ShoppingCart(props) {
  return (
    <>
      <div className="container">
        <LogoNing />
        <div className="row">
          <div className="container mt-5">
            {/* 商品購物車 */}
            <ProductTableNing />
          </div>
        </div>
        {/* 課程購物車 */}
        <CourseTableNing />
        <div className="row d-flex justify-content-end mb-7">
          <Link to="/CheckOutP1">
            <button className="ninginfo-btn">前往結帳</button>
          </Link>
        </div>

        {/*[_winnierecentview.scss] recent view title*/}
        <div className="container">
          <div className="row winnie-line">
            <div className="d-flex winnie-recent-title">
              <h2 className="my-auto col">-Recent View-</h2>
            </div>
          </div>
        </div>

        {/* recent view product*/}
        <div className="row">
          <RecentView />
        </div>
      </div>
      <ChienPolicycard />
      <ChienFooter />
    </>
  )
}

export default ShoppingCart
