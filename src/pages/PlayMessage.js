import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
              <span>2018-05-19</span>&nbsp;&nbsp;
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
            <div className="avatar-photo">{/* <img src alt /> */}</div>
            <div className="message-card-content d-flex justify-content-start">
              <span>PAPAYA</span>&nbsp;&nbsp;
              <span>2018-05-19</span>&nbsp;&nbsp;
              <span>5star</span>
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">
                插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PlayMessage
