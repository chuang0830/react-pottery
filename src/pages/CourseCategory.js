import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function CourseCategory() {
  return (
    <>
      <banner>
        <div className="container-fluid"></div>
        <div
          className="container-fluid mt-5 "
          style={{
            height: 500,
            background: 'url("./img/banner.jpg")center center no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
      </banner>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">{/* <a href="#">Home</a> */}</li>
          <li className="breadcrumb-item">{/* <a href="#">Library</a> */}</li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <div className="container">
        <div className="row">
          {/* 標題文字 */}
          <div className="col-lg-12 col-md-6">
            <div className="productsmore-card-content">
              <div className="productsmore-card-title">商品專區</div>
              <div className="productsmore-card-p text-justify">
                克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
                一般行動五年安全答應圖象產生年齡，即使身後品質我有回來身上儘量我是方面美好，同樣接收想法遊戲學校一段時間，參觀不好意思，自從環保走到，迅速萬元先進那麼發表尋找說著是怎麼支付，元素人事放在種種授權方式獨特初音高中好像，其中開放公斤友情連結多少呵呵不要眼裡我。
              </div>
              {/* <a
                href="#"
                className="productsmore-card-a d-flex flex-row-reverse"
              >
                查看更多
              </a> */}
            </div>
          </div>
          {/* 按鈕列 */}
          <div className="col">
            <div className="btn-bar d-flex ">
              <div className="button-active text-primary">選擇課程</div>
              <div className="button-active text-primary">詳細內容</div>
              <div className="button-active text-primary">
                課程評價與學員作品
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row border-bottom">
          <div className="title-midium">
            <h2>課程類別</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="categorycard-pic catbackground">
              <p className="categorycard-Entitle">英文</p>
              <p className="categorycard-Chtitle">中文</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="categorycard-pic catbackground" />
          </div>
          <div className="col-lg-3">
            <div className="categorycard-pic catbackground" />
          </div>
          <div className="col-lg-3">
            <div className="categorycard-pic catbackground" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCategory
