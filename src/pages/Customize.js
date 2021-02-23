import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
//icon
import { FaShoppingCart } from 'react-icons/fa'
//元件
import WinnieLogo from './../components/winniecomponents/WinnieLogo'
import ChienFooter from '../components/ChienFooter'

function Customize(props) {
  const testData = {
    sid: 52,
    product_name: '客製商品',
    category_id: 6,
    price: 1080,
    color: '粉',
    size: '200mm*200mm',
    photo: '["52.jpg"]',
    introduction: '此商品承載著您特製的心意，非常適合作為禮物。',
  }
  // 加入購物車-----------------------------------------------------------------
  const [mycart, setMycart] = useState([])
  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('utsuwacart')) || []
    const index = currentCart.findIndex((v) => v.sid === item.sid)
    if (index > -1) {
      return
    } else {
      currentCart.push(item)
    }
    localStorage.setItem('utsuwacart', JSON.stringify(currentCart))
    setMycart(currentCart)
  }
  //-----------------------------------------------------------------------------
  const [text, setText] = useState('')
  const [total, setTotal] = useState(0)
  const [photo, setPhoto] = useState(52)
  //載入圖示
  const [isLoading, setIsLoading] = useState(true)

  //一開始就會開始載入資料
  useEffect(() => {
    //2秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  //載入圖示
  const spinner = (
    <>
      <div className="layer">
        <div className="loader">
          <div className="progress"></div>
        </div>
      </div>
    </>
  )

  if (isLoading) return spinner

  return (
    <>
      {/* 一進頁面漸變 */}
      {/* winnieproduct.scss */}
      <div class="winnie-transition-bg"></div>
      {/* hero page */}
      <div>
        <div className="winnie-customize-t-bg"></div>
      </div>
      {/* 麵包屑 */}
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={`/`}>首頁</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              客製化商品
            </li>
          </ol>
        </nav>
        {/* title */}
        <div className="winnie-title">
          <h1>CUSTOMIZE</h1>
        </div>
        <div className="winnie-text">
          <p>
            「用色彩點綴你的日常」讓你的每一天都與、眾、不、同。
            <br />
            簡單地以巧思搭配各式器皿，就能為空間營造出不可思議的變化。
          </p>
        </div>
        {/* 客製化展示圖 */}
        <div className="row">
          <div className="customer-wrap">
            <div className="c-1">
              <img src="http://localhost:3008/winnie-images/c-1.jpg" alt="" />
            </div>
            <div className="d-flex">
              <div className="c-2">
                <img src="http://localhost:3008/winnie-images/c-2.jpg" alt="" />
              </div>
              <div className="c-3">
                <img src="http://localhost:3008/winnie-images/c-3.jpg" alt="" />
              </div>
            </div>
            {/* 客製化標題 */}
            <div className="winnie-title-wrap">
              <div className="plate1">
                <img
                  src="http://localhost:3008/winnie-images/bradley.png"
                  alt=""
                />
              </div>
              <div className="plate2">
                <img src="http://localhost:3008/winnie-images/mi.png" alt="" />
              </div>
              <div className="winnie-cutomize-title">
                <h1>在特別的日子，給最特別的你。</h1>
              </div>
              <div className="winnie-text">
                <p className="text-break">
                  Utsuwa提供客製化刻字碗盤服務。
                  <br />
                  讓您可以在特別的日子，
                  <br />
                  把承載的心意刻在碗盤上。
                  <br />
                  快來選個喜歡的顏色，送給最特別的他。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 客製化背景圖 */}
      {/* <div class="winnie-customize-bg">
    <img src="./winnie-images/c-bg.png" alt="">
  </div> */}
      <div
        className="container-fluid"
        style={{
          height: 440,
          width: '100%',
          padding: 0,
          background: 'url("./winnie-images/c-bg.png")center no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="container">
        {/* 客製化商品區 */}
        <div className="row">
          <div className="winnie-customize-p-wrap">
            <div className="d-flex">
              {/* 盤子 */}
              <div className="c-plate col-6">
                <img
                  src={`http://localhost:3008/winnie-images/${photo}.png `}
                  alt=""
                />

                {/* 刻字區 */}

                <svg viewBox="0 0 500 500" className="winnie-svg">
                  <path
                    id="curve"
                    d="M190,56 C207,90 300,96 311,54 Z"
                    fill="transparent"
                  />
                  <text width="800" className="winnie-plate-text">
                    <textPath xlinkHref="#curve">{text}</textPath>
                  </text>
                </svg>
              </div>
              {/* 顏色 */}
              <div className="winnie-plate-color-wrap">
                <div
                  onClick={() => {
                    setPhoto(50)
                  }}
                  className="winnie-c-hover d-flex mb-1"
                >
                  <div className="winnie-plate-color c1 my-auto" />
                  <p className="winnie-customize-text my-auto">黃</p>
                </div>
                <div
                  onClick={() => {
                    setPhoto(51)
                  }}
                  className="winnie-c-hover d-flex mb-1"
                >
                  <div className="winnie-plate-color c2 my-auto" />
                  <p className="winnie-customize-text my-auto">靛</p>
                </div>
                <div
                  onClick={() => {
                    setPhoto(52)
                  }}
                  className="winnie-c-hover d-flex mb-1"
                >
                  <div className="winnie-plate-color c3 my-auto" />
                  <p className="winnie-customize-text my-auto">藍</p>
                </div>
                <div
                  onClick={() => {
                    setPhoto(53)
                  }}
                  className="winnie-c-hover d-flex mb-1"
                >
                  <div className="winnie-plate-color c4 my-auto" />
                  <p className="winnie-customize-text my-auto">綠</p>
                </div>
                <div
                  onClick={() => {
                    setPhoto(54)
                  }}
                  className="winnie-c-hover d-flex mb-1"
                >
                  <div className="winnie-plate-color c5 my-auto" />
                  <p className="winnie-customize-text my-auto">粉</p>
                </div>
              </div>
              {/* 商品描述 */}
              <div className="winnie-customize-d mx-auto col-6">
                <p className="winnie-customize-price">1080</p>
                <span className="winnie-customize-text">請輸入英文字母：</span>
                <span className="winnie-input ml-2">
                  <input
                    placeholder="字母最多十碼"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={10}
                  />
                </span>
                <div className="d-flex justify-content chang-button-box mt-5">
                  {/* 計數器 */}
                  <div className="col-4 chang-count-border-btn d-flex flex-row justify-content-center">
                    <button
                      className="chang-count-btn"
                      onClick={() => {
                        setTotal(total - 1)
                      }}
                    >
                      -
                    </button>
                    <button className="chang-count-btn">{total}</button>
                    <button
                      className="chang-count-btn"
                      onClick={() => {
                        setTotal(total + 1)
                      }}
                    >
                      +
                    </button>
                  </div>
                  {/* 加入購物車按鈕 */}
                  <class className="col-8 ml-4">
                    <button
                      className="chang-cart-btn"
                      onClick={() => {
                        updateCartToLocalStorage({
                          ...testData,
                          amount: { total },
                          customize: 'I Love you',
                        })
                      }}
                    >
                      加入購物車 <FaShoppingCart className="mb-1" />
                    </button>
                  </class>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*[_winnierecentview.scss] recent view title*/}
        <WinnieLogo />
        {/* recent view product*/}
        <div className="row">
          <div className="winnie-p-wrap d-flex">
            {/* 第一個 */}
            <div className="col-lg-4 col-md-6">
              <div className="winnie-card-content">
                <div className="winnie-card-img">
                  <img
                    className="w-100"
                    src="http://localhost:3008/winnie-images/test.png"
                    alt=""
                  />
                </div>
                <div className="winnie-card-name text-justify d-flex justify-content-between">
                  <p>小巧的花瓶瓷器</p>
                  <div>
                    <i className="far fa-heart mr-1" />
                    <i className="fas fa-shopping-cart" />
                  </div>
                </div>
                <p className="winnie-card-price">690</p>
              </div>
            </div>
            {/* 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="winnie-card-content">
                <div className="winnie-card-img">
                  <img
                    className="w-100"
                    src="http://localhost:3008/winnie-images/test.png"
                    alt=""
                  />
                </div>
                <div className="winnie-card-name text-justify d-flex justify-content-between">
                  <p>小巧的花瓶瓷器</p>
                  <div>
                    <i className="far fa-heart mr-1" />
                    <i className="fas fa-shopping-cart" />
                  </div>
                </div>
                <p href="#" className="winnie-card-price">
                  690
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="winnie-card-content">
                <div className="winnie-card-img">
                  <img
                    className="w-100"
                    src="http://localhost:3008/winnie-images/test.png"
                    alt=""
                  />
                </div>
                <div className="winnie-card-name text-justify d-flex justify-content-between">
                  <p>小巧的花瓶瓷器</p>
                  <div>
                    <i className="far fa-heart mr-1" />
                    <i className="fas fa-shopping-cart" />
                  </div>
                </div>
                <p className="winnie-card-price">690</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 測試 */}
      <div>
        <div className="winnie-customize-f-bg position-relative">
          {/* 頁尾 */}
          <div className="position-absolute fixed-bottom">
            <ChienFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default Customize
