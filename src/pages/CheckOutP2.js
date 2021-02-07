// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
//元件
import LogoNing from '../components/ningcomponents/LogoNing'
import TableSmallNing from '../components/ningcomponents/TableSmallNing'

function CheckOutP2(props) {
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
              <div className="processball">
                <div>2</div>
              </div>
              <div className="process-title">訂單資訊</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>3</div>
              </div>
              <div className="process-title-none">訂單明細</div>
            </div>
          </div>
        </div>
        <TableSmallNing />
        {/* 付款程序表單-付款人收件人 */}
        <div className="row d-flex">
          <div className="col-lg-6 col-12 d-flex flex-row">
            <div className="checkout d-flex justify-content-between">
              <div className="checkoutball">
                <i className="fas fa-user-alt icon-person" />
              </div>
              <div className="checkout-title">訂購人資訊</div>
              <div className="checkout-title-demo">DEMO</div>
            </div>
          </div>
        </div>
        {/* 付款人收件人 */}
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-4 col-12">
            <form className="mt-5">
              <div className="form-title">
                <span className="form-title-content">訂購人資訊</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  會員姓名
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  電話
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  信箱
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-12">
            <form className="mt-5">
              <div className="form-title">
                <span className="form-title-content">收件人資訊</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  收件人姓名
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  電話
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  收件人地址
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="台灣"
                />
              </div>
            </form>
          </div>
        </div>
        {/* 付款程序表單-配送 */}
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-row">
            <div className="checkout d-flex justify-content-between">
              <div className="checkoutball">
                <i className="fas fa-truck icon-car" />
              </div>
              <div className="checkout-title">配送資訊</div>
              <div className="checkout-title-demo">DEMO</div>
            </div>
          </div>
        </div>
        {/* 配送 */}
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-8 col-12">
            <form className="mt-5">
              <div className="form-title text-center">
                <span className="form-title-content">訂購人資訊</span>
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                >
                  希望到貨日
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                >
                  <option className="text-success" value>
                    2021/03/19
                  </option>
                  <option className="text-success" value>
                    2021/03/20
                  </option>
                  <option className="text-success" value>
                    2021/03/21
                  </option>
                  <option className="text-success" value>
                    2021/03/22
                  </option>
                  <option className="text-success" value>
                    2021/03/23
                  </option>
                  <option className="text-success" value>
                    2021/03/24
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                >
                  希望到貨時間
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                >
                  <option className="text-success" value>
                    中午
                  </option>
                  <option className="text-success">早上</option>
                  <option className="text-success">中午</option>
                  <option className="text-success">晚上</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                >
                  地址
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                >
                  <option className="text-success" value>
                    城市
                  </option>
                  <option className="text-success">台北</option>
                  <option className="text-success">桃園</option>
                  <option className="text-success">台中</option>
                </select>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                >
                  <option className="text-success" value>
                    區
                  </option>
                  <option className="text-success">大安</option>
                  <option className="text-success">信義</option>
                  <option className="text-success">內湖</option>
                </select>
              </div>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="完整地址"
              />
            </form>
          </div>
        </div>
        {/* 付款程序表單-付款 */}
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-row">
            <div className="checkout d-flex justify-content-between">
              <div className="checkoutball">
                <i className="fas fa-dollar-sign icon-money" />
              </div>
              <div className="checkout-title">付款</div>
              <div className="checkout-title-demo">DEMO</div>
            </div>
          </div>
        </div>
        {/* 付款 */}
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-8 col-12">
            <div className="form-title text-center">
              <span className="form-title-content">付款</span>
            </div>
            <div className="row d-flex flex-lg-row flex-column-reverse">
              <div className="col-lg-8">
                <form className="mt-5">
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-text"
                    >
                      信用卡卡號
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="0000-0000-0000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-text"
                    >
                      持卡人姓名
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="fullname"
                    />
                  </div>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-text"
                  >
                    有效日期
                  </label>
                  <div className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control text-right"
                        placeholder="月"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control text-right"
                        placeholder="年"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-text"
                    >
                      信用卡檢核碼
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="xxx"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-12 mt-5 creditcard">
                <div className="creditcardning">
                  <div className="creditcardning-yellow" />
                  <div className="creditcardning-gray-title">
                    {'{'}0000-0000-0000-0000{'}'}
                  </div>
                  <div className="creditcardning-gray-name">
                    {'{'}持卡人姓名{'}'}
                  </div>
                  <div className="creditcardning-gray-date">
                    {'{'}持卡人姓名{'}'}
                  </div>
                </div>
                <div className="creditcardbackning">
                  <div className="creditcardning-black" />
                  <div className="creditcardning-graybg">
                    <div className="creditcardning-gray" />
                    <div className="creditcardning-gray-title">
                      {'{'}text{'}'}
                    </div>
                  </div>
                  <div className="creditcardning-yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 付款程序表單-發票 */}
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-row">
            <div className="checkout d-flex justify-content-between">
              <div className="checkoutball">
                <i className="fas fa-file-alt icon-bill" />
              </div>
              <div className="checkout-title">發票/訂單備註</div>
              <div className="checkout-title-demo">DEMO</div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-8 col-12">
            <div className="form-title text-center">
              <span className="form-title-content">發票</span>
            </div>
            <div className="row d-flex flex-lg-row flex-column-reverse">
              <div className="col-lg-12">
                <form className="mt-5">
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="form-text"
                    >
                      發票類型
                    </label>
                    <select
                      className="form-control pretty-select"
                      id="exampleFormControlSelect1"
                    >
                      <option className="text-success" value>
                        紙本發票
                      </option>
                      <option className="text-success">雲端發票</option>
                      <option className="text-success">捐贈發票</option>
                      <option className="text-success">紙本發票</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="form-text"
                    >
                      載具類型
                    </label>
                    <select
                      className="form-control pretty-select"
                      id="exampleFormControlSelect1"
                    >
                      <option className="text-success" value>
                        二聯式發票
                      </option>
                      <option className="text-success">會員載具</option>
                      <option className="text-success">手機條碼</option>
                      <option className="text-success">自然人憑證</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* 訂單備註 */}
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-8 col-12">
            <div className="form-title text-center">
              <span className="form-title-content">訂單備註</span>
            </div>
            <div className="row d-flex flex-lg-row flex-column-reverse">
              <div className="col-lg-12">
                <form className="mt-5">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={''}
                    />
                  </div>
                  <div className="row d-flex justify-content-end mt-7 no-gutters">
                    <button className="ninginfo-btn mr-3">填寫訂單訊息</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CheckOutP2
