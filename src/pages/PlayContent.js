import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'

function PlayContent() {
  console.log(1)
  return (
    <>
      <div className="col-lg-12">
        <div className="course-card-content">
          <div className="course-title">課程內容</div>
          <div className="course-card-p">
            本課程為陶藝初階之實作課程，
            <br />
            內容介紹各種不同的基礎創作技法，
            <br />
            例如：拉坯、手塑、土板成形等，透過講述與實習操作，
            <br />
            以生活化的方式進行教學，使學員習得陶藝創作之能力。
            <br />
            課程分為11週次，以循序漸進、深入淺出的方式，搭配有趣的單元技法示範，期許學員能從中獲得學習興趣與成就感。
          </div>
          <div className="course-title">課程目標</div>
          <div className="course-card-p">
            (1)學習陶藝基礎知識，增進材質美感與手作經驗。
            <br />
            (2)認識並賞析國內外陶藝創作作品。
            <br />
            (3)引導學生創意發想，建構立體空間感。
          </div>
          <div className="course-title">授課大綱</div>
          <div className="course-card-p">
            第01週 | 暖身動動手：練土 Ceramics Preparation: Kneading
            <br />
            第02週 | 手捏和風茶碗 Handmade Tea-bowl <br />
            第03週 | 拉坯技法說明 Introduction of Throwing Technique <br />
            第04週 | 壓印技法：雅逸長方盤 Plate with surface treatments <br />
            第05週 | 手捏陶魚技法：年年有魚 Hand-building: Fish <br />
            第06週 | 軟土板成形技法 Slat-building Technique <br />
            第07週 | 化妝土技法 Slip Technique <br />
            第08週 | 東方書寫：手摔土板技法 Slap-building with Textures <br />
            第09週 | 絞胎與壓模成形技法：渲彩陶盤 Mixed Colors and Mold-pressing
            Technique <br />
            第10週 | 拉坯應用：品味陶杯 Throwing Vessels with New Twist on the
            Surface <br />
            第 11週 | 拉坯應用：樂活蓋碗 Throwing Lid and Bowl
            <br /> 本課程提供教師精心設計之講義，共計11單元。
          </div>
          <div className="course-title">授課形式</div>
          <div className="course-card-p">
            本課程以示範、講述、實作練習、成果展示為主。陶瓷成形與裝飾技法是學習陶藝很重要的一環，技法示範往往需要藉由重複地觀看與自我實際練習以達到學習目的；為了縮短學習者觀看示範的時間，以線上影音教學的形式來提升學習效率。課程內容精選3種拉坯示範，及5種裝飾技法。評分項目：每週單元作業練習各10%。60分及格。
          </div>
          <div className="course-title">修課條件</div>
          <div className="course-card-p">
            學員需自備陶土材料、工具、工作空間。
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayContent
