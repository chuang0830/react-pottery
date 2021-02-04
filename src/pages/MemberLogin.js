import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//import { withRouter } from 'react-router-dom'
import Background from './cindy-imgs/bg.jpg'

function MemberLogin(props) {
  let styles = {
    height: '100%',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }

  return (
    <>
      <div className="container-fluid" style={styles}>
        <div className="row d-flex justify-content-end ">
          <div className="cindy-boxtag">
            <div className="cindy-loginbox tag">會員登入</div>
            <div className="cindy-memberbox tag">會員註冊</div>
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
                  <label htmlFor="password1">密碼</label>
                  <br />
                  <input
                    type="password"
                    name="password1"
                    id="password1"
                    placeholder="請輸入密碼"
                  />
                </div>
                <Link to="/user-forgetpass" className="forgetpass">
                  忘記密碼？
                </Link>
                <button className="loginbtn">登入</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberLogin
