import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//元件

//頁面
import Login from './pages/Login'
import ForgetPass from './pages/ForgetPass'
import Register from './pages/Register'
import MemberEdit from './pages/MemberEdit'
import MemberOrderList from './pages/MemberOrderList'
import MemberFav from './pages/MemberFav'
import MemberCoupon from './pages/MemberCoupon'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/user-forgetpass">
            <ForgetPass />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/memberedit">
            <MemberEdit />
          </Route>
          <Route path="/memberorderList">
            <MemberOrderList />
          </Route>
          <Route path="/memberfav">
            <MemberFav />
          </Route>
          <Route path="/membercoupon">
            <MemberCoupon />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
