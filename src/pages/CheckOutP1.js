// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
//元件
import LogoNing from './../components/ningcomponents/LogoNing'
import TableNing from './../components/ningcomponents/TableNing'

function CheckOutP1(props) {
  return (
    <>
      <div className="container">
        <LogoNing />
        {/* 訂單進度程序 */}
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex flex-row justify-content-center process">
            <div className="d-flex justify-content-between">
              <div className="processball">
                <div>1</div>
              </div>
              <div className="process-title">購物明細</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>2</div>
              </div>
              <div className="process-title-none">訂單資訊</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>3</div>
              </div>
              <div className="process-title-none">訂單明細</div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="row">
          <div className="container mt-5">
            <div className="row no-gutters">
              <TableNing />
            </div>
          </div>
        </div>
        {/* 選擇運送及付款方式 */}
        <div className="row d-flex justify-content-end mt-9">
          <div className="col-lg-6 col-12">
            <form className="mt-5">
              <div className="form-title text-center">
                <span className="form-title-content">選擇運送及付款方式</span>
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                >
                  運送方式
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                >
                  <option className="text-success" value>
                    請選擇
                  </option>
                  <option className="text-success">宅配到府</option>
                  <option className="text-success">超商取貨</option>
                  <option className="text-success">海外運送</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                >
                  付款方式
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                >
                  <option className="text-success" value>
                    請選擇
                  </option>
                  <option className="text-success">信用卡</option>
                  <option className="text-success">現金</option>
                  <option className="text-success">銀行轉帳</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-center mt-5">
              <span className="form-title-content"> 訂單明細 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>小計</span>
                <span>1500</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>折扣</span>
                <span>-100</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>運費</span>
                <span>100</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>總計</span>
                <span>1500</span>
              </div>
              <form action>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control text-right border-bottom-0"
                        placeholder="使用優惠卷"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control text-right"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-end mt-7 no-gutters">
          <button className="ninginfo-btn">填寫訂單訊息</button>
        </div>
      </div>
    </>
  )
}
export default CheckOutP1
