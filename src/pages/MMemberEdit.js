import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import { func } from 'prop-types'

function MMemberEdit(props) {
  const sid = localStorage.getItem('member-sid')
  const inputFile = useRef(null)
  const [account, setAccount] = useState('')
  const [mobile, setMobile] = useState('')
  const [birth, setBirth] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [password2, setPassword2] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const profileinit = 'profileImg.jpeg'
  const onButtonClick = () => {
    inputFile.current.click()
  }
  function fileChange(e) {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  async function getUserFromServer(sid) {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/edit/' + sid

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

    setAccount(data.account)
    // setAvatar(data.avatar)
    if (!data.avatar) {
      setProfileImg('http://localhost:3000/imgs/profileImg.jpeg')
    } else {
      setProfileImg('http://localhost:3000/imgs/' + data.avatar)
    }
    setMobile(data.mobile)
    setEmail(data.email)
    setBirth(data.birth)
    setAddress(data.address)
    setPassword(data.password)
  }
  async function updateUserToSever() {
    const formData = new FormData(document.formedit)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/edit/' + sid

    const request = new Request(url, {
      method: 'POST',
      body: formData,
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳的json資料', data)
    console.log(data.birth)
    const birthday = new Date(data.birth)
    const birth_month = birthday.getMonth() + 1
    console.log(birth_month)
    const today = new Date()
    const this_month = today.getMonth() + 1
    console.log(this_month)
    if (birth_month === this_month) {
      const member_sid = sid
      const name = '生日戶優惠券'
      const price = '60'
      const code = 'HappyBirthday'
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
      alert('生日快樂！快去領取生日優惠券吧！！！')
    }
  }
  useEffect(() => {
    getUserFromServer(sid)
  }, [])
  useEffect(() => {}, [profileImg])

  return (
    <>
      <div className="cindy-accountouter w-100 mt-5 d-flex justify-content-center">
        <div className="cindy-account-left">
          <div className="position-relative img-outer">
            <img src={profileImg} alt="" />
            <div className="position-absolute cindy-crossx">
              <button
                onClick={() =>
                  setProfileImg('http://localhost:3000/imgs/profileImg.jpeg')
                }
              >
                <svg
                  id="noun_Delete_34719"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.111"
                  height="15.884"
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
            </div>
            <div className="position-absolute cindy-camera">
              <button onClick={onButtonClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_811"
                    data-name="Group 811"
                    transform="translate(-620 -614)"
                  >
                    <path
                      id="Path_97"
                      data-name="Path 97"
                      d="M25,0A25,25,0,1,1,0,25,25,25,0,0,1,25,0Z"
                      transform="translate(620 614)"
                      fill="#fcaa3e"
                    />
                    <path
                      id="Union_6"
                      data-name="Union 6"
                      d="M2993,1330v-17.25h8.537V1307h17.927v5.75H3028V1330Z"
                      transform="translate(-2365 -679)"
                      fill="#fff"
                    />
                    <circle
                      id="Ellipse_38"
                      data-name="Ellipse 38"
                      cx="7.5"
                      cy="7.5"
                      r="7.5"
                      transform="translate(638 634)"
                      fill="#fcaa3e"
                    />
                    <circle
                      id="Ellipse_39"
                      data-name="Ellipse 39"
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      transform="translate(641 637)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <tr>
              <td>帳號:{account}</td>
            </tr>
          </div>
        </div>
        <div className="cindy-account-right col-3">
          <form
            action=""
            autoComplete="off"
            className="cindy-form"
            name="formedit"
            onSubmit={(event) => {
              event.preventDefault()
              updateUserToSever()
            }}
          >
            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"
              onChange={fileChange}
              ref={inputFile}
              style={{ display: 'none' }}
            />
            <div className="cindy-input">
              <label htmlFor="name">帳號</label>
              <br />
              <input
                type="text"
                name="account"
                id="account"
                value={account}
                onChange={(e) => {
                  setAccount(e.target.value)
                }}
              />
            </div>
            <div className="cindy-input">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="cindy-input">
              <label htmlFor="password">密碼</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            {/* <div className="cindy-input">
              <label htmlFor="password2">確認密碼</label>
              <br />
              <input
                type="password"
                name="password2"
                id="password2"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value)
                }}
              />
            </div> */}
            <div className="cindy-input">
              <label htmlFor="mobile">手機</label>
              <br />
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
              />
            </div>
            <div className="cindy-input">
              <label htmlFor="birth">生日</label>
              <br />
              <input
                type="date"
                name="birth"
                id="birth"
                value={birth}
                onChange={(e) => {
                  setBirth(e.target.value)
                }}
              />
            </div>

            <div className="cindy-input">
              <label htmlFor="address">地址</label>
              <br />
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
            </div>

            <div className="cindy-btn-center">
              <button type="submit" className="cindy-btn">
                確認修改
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default MMemberEdit
