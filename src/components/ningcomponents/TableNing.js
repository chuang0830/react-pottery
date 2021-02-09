import React from 'react'

function TableNing(props) {
  return (
    <>
      <div className="cindy-table col">
        <table>
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">商品名稱</th>
              <th scope="col">金額</th>
              <th scope="col">數量</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="http://localhost:3008/ning-imgs/s.1jpg"
                  height={70}
                  alt=""
                />
              </td>
              <td>productname</td>
              <td>690</td>
              <td className="d-flex justify-content-center">
                {/* 計數器 */}
                <div className="chang-count-border-btn col-4 d-flex flex-row justify-content-center">
                  <button className="chang-count-btn">-</button>
                  <button className="chang-count-btn">1</button>
                  <button className="chang-count-btn">+</button>
                </div>
              </td>
              <td>
                <button>
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
            <tr>
              <td>
                <img
                  src="http://localhost:3008/ning-imgs/s.1jpg"
                  height={70}
                  alt=""
                />
              </td>
              <td>productname</td>
              <td>690</td>
              <td className="d-flex justify-content-center">
                {/* 計數器 */}
                <div className="chang-count-border-btn col-4 d-flex flex-row justify-content-center">
                  <button className="chang-count-btn">-&nbsp;</button>
                  <button className="chang-count-btn">1</button>
                  <button className="chang-count-btn">&nbsp;+</button>
                </div>
              </td>
              <td>
                <button>
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
          </tbody>
        </table>
      </div>
    </>
  )
}
export default TableNing
