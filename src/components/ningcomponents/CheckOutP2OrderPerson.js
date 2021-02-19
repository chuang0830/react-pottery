import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function CheckOutP2OrderPerson(props) {
  const [OrderName, setOrderName] = useState('')
  const [OrderTel, setOrderTel] = useState('')
  const [OrderEmail, setOrderEmail] = useState('')
  const [OrderRecipient, setOrderRecipient] = useState('')
  const [OrderRecipientTel, setOrderRecipientTel] = useState('')
  const [OrderRecipientAddress, setOrderRecipientAddress] = useState('')
  const FormDataNing = {
    orderName: OrderName,
    orderTel: OrderTel,
    orderEmail: OrderEmail,
    orderRecipient: OrderRecipient,
    orderRecipientTel: OrderRecipientTel,
    orderRecipientAddress: OrderRecipientAddress,
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
  return (
    <>
      <div className="row d-flex">
        <div className="col-lg-6 col-12 d-flex flex-row">
          <div className="checkout d-flex justify-content-between">
            <div className="checkoutball">
              <FontAwesomeIcon
                icon={faUser}
                className="icon-person w-75 h-75"
              />
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
                onChange={(e) => {
                  const orderName = e.target.value
                  setOrderName(orderName)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderName,
                  })
                }}
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
                onChange={(e) => {
                  const orderTel = e.target.value
                  setOrderTel(orderTel)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderTel,
                  })
                }}
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
                onChange={(e) => {
                  const orderEmail = e.target.value
                  setOrderEmail(orderEmail)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderEmail,
                  })
                }}
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
                onChange={(e) => {
                  const orderRecipient = e.target.value
                  setOrderRecipient(orderRecipient)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderRecipient,
                  })
                }}
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
                onChange={(e) => {
                  const orderRecipientTel = e.target.value
                  setOrderRecipientTel(orderRecipientTel)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderRecipientTel,
                  })
                }}
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
                onChange={(e) => {
                  const orderRecipientAddress = e.target.value
                  setOrderRecipientAddress(orderRecipientAddress)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderRecipientAddress,
                  })
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default CheckOutP2OrderPerson
