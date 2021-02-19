import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Customize(props) {
  const [text, setText] = useState('')
  const [total, setTotal] = useState(0)
  const [photo, setPhoto] = useState(52)
  return (
    <>
      {/* hero page */}
      <div>
        <div className="winnie-customize-t-bg"></div>
      </div>
      {/* 麵包屑 */}
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">首頁</a>
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
            克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
            <br />
            克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
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
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。
                  <br />
                  中間隔著湍急的河流，
                  <br />
                  實是此岸，理想是彼岸。
                  <br />
                  中間隔著湍急的河流，架在川上的橋樑。
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
              <div className="c-plate">
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
              <div className="winnie-customize-d mx-auto">
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
                    <button className="chang-cart-btn">
                      加入購物車 <FaShoppingCart className="mb-1" />
                    </button>
                  </class>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*[_winnierecentview.scss] recent view title*/}
        <div className="container">
          <div className="row winnie-line">
            <div className="col d-flex winnie-recent-title">
              <h2 className="my-auto">-Recent View-</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={70}
                height={67}
                viewBox="0 0 70 67"
              >
                <defs>
                  <pattern
                    id="pattern"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                    viewBox="0 0 900 859"
                  >
                    <image
                      width={900}
                      height={859}
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAANbCAYAAAAaJlHBAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGU2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wMS0wNVQxODoyMjowMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDEtMDVUMTg6MzE6MTYrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDEtMDVUMTg6MzE6MTYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTViNzBmNTAtZTUxYS1kODRmLWJmOTItYjdjNzI4ZTU5MGM3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MmNhNGYxNDEtMWYzNS02MjQ0LThiMmMtZTk1ZGVhN2RlZDA4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2ExODdhZDQtYjA5MS0xZTQ3LTllM2EtNWQ5YTljZGZjY2M2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YTE4N2FkNC1iMDkxLTFlNDctOWUzYS01ZDlhOWNkZmNjYzYiIHN0RXZ0OndoZW49IjIwMjEtMDEtMDVUMTg6MjI6MDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTViNzBmNTAtZTUxYS1kODRmLWJmOTItYjdjNzI4ZTU5MGM3IiBzdEV2dDp3aGVuPSIyMDIxLTAxLTA1VDE4OjMxOjE2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtqRPe8AAKHqSURBVHic7P1tbFRZvud7/jmToWh7lGEfOw2cwQg3GOcBNGAYaFwgpV1KKi72yD55pGwp+6JyZqV6XvCCTKy5LY1GynrofHOlbsmu5AUjzRGVRInulBqp8tqSjSJBaaculBEWBJYwB2NzjDAq48B0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"
                    />
                  </pattern>
                </defs>
                <rect id="logo" width={70} height={67} fill="url(#pattern)" />
              </svg>
            </div>
          </div>
        </div>
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
      {/* <div className="winnie-product-f-bg"></div> */}
      {/* 頁尾 */}
      <footer>
        <div className="winnie-customize-f-bg"></div>
        <div className="chien-footer-top py-5 container-fluid">
          <div className="ch-footer-top">
            <div className="row p-3">
              <div className="col-6">
                <a className="chien-f-14 m-4 text-white" href="#">
                  關於我們
                </a>
                <p className="chien-aboutus-content chien-f-14 mx-5 my-3">
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
                </p>
              </div>
              <div className="col-3">
                <a className="chien-f-14 m-4 text-white" href="#">
                  聯絡我們
                </a>
                <p className="chien-contactus-subtitle chien-f-14 mx-5 mt-3 mb-0">
                  E-Mail
                </p>
                <p className="chien-f-14 mx-5 text-white">contact@utsuwa.com</p>
                <p className="chien-contactus-subtitle chien-f-14 mx-5 mt-3 mb-0">
                  Telephone
                </p>
                <p className="chien-f-14 mx-5 text-white">+886-908-000-000</p>
                <p className="chien-contactus-subtitle chien-f-14 mx-5 mt-3 mb-0">
                  Office Address
                </p>
                <p className="chien-f-14 mx-5 text-white">
                  2F., No. 390, Sec. 1, Fuxing S. Rd., Da’an Dist., Taipei City
                  106, Taiwan (R.O.C.)
                </p>
              </div>
              <div className="col-3">
                <a className="chien-f-14 m-4 text-white" href="#">
                  最新消息
                </a>
                <p className="chien-news-content chien-f-14 mx-5 mt-3 mb-1">
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍。
                </p>
                <p className="chien-f-12 mx-5 text-white">
                  August, 25, 2018 | by Utsuwa
                </p>
                <p className="chien-news-content chien-f-14 mx-5 mt-3 mb-1">
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍。
                </p>
                <p className="chien-f-12 mx-5 text-white">
                  August, 25, 2018 | by Utsuwa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chien-footer-bottom py-3 container-fluid">
          <div className="ch-footer-bottom">
            <div className="row">
              <ul className="social-links-area nav">
                <li>
                  <span className="chien-hidden-icon mx-3">
                    <i className="fab fa-facebook-square" />
                  </span>
                </li>
                <li>
                  <span className="chien-hidden-icon mx-3">
                    <i className="fab fa-twitter-square" />
                  </span>
                </li>
                <li>
                  <span className="chien-hidden-icon mx-3">
                    <i className="fab fa-instagram-square" />
                  </span>
                </li>
                <li>
                  <span className="chien-hidden-icon mx-3">
                    <i className="fab fa-telegram" />
                  </span>
                </li>
              </ul>
              <div className="mx-auto text-white copyright social-icon">
                Copyright © 2021 Utsuwa Inc.
              </div>
              <ul className="social-links-area nav">
                <li>
                  <a
                    className="mx-3 chien-social-icon"
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a
                    className="mx-3 chien-social-icon"
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a
                    className="mx-3 chien-social-icon"
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-instagram-square" />
                  </a>
                </li>
                <li>
                  <a
                    className="mx-3 chien-social-icon"
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Customize
