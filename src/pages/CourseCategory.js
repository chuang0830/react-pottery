import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import ChienFooter from '../components/ChienFooter'

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
            <li className="breadcrumb-item">課程類別</li>
          </ol>
        </nav>
        <div className="container">
          <div className="row">
            {/* 標題文字 */}
            <div className="winnie-title" data-aos="fade-up">
              <h1>手作課程</h1>
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
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="chien-card-title mb-5">
              <h2>課程體驗</h2>
              <div className="snail-list-text">
                我們深知創作的快樂，於是我們特別重視，如何讓陶藝創作，更容易被一般人所接觸、學習。
                <br />
                除了實體課程，也特別推出許多鼓勵人們「在家做陶藝」的線上課程，與大家分享！
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <Link to="/CourseCategory/EMiddle">
                <div className="categorycard-pic catbackground1" id="card">
                  <p className="categorycard-Entitle">Elementary</p>
                  <p className="categorycard-Chtitle">初階課程</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/CourseCategory/EMiddle">
                <div
                  className="categorycard-pic catbackground2"
                  data-aos="fade-right"
                >
                  <p className="categorycard-Entitle">Middle-level</p>
                  <p className="categorycard-Chtitle">中階課程</p>
                </div>
              </Link>
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
                <div
                  className="categorycard-pic catbackground4"
                  data-aos="fade-right"
                >
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
