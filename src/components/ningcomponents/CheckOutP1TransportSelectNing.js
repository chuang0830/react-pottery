import React, { useState, useEffect } from 'react'

function CheckOutTransportSelectNing(props) {
  const [seletedTransform, setSeletedTransform] = useState('')
  const [seletedPay, setSeletedPay] = useState('')
  const FormDataNing = {
    selecttransform: seletedTransform,
    selectpay: seletedPay,
  }
  // 加入表單-----------------------------------------------------------------
  const [myform, setMyform] = useState([])
  const updateFormToLocalStorage = (item) => {
    localStorage.setItem('utsuwaformdataning', JSON.stringify(item))
  }
  return (
    <>
      <div className="col-lg-6 col-12">
        <form className="mt-5">
          <div className="form-title text-center">
            <span className="form-title-content">選擇配送及付款方式</span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1" className="form-text">
              配送方式
            </label>
            <select
              className="form-control pretty-select"
              id="exampleFormControlSelect1"
              onChange={(e) => {
                const selecttransform = e.target.value
                setSeletedTransform(selecttransform)
                updateFormToLocalStorage({
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
            <label htmlFor="exampleFormControlSelect1" className="form-text">
              付款方式
            </label>
            <select
              className="form-control pretty-select"
              id="exampleFormControlSelect1"
              onChange={(e) => {
                const selectpay = e.target.value
                setSeletedPay(selectpay)
                updateFormToLocalStorage({
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
          </div>
        </form>
      </div>
    </>
  )
}
export default CheckOutTransportSelectNing
