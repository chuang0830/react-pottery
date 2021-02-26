// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

//元件
import LogoNing from '../components/ningcomponents/LogoNing'
import ChienFooter from './../components/ChienFooter'
import ChienPolicycard from './../components/ChienPolicycard'

function CheckOutP3(props) {
  // 購物車 表單
  const [myform, setMyform] = useState([])
  const [myforms, setMyforms] = useState([])
  const [mycart, setMycart] = useState([])
  // 優惠卷
  const [Shipping, setShipping] = useState(120)

  const [mycartDisplay, setMycartDisplay] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  // const [myformDisplay, setMyformDisplay] = useState([])

  //跳轉至打勾勾-----------------------------------------------------------
  //方法一：指定分頁位置
  //方法二：app.js(<ScrollToItem>)
  //但不管哪種都會被scrolltop擋住
  //指定分頁位置
  let scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName)
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' })
        console.log(anchorName)
      }
    }
  }
  //跳進來0秒至id={'screens'}
  setTimeout(() => {
    scrollToAnchor('screens')
  }, 0)

  // function ----------------------------------------------------------
  function getFormToLocalStorage() {
    const newForm = localStorage.getItem('utsuwaformdataningcheck')
    setMyform(JSON.parse(newForm))
    const newForms = localStorage.getItem('utsuwaformdataning')
    setMyforms(JSON.parse(newForms))

    const myCart = localStorage.getItem('utsuwacart') || '[]'
    setMycart(JSON.parse(myCart))
  }
  useEffect(() => {
    getFormToLocalStorage()
  }, [])
  useEffect(() => {
    console.log(myform)
  }, [myform, myforms])
  useEffect(() => {
    let newMycartDisplay = []
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        (value) => value.sid === mycart[i].sid
      )
      if (index !== -1) {
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    setMycartDisplay(newMycartDisplay)
  }, [mycart])
  // 計算總價用的函式
  function sum(items) {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  console.log(props.location.pathname)
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
                  {mycartDisplay.map((item, index) => {
                    return (
                      <tr>
                        <img
                          src={`http://localhost:3008/winnie-images/${
                            JSON.parse(item.photo)[0]
                          }`}
                          alt=""
                          srcset=""
                          width="150"
                        />
                        <td colSpan="2"> {item.product_name}</td>
                        <td colSpan="2"> {item.price}</td>
                        <td colSpan="2"> {item.amount}</td>
                      </tr>
                    )
                  })}
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
                  <span>{sum(mycartDisplay)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>折扣</span>
                  <span>{myform.discount}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>運費</span>
                  <span>{Shipping}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>總計</span>
                  <span>{myform.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 訂單成功icon*/}
        <div className="row d-flex justify-content-center mt-7" id={'screens'}>
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
                <span>1</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>訂單日期</span>
                <span>{myforms.orderDay}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>訂單狀態</span>
                <span>準備中</span>
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
                <span>{myforms.orderName}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>電話</span>
                <span>{myforms.orderTel}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>信箱</span>
                <span>{myforms.orderEmail}</span>
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
                <span>{myforms.orderRecipient}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>收件人電話</span>
                <span>{myforms.orderRecipientTel}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>收件人地址</span>
                <span>{myforms.orderRecipientAddress}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-title text-left mt-5">
              <span className="form-title-content"> 配送 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>希望到貨日</span>
                <span>{myforms.orderarrivaldate}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>希望到貨時間</span>
                <span>{myforms.orderarrivaltime}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>地址</span>
                <span>{myforms.orderarrivaladdress}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-7 mb-7">
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
                <span>信用卡卡號</span>
                <span>{myforms.ordercreditcard}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>持卡人姓名</span>
                <span>{myforms.ordercreditcardname}</span>
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
                <span>{myforms.orderDay}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>發票類型</span>
                <span>{myforms.orderinvoice}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>載具類型</span>
                <span>{myforms.orderinvoicetype}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>訂單備註</span>
                <span>{myforms.orderinvoicearea}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChienPolicycard />
      <ChienFooter />
    </>
  )
}
export default withRouter(CheckOutP3)
