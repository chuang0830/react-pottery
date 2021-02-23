import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//元件
// 元件
// import Menu from './components/Menu'
// import MyFooter from './components/MyFooter'

import ScrollToTop from './components/winniecomponents/winnieproductscroll'
import ScrollToItem from './components/winniecomponents/winnieitemscroll'

//頁面
import Login from './pages/Login'
import ForgetPass from './pages/ForgetPass'
import Register from './pages/Register'
import Member from './pages/Member'

//商品
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import Customize from './pages/Customize'
// 課程
import Experience from './pages/Experience'
import CourseCategory from './pages/CourseCategory'
import OnlineCourse from './pages/OnlineCourse'
import MyOnlineCourse from './pages/MyOnlineCourse'
import PlayPage from './pages/PlayPage'
// 購物車
import CheckOutP1 from './pages/CheckOutP1'
import CheckOutP2 from './pages/CheckOutP2'
import CheckOutP3 from './pages/CheckOutP3'
import ShoppingCart from './pages/ShoppingCart'
//import LocalStorageTest from './pages/LocalStorageTest'
// 競標
import Changbidindex from './pages/Changbidindex'
import Changbiddetail from './pages/Changbiddetail'
// 首頁
import ChienHeader from './components/ChienHeader'
import ChienHomepage from './components/ChienHomepage'
import ChienPolicycard from './components/ChienPolicycard'
import ChienFooter from './components/ChienFooter'
import PlayMessage from './pages/PlayMessage'

import Test from './pages/test'

function App() {
  return (
    // Router只會有一個
    <Router>
      <>
        {/* 嚴謹的要放上面 */}
        {/* 放連結 */}
        <ChienHeader />
        {/* <Link to="/CourseCategory">CourseCategory</Link>
        <Link to="/CourseCategory/Experience">Experience</Link>
        <Link to="/CourseCategory/OnlineCourse">OnlineCourse</Link>
        <Link to="/CourseCategory/MyOnlineCourse">MyOnlineCourse</Link>
        <Link to="/CourseCategory/MyOnlineCourse/PlayPage">PlayPage</Link>
        <Link to="/CheckOutP1">CheckOutP1</Link>
        <Link to="/CheckOutP2">CheckOutP2</Link>
        <Link to="/CheckOutP3">CheckOutP3</Link>
        <Link to="/ShoppingCart">ShoppingCart</Link>
        <Link to="/LocalStorageTest">LocalStorageTest</Link>
        <Link to="/changbidindex">changbidindex</Link>
        <Link to="/changbidindex/changbiddetail">changbiddetail</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/:id">ProductsDetail</Link>
        <Link to="/customize">Customize</Link> */}

        {/* Switch從上到下找唯一匹配的路由表 */}
        {/* 測試 */}
        {/* <ScrollToTop> */}
        {/* Switch從上到下找唯一匹配的路由表 */}
        <Switch>
          <Route exact path="/">
            <ChienHomepage />
            <ChienPolicycard />
            <ChienFooter />
          </Route>
          {/* 嚴謹要放上面!!!!!!!!!!!!!!!!!! */}
          {/* 會員路由 */}
          <Route exact path="/user-forgetpass">
            <ForgetPass />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          {/* 商品路由 */}
          {/* <ScrollToItem> */}
          {/* <Route exact path="/products/:pageNumber">
              <Products />
            </Route> */}
          {/* </ScrollToItem> */}
          <Route exact path="/customize">
            <Customize />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id">
            <ProductsDetail />
          </Route>

          {/* 課程路由 */}

          <Route path="/CourseCategory/MyOnlineCourse/PlayPage">
            <PlayPage />
          </Route>
          <Route path="/CourseCategory/Experience">
            <Experience />
          </Route>
          <Route path="/CourseCategory/OnlineCourse">
            <OnlineCourse />
          </Route>
          <Route path="/CourseCategory/MyOnlineCourse">
            <MyOnlineCourse />
          </Route>
          <Route path="/CourseCategory">
            <CourseCategory />
          </Route>

          {/* 購物車路由 */}
          <Route exact path="/CheckOutP1">
            <CheckOutP1 />
          </Route>
          <Route exact path="/CheckOutP2">
            <CheckOutP2 />
          </Route>
          <Route exact path="/CheckOutP3">
            <CheckOutP3 />
          </Route>
          <Route exact path="/ShoppingCart">
            <ShoppingCart />
          </Route>

          {/* 競標路由 */}
          <Route exact path="/Changbidindex/Changbiddetail">
            <Changbiddetail />
          </Route>
          <Route exact path="/Changbidindex">
            <Changbidindex />
          </Route>
        </Switch>
        {/* </ScrollToTop> */}
      </>
    </Router>
  )
}

export default App
