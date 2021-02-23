// import { BrowserRouter as Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Container, ListGroup, Button } from 'react-bootstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { RiDeleteBinFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

//元件
import LogoNing from './../components/ningcomponents/LogoNing'
import RecentView from './../components/ningcomponents/RecentView'
import ProductTableNing from './../components/ningcomponents/ProductTableNing'
import CourseTableNing from './../components/ningcomponents/CourseTableNing'
import AddHeart from './../components/ningcomponents/AddHeart'

function ShoppingCart(props) {
  const [items, setItems] = useState([
    { id: 1, text: 'Buy eggs' },
    { id: 2, text: 'Pay bills' },
    { id: 3, text: 'Invite friends over' },
    { id: 4, text: 'Fix the TV' },
  ])
  return (
    <>
      <div className="container">
        <LogoNing />
        <div className="row">
          <div className="container mt-5">
            {/* 商品購物車 */}
            <ProductTableNing />
          </div>
        </div>
        {/* 課程購物車 */}
        <CourseTableNing />
        <div className="row d-flex justify-content-end mb-7">
          <Link to="/CheckOutP1">
            <button className="ninginfo-btn">前往結帳</button>
          </Link>
        </div>

        {/*[_winnierecentview.scss] recent view title*/}
        <div className="container">
          <div className="row winnie-line">
            <div className="d-flex winnie-recent-title">
              <h2 className="my-auto col">-Recent View-</h2>
            </div>
          </div>
        </div>

        {/* recent view product*/}
        <div className="row">
          <div className="winnie-p-wrap d-flex">
            <RecentView />
          </div>
        </div>
      </div>
      <TransitionGroup>
        {items.map(({ id, text }) => (
          <CSSTransition key={id} timeout={500} classNames="item">
            <ListGroup.Item>
              <Button
                className="remove-btn"
                variant="danger"
                size="sm"
                onClick={() =>
                  setItems((items) => items.filter((item) => item.id !== id))
                }
              >
                &times;
              </Button>
              {text}
            </ListGroup.Item>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default ShoppingCart
