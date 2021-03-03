import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ChienFooter from './ChienFooter'
import ChienPolicycard from './ChienPolicycard'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function ChienHomepage() {
  //AOS套件效果
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      {/* banner */}
      <banner>
        <div class="chien-slider">
          <div class="chien-slide1"></div>
          <div class="chien-slide2"></div>
          <div class="chien-slide3"></div>
          <div class="chien-slide4"></div>
        </div>
      </banner>

      {/* banner */}
      <main className="my-5">
        <div className="container chien-main-bg">
          {/* 首頁小標 */}
          <div className="row py-5 mb-5">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="col-7 card-body"
            >
              <h5 className="pb-4 chien-card-title chien-f-24">
                色彩點綴你的日常
              </h5>
              <p className="card-text py-4 chien-f-14">
                隨著人們生活品質的提升，人們對於食器的定義，不再只是吃飯用具，更是生活道具，簡單的巧思搭配各式器皿，就能為空間營造出不可思議的變化。
              </p>
            </div>
            <div className="col-5 position-relative">
              <img className="chien-bg" src="./chien-images/chien-bg.svg" alt />
            </div>
          </div>
          {/* 首頁小標 */}
          {/* 商品專區 */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="row py-5 mb-5 chien-prod"
          >
            <Nav.Link
              as={NavLink}
              to="/products"
              onClick={function (event) {
                ChienClear()
                Chiencolor()
              }}
              className="chien-prod-img col-8"
            >
              <img
                className="overflow-hidden w-100 chien-box-shadow"
                src="./chien-images/main-1.png"
                alt
              />
            </Nav.Link>
            <div className="chien-prod-cont col-4 my-auto">
              <Nav.Link
                as={NavLink}
                to="/products"
                onClick={function (event) {
                  ChienClear()
                  Chiencolor()
                }}
                className="card-body"
              >
                <h5 className="pb-4 chien-card-title chien-f-24">商品專區</h5>
                <p className="card-text py-4 chien-f-14">
                  看到日本對食器使用的多元生活文化，不僅是吃飯用具，更是生活道具，以巧思搭配各式器皿，就能為空間營造出不可思議的變化。因此我們從日本用心挑選每項商品，傳達食器美學精神，也希望客人能遇見讓自己怦然心動的食器。多樣化的風格商品，讓家中餐桌的擺盤更為有趣與食器相處每一天，都有著滿滿的幸福感。
                </p>
              </Nav.Link>
            </div>
          </div>
          {/* 商品專區 */}
          {/* 四張圖 */}
          <div className="row pt-5">
            <div data-aos="fade-right" className="col-5 chien-main-2-1" />
            <div data-aos="fade-left" className="col-7 chien-main-2-2" />
          </div>
          <div className="row pb-5 mb-5">
            <div data-aos="fade-right" className="col-7 chien-main-2-3" />
            <div data-aos="fade-left" className="col-5 chien-main-2-4" />
          </div>
          {/* 四張圖 */}
          {/* 手作課程 */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="row py-5 mb-5"
          >
            <Nav.Link
              as={NavLink}
              to="/CourseCategory"
              onClick={function (event) {
                ChienClear()
                Chiencolor()
              }}
              className="col-9 mx-auto mb-5 chien-lesson-img"
            >
              <img
                className="overflow-hidden w-100 chien-box-shadow"
                src="./chien-images/main-3.jpg"
                alt
              />
            </Nav.Link>
            <div className="chien-lesson-cont col-9 m-auto">
              <Nav.Link
                as={NavLink}
                to="/CourseCategory"
                onClick={function (event) {
                  ChienClear()
                  Chiencolor()
                }}
                className="card-body px-0"
              >
                <h5 className="pb-4 chien-card-title chien-f-24">手作課程</h5>
                <p className="card-text py-4 chien-f-14">
                  透過專業老師的引導，您將學會利用陶土的特性做出你自己最喜歡的陶製品，更能在揉、捏、拍、壓的過程中，療癒自己甚至愛上捏陶的樂趣！我們深知創作的快樂，於是我們特別重視，如何讓陶藝創作，更容易被一般人所接觸、學習。除了實體課程，也特別推出許多鼓勵人們「在家做陶藝」的線上課程，與大家分享！
                </p>
              </Nav.Link>
            </div>
          </div>
          {/* 手作課程 */}
          {/* 慈善競標 */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="row py-5 mb-5 chien-prod"
          >
            <Nav.Link
              as={NavLink}
              to="/Changbidindex"
              onClick={function (event) {
                ChienClear()
                Chiencolor()
              }}
              className="chien-bid-img col-8"
            >
              <img
                className="overflow-hidden w-100 chien-box-shadow"
                src="./chien-images/main-4.png"
                alt
              />
            </Nav.Link>
            <div className="chien-bid-cont col-4 my-auto">
              <Nav.Link
                as={NavLink}
                to="/Changbidindex"
                onClick={function (event) {
                  ChienClear()
                  Chiencolor()
                }}
                className="card-body"
              >
                <h5 className="pb-4 chien-card-title chien-f-24">慈善競標</h5>
                <p className="card-text py-4 chien-f-14">
                  希望提供陶藝教學，一個方便、溫暖的創作空間，採取自由創作模式，不限定課程主題與作品數量，只要心裡有想法，老師都會指導適合的成型方式，協助學員完成自己作品！
                </p>
              </Nav.Link>
            </div>
          </div>
          {/* 慈善競標 */}
        </div>
      </main>
      <ChienPolicycard />
      <div>
        <div className="chien-footer-bg position-relative">
          {/* 頁尾 */}
          <div className="position-absolute fixed-bottom">
            <ChienFooter />
          </div>
        </div>
      </div>
    </>
  )
}

function ChienClear() {
  document
    .querySelectorAll('input[id=chien-nav-toggle]')
    .forEach((el) => (el.checked = false))
}

function Chiennocolor() {
  var logopath = document.getElementsByClassName('cls-2')
  for (var i = 0; i < logopath.length; i++) {
    logopath[i].classList.add('d-none')
  }
  var chienhambar = document.getElementsByClassName('chien-ham-bar')
  for (var i = 0; i < chienhambar.length; i++) {
    chienhambar[i].style.background = '#92b6ba'
  }
  document.getElementById('chien-navbar-icon-member').style.color = '#92b6ba'
  document.getElementById('chien-navbar-icon-cart').style.color = '#92b6ba'
}

function Chiencolor() {
  var logopath = document.getElementsByClassName('cls-2')
  for (var i = 0; i < logopath.length; i++) {
    logopath[i].classList.remove('d-none')
  }
  var chienhambar = document.getElementsByClassName('chien-ham-bar')
  for (var i = 0; i < chienhambar.length; i++) {
    chienhambar[i].style.background = '#fff'
  }
  document.getElementById('chien-navbar-icon-member').style.color = '#fff'
  document.getElementById('chien-navbar-icon-cart').style.color = '#fff'
}

export default ChienHomepage
