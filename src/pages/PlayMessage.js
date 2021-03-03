import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function PlayMessage() {
  return (
    <>
      <div className="course-title">課程留言</div>
      <div className="row">
        {/* 留言板 */}
        <div className="col-lg-12">
          {/* 留言1 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX2.jpg"
                alt=""
              />
            </div>
            <div className="message-card-content d-flex justify-content-start">
              <span>PAPAYA</span>&nbsp;&nbsp;
              <span>2018-05-19</span>&nbsp;&nbsp;
              {/* <span>5star</span> */}
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">在家裡也可以輕鬆學習了!!!!</p>
            </div>
          </div>

          {/* 留言2 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX5.jpg"
                alt=""
              />
            </div>
            <div className="message-card-content d-flex justify-content-start">
              <span>ROSE</span>&nbsp;&nbsp;
              <span>2020-05-19</span>&nbsp;&nbsp;
              {/* <span>5star</span> */}
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">
                很開心 很多收穫 老師講解清楚 很多自由創作的空間 沒有限制
                沒有壓力 愉悅的下午
              </p>
            </div>
          </div>
          {/* 留言3 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX3.jpg"
                alt=""
              />
            </div>
            <div className="message-card-content d-flex justify-content-start">
              <span>SOLA</span>&nbsp;&nbsp;
              <span>2021-01-19</span>&nbsp;&nbsp;
              {/* <span>5star</span> */}
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">
                捏泥巴! 捏泥巴! 小時後的一個小動作, 加上現今的思維,
                泥土有了新生命, 從"心"體驗.
              </p>
            </div>
          </div>
          {/* 留言4 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX1.jpg"
                alt=""
              />
            </div>
            <div className="message-card-content d-flex justify-content-start">
              <span>PAPAYA</span>&nbsp;&nbsp;
              <span>2018-05-19</span>&nbsp;&nbsp;
              {/* <span>5star</span> */}
            </div>
            <div className="message-card-content">
              <p className="snail-message-text">
                很輕鬆自在的氛圍，老師幽默風趣又有耐心引導孩子們，唯一的困擾是小孩不想下課離開謝謝老師！
              </p>
            </div>
          </div>
          {/* 留言2 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX5.jpg"
                alt=""
              />
            </div>
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
          {/* 留言2 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX5.jpg"
                alt=""
              />
            </div>
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
          {/* 留言2 */}
          <div className="message-card border-buttom">
            <div className="avatar-photo">
              <img
                className="chang-bidding-photo"
                src="http://localhost:3008/snail-imgs/EX5.jpg"
                alt=""
              />
            </div>
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
