import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
function Register(props) {
  let styles = {
    height: '100%',
    backgroundImage: `url('http://localhost:3008/cindy-imgs/bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [passwor2, setPassword2] = useState('')
  return (
    <>
      <div className="container-fluid" style={styles}>
        <div className="row d-flex justify-content-end logobox">
          <div className="cindy-boxtag">
            <div className="cindy-loginbox tag">
              <Link to="/login">會員登入</Link>
            </div>
            <div className="cindy-memberbox tag">
              <Link to="/register">會員註冊</Link>
            </div>
          </div>
          <div className="cindy-form-control col-4">
            <div className="p-control">
              <p>會員註冊</p>
            </div>
            <div className="cindy-form">
              <form action="" autocomplete="off">
                <div className="cindy-input">
                  <label htmlFor="account">帳號</label>
                  <br />
                  <input
                    type="text"
                    name="account"
                    id="account"
                    placeholder="請輸入帳號"
                  />
                </div>
                <div className="cindy-input">
                  <label htmlFor="email">信箱</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="請輸入Email"
                  />
                </div>
                <div className="cindy-input">
                  <label htmlFor="password1">密碼</label>
                  <br />
                  <input
                    type="password"
                    name="password1"
                    id="password1"
                    placeholder="請輸入密碼"
                  />
                </div>
                <div className="cindy-input">
                  <label htmlFor="password2">確認密碼</label>
                  <br />
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="請再次輸入密碼"
                  />
                </div>
                <button className="memberbtn">註冊</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register
