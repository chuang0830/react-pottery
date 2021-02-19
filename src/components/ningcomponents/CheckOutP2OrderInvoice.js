import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

function CheckOutP2OrderInvoice(props) {
  const [OrderInvoice, setOrderInvoice] = useState('')
  const [OrderInvoiceType, setOrderInvoiceType] = useState('')
  const FormDataNing = {
    orderinvoice: OrderInvoice,
    orderinvoicetype: OrderInvoiceType,
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
        <div className="col-lg-6 d-flex flex-row">
          <div className="checkout d-flex justify-content-between">
            <div className="checkoutball">
              <FontAwesomeIcon
                icon={faFileAlt}
                className="icon-bill w-75 h-75"
              />
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
                    onChange={(e) => {
                      const orderinvoice = e.target.value
                      setOrderInvoice(orderinvoice)
                      updateFormToLocalStorage({
                        ...FormDataNing,
                        orderinvoice,
                      })
                    }}
                  >
                    <option className="text-success" value="請選擇">
                      請選擇
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
                    <option className="text-success" value="請選擇">
                      請選擇
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
    </>
  )
}
export default CheckOutP2OrderInvoice
