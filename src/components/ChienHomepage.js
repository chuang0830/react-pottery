import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ChienFooter from './ChienFooter'
import ChienPolicycard from './ChienPolicycard'

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
            <div className="chien-prod-img col-8">
              <img
                className="overflow-hidden w-100"
                src="./chien-images/main-1.png"
                alt
              />
            </div>
            <div className="chien-prod-cont col-4 my-auto">
              <div className="card-body">
                <h5 className="pb-4 chien-card-title chien-f-24">商品專區</h5>
                <p className="card-text py-4 chien-f-14">
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
                </p>
              </div>
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
            <div className="col-9 mx-auto mb-5 chien-lesson-img">
              <img
                className="overflow-hidden w-100"
                src="./chien-images/main-3.jpg"
                alt
              />
            </div>
            <div className="chien-lesson-cont col-9 m-auto">
              <div className="card-body px-0">
                <h5 className="pb-4 chien-card-title chien-f-24">手作課程</h5>
                <p className="card-text py-4 chien-f-14">
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
                </p>
              </div>
            </div>
          </div>
          {/* 手作課程 */}
          {/* 慈善競標 */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="row py-5 mb-5 chien-prod"
          >
            <div className="chien-bid-img col-8">
              <img
                className="overflow-hidden w-100"
                src="./chien-images/main-4.png"
                alt
              />
            </div>
            <div className="chien-bid-cont col-4 my-auto">
              <div className="card-body">
                <h5 className="pb-4 chien-card-title chien-f-24">慈善競標</h5>
                <p className="card-text py-4 chien-f-14">
                  克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
                </p>
              </div>
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

export default ChienHomepage
