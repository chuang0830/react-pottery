import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from 'react-bootstrap/Table'
import {
  faTruck,
  faUser,
  faDollarSign,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons'

//元件
import LogoNing from '../components/ningcomponents/LogoNing'
function CheckOutP2(props) {
  // icon-style
  const iconstyletruck = {
    marginLeft: '2px',
  }
  const iconstyledollar = {
    marginLeft: '-1px',
    marginTop: '2px',
  }
  // 購物車 表單
  const [myform, setMyform] = useState([])
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  // 優惠卷
  const [Discount, setDiscount] = useState(0)
  const [Total, setTotal] = useState(0)
  const [Shipping, setShipping] = useState(120)
  // fetch orders
  const [orders, setOrders] = useState('')
  // function ----------------------------------------------------------
  function getFormToLocalStorage() {
    const newForm = localStorage.getItem('utsuwaformdataning')
    setMyform(JSON.parse(newForm))
    console.log(newForm)
    const newCart = localStorage.getItem('utsuwacart') || '[]'
    setMycart(JSON.parse(newCart))
  }
  function total() {
    setTotal(sum(mycartDisplay) - Shipping - Discount)
  }
  useEffect(() => {
    getFormToLocalStorage()
  }, [])
  useEffect(() => {
    console.log(myform)
  }, [myform])
  useEffect(() => {
    setDiscount(Discount)
    if (Discount) {
      total()
    } else {
      setTotal(sum(mycartDisplay) - Shipping)
    }
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
  }, [mycart])

  // 計算總價用的函式
  function sum(items) {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  // function fetch orders-----------------------------------------------
  // orders_sid, sid(家寧),price,amount
  // const product_sid = 32
  // const price = 100
  // const amount = 5

  async function addOrders() {
    // 開啟載入指示
    // setDataLoading(true)

    // avatar,account,bid_product_number,bid_add_money,bid_sum_money
    const newData = {
      // product_sid,
      // price,
      // amount,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/orderdetails/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    // setTimeout(() => {
    //   setDataLoading(false)
    //   alert('儲存完成')
    //   props.history.push('/')
    // }, 500)
  }
  // 傳送的資料
  // async function addOrders() {
  //   const DataProduct = JSON.parse(localStorage.getItem('utsuwacart'))
  //   console.log(DataProduct)
  //   // const Datasid = DataProduct.sid
  //   // console.log(Datasid)
  //   // const DataProductarray = []
  //   // DataProduct.map((v, i) => {
  //   //   DataProductarray.push(v.sid)

  //   //   console.log({ DataProductarray })
  //   // })

  //   // console.log(Datasid)
  //   // 連接的伺服器資料網址
  //   const url = 'http://localhost:3000/orderdetails/list'
  //   // 注意header資料格式要設定，伺服器才知道是json格式

  //   const request = new Request(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(DataProduct),
  //     //   // headers: new Headers({
  //     //   //   Accept: 'application/json',
  //     //   //   'Content-Type': 'appliaction/json',
  //     //   // }),
  //   })
  //   const response = await fetch(request)
  //   const data = await response.json()
  //   // setOrders(data)
  //   console.log('伺服器回傳的json資料', data)
  // }
  // 設定傳送資料
  //--------------------------------------------------------------------
  // CheckOutP2OrderPerson
  const [OrderName, setOrderName] = useState('')
  const [OrderTel, setOrderTel] = useState('')
  const [OrderEmail, setOrderEmail] = useState('')
  const [OrderRecipient, setOrderRecipient] = useState('')
  const [OrderRecipientTel, setOrderRecipientTel] = useState('')
  const [OrderRecipientAddress, setOrderRecipientAddress] = useState('')
  // CheckOutP2OrderDelivery
  const [OrderArrivalDate, setOrderArrivalDate] = useState('')
  const [OrderArrivalTime, setOrderArrivalTime] = useState('')
  const [OrderArrivalAddress, setOrderArrivalAddress] = useState('')
  // CheckOutP2OrderPay
  const [OrderCreditcard, setOrderCreditcard] = useState('')
  const [OrderCreditcardName, setOrderCreditcardName] = useState('')
  const [OrderCreditcardMonth, setOrderCreditcardMonth] = useState('')
  const [OrderCreditcardYear, setOrderCreditcardYear] = useState('')
  const [OrderCreditcardCheck, setOrderCreditcardCheck] = useState('')
  // CheckOutP2OrderInvoice
  const [OrderInvoice, setOrderInvoice] = useState('')
  const [OrderInvoiceType, setOrderInvoiceType] = useState('')
  const [OrderInvoiceArea, setOrderInvoiceArea] = useState('')
  // Orders
  const [OrderDay, setOrderDay] = useState('')
  const FormDataNing = {
    // CheckOutP2OrderPerson
    orderName: OrderName,
    orderTel: OrderTel,
    orderEmail: OrderEmail,
    orderRecipient: OrderRecipient,
    orderRecipientTel: OrderRecipientTel,
    orderRecipientAddress: OrderRecipientAddress,
    // CheckOutP2OrderDelivery
    orderarrivaldate: OrderArrivalDate,
    orderarrivaltime: OrderArrivalTime,
    orderarrivaladdress: OrderArrivalAddress,
    // CheckOutP2OrderPay
    ordercreditcard: OrderCreditcard,
    ordercreditcardname: OrderCreditcardName,
    ordercreditcardmonth: OrderCreditcardMonth,
    ordercreditcardyear: OrderCreditcardYear,
    ordercreditcardcheck: OrderCreditcardCheck,
    // CheckOutP2OrderInvoice
    orderinvoice: OrderInvoice,
    orderinvoicetype: OrderInvoiceType,
    orderinvoicearea: OrderInvoiceArea,
    // Orders
    orderDay: OrderDay,
  }
  // 加入表單-----------------------------------------------------------------
  // const [mycart, setMycart] = useState([])
  const updateFormToLocalStorage = (item) => {
    JSON.parse(localStorage.getItem('utsuwaformdataning'))
    // currentCart.push(item)
    localStorage.setItem('utsuwaformdataning', JSON.stringify(item))
    // setMycart(currentCart)
  }
  // 落慈**********************
  // 新增資料*******************************************
  const [dataLoading, setDataLoading] = useState(false)
  // const sid = 1
  // 測試 取值
  // const product_name = JSON.parse(localStorage.getItem('utsuwacart'));
  // product_name.forEach(function(obj) {
  //   console.log(obj.product_name)
  // })

  const parse = JSON.parse(localStorage.getItem('utsuwacart'))

  const sid = parse[0].sid
  // const sid = 1
  // console.log('product_sid', product_sid)
  const product_name = parse[0].product_name
  // console.log('product_name', product_name)
  const price = parse[0].price
  // console.log('price', price)
  // const cart = localStorage.getItem('utsuwacart')
  // const parse = JSON.parse(cart)

  // const product_sid = 1
  // const product_name = 1
  // const price = 1
  // const product_id = 3
  // const [avatar, setAvatar] = useState('')
  // const [account, setAccount] = useState('')
  // const [bid_product_number, setBid_product_number] = useState('')
  // const [bid_created_time, setBid_created_time] = useState('')
  const [orderName, setorderName] = useState('')

  // 測試抓member資料
  const testMemberData1 = {
    // sid: 34,
    // avatar: '1.jpg',
    // account: 'admin',
    // email: 'asd@',
    // password: 'admin',
    // mobile: 'NULL',
    // address: 'NULL',
    // birthday: 'NULL',
    // created_at: '2021-02-04 17:43:55',
  }

  const testProductData1 = {
    // product_id: 34,
    // sid: '1.jpg',
    // photo: 'admin',
    // bid_product_number: 'asd@',
  }

  async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    // avatar,account,bid_product_number,bid_add_money,bid_sum_money
    const newData = {
      // avatar,
      // account,
      // sid,
      sid,
      product_name,
      price,
      orderName,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/orders/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    // setTimeout(() => {
    //   setDataLoading(false)
    //   alert('儲存完成')
    //   props.history.push('/')
    // }, 500)
  }

  // 落慈顯示

  // 顯示競標資料********************************************
  const [ningphotos, setningphotos] = useState([])
  //const [dataLoading, setDataLoding] = useState(false)

  async function getphotos2FromServer1() {
    // 開啟載入指示
    //setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/orders/json3'

    //header格式設定為json格式
    const request1 = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response1 = await fetch(request1)
    const data1 = await response1.json()
    console.log(data1)
    //設定資料給photos
    setningphotos(data1)
    // localStorage.setItem{'product-sid', data1.product_id}
  }

  //一開始就會開始載入資料
  useEffect(() => {
    getphotos2FromServer1()
  }, [])

  return (
    <>
      {/* <FontAwesomeIcon icon={faUser} className="icon-person" />
      <FontAwesomeIcon icon={faTruck} className="icon-car" />
      <FontAwesomeIcon icon={faDollarSign} className="icon-money" />
      <FontAwesomeIcon icon={faFileAlt} className="icon-bill" /> */}

      <div className="container">
        <LogoNing />
        {/* 落慈新增 */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">訂單名字</label>
          <input
            type="text"
            className="form-control"
            value={orderName}
            onChange={(event) => {
              setorderName(event.target.value)
            }}
          />
        </div>

        <button
          onClick={() => {
            addUserToSever()
          }}
          className="btn btn-primary"
        >
          新增名字
        </button>
        {/* 落慈顯示 */}
        <Table responsive hover>
          <thead>
            <tr className="chang-bid-table-title">
              {/* <th>account</th> */}
              <th>產品名稱</th>
              <th>價錢</th>
              <th>orderName</th>
            </tr>
          </thead>
          <tbody className="chang-bid-table">
            {ningphotos.length &&
              ningphotos.map((value, index) => {
                //單筆圖片直接value.photo
                //多筆圖片let p = JSON.parse(value.photo)[0]
                let p1 = value.avatar
                p1 = 'http://localhost:3008/chang-images/' + p1
                return (
                  <tr>
                    {/* <td>
                    <img className="chang-bidding-photo" src={p1} alt="" />
                  </td> */}
                    {/* <td className="chang-account-text">{value.account}</td> */}
                    <td>{value.product_name}</td>
                    <td>{value.price}</td>
                    <td>{value.orderName}</td>
                  </tr>
                )
              })}
          </tbody>
        </Table>
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
                  <span>{Discount}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>運費</span>
                  <span>{Shipping}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>總計</span>
                  <span>{Total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 付款程序表單-付款人收件人 */}
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
              {/* <div className="checkout-title-demo">DEMO</div> */}
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
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="王小明"
                  minlength="1"
                  onChange={(e) => {
                    const orderName = e.target.value
                    // ordertime
                    const orderyear = new Date().getFullYear()
                    const orderdate = new Date().getDate()
                    const ordermonth = new Date().getMonth() + 1
                    const orderDay =
                      orderyear + '/' + ordermonth + '/' + orderdate
                    setOrderName(orderName)
                    setOrderDay(orderDay)
                    updateFormToLocalStorage({
                      ...FormDataNing,
                      orderName,
                      orderDay,
                    })
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  電話
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  minlength="1"
                  placeholder="09123456789"
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
                  minlength="1"
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
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="王小明"
                  minlength="1"
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
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  minlength="1"
                  placeholder="09123456789"
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
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  minlength="1"
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
        {/* 付款程序表單-配送 */}
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-row">
            <div className="checkout d-flex justify-content-between">
              <div className="checkoutball">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="icon-car w-75 h-75"
                  style={iconstyletruck}
                />
              </div>
              <div className="checkout-title">配送資訊</div>
              {/* <div className="checkout-title-demo">DEMO</div> */}
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
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  minlength="1"
                  placeholder="台灣"
                  onChange={(e) => {
                    const orderarrivaldate = e.target.value
                    setOrderArrivalDate(orderarrivaldate)
                    updateFormToLocalStorage({
                      ...FormDataNing,
                      orderarrivaldate,
                    })
                  }}
                />
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
                  onChange={(e) => {
                    const orderarrivaltime = e.target.value
                    setOrderArrivalTime(orderarrivaltime)
                    updateFormToLocalStorage({
                      ...FormDataNing,
                      orderarrivaltime,
                    })
                  }}
                >
                  <option className="text-success" value="請選擇">
                    請選擇希望到貨時間
                  </option>
                  <option className="text-success" value="早上">
                    早上
                  </option>
                  <option className="text-success" value="中午">
                    中午
                  </option>
                  <option className="text-success" value="晚上">
                    晚上
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1" className="form-text">
                  配送地址
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  minlength="1"
                  placeholder="台灣"
                  onChange={(e) => {
                    const orderarrivaladdress = e.target.value
                    setOrderArrivalAddress(orderarrivaladdress)
                    updateFormToLocalStorage({
                      ...FormDataNing,
                      orderarrivaladdress,
                    })
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        {/* 付款程序表單-付款 */}
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
              {/* <div className="checkout-title-demo">DEMO</div> */}
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
                      minlength="1"
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
                        minlength="1"
                        maxLength="2"
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
                        minlength="1"
                        maxLength="2"
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
                      minlength="1"
                      maxLength="3"
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
        {/* 付款程序表單-發票 */}
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-row">
            <div className="checkout d-flex justify-content-between">
              <div className="checkoutball">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="icon-bill w-75 h-75"
                />
              </div>
              <div className="checkout-title">發票/訂單備註</div>
              {/* <div className="checkout-title-demo">DEMO</div> */}
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
                      onChange={(e) => {
                        const orderinvoice = e.target.value
                        setOrderInvoice(orderinvoice)
                        updateFormToLocalStorage({
                          ...FormDataNing,
                          orderinvoice,
                        })
                      }}
                    >
                      <option className="text-success" value="請選擇發票類型">
                        請選擇發票類型
                      </option>
                      <option className="text-success" value="雲端發票">
                        雲端發票
                      </option>
                      <option className="text-success" value="捐贈發票">
                        捐贈發票
                      </option>
                      <option className="text-success" value="紙本發票">
                        紙本發票
                      </option>
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
                      onChange={(e) => {
                        const orderinvoicetype = e.target.value
                        setOrderInvoiceType(orderinvoicetype)
                        updateFormToLocalStorage({
                          ...FormDataNing,
                          orderinvoicetype,
                        })
                      }}
                    >
                      <option className="text-success" value="請選擇載具類型">
                        請選擇載具類型
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
                      onChange={(e) => {
                        const orderinvoicearea = e.target.value
                        setOrderInvoiceArea(orderinvoicearea)
                        updateFormToLocalStorage({
                          ...FormDataNing,
                          orderinvoicearea,
                        })
                      }}
                    />
                  </div>
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
