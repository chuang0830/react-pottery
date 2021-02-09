import React from 'react'

function RecentView(props) {
  return (
    <>
      <div className="winnie-p-wrap d-flex">
        {/* 第一個 */}
        <div className="col-lg-4 col-md-6">
          <div className="winnie-card-content">
            <div className="winnie-card-img">
              <img
                className="w-100"
                src="http://localhost:3008/ning-imgs/1.jpg"
                alt=""
              />
            </div>
            <div className="winnie-card-name text-justify d-flex justify-content-between" />
          </div>
        </div>
        {/* 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="winnie-card-content">
            <div className="winnie-card-img">
              <img
                className="w-100"
                src="http://localhost:3008/ning-imgs/1.jpg"
                alt=""
              />
            </div>
            <div className="winnie-card-name text-justify d-flex justify-content-between" />
          </div>
        </div>
        {/* 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="winnie-card-content">
            <div className="winnie-card-img">
              <img
                className="w-100"
                src="http://localhost:3008/ning-imgs/1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecentView
