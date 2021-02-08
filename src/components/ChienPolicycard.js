import React from 'react'

export const ChienPolicycard = () => (
  <>
    {/* 退換貨政策 */}
    <policycard>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="h-100">
              <div className="card-title">
                <img
                  src="./chien-images/car.png"
                  className="w-25 card-img-top rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="pb-4 chien-card-title text-center chien-f-24">
                  關於配送
                </h5>
                <p className="card-text p-4 chien-f-12">
                  由於寄送地區・下訂時間的不同， 在本網站下訂完成後，
                  商品將會在2～4天內到貨。
                  寄送的可能時間可以指定，因此請在購物時先行選擇。
                  運費統一為新台幣NT$ 90。 單筆訂單金額合計NT$
                  3,000以上時免運費。
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100">
              <div className="card-title">
                <img
                  src="./chien-images/bowl.png"
                  className="w-25 card-img-top rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="pb-4 chien-card-title text-center chien-f-24">
                  關於退貨
                </h5>
                <p className="card-text p-4 chien-f-12">
                  退貨必須符合以下所有＜退貨條件＞
                  ・於商品到達「7日內」商品，並與我們聯繫退貨服務。
                  ・以本公司判斷為基準，符合「未使用商品」。
                  ・需保留所有與商品一同到貨附屬商品、箱子等商品
                  ・於商品到達簽收後「10日內」寄回之商品。
                  ・頁面中記載「不可退貨」商品，不得退貨。
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100">
              <div className="card-title">
                <img
                  src="./chien-images/dollar.png"
                  className="w-25 card-img-top rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="pb-4 chien-card-title text-center chien-f-24">
                  關於付款
                </h5>
                <p className="card-text p-4 chien-f-12">
                  本網站提供「信用卡付款」、「便利超商先付款」、 「貨到付款」。
                  請注意在確認購買後將無法變更。 【信用卡付款】
                  可以使用VISA、MASTER和JCB。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </policycard>
    {/* 退換貨政策 */}
  </>
)

export default ChienPolicycard
