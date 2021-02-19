import React from 'react'

import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
//元件
import LogoNing from '../components/ningcomponents/LogoNing'

function CheckOut(props) {
  // 利用match來取得url與path (記得App元件中的Route要先定義)
  console.log(props.match)

  const url = props.match.url
  const path = props.match.path

  // 有自己的選單與路由表
  return (
    <>
      <div className="container">
        <LogoNing />
        {/* 訂單進度程序 */}
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex flex-row justify-content-center process">
            <div className="d-flex justify-content-between">
              <div className="processball">
                <div>1</div>
              </div>
              <div className="process-title">購物明細</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>2</div>
              </div>
              <div className="process-title-none">訂單資訊</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="processball-none">
                <div>3</div>
              </div>
              <div className="process-title-none">訂單明細</div>
            </div>
          </div>
        </div>
        <h1>產品分類</h1>
        <nav className="nav nav-pills">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to={`${url}/CheckOutP1`}
          >
            PC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to={`${url}/CheckOutP2`}
          >
            手機
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to={`${url}/CheckOutP3`}
          >
            筆電
          </NavLink>
        </nav>

        <Switch>
          <Route exact path={path}>
            <h3>請選擇子分類</h3>
          </Route>
          <Route path={`${path}/:type?/:id?`}>
            <CheckOut />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default withRouter(CheckOut)
