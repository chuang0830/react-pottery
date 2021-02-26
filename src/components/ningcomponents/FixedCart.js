import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function FixedCart(props) {
  //style

  const [mycart, setMycart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('utsuwacart') || '[]'
    setMycart(JSON.parse(newCart))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getCartFromLocalStorage()
      getCourseCartFromLocalStorage()
      getAddHeartFromLocalStorage()
    }, 700)
    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    let newMycartDisplay = []
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        (value) => value.sid === mycart[i].sid
      )
      if (index !== -1) {
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 課程--------------------------------------------------------------
  // State ------------------------------------------------------------
  const [mycoursecart, setMyCoursecart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycoursecartDisplay, setMyCoursecartDisplay] = useState([])
  // function ----------------------------------------------------------
  function getCourseCartFromLocalStorage() {
    const newCourseCart = localStorage.getItem('utsuwacoursecart') || '[]'
    setMyCoursecart(JSON.parse(newCourseCart))
  }
  useEffect(() => {
    let newMycoursecartDisplay = []
    for (let i = 0; i < mycoursecart.length; i++) {
      const index = newMycoursecartDisplay.findIndex(
        (value) => value.sid === mycoursecart[i].sid
      )
      if (index !== -1) {
        newMycoursecartDisplay[index].amount += mycoursecart[i].amount
      } else {
        const newCourseItem = { ...mycoursecart[i] }
        newMycoursecartDisplay = [...newMycoursecartDisplay, newCourseItem]
      }
    }
    setMyCoursecartDisplay(newMycoursecartDisplay)
  }, [mycoursecart])
  // 收藏--------------------------------------------------------------
  // State ------------------------------------------------------------
  const [myaddheart, setAddHeart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [myaddheartDisplay, setAddHeartDisplay] = useState([])
  // function ----------------------------------------------------------
  function getAddHeartFromLocalStorage() {
    const newAddCart = localStorage.getItem('utsuwacartaddheart') || '[]'
    setAddHeart(JSON.parse(newAddCart))
  }
  useEffect(() => {
    let newMyaddheartDisplay = []
    for (let i = 0; i < myaddheart.length; i++) {
      const index = newMyaddheartDisplay.findIndex(
        (value) => value.sid === myaddheart[i].sid
      )
      if (index !== -1) {
        newMyaddheartDisplay[index].amount += myaddheart[i].amount
      } else {
        const newAddHeartItem = { ...myaddheart[i] }
        newMyaddheartDisplay = [...newMyaddheartDisplay, newAddHeartItem]
      }
    }
    setAddHeartDisplay(newMyaddheartDisplay)
  }, [myaddheart])

  const [Toggled, setToggled] = useState(false)
  const toggleTrueFalse = () => setToggled(!Toggled)
  return (
    <>
      <button
        className={`${Toggled ? 'ning-fixed-toggle' : 'ning-fixed'}`}
        onClick={toggleTrueFalse}
      >
        <div className="plus">+</div>
        <Link to="/shoppingcart">
          <div className="fixed-shop">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="ning-cart"
              id="ning-cart"
            />
            <span className="fixed-title">
              {mycart.length + mycoursecart.length}
            </span>
          </div>
        </Link>
        <Link to="/member/fav">
          <div className="fixed-heart">
            <FaHeart className="far fa-heart mr-2" className="ning-heart" />
            <span className="fixed-title">{myaddheart.length}</span>
          </div>
        </Link>
      </button>
    </>
  )
}

export default FixedCart
