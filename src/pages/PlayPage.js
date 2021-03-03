import { Route, withRouter, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { FaCaretRight } from 'react-icons/fa'
// import OnlinePlayer from '../components/OnlinePlayer'
import ReactPlayer from 'react-player'
import Scroll from 'react-scroll'
import PlayMessage from './PlayMessage'
import PlayContent from './PlayContent'
import PlayReview from './PlayReview'
import ChienFooter from '../components/ChienFooter'

// import ScrollToItem from '../components/winniecomponents/winnieitemscroll'

function PlayPage(props) {
  const [vedio, setVedio] = useState('/coursevedio1.mp4')
  var Element = Scroll.Element
  const url = props.match.url
  const path = props.match.path

  console.log('url', props.match.url)
  return (
    <>
      {/* background */}
      <banner>
        <div className="snail-cat-bg"></div>
      </banner>
      {/* banner */}
      <div
        className="container-fluid"
        style={{
          height: 605,
          background: 'url("./img/course-banner2.jpg")center center no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      {/* 內容 */}
      <div className="container">
        {/* 麵包屑 */}
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
              <Link to="/CourseCategory/OnlineCourse">線上課程</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              拉坏課程
            </li>
          </ol>
        </nav>
        {/* 影片 */}
        <div className="winnie-title" style={{ marginBottom: '-30px' }}>
          <h1>拉坯課程</h1>
        </div>
        <div className="row">
          {/* <div className="col-lg-12"> */}
          <div
            className="onlinepage d-flex justify-content-center"
            style={{ overflow: 'hidden' }}
          >
            <div className="col-6 snail-video">
              <ReactPlayer
                url={vedio}
                height="100%"
                width="100%"
                style={{ borde: 'none' }}
                autoplay={false}
                playing={false}
                controls={true}
                onSeek={(e) => console.log('onSeek', e)}
              />
            </div>
            {/* vedio列表 */}
            <div className="col-4 snail-video">
              <div className="onlinepage-list">
                {/* 滾動軸 */}
                <div className="snail-vedio-Button" id="video1">
                  <p className="course-title-sm ml-3">7 段單元，共 48 分鐘</p>
                </div>
                <Element
                  name="test7"
                  className="element"
                  id="containerElement"
                  style={{
                    position: 'relative',
                    height: '309px',
                    overflow: 'scroll',
                    marginBottom: '100px',
                    overflowX: 'hidden',
                  }}
                >
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    onClick={() => {
                      setVedio('/coursevedio0.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元0 - 課程介紹
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    onClick={() => {
                      setVedio('/coursevedio1.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元1 - 暖身動動手：練土
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    onClick={() => {
                      setVedio('/coursevedio2.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元2 - 手捏和風茶碗
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video2"
                    onClick={() => {
                      setVedio('/coursevedio3.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元3 - 拉坯技法說明
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    onClick={() => {
                      setVedio('/coursevedio4.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元4 - 壓印技法：雅逸長方盤
                  </button>
                  <button
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('/coursevedio5.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元5 - 手捏陶魚技法：年年有魚
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    onClick={() => {
                      setVedio('/coursevedio6.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元6 - 軟土板成形技法
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video2"
                    onClick={() => {
                      setVedio('/coursevedio7.mp4')
                    }}
                  >
                    <FaCaretRight className="mr-3 mb-1" />
                    單元7 - 化妝土技法
                  </button>
                </Element>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* 進度條 */}
        <div className="row" id={'screens'}>
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
            <div className="snailbtnline d-flex mb-7 mt-7">
              <Link
                to="/CourseCategory/OnlineCourse/PlayPage/playcontent"
                className="snail-button mr-5"
                onClick={() => {}}
              >
                課程內容
              </Link>
              <Link
                to={`/CourseCategory/OnlineCourse/PlayPage/playmessage`}
                className="snail-button mr-5"
                onClick={() => {}}
              >
                課程留言
              </Link>
              <Link
                to={`/CourseCategory/OnlineCourse/PlayPage/playreview`}
                className="snail-button mr-5"
                onClick={() => {}}
              >
                課程評價
              </Link>
            </div>
          </div>
        </div>

        {/* <ScrollToItem> */}
        <Switch>
          <Route exact path={path}>
            <PlayContent />
          </Route>
          <Route path={`${url}/playcontent`}>
            <PlayContent />
          </Route>
          <Route path={`${url}/playmessage`}>
            <PlayMessage />
          </Route>
          <Route path={`${url}/playreview`}>
            <PlayReview />
          </Route>
        </Switch>
        {/* </ScrollToItem> */}
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

export default withRouter(PlayPage)
