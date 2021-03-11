import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
//套件
import Carousel from 'react-bootstrap/Carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
//icon
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
//元件
import WinnieLogo from './../components/winniecomponents/WinnieLogo'
import ChienFooter from '../components/ChienFooter'
import RecentView from './../components/ningcomponents/RecentView'
// import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
// import ScrollToItem from '../components/winniecomponents/winnieitemscroll'

function Products(props) {
  //圖片
  const [photos, setPhotos] = useState([])
  //分頁
  const [page, setPage] = useState(1)
  //總頁
  const [totalpage, setTotalPage] = useState(0)
  //追蹤愛心
  const [heart, setHeart] = useState([])
  //載入圖示
  const [isLoading, setIsLoading] = useState(true)

  //細項分類
  const [detailCate, setDetailCate] = useState('')
  //搜尋
  const [search, setSearch] = useState('')
  //判斷使用者是否開始搜尋
  const [userSearch, setUserSearch] = useState(false)
  //價格範圍
  const [frontPrice, setFrontPrice] = useState('')
  const [backPrice, setBackPrice] = useState('')
  //排序
  const [sort, setSort] = useState('')
  const [queryReset, setQueryReset] = useState('')

  //方法一：指定分頁位置
  //方法二：app.js(<ScrollToItem>)
  //但不管哪種都會被scrolltop擋住
  //指定分頁位置
  let scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName)
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' })
        console.log(anchorName)
      }
    }
  }

  //設定頁碼
  let items = []
  for (let number = 1; number <= totalpage; number++) {
    items.push(
      <li className={`page-item ${page === number && 'active'}`}>
        <Link
          className="page-link"
          to={`/products`}
          onClick={() => {
            scrollToAnchor('screens')
            setPage(number)
          }}
        >
          {number}
        </Link>
      </li>
    )
  }

  //清除資料
  const resetData = () => {
    setDetailCate('')
    setPage(1)
    setSearch('')
    setFrontPrice('')
    setBackPrice('')
    setSort('')
  }
  //aos套件
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  //spinner
  useEffect(() => {
    //spinner測試
    console.log('spinner on')

    const getDataFromServer = async () => {
      try {
        // let query = ''
        let query = props.location.search || ''
        if (page) query += `page=${page}`
        if (detailCate) query += `&detailCate=${detailCate}`
        if (search) query += `&search=${search}`
        if (sort) query += `&sort=${sort}`
        if (frontPrice || backPrice)
          query += `&frontPrice=${frontPrice}&backPrice=${backPrice}`
        if (queryReset) {
          query = ''
        }
        const url = `http://localhost:3000/products/test?${query}`
        console.log('url', url)
        console.log('query', props.location.search)
        const response = await fetch(url, { method: 'GET' })
        const data = await response.json()
        console.log('data', data.rows)
        setPhotos(data.rows)
        setTotalPage(data.totalPage)
        // setSort('priceDESC')
      } catch (error) {
        console.log(error)
      }
    }
    getDataFromServer()
    //2秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    setTimeout(() => {
      scrollToAnchor('screens')
    }, 1000)
    console.log('spinner off')
  }, [page, detailCate, search, sort, frontPrice, backPrice, queryReset])

  //搜尋spinner測試
  //更新狀態，只要searchInput更新他就會跟著更新
  useEffect(() => {
    // 初次預設值也不處理，只要還沒開始搜尋就return不跑更新
    if (userSearch === false) return
    if (userSearch === true) {
      // 1.5秒後關閉指示器
      setTimeout(() => {
        setIsLoading(false)
        setUserSearch(false)
      }, 4000)
    }
  }, [search, userSearch])

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
  // 加入最近瀏覽-----------------------------------------------------------------
  const [myrecentview, setRecentView] = useState([])
  const updateCartToRecentViewLocalStorage = (item) => {
    const currentRecentview =
      JSON.parse(localStorage.getItem('utsuwacartrecentView')) || []
    const index = currentRecentview.findIndex((v) => v.sid === item.sid)
    if (index > -1) {
      currentRecentview.push(item) //return
    } else {
      currentRecentview.push(item)
    }
    localStorage.setItem(
      'utsuwacartrecentView',
      JSON.stringify(currentRecentview)
    )
    setRecentView(currentRecentview)
  }
  // 加入收藏-----------------------------------------------------------------
  const [myaddheart, setAddHeart] = useState([])
  const updateCartToAddHeartLocalStorage = (item) => {
    const currentAddHeart =
      JSON.parse(localStorage.getItem('utsuwacartaddheart')) || []
    const index = currentAddHeart.findIndex((v) => v.sid === item.sid)
    if (index > -1) {
      return
    } else {
      currentAddHeart.push(item)
    }
    localStorage.setItem('utsuwacartaddheart', JSON.stringify(currentAddHeart))
    setAddHeart(currentAddHeart)
  }
  function removeAddHeart(value) {
    const index = JSON.parse(localStorage.getItem('utsuwacartaddheart')) || []
    // 拿掉選取的物件
    const currentRemoveheart = index.filter((v) => v.sid !== value.sid)
    localStorage.setItem(
      'utsuwacartaddheart',
      JSON.stringify(currentRemoveheart)
    )
    // 設定資料
    setAddHeart(currentRemoveheart)
  }
  //監聽愛心
  function getAddHeartFromLocalStorage() {
    const getHeart = localStorage.getItem('utsuwacartaddheart') || '[]'
    // setHeart(JSON.parse(getHeart))

    const heartsData = JSON.parse(getHeart)
    // heartsData
    const heartDisplay = []
    heartsData.forEach((i) => {
      heartDisplay.push(i.sid)
    })
    setHeart(heartDisplay)
  }
  useEffect(() => {
    getAddHeartFromLocalStorage()
  }, [])
  useEffect(() => {}, [heart])
  console.log(heart)

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

  if (isLoading) return spinner

  return (
    <>
      {/* 一進頁面漸變 */}
      {/* winnieproduct.scss */}
      <div class="winnie-transition-bg"></div>
      {/* hero page */}
      <div>
        <div className="winnie-product-t-bg"></div>
      </div>
      {/* 麵包屑 */}
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">首頁</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              商品專區
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
        {/* 輪播 */}
        <Carousel data-aos="fade-up">
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="http://localhost:3008/winnie-images/slider1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 data-aos="fade-right">Utsuwa - Colorful your daily life.</h3>
              {/* <p>Utsuwa / Colorful your daily life.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="http://localhost:3008/winnie-images/slider2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 data-aos="fade-right">Utsuwa - Colorful your daily life.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="http://localhost:3008/winnie-images/slider3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 data-aos="fade-right">Utsuwa - Colorful your daily life.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="http://localhost:3008/winnie-images/slider4.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 data-aos="fade-right">Utsuwa - Colorful your daily life.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* 分類 */}
      <div data-aos="fade-up">
        <div data-aos="fade-up" className="winnie-classbg">
          <p>商品專區</p>
        </div>
      </div>
      {/* [_winnieclassimg.scss] 分類圖片 */}
      <div className="container-fluid">
        <div className="row justify-content-around d-flex flex-wrap">
          <ul className="winnie-classimg d-flex flex-sm-column flex-md-column flex-xl-row flex-lg-row">
            <div className="row">
              <li>
                <Link
                  to={`/products`}
                  onClick={() => {
                    scrollToAnchor('screens')
                    resetData()
                    setDetailCate(2)
                  }}
                >
                  <img
                    src="http://localhost:3008/winnie-images/class1.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="winnie-class-p">
                    <p>餐盤</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to={`/products`}
                  onClick={() => {
                    scrollToAnchor('screens')
                    resetData()
                    setDetailCate(1)
                  }}
                >
                  <img
                    src="http://localhost:3008/winnie-images/class2.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="winnie-class-p">
                    <p>杯具</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to={`/products`}
                  onClick={() => {
                    scrollToAnchor('screens')
                    resetData()
                    setDetailCate(3)
                  }}
                >
                  <img
                    src="http://localhost:3008/winnie-images/class3.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="winnie-class-p">
                    <p>飯碗</p>
                  </div>
                </Link>
              </li>
            </div>
            <div className="row justify-content-center">
              <li>
                <Link
                  to={`/products`}
                  onClick={() => {
                    scrollToAnchor('screens')
                    resetData()
                    setDetailCate(5)
                  }}
                >
                  <img
                    src="http://localhost:3008/winnie-images/class4.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="winnie-class-p">
                    <p>筷架</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to={`/products`}
                  onClick={() => {
                    scrollToAnchor('screens')
                    resetData()
                    setDetailCate(4)
                  }}
                >
                  <img
                    src="http://localhost:3008/winnie-images/class5.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="winnie-class-p">
                    <p>花器</p>
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="container">
        {/* 搜尋 */}
        <div className="row justify-content-end" id={'screens'}>
          <span className="winnie-search mr-2 mt-1">
            <input
              style={{ position: 'relative', zIndex: '2' }}
              type="text"
              placeholder="商品名稱搜尋"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setTimeout(() => {
                  setUserSearch(true)
                }, 500)
              }}
            />
          </span>
          {/* 下拉選單 */}
          <select
            style={{ position: 'relative', zIndex: '2' }}
            value={sort}
            onChange={(e) => {
              // 將字串轉成數字
              setSort(e.target.value)
            }}
          >
            {/* 預設值 */}
            <option value={''}>選擇價格順序</option>
            <option value={'priceASC'}>價格低-&gt;高</option>
            <option value={'priceDESC'}>價格高-&gt;低</option>
          </select>
        </div>
        {/* [_winnieproductcard.scss] 商品card */}
        {userSearch === true && spinner}
        <div className="row">
          <div className="winnie-p-wrap d-flex">
            {/* 第一個 */}
            {photos.map((value, index) => {
              let p = JSON.parse(value.photo)[0]
              p = 'http://localhost:3008/winnie-images/' + p
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="winnie-card-content">
                    <div key={value.sid} className="winnie-card-img">
                      <Link to={`/products/${value.sid}`}>
                        <img
                          className="w-100"
                          src={p}
                          alt=""
                          onClick={() => {
                            updateCartToRecentViewLocalStorage(value)
                          }}
                        />
                      </Link>
                    </div>
                    <div className="winnie-card-name text-justify d-flex justify-content-between">
                      <p>{value.product_name}</p>
                      <div>
                        {heart.includes(value.sid) ? (
                          //click的話取消追蹤
                          <FaHeart
                            onClick={() => {
                              const newHeart = heart.filter(
                                (v) => v !== value.sid
                              )
                              setHeart(newHeart)
                              removeAddHeart(value)
                              Swal.fire('', '已從收藏清單中移除')
                            }}
                            className="far fa-heart mr-2"
                          />
                        ) : (
                          //click的話加入追蹤
                          <FaRegHeart
                            onClick={() => {
                              const newHeart = [...heart, value.sid]
                              setHeart(newHeart)
                              updateCartToAddHeartLocalStorage(value)
                              Swal.fire('', '已加入至收藏清單')
                            }}
                            className="far fa-heart mr-2"
                          />
                        )}

                        <FaShoppingCart
                          onClick={() => {
                            updateCartToLocalStorage({
                              ...value,
                              amount: 1,
                            })
                            Swal.fire('', '已加入至購物車')
                          }}
                          className="winnie-cart"
                        />
                      </div>
                    </div>
                    <p className="winnie-card-price">{value.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* [_winniepage.scss] 頁籤 react bootstrap:pagination */}
        <div className="winnie-page">
          <div className="row">
            <div className="mx-auto">
              <nav aria-label="Page navigation example ">
                <ul className="pagination">
                  {/* 最前頁 bs icon Chevron double left */}
                  <li className={`page-item ${page === 1 && 'disabled'}`}>
                    <Link
                      className="page-link"
                      aria-label="Previous"
                      to={`/products`}
                      onClick={() => {
                        scrollToAnchor('screens')
                        setPage(1)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#615956"
                        className="bi bi-chevron-double-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                    </Link>
                  </li>
                  {/* 前一頁 bs icon Chevron left */}
                  <li className={`page-item ${page === 1 && 'disabled'}`}>
                    <Link
                      className="page-link"
                      aria-label="Previous"
                      to={`/products`}
                      onClick={() => {
                        scrollToAnchor('screens')
                        setPage(page - 1)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#615956"
                        className="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                    </Link>
                  </li>
                  {/* 頁碼區 */}
                  {items}
                  {/*下一頁 bs icon Chevron right */}
                  <li
                    className={`page-item ${page === totalpage && 'disabled'}`}
                  >
                    <Link
                      className="page-link"
                      aria-label="Next"
                      to={`/products`}
                      onClick={() => {
                        scrollToAnchor('screens')
                        setPage(page + 1)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#615956"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Link>
                  </li>
                  {/*最後一頁 bs icon Chevron double right */}
                  <li
                    className={`page-item ${page === totalpage && 'disabled'}`}
                  >
                    <Link
                      className="page-link"
                      aria-label="Next"
                      to={`/products`}
                      onClick={() => {
                        scrollToAnchor('screens')
                        setPage(totalpage)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#615956"
                        className="bi bi-chevron-double-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* [_winnierecentview.scss]recent view title*/}
        <WinnieLogo />
        {/* recent view product*/}
        <div className="row">
          <RecentView />
        </div>
      </div>
      {/* 測試 */}
      <div>
        <div className="winnie-product-f-bg position-relative">
          {/* 頁尾 */}
          <div className="position-absolute fixed-bottom">
            <ChienFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Products)
