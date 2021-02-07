// import { BrowserRouter as Link, Switch } from 'react-router-dom'
import React from 'react'
//元件
import LogoNing from './../components/ningcomponents/LogoNing'
import TableNing from './../components/ningcomponents/TableNing'
import RecentView from './../components/ningcomponents/RecentView'

function ShoppingCart(props) {
  return (
    <>
      <div className="container">
        <LogoNing />
        <div className="row">
          <div className="container mt-5">
            <div className="row">
              <TableNing />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="mr-3 mb-5 mt-5">
            <button className="ninginfo-btn">前往結帳</button>
          </div>
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
    </>
  )
}
export default ShoppingCart
