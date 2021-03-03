import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

function PlayMessage() {
  return (
    <>
      <div className="course-title-sm">課程評價</div>
      <div className="row">
        {/* 留言板 */}
        <div className="col-lg-12">
          {/* 留言1 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">{/* <img src alt /> */}</div>
            <div className="message-card-content d-flex justify-content-start">
              <span>PAPAYA</span>&nbsp;&nbsp;
              <span>2021-02-19</span>&nbsp;&nbsp;
              <span>5star</span>
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">
                插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息
              </p>
            </div>
          </div>
          {/* 留言2 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <div className="portfolio-box">
                {`http://localhost:3008/snail-imgs/course-work1.jpg`}
              </div>
            </div>
            <div className="message-card-content d-flex justify-content-start">
              <span>PAPAYA</span>&nbsp;&nbsp;
              <span>2021-01-19</span>&nbsp;&nbsp;
              <span>5star</span>
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">
                插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息
              </p>
            </div>
            <div className="ex-img " data-aos="fade-up">
              <img src="http://localhost:3008/snail-imgs/EX2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PlayMessage
