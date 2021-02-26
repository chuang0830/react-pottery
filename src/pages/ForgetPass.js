import { Link, withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Modal, Button } from 'react-bootstrap'

function ForgetPass(props) {
  let styles = {
    height: '100%',
    backgroundImage: `url('http://localhost:3008/cindy-imgs/bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [modalShow, setModalShow] = React.useState(true)
  const email = localStorage.getItem('email')
  async function ResetPass() {
    const newData = { email, password }
    const url = 'http://localhost:3000/members/forget'
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
    localStorage.removeItem('email')
    alert('修改成功！請重新登入')
  }
  return (
    <>
      <Modal
        className="pass-reset"
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(true)}
      >
        <Modal.Header closeButton className="pass-reset-header">
          <Modal.Title id="contained-modal-title-vcenter">密碼重置</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pass-reset-body">
          <div className="">
            <label htmlFor="password">新密碼</label>
            <br />
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入新密碼"
            />
          </div>
          <div className="mt-1">
            <label htmlFor="password">請再次輸入新密碼</label>
            <br />
            <input
              type="text"
              name="password2"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="請再次輸入新密碼"
            />
          </div>
          <Button
            type="button"
            className="cindy mt-5 cindy-confrim-btn mx-auto d-block cindy-pass-btn"
            onClick={() => {
              ResetPass()
              setModalShow(false)
              props.history.push('/member')
            }}
          >
            確定
          </Button>
        </Modal.Body>
        {/* <Modal.Footer className="forget-pass-footer"></Modal.Footer> */}
      </Modal>
      <div className="container-fluid" style={styles}>
        <div className="row d-flex justify-content-end "></div>
      </div>
    </>
  )
}
export default withRouter(ForgetPass)
