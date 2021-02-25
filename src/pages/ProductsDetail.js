import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
//icon
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
//元件
import WinnieLogo from './../components/winniecomponents/WinnieLogo'
import ChienFooter from '../components/ChienFooter'
import RecentView from './../components/ningcomponents/RecentView'

function ProductsDetail(props) {
  // const testData1 = {
  //   sid: 3,
  //   product_name: '深灰手作陶瓷杯',
  //   category_id: 1,
  //   price: 420,
  //   color: '灰',
  //   size: '105mm*105mm',
  //   photo: '["3.jpg","20-2.jpg","20-3.jpg"]',
  //   introduction: '希望通過豐富的色彩變化為日常生活著色的日子。',
  // }
  // const [photos, setPhotos] = useState([])
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

  //aos套件
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  // 開啟載入指示
  //setDataLoading(true)
  const [amount, setAmount] = useState(1)
  //載入圖示
  const [isLoading, setIsLoading] = useState(true)
  //追蹤愛心
  const [heart, setHeart] = useState([])

  //const [total, setTotal] = useState(0)
  const [data, setData] = useState([
    {
      sid: 0,
      product_name: '',
      category_id: 0,
      price: 0,
      color: '',
      size: '',
      photo: '',
      introduction: '',
    },
  ])
  const [photo, setPhoto] = useState([
    {
      sid: 0,
      product_name: '',
      category_id: 0,
      price: 0,
      color: '',
      size: '',
      photo: '',
      introduction: '',
    },
  ])
  const [photo1, setPhoto1] = useState([
    {
      sid: 0,
      product_name: '',
      category_id: 0,
      price: 0,
      color: '',
      size: '',
      photo: '',
      introduction: '',
    },
  ])
  const [photo2, setPhoto2] = useState([
    {
      sid: 0,
      product_name: '',
      category_id: 0,
      price: 0,
      color: '',
      size: '',
      photo: '',
      introduction: '',
    },
  ])
  const [photo3, setPhoto3] = useState([
    {
      sid: 0,
      product_name: '',
      category_id: 0,
      price: 0,
      color: '',
      size: '',
      photo: '',
      introduction: '',
    },
  ])
  const testData1 = {
    sid: 3,
    product_name: '深灰手作陶瓷杯',
    category_id: 1,
    price: 420,
    color: '灰',
    size: '105mm*105mm',
    photo: '["3.jpg","20-2.jpg","20-3.jpg"]',
    introduction: '希望通過豐富的色彩變化為日常生活著色的日子。',
  }

  //抓id&處理photo資料
  const handleGetdata = () => {
    const url = `http://localhost:3000/products/id?sid=${props.match.params.id}`
    fetch(url, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((r) => {
        let p = 'http://localhost:3008/winnie-images/'
        setPhoto(p + JSON.parse(r[0].photo)[0])
        setPhoto1(p + JSON.parse(r[0].photo)[0])
        setPhoto2(p + JSON.parse(r[0].photo)[1])
        setPhoto3(p + JSON.parse(r[0].photo)[2])
        setData(r)
        console.log(r)
      })
    //2秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3500)
  }

  //一開始就會開始載入資料
  useEffect(() => {
    handleGetdata()
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
        <div className="winnie-detail-t-bg"></div>
      </div>
      {/* 麵包屑 */}
      {/*查看id是否有抓到<h3>{props.match.params.id}</h3> */}
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={`/`}>首頁</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/products`}>商品專區</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {data[0].product_name}
            </li>
          </ol>
        </nav>
        {/* title */}
        <div className="winnie-title">
          <h1>PRODUCT</h1>
        </div>
        <div data-aos="fade-up" className="winnie-text">
          <p>
            「用色彩點綴你的日常」讓你的每一天都與、眾、不、同。
            <br />
            簡單地以巧思搭配各式器皿，就能為空間營造出不可思議的變化。
          </p>
        </div>
        {/* 商品區 */}

        <div className="winnie-detail-margin">
          <div className="row">
            <div className="wrapper col-lg-8 col-md-12">
              <div className="img-change-l">
                <img src={photo} width={680} height={440} alt="" />
              </div>
              <div className="img-change-s">
                <img
                  onClick={() => {
                    setPhoto(photo1)
                  }}
                  src={photo1}
                  width={130}
                  height={110}
                  alt=""
                />
                <img
                  onClick={() => {
                    setPhoto(photo2)
                  }}
                  src={photo2}
                  width={130}
                  height={110}
                  alt=""
                />
                <img
                  onClick={() => {
                    setPhoto(photo3)
                  }}
                  src={photo3}
                  width={130}
                  height={110}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 chang-title-line">
              <div className="d-flex chang-border-bottom justify-content-between">
                <h2>{data[0].product_name}</h2>
                <p>
                  加入追蹤清單
                  {heart.includes(data[0].sid) ? (
                    <FaHeart
                      onClick={() => {
                        const newHeart = heart.filter((v) => v !== data[0].sid)
                        setHeart(newHeart)
                      }}
                      className="i mb-1 ml-1"
                    />
                  ) : (
                    <FaRegHeart
                      onClick={() => {
                        const newHeart = [...heart, data[0].sid]
                        setHeart(newHeart)
                      }}
                      className="i mb-1 ml-1"
                    />
                  )}
                </p>
              </div>
              <h3>{data[0].price}</h3>
              <div className="d-flex justify-content chang-button-box">
                {/* 計數器 */}
                <div className="col-4 chang-count-border-btn  d-flex flex-row justify-content-center">
                  <button
                    className="chang-count-btn"
                    onClick={() => {
                      setAmount(amount - 1)
                    }}
                  >
                    -
                  </button>
                  <button className="chang-count-btn">{amount}</button>
                  <button
                    className="chang-count-btn"
                    onClick={() => {
                      setAmount(amount + 1)
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
                        ...data[0],
                        amount: amount,
                      })
                    }}
                  >
                    加入購物車 <FaShoppingCart className="mb-1" />
                  </button>
                </class>
              </div>
              {/* 商品描述 */}
              <div className="winnie-description">
                <p className="winnie-detail-p">商品描述</p>
                <p className="text-break">{data[0].introduction}</p>
              </div>
              <div className="winnie-description">
                <p className="winnie-detail-p">商品規格</p>
                <p className="text-break">
                  顏色: {data[0].color}
                  <br />
                  尺寸: {data[0].size}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*[_winnierecentview.scss] recent view title*/}
        <WinnieLogo />
        {/* recent view product*/}
        <div className="row">
          <RecentView />
        </div>
      </div>
      {/* 測試 */}
      <div>
        <div className="winnie-detail-f-bg position-relative">
          {/* 頁尾 */}
          <div className="position-absolute fixed-bottom">
            <ChienFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductsDetail)
