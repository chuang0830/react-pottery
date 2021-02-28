// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

//元件
import LogoNing from './../components/ningcomponents/LogoNing'
import CheckOutP1TableNing from './../components/ningcomponents/CheckOutP1TableNing'
import ChienFooter from './../components/ChienFooter'
import ChienPolicycard from './../components/ChienPolicycard'
function CheckOutP1(props) {
  // style ------------------------------------------------------------
  const style = {
    color: 'primary',
    fontSize: 24,
  }
  // 購物車
  const [myform, setMyform] = useState([])
  const [mycart, setMycart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [myformDisplay, setMyformDisplay] = useState([])
  // 優惠卷
  const [Discount, setDiscount] = useState(0)
  const [Total, setTotal] = useState(0)
  const [Shipping, setShipping] = useState(120)

  // function 購物車-----------------------------------------------------
  function getCartFromLocalStorage() {
    const newForm = localStorage.getItem('utsuwaformdataningcheck')
    setMyform(JSON.parse(newForm))

    const newCart = localStorage.getItem('utsuwacart') || '[]'
    setMycart(JSON.parse(newCart))
  }
  function total() {
    setTotal(sum(mycartDisplay) + Shipping - Discount)
  }
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  useEffect(() => {
    total()
  })
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
  }, [mycart, myform])
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
  // 加入表單-----------------------------------------------------------------
  const [seletedTransform, setSeletedTransform] = useState('')
  const [seletedPay, setSeletedPay] = useState('')
  const FormDataNing = {
    selecttransform: seletedTransform,
    selectpay: seletedPay,
    total: Total,
    discount: Discount,
  }
  // 更新購物車中的商品數量
  function updateCartToLocalStorage(item, isAdded = true) {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('utsuwacart')) || []
    const index = currentCart.findIndex((v) => v.sid === item.sid)
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : (currentCart[index].amount = 1)
    }
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
  const updateFormcheckp1ToLocalStorage = (item) => {
    // const newItem = { ...myform, ...item }
    console.log(myform, item)
    localStorage.setItem('utsuwaformdataningcheck', JSON.stringify(item))
  }
  const updateFormcheckp2ToLocalStorage = (item) => {
    // const newItem = { ...myform, ...item }
    console.log(myform, item)
    localStorage.setItem('utsuwaformdataning', JSON.stringify(item))
  }

  useEffect(() => {
    updateFormcheckp1ToLocalStorage({
      ...FormDataNing,
      discount: Discount,
      total: Total,
    })
  }, [Total, Discount])
  useEffect(() => {
    updateFormcheckp2ToLocalStorage({
      ...FormDataNing,
      member_sid: 1,
    })
  }, [])
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
                                }}
                              >
                                -
                              </button>
                              <button className="chang-count-btn">
                                {item.amount}
                              </button>
                              <button
                                className="chang-count-btn"
                                onClick={() =>
                                  updateCartToLocalStorage(item, true)
                                }
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
          <div className="col-lg-6 col-12">
            <form className="mt-5">
              <div className="form-title text-center">
                <span className="form-title-content">選擇配送及付款方式</span>
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                >
                  配送方式
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                  onChange={(e) => {
                    const selecttransform = e.target.value
                    setSeletedTransform(selecttransform)
                    updateFormcheckp1ToLocalStorage({
                      ...FormDataNing,
                      selecttransform,
                    })
                  }}
                >
                  {/* const [seletedTransform, setSeletedTransform] = useState('') */}
                  <option className="text-success" value="請選擇">
                    請選擇配送方式
                  </option>
                  <option className="text-success" value="宅配到府">
                    宅配到府
                  </option>
                  <option className="text-success" value="超商取貨">
                    超商取貨
                  </option>
                  <option className="text-success" value="海外運送">
                    海外運送
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-text"
                  for="validationCustom04"
                >
                  付款方式
                </label>
                <select
                  className="form-control pretty-select"
                  id="exampleFormControlSelect1"
                  id="validationCustom04"
                  required
                  onChange={(e) => {
                    const selectpay = e.target.value
                    setSeletedPay(selectpay)
                    updateFormcheckp1ToLocalStorage({
                      ...FormDataNing,
                      selectpay,
                    })
                  }}
                >
                  {/* const [seletedPay, setSeletedPay] = useState('') */}

                  <option className="text-success" value="請選擇">
                    請選擇付款方式
                  </option>
                  <option className="text-success" value="信用卡">
                    信用卡
                  </option>
                  <option className="text-success" value="現金">
                    現金
                  </option>
                  <option className="text-success" value="銀行轉帳">
                    銀行轉帳
                  </option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
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
            </div>
            <div className="row d-flex justify-content-center mb-5">
              <button
                className="cindy-btn"
                onClick={() => {
                  setDiscount(Discount + 60)
                }}
              >
                生日優惠卷
              </button>
              <button
                className="cindy-btn mx-1"
                onClick={() => {
                  setDiscount(Discount + 0)
                }}
              >
                新用戶優惠卷
              </button>
              <button
                className="cindy-btn"
                onClick={() => {
                  setDiscount(Discount + 0)
                }}
              >
                滿額優惠卷
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-end mb-9 mt-5 mt-3">
          <Link to="/CheckOutP2">
            <button className="ninginfo-btn mx-1">填寫訂單訊息</button>
          </Link>
        </div>
      </div>
      <ChienPolicycard />
      <ChienFooter />
    </>
  )
}
export default CheckOutP1
