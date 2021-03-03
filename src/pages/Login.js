import { Link, withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

function Login(props) {
  let styles = {
    height: '100%',
    backgroundImage: `url('http://localhost:3008/cindy-imgs/bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showcss, setShowcss] = useState(false)
  const [modalShow, setModalShow] = React.useState(false)
  //eye
  const [visible, setVisible] = useState(false)
  async function handleSubmit() {
    localStorage.removeItem('member-sid')
    const newData = { account, password }
    const url = 'http://localhost:3000/login'
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
    if (data.success) {
      console.log('set sid')
      localStorage.setItem('member-sid', data.sid)
      props.history.push('/member')
    } else {
      setShowcss(true)
    }
  }
  async function forget() {
    const newData = { email }
    const url = 'http://localhost:3000/members/email'
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
  }

  return (
    <>
      <Modal
        className="forget-pass mx-auto"
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton className="forget-pass-header">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="forget-pass-title"
          >
            忘記密碼
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="forget-pass-body">
          <div className="">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="請輸入Email"
            />
          </div>

          <Button
            type="button"
            className="cindy mt-5 cindy-confrim-btn d-block"
            onClick={() => {
              forget()
              Swal.fire({
                icon: 'success',
                title: '請至信箱收信',
                showConfirmButton: false,
                timer: 2000,
              })
              setModalShow(false)
            }}
          >
            確定
          </Button>
        </Modal.Body>
        <Modal.Footer className="forget-pass-footer">
          {/* <Button
            type="button"
            className="cindy"
            onClick={() => setModalShow(false)}
          >
            關閉
          </Button> */}
        </Modal.Footer>
      </Modal>
      <div className="container-fluid" style={styles}>
        <div className="row d-flex justify-content-end ">
          <div className="cindy-boxtag">
            <div className="cindy-loginbox tag">
              <Link to="/login">會員登入</Link>
            </div>
            <div className="cindy-memberbox tag">
              <Link to="/register">會員註冊</Link>
            </div>
          </div>
          <div className="cindy-form-control">
            <div
              className="alert alert-danger"
              role="alert"
              id="info"
              style={{
                textAlign: 'center',
                visibility: showcss ? 'visible' : 'hidden',
              }}
            >
              帳號或密碼錯誤
            </div>
            <div className="p-control">
              <p>會員登入</p>
            </div>
            <div className="cindy-form">
              <form action="" autoComplete="off" name="loginform">
                <div className="cindy-input">
                  <label htmlFor="account">帳號</label>
                  <br />
                  <input
                    type="text"
                    name="account"
                    id="account"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="請輸入帳號"
                  />
                </div>
                <div className="cindy-input position-relative">
                  <label htmlFor="password1">密碼</label>
                  <br />
                  <input
                    type={`${visible ? 'text' : 'password'}`}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                  />
                  <button
                    type="button"
                    className="position-absolute"
                    onClick={() => {
                      setVisible(!visible)
                    }}
                  >
                    {visible ? <ImEyeBlocked /> : <ImEye />}
                  </button>
                </div>
                <Button
                  variant="primary"
                  type="button"
                  className="cindy-forgetbtn float-right"
                  onClick={() => {
                    setModalShow(true)
                  }}
                >
                  忘記密碼&nbsp;?
                </Button>
                <button
                  type="button"
                  className="loginbtn"
                  onClick={handleSubmit}
                >
                  登入
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(Login)
