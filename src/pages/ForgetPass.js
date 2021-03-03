import { Link, withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

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
  const [errors, setErrors] = useState([])
  //eye
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const uuid = props.match.url.split('/')[2]
  console.log('uuid', uuid)
  async function ResetPass() {
    const newErrors = []
    if (password !== password2) {
      newErrors.push('password2')
    }
    setErrors(newErrors)
    console.log(errors)
    if (newErrors.length === 0) {
      const newData = { uuid, password }
      const url = 'http://localhost:3000/members/forget/' + uuid
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
      Swal.fire({
        icon: 'success',
        title: '修改成功！',
        showConfirmButton: false,
        timer: 2000,
        willClose: () => {
          props.history.push('/login')
        },
      })
    }
  }
  useEffect(() => {}, [errors])
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
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="pass-reset-title"
          >
            密碼重置
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pass-reset-body">
          <div className="position-relative">
            <label htmlFor="password">新密碼</label>
            <br />
            <input
              type={`${visible ? 'text' : 'password'}`}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入新密碼"
            />
            <button
              type="button"
              className="position-absolute eye"
              onClick={() => {
                setVisible(!visible)
              }}
            >
              {visible ? <ImEyeBlocked /> : <ImEye />}
            </button>
          </div>
          <div className="mt-1 position-relative">
            <label htmlFor="password">請再次輸入新密碼</label>
            <br />
            <input
              type={`${visible2 ? 'text' : 'password'}`}
              name="password2"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="請再次輸入新密碼"
            />
            <button
              type="button"
              className="position-absolute eye"
              onClick={() => {
                setVisible2(!visible2)
              }}
            >
              {visible2 ? <ImEyeBlocked /> : <ImEye />}
            </button>
          </div>
          {errors.includes('password2') && (
            <span style={{ color: 'red' }}>兩次密碼輸入不一致</span>
          )}
          <Button
            type="button"
            className="cindy mt-5 cindy-confrim-btn mx-auto d-block cindy-pass-btn"
            onClick={() => {
              ResetPass()
              //setModalShow(false)
              //props.history.push('/member')
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
