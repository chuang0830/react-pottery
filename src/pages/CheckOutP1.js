// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

import { Link } from 'react-router-dom'

//元件
import LogoNing from './../components/ningcomponents/LogoNing'
import CheckOutP1TransportSelectNing from '../components/ningcomponents/CheckOutP1TransportSelectNing'
function CheckOutP1(props) {
  // style ------------------------------------------------------------
  const style = {
    color: 'primary',
    fontSize: 24,
  }

  // 商品--------------------------------------------------------------
  // State ------------------------------------------------------------
  // fetch orders
  const [orders, setOrders] = useState('')

  // 購物車
  const [mycart, setMycart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  // 優惠卷
  const [Discount, setDiscount] = useState(0)
  const [Total, setTotal] = useState(0)
  const [Shipping, setShipping] = useState(120)

  // function fetch orders-----------------------------------------------
  // 傳送的資料
  async function addOrders() {
    const DataProduct = JSON.parse(localStorage.getItem('utsuwacart'))
    console.log(DataProduct)
    const Datasid = DataProduct.sid
    console.log(Datasid)
    // const DataProductarray = []
    // DataProduct.map((v, i) => {
    //   DataProductarray.push(v.sid)

    //   console.log({ DataProductarray })
    // })

    // console.log(Datasid)
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/orderdetails/list'
    // 注意header資料格式要設定，伺服器才知道是json格式

    const request = new Request(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DataProduct),
      //   // headers: new Headers({
      //   //   Accept: 'application/json',
      //   //   'Content-Type': 'appliaction/json',
      //   // }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // setOrders(data)

    console.log('伺服器回傳的json資料', data)
  }

  // 設定傳送資料

  // function 購物車-----------------------------------------------------
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('utsuwacart') || '[]'
    setMycart(JSON.parse(newCart))
  }
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
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
  // 更新購物車中的商品數量
  function updateCartToLocalStorage(item, isAdded = true) {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('utsuwacart')) || []
    const index = currentCart.findIndex((v) => v.sid === item.sid)
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }
    // // 計數器bug
    // if(currentCart[index].amount<1){}
    localStorage.setItem('utsuwacart', JSON.stringify(currentCart))
    setMycart(currentCart)
  }
  //移除整個物件
  function removeCart(item) {
    const index = JSON.parse(localStorage.getItem('utsuwacart')) || []
    // 拿掉選取的物件
    const currentCart = index.filter((v) => v.sid !== item.sid)
    localStorage.setItem('utsuwacart', JSON.stringify(currentCart))
    // 設定資料
    setMycart(currentCart)
  }
  //移除整個localStorage
  function removeCartALL() {
    const currentCart = JSON.parse(localStorage.getItem('utsuwacart')) || []
    localStorage.removeItem('utsuwacart', JSON.stringify(currentCart))
    localStorage.getItem('utsuwacart', JSON.stringify(currentCart))
    setMycart(currentCart)
  }
  // 計算總價用的函式
  function sum(items) {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  const index = JSON.parse(localStorage.getItem('utsuwacart')) || []
  console.log(index)
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
            <div className="row">
              <div className="cindy-table col border-bottom-0">
                <table>
                  <thead>
                    <tr>
                      <th scope="col" />
                      <th scope="col">商品名稱</th>
                      <th scope="col">金額</th>
                      <th scope="col">數量</th>
                      <th scope="col">
                        <RiDeleteBinFill
                          style={style}
                          onClick={() => removeCartALL()}
                        />
                      </th>
                    </tr>
                  </thead>
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
                          <td> {item.product_name}</td>
                          <td> {item.price}</td>
                          <td className="d-flex justify-content-center">
                            {/* 計數器 */}
                            <div className="chang-count-border-btn col-4 d-flex flex-row justify-content-center">
                              <button
                                className="chang-count-btn"
                                onClick={() => {
                                  // if (item.amount === 1) return
                                  updateCartToLocalStorage(item, false)
                                  setTotal(
                                    sum(mycartDisplay) - Discount - Shipping
                                  )
                                }}
                              >
                                -
                              </button>
                              <button className="chang-count-btn">
                                {item.amount}
                              </button>
                              <button
                                className="chang-count-btn"
                                onClick={() => {
                                  // if (item.amount === 1) return
                                  updateCartToLocalStorage(item, true)
                                  setTotal(
                                    sum(mycartDisplay) - Discount - Shipping
                                  )
                                }}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                removeCart(item)
                              }}
                            >
                              <svg
                                id="noun_Delete_34719"
                                xmlns="http://www.w3.org/2000/svg"
                                width={23}
                                height={20}
                                viewBox="0 0 19.111 15.884"
                              >
                                <path
                                  id="Path_54"
                                  data-name="Path 54"
                                  d="M-134.247-16.515a21.159,21.159,0,0,0-9.085,3.9,32.518,32.518,0,0,0-5.145-3.443,4.281,4.281,0,0,0-3.693,0c-1.108.468-1.108,1.94,0,2.141a28.986,28.986,0,0,1,6.432,3.25,30.736,30.736,0,0,0-5.129,5.932,3.261,3.261,0,0,0,0,3.346c.517,1,2.142,1,2.363,0A25.964,25.964,0,0,1-143.4-8.944c5.67,4.585,8.089,9.6,7.919,7.942-.763-4.035-3.28-7.384-5.9-9.893C-136.849-14.922-132.616-16.652-134.247-16.515Z"
                                  transform="translate(153.001 16.522)"
                                  fill="#fcaa3e"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* 選擇運送及付款方式 */}
        <div className="row d-flex justify-content-end mt-9">
          <CheckOutP1TransportSelectNing />
          <div className="col-lg-6 col-12">
            <div className="form-title text-center mt-5">
              <span className="form-title-content"> 訂單明細 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between align-items-center">
                <span>小計</span>
                <span>{sum(mycartDisplay)}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>折扣</span>
                <span>{Discount}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>運費</span>
                <span>{Shipping}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>總計</span>
                <span>{Total}</span>
              </div>
              {/* <form action>
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
              </form> */}
            </div>
            {/* <div className="row d-flex justify-content-center mb-5">
              <button
                className="cindy-btn"
                onClick={() => {
                  setDiscount(Discount + 100)
                  setTotal(sum(mycartDisplay) - Discount - Shipping)
                }}
              >
                生日優惠卷
              </button>
              <button
                className="cindy-btn mx-1"
                onClick={() => {
                  setDiscount(Discount + 60)
                  setTotal(sum(mycartDisplay) - Discount - Shipping)
                }}
              >
                新用戶優惠卷
              </button>
              <button
                className="cindy-btn"
                onClick={() => {
                  setDiscount(Discount + 60)
                  setTotal(sum(mycartDisplay) - Discount - Shipping)
                }}
              >
                滿額優惠卷
              </button>
            </div> */}
          </div>
        </div>
        <div className="row d-flex justify-content-end mb-7 mt-5 mt-3">
          <Link to="/CheckOutP2">
            <button
              className="ninginfo-btn mx-1"
              onClick={() => {
                addOrders()
              }}
            >
              填寫訂單訊息
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default CheckOutP1
