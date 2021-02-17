// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

//元件
import LogoNing from '../components/ningcomponents/LogoNing'

function CheckOutP3(props) {
  const [myform, setMyform] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [myformDisplay, setMyformDisplay] = useState([])
  // function ----------------------------------------------------------
  function getFormToLocalStorage() {
    const newForm = localStorage.getItem('utsuwaformdataning') || '[]'
    setMyform(JSON.parse(newForm))
  }
  useEffect(() => {
    getFormToLocalStorage()
  }, [])
  useEffect(() => {
    let newMyformDisplay = []
    for (let i = 0; i < myform.length; i++) {
      const newItem = { ...myform[i] }
      newMyformDisplay = [...newMyformDisplay, newItem]
      setMyformDisplay(newMyformDisplay.slice(myform.length - 1))
    }
  }, [myform])
  return (
    <>
      <div className="container">
        <LogoNing />
        {/* 訂單進度程序 */}
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex flex-row justify-content-center process">
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>1</div>
              </div>
              <div className="process-title-none">購物明細</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>2</div>
              </div>
              <div className="process-title-none">訂單資訊</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball">
                <div>3</div>
              </div>
              <div className="process-title">訂單明細</div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="container mt-5">
          <div className="row">
            <div className="cindy-table col-12 col-lg-8 border-bottom-0">
              <div className="tablestyle-title text-center">
                <span className="tablestyle-title-content">購物明細</span>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="http://localhost:3008/ning-imgs/s.1jpg"
                        height={70}
                        alt=""
                      />
                    </td>
                    <td>productname</td>
                    <td>690</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://localhost:3008/ning-imgs/s.1jpg"
                        height={70}
                        alt=""
                      />
                    </td>
                    <td>productname</td>
                    <td>690</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-4 col-12">
              <div className="checkoutorder-title text-center mt-4">
                <span className="checkoutorder-title-content"> 訂單明細 </span>
              </div>
              <div className="orderstyle">
                <div className="d-flex justify-content-between">
                  <span>小計</span>
                  <span>1500</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>折扣</span>
                  <span>-100</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>運費</span>
                  <span>100</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>總計</span>
                  <span>1500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 訂單成功icon*/}
        <div className="row d-flex justify-content-center mt-7">
          <div className="col-lg-2 col-4">
            <svg viewBox="0 0 400 400">
              <circle
                cx={200}
                cy={200}
                r={190}
                strokeWidth={20}
                stroke="#fcaa3e"
                fill="none"
                className="circle active"
                transform="rotate(-90 200 200)"
              />
              <polyline
                fill="none"
                stroke="#fcaa3e"
                strokeWidth={24}
                points="88,214 173,284 304,138"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tick active"
              />
            </svg>
            <div className="d-flex justify-content-center mt-3">
              <span className="svg-title">感謝您的購買</span>
            </div>
          </div>
        </div>
        <div className="row mt-7">
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 訂單明細 </span>
            </div>
            <div className="orderstyle">
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>訂單編號</span>
                    <span>1</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>訂單日期</span>
                    <span>{item.orderDay}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>訂單狀態</span>
                    <span>準備中</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 訂購人資訊 </span>
            </div>
            <div className="orderstyle">
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>會員姓名</span>
                    <span>{item.orderName}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>電話</span>
                    <span>{item.orderTel}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>信箱</span>
                    <span>{item.orderEmail}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="row mt-7">
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 收件人資訊 </span>
            </div>
            <div className="orderstyle">
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>收件人姓名</span>
                    <span>{item.orderRecipient}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>收件人電話</span>
                    <span>{item.orderRecipientTel}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>收件人地址</span>
                    <span>{item.orderRecipientAddress}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 配送 </span>
            </div>
            <div className="orderstyle">
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>希望到貨日</span>
                    <span>{item.orderarrivaldate}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>希望到貨時間</span>
                    <span>{item.orderarrivaltime}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>地址</span>
                    <span>{item.orderarrivaladdress}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="row mt-7">
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 付款 </span>
            </div>
            <div className="orderstyle">
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>付款方式</span>
                    <span>信用卡(線上刷卡)</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>付款狀態</span>
                    <span>已付款</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>信用卡卡號</span>
                    <span>{item.ordercreditcard}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>持卡人姓名</span>
                    <span>{item.ordercreditcardname}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 發票/訂單備註 </span>
            </div>
            <div className="orderstyle">
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>發票日期</span>
                    <span>{item.orderDay}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>發票類型</span>
                    <span>{item.orderinvoice}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>載具類型</span>
                    <span>{item.orderinvoicetype}</span>
                  </div>
                )
              })}
              {myformDisplay.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>訂單備註</span>
                    <span>{item.orderinvoicearea}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CheckOutP3
