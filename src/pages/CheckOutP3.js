// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
//元件
import LogoNing from '../components/ningcomponents/LogoNing'
import TableSmallNing from '../components/ningcomponents/TableSmallNing'

function CheckOutP3(props) {
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
        <TableSmallNing />
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
              <div className="d-flex justify-content-between align-items-center">
                <span>訂單編號</span>
                <span>00346121031</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>訂單日期</span>
                <span>2021/03/05</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>訂單狀態</span>
                <span>訂單處理中</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 訂購人資訊 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>會員姓名</span>
                <span>Ning</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>電話</span>
                <span>09123456789</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>信箱</span>
                <span>asdfty@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-7">
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 收件人資訊 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>收件人姓名</span>
                <span>Ning123</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>電話</span>
                <span>09123456788</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>收件人地址</span>
                <span>asdfty123@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 付款 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>付款方式</span>
                <span>信用卡(線上刷卡)</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>付款狀態</span>
                <span>已付款</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>付款簡介</span>
                <span>支援國內外Visa MasterCard JCB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-7">
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 配送 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>希望到貨日</span>
                <span>2021/03/19</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>希望到貨時間</span>
                <span>中午</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>地址</span>
                <span>城市......................</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 發票/訂單備註 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>發票日期</span>
                <span>2021/03/05</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>發票類型</span>
                <span>雲端發票</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>載具類型</span>
                <span>/RTYUIO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CheckOutP3
