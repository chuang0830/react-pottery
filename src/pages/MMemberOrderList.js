import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

function MMemberOrderList(props) {
  const sid = localStorage.getItem('member-sid')
  const [modalShow, setModalShow] = React.useState(false)
  const [order, setOrder] = useState('')
  const [data, setData] = useState({
    product_name: '',
    color: '',
    amount: '',
    price: '',
  })

  async function getUserFromServer(sid) {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/orders/orderlist/' + sid

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      //拿資料
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料

    setOrder(data)
    console.log(data)
  }
  useEffect(() => {
    getUserFromServer(sid)
  }, [])

  return (
    <>
      <Modal
        className="corder-content"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header
          className="corder-header"
          closeButton
          style={{ borderBottom: '1px solid $primary' }}
        >
          <Modal.Title id="contained-modal-title-vcenter">訂單詳細</Modal.Title>
        </Modal.Header>
        <Modal.Body className="corder-body">
          <div className="cindy-control-tb">
            <div className="tr d-flex justify-content-around">
              <div className="td">{data.product_name}</div>
              <div className="td">{data.color}</div>
              <div className="td">{data.amount}</div>
              <div className="td">{data.price}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="corder-footer">
          <Button className="cindy" onClick={() => setModalShow(false)}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="cindyorder" data-aos="fade-up">
        <div className="cindy-table">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">訂單編號</th>
                <th scope="col">日期</th>
                <th scope="col">總價</th>
                <th scope="col">出貨狀態</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {order.length &&
                order.map((v, i) => {
                  return (
                    <>
                      <tr>
                        <td></td>
                        <td>{v.order_id}</td>
                        <td>{v.orderDay}</td>
                        <td>{v.totals}</td>
                        <td>{v.shippingStatus}</td>
                        <td>
                          <Button
                            variant="primary"
                            className="cindy-more"
                            onClick={() => {
                              setData({
                                product_name: v.product_name,
                                color: v.color,
                                amount: v.amount,
                                price: v.price,
                              })
                              setModalShow(true)
                            }}
                          >
                            查看更多
                          </Button>
                        </td>
                      </tr>
                    </>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default MMemberOrderList
