import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

function CheckOutP2OrderDelivery(props) {
  const [OrderArrivalDate, setOrderArrivalDate] = useState('')
  const [OrderArrivalTime, setOrderArrivalTime] = useState('')
  const [OrderArrivalAddress, setOrderArrivalAddress] = useState('')

  const FormDataNing = {
    orderarrivaldate: OrderArrivalDate,
    orderarrivaltime: OrderArrivalTime,
    orderarrivaladdress: OrderArrivalAddress,
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
  // icon-style
  const iconstyletruck = {
    marginLeft: '2px',
  }
  return (
    <>
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
              <label htmlFor="exampleFormControlSelect1" className="form-text">
                希望到貨日
              </label>
              <select
                className="form-control pretty-select"
                id="exampleFormControlSelect1"
                onChange={(e) => {
                  const orderarrivaldate = e.target.value
                  setOrderArrivalDate(orderarrivaldate)
                  updateFormToLocalStorage({
                    ...FormDataNing,
                    orderarrivaldate,
                  })
                }}
              >
                <option className="text-success" value="請選擇">
                  請選擇
                </option>
                <option className="text-success" value="2021/03/19">
                  2021/03/19
                </option>
                <option className="text-success" value="2021/03/20">
                  2021/03/20
                </option>
                <option className="text-success" value="2021/03/21">
                  2021/03/21
                </option>
                <option className="text-success" value="2021/03/22">
                  2021/03/22
                </option>
                <option className="text-success" value="2021/03/23">
                  2021/03/23
                </option>
                <option className="text-success" value="2021/03/24">
                  2021/03/24
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1" className="form-text">
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
                  請選擇
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
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
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
    </>
  )
}
export default CheckOutP2OrderDelivery
