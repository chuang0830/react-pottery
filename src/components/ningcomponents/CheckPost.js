import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CheckPost(props) {
  // 商品
  const ordercart = JSON.parse(localStorage.getItem('utsuwacart'))
  // CheckoutP1
  const check = JSON.parse(localStorage.getItem('utsuwaformdataningcheck'))
  const discount = check.discount
  const totals = check.total
  const selectpay = check.selectpay
  const selecttransform = check.selecttransform
  // CheckoutP2
  const checkform = JSON.parse(localStorage.getItem('utsuwaformdataning'))
  const orderDay = checkform.orderDay
  const orderEmail = checkform.orderEmail
  const orderName = checkform.orderName
  const orderRecipient = checkform.orderRecipient
  const orderRecipientAddress = checkform.orderRecipientAddress
  const orderRecipientTel = checkform.orderRecipientTel
  const orderTel = checkform.orderTel
  const orderarrivaladdress = checkform.orderarrivaladdress
  const orderarrivaldate = checkform.orderarrivaldate
  const orderarrivaltime = checkform.orderarrivaltime
  const ordercreditcard = checkform.ordercreditcard
  const ordercreditcardcheck = checkform.ordercreditcardcheck
  const ordercreditcardmonth = checkform.ordercreditcardmonth
  const ordercreditcardname = checkform.ordercreditcardname
  const ordercreditcardyear = checkform.ordercreditcardyear
  const orderinvoice = checkform.orderinvoicearea
  const orderinvoicearea = checkform.discount
  const orderinvoicetype = checkform.orderinvoicetype

  const shippingStatus = '準備中'
  const member_sid = 1
  const ordermonth = new Date().getMinutes()
  const ordersec = new Date().getSeconds()
  const ordernum = ordermonth + ordersec
  async function addOrders() {
    const obj = {
      ordercart,
      // CheckoutP1
      discount,
      totals,
      selectpay,
      selecttransform,
      // CheckoutP2
      orderDay,
      orderName,
      orderTel,
      orderEmail,
      orderRecipient,
      orderRecipientAddress,
      orderRecipientTel,
      ordercreditcard,
      ordercreditcardcheck,
      ordercreditcardmonth,
      ordercreditcardname,
      ordercreditcardyear,
      orderinvoice,
      orderinvoicearea,
      orderinvoicetype,
      orderarrivaladdress,
      orderarrivaldate,
      orderarrivaltime,
      shippingStatus,
      member_sid,
      ordernum,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/orders/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳的json資料', data)
  }
  return (
    <>
      <div className="row d-flex justify-content-end mb-7 mt-5 mr-1">
        <Link to="/CheckOutP3">
          <button
            className="ninginfo-btn"
            onClick={() => {
              addOrders()
            }}
          >
            提交訂單
          </button>
        </Link>
      </div>
    </>
  )
}
export default CheckPost
