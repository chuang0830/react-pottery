import React from 'react'
function TableSmallNing() {
  return (
    <>
      {/* table */}
      <div className="container mt-5">
        <div className="row">
          <div className="cindy-table col-12 col-lg-8">
            <div className="tablestyle-title text-center">
              <span className="tablestyle-title-content">購物明細</span>
            </div>
            <table>
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
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 col-12">
            <div className="checkoutorder-title text-center mt-4">
              <span className="checkoutorder-title-content"> 訂單明細 </span>
            </div>
            <div className="orderstyle">
              <div className="d-flex justify-content-between">
                <span>小計</span>
                <span>1500</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>折扣</span>
                <span>-100</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>運費</span>
                <span>100</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>總計</span>
                <span>1500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TableSmallNing
