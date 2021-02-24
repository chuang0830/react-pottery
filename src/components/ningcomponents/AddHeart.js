import React, { useState, useEffect } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

function AddHeart(props) {
  // style ------------------------------------------------------------
  const style = {
    color: 'primary',
    fontSize: 24,
  }

  // 課程--------------------------------------------------------------
  // State ------------------------------------------------------------
  const [myaddheart, setAddHeart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [myaddheartDisplay, setAddHeartDisplay] = useState([])
  // function ----------------------------------------------------------
  function getAddHeartFromLocalStorage() {
    const newAddCart = localStorage.getItem('utsuwacartaddheart') || '[]'
    setAddHeart(JSON.parse(newAddCart))
  }
  useEffect(() => {
    getAddHeartFromLocalStorage()
  }, [])
  useEffect(() => {
    let newMyaddheartDisplay = []
    for (let i = 0; i < myaddheart.length; i++) {
      const index = newMyaddheartDisplay.findIndex(
        (value) => value.sid === myaddheart[i].sid
      )
      if (index !== -1) {
        newMyaddheartDisplay[index].amount += myaddheart[i].amount
      } else {
        const newAddHeartItem = { ...myaddheart[i] }
        newMyaddheartDisplay = [...newMyaddheartDisplay, newAddHeartItem]
      }
    }
    setAddHeartDisplay(newMyaddheartDisplay)
  }, [myaddheart])
  //移除整個物件
  function removeAddHeart(itemaddheart) {
    const index = JSON.parse(localStorage.getItem('utsuwacartaddheart')) || []
    // 拿掉選取的物件
    const currentAddheart = index.filter((v) => v.sid !== itemaddheart.sid)
    localStorage.setItem('utsuwacartaddheart', JSON.stringify(currentAddheart))
    // 設定資料
    setAddHeart(currentAddheart)
  }

  return (
    <>
      <div className="row">
        <div className="cindy-table col border-bottom-0">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">商品名稱</th>
                <th scope="col">金額</th>
                <th scope="col">取消收藏</th>
              </tr>
            </thead>
            <tbody>
              {myaddheartDisplay.map((itemaddheart, index) => {
                return (
                  <tr>
                    <td>
                      <img
                        // className="w-100"
                        src={`http://localhost:3008/winnie-images/${
                          JSON.parse(itemaddheart.photo)[0]
                        }`}
                        alt=""
                        srcset=""
                        width="150"
                      />
                    </td>
                    <td> {itemaddheart.product_name}</td>
                    <td> {itemaddheart.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          removeAddHeart(itemaddheart)
                        }}
                      >
                        <svg
                          id="noun_Delete_34719"
                          xmlns="http://www.w3.org/2000/svg"
                          width={23}
                          height={20}
                          viewBox="0 0 19.111 15.884"
                        >
                          <path
                            id="Path_54"
                            data-name="Path 54"
                            d="M-134.247-16.515a21.159,21.159,0,0,0-9.085,3.9,32.518,32.518,0,0,0-5.145-3.443,4.281,4.281,0,0,0-3.693,0c-1.108.468-1.108,1.94,0,2.141a28.986,28.986,0,0,1,6.432,3.25,30.736,30.736,0,0,0-5.129,5.932,3.261,3.261,0,0,0,0,3.346c.517,1,2.142,1,2.363,0A25.964,25.964,0,0,1-143.4-8.944c5.67,4.585,8.089,9.6,7.919,7.942-.763-4.035-3.28-7.384-5.9-9.893C-136.849-14.922-132.616-16.652-134.247-16.515Z"
                            transform="translate(153.001 16.522)"
                            fill="#fcaa3e"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default AddHeart
