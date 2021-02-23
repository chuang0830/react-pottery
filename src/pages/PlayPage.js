import { Route, withRouter, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
// import OnlinePlayer from '../components/OnlinePlayer'
import ReactPlayer from 'react-player'
import Scroll from 'react-scroll'
import PlayMessage from './PlayMessage'
import PlayContent from './PlayContent'
import PlayReview from './PlayReview'

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
              DIY體驗課程
            </li>
          </ol>
        </nav>
        {/* 影片 */}
        <div className="row">
          {/* <div className="col-lg-12"> */}
          <div className="onlinepage d-flex justify-content-start">
            <div className="col-6 snail-video">
              <ReactPlayer
                url={vedio}
                height="100%"
                width="100%"
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
                <Element
                  name="test7"
                  className="element"
                  id="containerElement"
                  style={{
                    position: 'relative',
                    height: '326px',
                    overflow: 'scroll',
                    // marginBottom: '100px',
                  }}
                >
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('https://www.youtube.com/watch?v=9WRv0bnY6ks')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('/coursevedio2.mp4')
                    }}
                  >
                    單元2 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('/coursevedio1.mp4')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    id="video2"
                    onClick={() => {
                      setVedio('/coursevedio2.mp4')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('/coursevedio1.mp4')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('/coursevedio1.mp4')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    className="snail-vedio-Button"
                    id="video1"
                    className="snail-vedio-button"
                    onClick={() => {
                      setVedio('/coursevedio1.mp4')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                  <button
                    id="video2"
                    onClick={() => {
                      setVedio('/coursevedio2.mp4')
                    }}
                  >
                    單元1 - 捏陶塑型
                    <FaCaretRight className="ml-5 md-5" />
                  </button>
                </Element>
              </div>
            </div>
          </div>
          {/* </div> */}
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
              <Link
                to="/CourseCategory/MyOnlineCourse/PlayPage/playcontent"
                className="snail-button mr-5"
              >
                課程內容
              </Link>
              <Link
                to={`/CourseCategory/MyOnlineCourse/PlayPage/playmessage`}
                className="snail-button mr-5"
              >
                課程留言
              </Link>
              <Link
                to={`/CourseCategory/MyOnlineCourse/PlayPage/playreview`}
                className="snail-button mr-5"
              >
                課程評價
              </Link>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="teacher-chat"></div>
        <Switch>
          <Route path={`${url}/playmessage`}>
            <PlayMessage />
          </Route>
          <Route path={`${url}/playcontent`}>
            <PlayContent />
          </Route>
          <Route path={`${url}/playreview`}>
            <PlayReview />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default withRouter(PlayPage)
