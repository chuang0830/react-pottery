import React, { useState, useEffect } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'
import { Container, ListGroup, Button } from 'react-bootstrap'
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

//套件
import Swal from 'sweetalert2'

// 購物車移除效果

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <button
      type="button"
      style={{ backgroundColor: 'White', border: 'none', color: '#92b6ba' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  )
}

function ProductTableNing(props) {
  // style ------------------------------------------------------------
  const style = {
    color: 'primary',
    fontSize: 24,
  }
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
  // 更新購物車中的商品數量
  function updateCartToLocalStorage(item, isAdded = true) {
    // console.log(item, isAdded)
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
  const currentCart = JSON.parse(localStorage.getItem('utsuwacart'))
  if (currentCart === null) {
    return <></>
  } else {
    return (
      <>
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
                      onClick={() => {
                        removeCartALL()
                      }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {mycartDisplay.map((item, index) => {
                  return (
                    <>
                      <Accordion defaultActiveKey="1">
                        <Card style={{ width: '69.5rem' }} className="ning-bg">
                          <Card.Header className="ning">
                            <tr className="d-flex justify-content-around ">
                              <td>
                                <img
                                  src={`http://localhost:3008/winnie-images/${
                                    JSON.parse(item.photo)[0]
                                  }`}
                                  alt=""
                                  srcset=""
                                  width="150"
                                />
                              </td>
                              <td>{item.product_name}</td>
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
                                  className="removecartning"
                                  onClick={() => {
                                    removeCart(item)
                                    Swal.fire('', '已從購物車刪除')
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
                            <CustomToggle eventKey="0">查看更多</CustomToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body className="ning-more">
                              <div>商品介紹:{item.introduction}</div>
                              <div>商品尺寸:{item.size}</div>
                              <div>客製化顏色:{item.color}</div>
                              <div>客製化內容:{item.customize}</div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="mr-3 mb-5 mt-5">
            <h5 className="text-success">
              總計 &nbsp;&nbsp;{sum(mycartDisplay)}
            </h5>
          </div>
        </div>
      </>
    )
  }
}
export default ProductTableNing
