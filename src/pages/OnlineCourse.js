import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Accordion, Card, Button } from 'react-bootstrap'
import { FaRegHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import PlayPage from './PlayPage'
import ChienFooter from '../components/ChienFooter'

function OnlineCourse(props) {
  const [photos, setPhotos] = useState([])
  //const [dataLoading, setDataLoding] = useState(false)

  async function getPhotosFromServer() {
    // 開啟載入指示
    //setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/course/json4'

    //header格式設定為json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    //設定資料給photos
    setPhotos(data)
  }

  //一開始就會開始載入資料
  useEffect(() => {
    getPhotosFromServer()
  }, [])

  //每次users資料有變動就會X秒後關掉載入指示
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 1000)
  // }, [photos])

  //載入圖示
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* banner */}
      <banner>
        <div className="snail-cat-bg"></div>
      </banner>
      {/* 麵包屑 */}
      <div className="container">
        {/* 麵包屑 */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">首頁</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/CourseCategory">課程類別</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              線上課程
            </li>
          </ol>
        </nav>
        {/* title */}
        <div className="winnie-title ">
          <h1>線上課程</h1>
        </div>
        <div className="winnie-text mb-11">
          <p>
            還記得第一次捏陶土就像玩泥巴一樣的有趣觸感嗎？利用創作力創作出的陶土器皿因為其溫潤的特質而顯得獨一無二，無論是陶杯、陶盤還是陶碗，除了實用性之外，還多了一分溫暖之感擁有多年教學經驗的五行創藝陶藝工坊，推出了一系列輕鬆有趣的陶土課程。透過專業老師的引導，您將學會利用陶土的特性做出你自己最喜歡的陶製品，更能在揉、捏、拍、壓的過程中，療癒自己甚至愛上捏陶的樂趣！
            <br />
            小朋友也非常適合這樣的體驗課程喔！透過手作的揉捏有充分的觸覺感受，視覺上的
            3D
            概念也能透過陶土捏塑學習，捏陶還可以直接的引導孩子感受數量、形體和造形的變化，更可以訓練孩子手部的各種大小肌肉、手眼協調和創造力。
            <br />
            克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
          </p>
          {/* 更多按鈕 */}
          <button className="cindy-check more" href="#">
            查看更多
            <i className="fas fa-angle-double-down" />
          </button>
        </div>
        <div className="row">
          {/* 按鈕列 */}
          <div className="col">
            <div className="snailbtnline d-flex mb-7">
              <a href="#" className="snail-button mr-5">
                課程列表
              </a>
              <a href="#" className="snail-button mr-5">
                我的課程
              </a>
            </div>
          </div>
          {/* 課程卡片 */}
          <div className="row">
            {/* 第一個 */}
            <div className="winnie-p-wrap d-flex">
              {photos.length &&
                photos.map((value, index) => {
                  //單筆圖片直接value.photo
                  //多筆圖片let p = JSON.parse(value.photo)[0]
                  let p = value.photo
                  p = 'http://localhost:3008/snail-imgs/' + p
                  return (
                    <div className="col-lg-4 col-md-6">
                      <div className="winnie-card-content">
                        <div key={value.sid} className="winnie-card-img">
                          <Link to={`/CourseCategory/MyOnlineCourse/PlayPage`}>
                            <img className="w-100" src={p} alt="" />
                          </Link>
                        </div>
                        <div className="winnie-card-name text-justify d-flex justify-content-between">
                          <p>{value.product_name}</p>
                          <div>
                            <FaRegHeart className="far fa-heart mr-2" />
                            <FaShoppingCart />
                          </div>
                        </div>
                        <p className="winnie-card-price">{value.price}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      {/* Footer背景 */}
      <div>
        <div className="snail-f-bg position-relative mt-10">
          {/* 頁尾 */}
          <div className="position-absolute fixed-bottom">
            <ChienFooter />
          </div>
        </div>
      </div>
    </>
  )
}
export default OnlineCourse
