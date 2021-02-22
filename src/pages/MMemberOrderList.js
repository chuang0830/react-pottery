import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

function MMemberOrderList(props) {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <div className="cindyorder">
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
              <tr>
                <td>
                  <img src="./cindy-imgs/selectbox1.png" alt="" />
                </td>
                <td>productname</td>
                <td>2020-12-31</td>
                <td>1290</td>
                <td>已出貨</td>
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    查看更多
                  </Button>
                </td>
              </tr>
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
              >
                <Modal.Header
                  closeButton
                  style={{ borderBottom: '1px solid $primary' }}
                >
                  <Modal.Title id="contained-modal-title-vcenter">
                    訂單詳細
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* <h5>編號：bbcc12345</h5> */}
                  <div className="cindy-control-tb">
                    <div className="tr d-flex justify-content-around">
                      <div className="td">圖片</div>
                      <div className="td">productname</div>
                      <div className="td">藍色</div>
                      <div className="td">一件</div>
                      <div className="td">690</div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="close-btn"
                    onClick={() => setModalShow(false)}
                  >
                    關閉
                  </Button>
                </Modal.Footer>
              </Modal>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default MMemberOrderList
