import React from 'react'

export const ChienMain = () => (
  <>
    <main className="my-5">
      <div className="container chien-main-bg">
        {/* 首頁小標 */}
        <div className="row py-5 mb-5">
          <div className="col-7 card-body">
            <h5 className="pb-4 chien-card-title chien-f-24">
              色彩點綴你的日常
            </h5>
            <p className="card-text py-4 chien-f-14">
              克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
            </p>
          </div>
          <div className="col-5 position-relative">
            <img className="chien-bg" src="./chien-images/chien-bg.svg" alt />
          </div>
        </div>
        {/* 首頁小標 */}
        {/* 商品專區 */}
        <div className="row py-5 mb-5 chien-prod">
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
          <div className="col-5 chien-main-2-1" />
          <div className="col-7 chien-main-2-2" />
        </div>
        <div className="row pb-5 mb-5">
          <div className="col-7 chien-main-2-3" />
          <div className="col-5 chien-main-2-4" />
        </div>
        {/* 四張圖 */}
        {/* 手作課程 */}
        <div className="row py-5 mb-5">
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
        <div className="row py-5 mb-5 chien-prod">
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
  </>
)

export default ChienMain
