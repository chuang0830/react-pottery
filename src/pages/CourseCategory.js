import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import ChienFooter from '../components/ChienFooter'

import WinnieLogo from './../components/winniecomponents/WinnieLogo'
//導入動畫套件
import Aos from 'aos'
import 'aos/dist/aos.css'

function CourseCategory() {
  //AOS套件效果
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      {/* banner */}
      <banner>
        <div className="snail-cat-bg"></div>
      </banner>

      <div className="container ">
        {/* 麵包屑 */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">首頁</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/CourseCategory">課程類別</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              DIY體驗課程
            </li>
          </ol>
        </nav>
        <div className="container">
          <div className="row">
            {/* 標題文字 */}
            <div className="winnie-title ">
              <h1>DIY課程體驗</h1>
            </div>
            <div className="winnie-text mb-11 " data-aos="fade-up">
              <p>
                還記得第一次捏陶土就像玩泥巴一樣的有趣觸感嗎？利用創作力創作出的陶土器皿因為其溫潤的特質而顯得獨一無二，無論是陶杯、陶盤還是陶碗，除了實用性之外，還多了一分溫暖之感擁有多年教學經驗的UTSUWA創藝陶藝工坊，推出了一系列輕鬆有趣的陶土課程。透過專業老師的引導，您將學會利用陶土的特性做出你自己最喜歡的陶製品，更能在揉、捏、拍、壓的過程中，療癒自己甚至愛上捏陶的樂趣！
                <br />
                小朋友也非常適合這樣的體驗課程喔！透過手作的揉捏有充分的觸覺感受，視覺上的
                3D
                概念也能透過陶土捏塑學習，捏陶還可以直接的引導孩子感受數量、形體和造形的變化，更可以訓練孩子手部的各種大小肌肉、手眼協調和創造力。
                <br />
              </p>
              {/* 更多按鈕 */}
              <button className="cindy-check more" href="#">
                查看更多
                <i className="fas fa-angle-double-down" />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="chien-card-title mb-10">
              <h2>課程類別</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="categorycard-pic catbackground1">
                <p className="categorycard-Entitle">Elementary</p>
                <p className="categorycard-Chtitle">初階課程</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categorycard-pic catbackground2">
                <p className="categorycard-Entitle">Middle-level</p>
                <p className="categorycard-Chtitle">中階課程</p>
              </div>
            </div>
            <div className="col-lg-3">
              <Link to="/CourseCategory/Experience">
                <div className="categorycard-pic catbackground3">
                  <p className="categorycard-Entitle">Experience</p>
                  <p className="categorycard-Chtitle">DIY體驗</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/CourseCategory/OnlineCourse">
                <div className="categorycard-pic catbackground4">
                  <p className="categorycard-Entitle">Online course</p>
                  <p className="categorycard-Chtitle">線上課程</p>
                </div>
              </Link>
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

export default CourseCategory
