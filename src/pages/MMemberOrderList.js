import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function MMemberOrderList(props) {
  return (
    <>
      <div className="cindyorder">
        <div className="cindy-table">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">訂單編號</th>
                <th scope="col">日期</th>
                <th scope="col">總價</th>
                <th scope="col">出貨狀態</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="./cindy-imgs/selectbox1.png" alt="" />
                </td>
                <td>productname</td>
                <td>2020-12-31</td>
                <td>1290</td>
                <td>已出貨</td>
                <td>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <label htmlFor="toggle">查看更多</label>
                    <input type="checkbox" id="toggle" checked />
                    <i className="fas fa-angle-double-down"></i>
                  </button>
                </td>
              </tr>
              <tr className="collapse" id="collapse1">
                <td></td>
                <td className="collapse2" colSpan="4">
                  <div className="cindy-sm-table toggle-box">
                    <div className="cindy-control-tb">
                      <div className="tr d-flex justify-content-around">
                        <div className="td">圖片</div>
                        <div className="td">productname</div>
                        <div className="td">藍色</div>
                        <div className="td">一件</div>
                        <div className="td">690</div>
                      </div>
                      <div className="tr d-flex justify-content-around">
                        <div className="td">圖片</div>
                        <div className="td">productname</div>
                        <div className="td">藍色</div>
                        <div className="td">一件</div>
                        <div className="td">690</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <img src="./cindy-imgs/selectbox1.png" alt="" />
                </td>
                <td>productname</td>
                <td>2020-12-31</td>
                <td>1290</td>
                <td>已出貨</td>
                <td>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    查看更多<i className="fas fa-angle-double-down"></i>
                  </button>
                </td>
              </tr>
              <tr className="collapse" id="collapse2">
                <td></td>
                <td className="collapse2" colSpan="4">
                  <div className="cindy-sm-table">
                    <div className="cindy-control-tb">
                      <div className="tr d-flex justify-content-around">
                        <div className="td">圖片</div>
                        <div className="td">productname</div>
                        <div className="td">藍色</div>
                        <div className="td">一件</div>
                        <div className="td">690</div>
                      </div>
                      <div className="tr d-flex justify-content-around">
                        <div className="td">圖片</div>
                        <div className="td">productname</div>
                        <div className="td">藍色</div>
                        <div className="td">一件</div>
                        <div className="td">690</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default MMemberOrderList
