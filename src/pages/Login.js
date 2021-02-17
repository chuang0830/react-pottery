import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//import { withRouter } from 'react-router-dom'

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
  async function handleSubmit() {
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
  }

  return (
    <>
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
          <div className="cindy-form-control col-4">
            <div
              className="alert alert-danger"
              role="alert"
              id="info"
              style={{ textAlign: 'center', display: 'none' }}
            >
              帳號或密碼錯誤
            </div>
            <div className="p-control">
              <p>會員註冊</p>
            </div>
            <div className="cindy-form">
              <form
                action=""
                autocomplete="off"
                name="loginform"
                onsubmit="checkForm()"
              >
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
                <div className="cindy-input">
                  <label htmlFor="password1">密碼</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                  />
                </div>
                <Link to="/user-forgetpass" className="forgetpass">
                  忘記密碼？
                </Link>
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
export default Login
