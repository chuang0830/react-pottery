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
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import Customize from './pages/Customize'

function App() {
  return (
    <Router>
      <>
        {/* 嚴謹的要放上面 */}
        <Switch>
          <Route exact path="/user-forgetpass">
            <ForgetPass />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/customize">
            <Customize />
          </Route>
          <Route exact path="/products/:id">
            <ProductsDetail />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
