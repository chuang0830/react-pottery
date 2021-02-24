import React, { useState, useEffect } from 'react'
function RecentView(props) {
  // 課程--------------------------------------------------------------
  // State ------------------------------------------------------------
  const [myrecentview, setRecentView] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [myrecentviewDisplay, setMyRecentViewDisplay] = useState([])
  // function ----------------------------------------------------------
  function getRecentViewFromLocalStorage() {
    const newCourseCart = localStorage.getItem('utsuwacartrecentView') || '[]'
    setRecentView(JSON.parse(newCourseCart))
  }
  useEffect(() => {
    getRecentViewFromLocalStorage()
  }, [])
  useEffect(() => {
    let newMyrecentviewDisplay = []
    for (let i = 0; i < myrecentview.length; i++) {
      const index = newMyrecentviewDisplay.findIndex(
        (value) => value.sid === myrecentview[i].sid
      )
      if (index !== -1) {
        newMyrecentviewDisplay[index].amount += myrecentview[i].amount
      } else {
        const newCourseItem = { ...myrecentview[i] }
        newMyrecentviewDisplay = [...newMyrecentviewDisplay, newCourseItem]
      }
    }
    setMyRecentViewDisplay(newMyrecentviewDisplay.slice(-3))
  }, [myrecentview])

  return (
    <>
      {myrecentviewDisplay.map((itemrecentviews, index) => {
        console.log('itemrecentviews:', itemrecentviews)
        console.log('itemrecentviews.photo:', itemrecentviews.photo)
        return (
          <div className="mt-3 mb-3 col-lg-4 col-xl-4  col-md-6 col-6">
            <div className="winnie-card-content">
              <div className="winnie-card-img">
                <img
                  className="w-100"
                  src={`http://localhost:3008/winnie-images/${
                    JSON.parse(itemrecentviews.photo)[0]
                  }`}
                  alt=""
                />
              </div>
              <div className="winnie-card-name text-justify d-flex justify-content-between">
                <p>{itemrecentviews.product_name}</p>
                {/* <div>
                    <FaRegHeart className="far fa-heart mr-2" />
                    <FaShoppingCart />
                  </div> */}
              </div>
              <p className="winnie-recent-price">{itemrecentviews.price}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default RecentView
