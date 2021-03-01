import React, { useState, useEffect } from 'react'
import { Route, withRouter, Switch, Link } from 'react-router-dom'
import MMemberEdit from './MMemberEdit'
import MMemberOrderList from './MMemberOrderList'
import MMemberFav from './MMemberFav'
import MMemberCoupon from './MMemberCoupon'
import ChienFooter from '../components/ChienFooter'
import LogoNing from '../components/ningcomponents/LogoNing'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Member(props) {
  const [light, setLight] = useState('edit')
  console.log('history:', props.history)
  console.log('location:', props.location)
  console.log('pathname:', props.location.pathname)
  const url = props.match.url
  const path = props.match.path
  if (!localStorage.getItem('member-sid')) {
    props.history.push('/login')
  }

  useEffect(() => {
    const pathNow = props.location.pathname.split('/')[2]
    console.log(pathNow)
    setLight(pathNow)
  }, [props.location.pathname])

  function logoutbtn(e) {
    e.preventDefault()
    fetch('http://localhost:3000/logout', { method: 'GET' })
    localStorage.removeItem('member-sid')
    console.log('remove sid')
    props.history.push('/login')
  }
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row w-100 logobox">
          <div className="cindylogo mx-auto">
            <LogoNing />
          </div>
          <div
            className="cindy-seclectbox d-flex justify-content-center w-100"
            data-aos="fade-down"
          >
            <div className="cindy-sec seclectbox1">
              <Link
                to={`${url}/edit`}
                className={light === 'edit' ? 'active' : ''}
              >
                <img
                  src="http://localhost:3008/cindy-imgs/selectbox1.png"
                  alt=""
                />
                帳號資料
              </Link>
            </div>
            <div className="cindy-sec seclectbox2">
              <Link
                to={`${url}/orderlist`}
                className={light === 'orderlist' ? 'active' : ''}
              >
                <img
                  src="http://localhost:3008/cindy-imgs/selectbox2.png"
                  alt=""
                />
                訂單查詢
              </Link>
            </div>
            <div className="cindy-sec seclectbox3">
              <Link
                to={`${url}/fav`}
                className={light === 'fav' ? 'active' : ''}
              >
                <img
                  src="http://localhost:3008/cindy-imgs/selectbox3.png"
                  alt=""
                />
                收藏清單
              </Link>
            </div>
            <div className="cindy-sec seclectbox4">
              <Link
                to={`${url}/coupon`}
                className={light === 'coupon' ? 'active' : ''}
                onClick={() => setLight('coupon')}
              >
                <img
                  src="http://localhost:3008/cindy-imgs/selectbox4.png"
                  alt=""
                />
                優惠券
              </Link>
            </div>
            <div className="cindy-sec seclectbox5">
              <Link to="" onClick={logoutbtn}>
                <img
                  src="http://localhost:3008/cindy-imgs/selectbox5.png"
                  alt=""
                />
                登出
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path={path}>
              <MMemberEdit />
            </Route>
            <Route path={`${url}/edit`}>
              <MMemberEdit />
            </Route>
            <Route path={`${url}/orderlist`}>
              <MMemberOrderList />
            </Route>
            <Route path={`${url}/fav`}>
              <MMemberFav />
            </Route>
            <Route path={`${url}/coupon`}>
              <MMemberCoupon />
            </Route>
          </Switch>
        </div>
      </div>
      <ChienFooter />
    </>
  )
}
export default withRouter(Member)
