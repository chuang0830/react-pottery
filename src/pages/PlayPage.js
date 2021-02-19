import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import OnlinePlayer from '../components/OnlinePlayer'

function PlayPage() {
  return (
    <>
      <>
        {/* banner */}
        <div
          className="container-fluid"
          style={{
            height: 605,
            background:
              'url("./img/course-banner2.jpg")center center no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        {/* 麵包屑 */}
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <Link to="/CourseCategory">課程類別</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
          {/* 影片 */}
          <div className="row">
            <div className="col-lg-12">
              <div className="onlinepage d-flex justify-content-start">
                <div className="col-8">
                  <OnlinePlayer />
                </div>
                <div className="col-4">
                  <div className="onlinepage-list"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 進度條 */}
          <div className="row">
            <div className="col-lg-8">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: '10%' }}
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          {/* 按鈕列 */}
          <div className="row">
            <div className="col">
              <div className="snailbtnline d-flex mb-7">
                <a href="#" className="snail-button mr-5">
                  課程內容
                </a>
                <a href="#" className="snail-button mr-5">
                  問題討論
                </a>
                <a href="#" className="snail-button mr-5">
                  課程評價
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="course-card-content">
                <div className="title-lg">體驗包含</div>
                <div className="course-card-p">
                  陶藝技巧說明、練習
                  <br />
                  深入淺出地分享陶藝知識：陶杯、花器、陶盤等創作發想
                  <br />
                  自由創作陶藝，1 ~ 3 件 *燒窯費另計
                  <br />
                  建議先構想欲創作作品，現場可與老師討論 可選擇
                  捏陶或拉坯，但拉坯需時間練習，老師會從旁協助
                  <br />
                  精美手作下午茶一份，與好友共度美好的午茶創作時光
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="teacher-chat" />
        </div>
      </>
    </>
  )
}

export default PlayPage
