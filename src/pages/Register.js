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
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [showcss, setShowcss] = useState(false)
  const [errors, setErrors] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = []
    //檢查帳號
    if (account.trim().length < 5) {
      newErrors.push('account')
    }
    //檢查email
    const re = /\S+@\S+\.\S+/
    if (!re.test(email.toLowerCase())) {
      newErrors.push('email')
    }
    //檢查密碼1
    if (password.trim().length < 5) {
      newErrors.push('password')
    }
    //檢查密碼2
    if (password !== password2) {
      newErrors.push('password2')
    }
    setErrors(newErrors)
    //console.log(newErrors)

    if (newErrors.length === 0) {
      const newData = { account, email, password }
      const url_add = 'http://localhost:3000/members/add'
      const request_add = new Request(url_add, {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      console.log(JSON.stringify(newData))
      const response_add = await fetch(request_add)
      const data_add = await response_add.json()
      console.log('伺服器回傳的json資料', data_add)

      const member_sid = data_add.sid
      const name = '新用戶優惠券'
      const price = '60'
      const code = 'NewAccount'
      const data_cou = { name, price, code, member_sid }
      const url_cou = 'http://localhost:3000/members/coupon'
      const request_cou = new Request(url_cou, {
        method: 'POST',
        body: JSON.stringify(data_cou),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      console.log(JSON.stringify(data_cou))
      const response_cou = await fetch(request_cou)
      const data_coupon = await response_cou.json()
      console.log('伺服器回傳的json資料', data_coupon)
      setShowcss(true)
    }
  }
  useEffect(() => {
    console.log('component did update')
    console.log(errors)
  }, [errors])

  return (
    <>
      <div className="container-fluid" style={styles}>
        <div className="row d-flex justify-content-end">
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
              className="alert alert-primary"
              role="alert"
              id="info"
              style={{
                textAlign: 'center',
                visibility: showcss ? 'visible' : 'hidden',
              }}
            >
              註冊成功，請登入！
            </div>
            <div className="p-control">
              <p>會員註冊</p>
            </div>
            <div className="cindy-form">
              <form action="" autoComplete="off">
                <div className="cindy-input">
                  <label htmlFor="account">帳號</label>
                  <br />
                  <input
                    type="text"
                    name="account"
                    id="account"
                    placeholder="請輸入帳號"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                  />
                </div>
                {errors.includes('account') && <span>帳號格式錯誤</span>}
                <div className="cindy-input">
                  <label htmlFor="email">信箱</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="請輸入Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.includes('email') && <span>Email格式錯誤</span>}
                <div className="cindy-input">
                  <label htmlFor="password">密碼</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="請輸入密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.includes('password') && <span>密碼格式錯誤</span>}
                <div className="cindy-input">
                  <label htmlFor="password2">確認密碼</label>
                  <br />
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="請再次輸入密碼"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>
                {errors.includes('password2') && (
                  <span>兩次密碼輸入不一致</span>
                )}
                <button
                  type="button"
                  className="memberbtn"
                  onClick={handleSubmit}
                >
                  註冊
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register
