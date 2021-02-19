import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function CheckOutP2OrderPay(props) {
  const [OrderCreditcard, setOrderCreditcard] = useState('')
  const [OrderCreditcardName, setOrderCreditcardName] = useState('')
  const [OrderCreditcardMonth, setOrderCreditcardMonth] = useState('')
  const [OrderCreditcardYear, setOrderCreditcardYear] = useState('')
  const [OrderCreditcardCheck, setOrderCreditcardCheck] = useState('')

  const FormDataNing = {
    ordercreditcard: OrderCreditcard,
    ordercreditcardname: OrderCreditcardName,
    ordercreditcardmonth: OrderCreditcardMonth,
    ordercreditcardyear: OrderCreditcardYear,
    ordercreditcardcheck: OrderCreditcardCheck,
  }

  // 加入表單-----------------------------------------------------------------
  const [mycart, setMycart] = useState([])
  const updateFormToLocalStorage = (item) => {
    const currentCart =
      JSON.parse(localStorage.getItem('utsuwaformdataning')) || []
    currentCart.push(item)
    localStorage.setItem('utsuwaformdataning', JSON.stringify(currentCart))
    setMycart(currentCart)
  }
  const iconstyledollar = {
    marginLeft: '-1px',
    marginTop: '2px',
  }
  return (
    <>
      <div className="row d-flex">
        <div className="col-lg-6 d-flex flex-row">
          <div className="checkout d-flex justify-content-between">
            <div className="checkoutball">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="icon-money w-75 h-75"
                style={iconstyledollar}
              />
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
                    minlength="1"
                    maxlength="16"
                    onChange={(e) => {
                      const ordercreditcard = e.target.value
                      setOrderCreditcard(ordercreditcard)
                      updateFormToLocalStorage({
                        ...FormDataNing,
                        ordercreditcard,
                      })
                    }}
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
                    onChange={(e) => {
                      const ordercreditcardname = e.target.value
                      setOrderCreditcardName(ordercreditcardname)
                      updateFormToLocalStorage({
                        ...FormDataNing,
                        ordercreditcardname,
                      })
                    }}
                  />
                </div>
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  有效日期
                </label>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control text-right"
                      placeholder="月"
                      onChange={(e) => {
                        const ordercreditcardmonth = e.target.value
                        setOrderCreditcardMonth(ordercreditcardmonth)
                        updateFormToLocalStorage({
                          ...FormDataNing,
                          ordercreditcardmonth,
                        })
                      }}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control text-right"
                      placeholder="年"
                      onChange={(e) => {
                        const ordercreditcardyear = e.target.value
                        setOrderCreditcardYear(ordercreditcardyear)
                        updateFormToLocalStorage({
                          ...FormDataNing,
                          ordercreditcardyear,
                        })
                      }}
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
                    onChange={(e) => {
                      const ordercreditcardcheck = e.target.value
                      setOrderCreditcardCheck(ordercreditcardcheck)
                      updateFormToLocalStorage({
                        ...FormDataNing,
                        ordercreditcardcheck,
                      })
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-12 mt-5 creditcard">
              <div className="creditcardning">
                <div className="creditcardning-yellow" />
                <div className="creditcardning-gray-title">
                  {OrderCreditcard}
                </div>
                <div className="creditcardning-gray-name">
                  {OrderCreditcardName}
                </div>
                <div className="creditcardning-gray-date">
                  {OrderCreditcardMonth}/{OrderCreditcardYear}
                </div>
              </div>
              <div className="creditcardbackning">
                <div className="creditcardning-black" />
                <div className="creditcardning-graybg">
                  <div className="creditcardning-gray" />
                  <div className="creditcardning-gray-title">
                    {OrderCreditcardCheck}
                  </div>
                </div>
                <div className="creditcardning-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CheckOutP2OrderPay
