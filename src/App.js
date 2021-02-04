import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//元件
// import Menu from './components/Menu'
// import MyFooter from './components/MyFooter'

//頁面
// import UserList from './pages/UserList'
// import UserEdit from './pages/UserEdit'
//import UserAdd from './pages/UserAdd'
import MemberLogin from './pages/MemberLogin'
import ForgetPass from './pages/ForgetPass'

function App() {
  return (
    <Router>
      <>
        <MemberLogin />

        <Switch>
          <Route exact path="/user-forgetpass">
            <ForgetPass />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
