import React, { useState, useEffect } from 'react'

function CheckOutP1OrderDetail(props) {
  // 商品--------------------------------------------------------------
  // State ------------------------------------------------------------
  const [mycart, setMycart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  // function ----------------------------------------------------------
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

  // 計算總價用的函式
  function sum(items) {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  return (
    <>
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
          <span>-100</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>運費</span>
          <span>100</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>總計</span>
          <span>1500</span>
        </div>
        <form action>
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
        </form>
      </div>
    </>
  )
}
export default CheckOutP1OrderDetail
