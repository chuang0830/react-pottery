import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// import Calendar from 'rc-calendar'
// import 'rc-calendar/assets/index.css'
import { FaRegHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import cartHandler from './../utils/CartHandler'
import SnailButton from '../components/SnailButton'
import MyNavbar from '../components/MyNavbar'
import Sticky from 'react-sticky-el'
import Calendar from '../components/snailcomponents/Calendar'

function Experience() {
  //單選盒
  const [radiob, setRadiob] = useState('1')
  const [course1, setCourse1] = useState([])
  //const [dataLoading, setDataLoding] = useState(false)

  async function getCourse1FromServer1() {
    // 開啟載入指示
    //setDataLoading(true)

    // 連接的伺服器資料網址
    const url = `http://localhost:3000/course/json` + radiob

    //header格式設定為json格式
    const request1 = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log(url)
    const response1 = await fetch(request1)
    const data1 = await response1.json()
    console.log(data1)
    //設定資料給photos
    setCourse1(data1)
  }

  //一開始就會開始載入資料
  useEffect(() => {
    getCourse1FromServer1()
  }, [radiob])

  //每次users資料有變動就會X秒後關掉載入指示
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 1000)
  // }, [photos1])

  //載入圖示
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const testData1 = {
    sid: 1,
    product_name: '拉胚',
    category_id: 7,
    price: 5800,
    photo: '',
    introduction: '',
    time: '2021-03-20T16:00:00.000Z',
  }
  // 立即結帳-----------------------------------------------------------------
  const [mycoursecart, setMyCoursecart] = useState([])
  const updateCourseCartToLocalStorage = (item) => {
    const currentCart =
      JSON.parse(localStorage.getItem('utsuwacoursecart')) || []
    const index = currentCart.findIndex((v) => v.sid === item.sid)
    if (index > -1) {
      return
    } else {
      currentCart.push(item)
    }
    localStorage.setItem('utsuwacoursecart', JSON.stringify(currentCart))
    setMyCoursecart(currentCart)
  }
  //-----------------------------------------------------------------------------
  return (
    <>
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
              <li className="breadcrumb-item">
                <Link to="/CourseCategory">課程類別</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                DIY體驗課程
              </li>
            </ol>
          </nav>
          <div>
            <Calendar />
          </div>
          {/* 主標題 */}
          <div className="winnie-title ">
            <h1>DIY課程體驗</h1>
          </div>
          <div className="winnie-text mb-11">
            <p>
              還記得第一次捏陶土就像玩泥巴一樣的有趣觸感嗎？利用創作力創作出的陶土器皿因為其溫潤的特質而顯得獨一無二，無論是陶杯、陶盤還是陶碗，除了實用性之外，還多了一分溫暖之感擁有多年教學經驗的UTSUWA創藝陶藝工坊，推出了一系列輕鬆有趣的陶土課程。透過專業老師的引導，您將學會利用陶土的特性做出你自己最喜歡的陶製品，更能在揉、捏、拍、壓的過程中，療癒自己甚至愛上捏陶的樂趣！
              <br />
              小朋友也非常適合這樣的體驗課程喔！透過手作的揉捏有充分的觸覺感受，視覺上的
              3D
              概念也能透過陶土捏塑學習，捏陶還可以直接的引導孩子感受數量、形體和造形的變化，更可以訓練孩子手部的各種大小肌肉、手眼協調和創造力。
              <br />
            </p>
            {/* 更多按鈕 */}
            <button className="cindy-check more" href="#">
              查看更多
              <i className="fas fa-angle-double-down" />
            </button>
          </div>
        </div>
        {/* 按鈕列 */}
        <Sticky topOffset={0}>
          <MyNavbar />
        </Sticky>
        <div className="container EX-container">
          {/* 單選Radio -----------------------------*/}
          <div className="row">
            <div className="col-8">
              <div className="radiobox-list">
                <div
                  className="course-title"
                  id="coursestyle"
                  name="coursestyle"
                >
                  樣式選擇
                </div>
                <div className="radiobox">
                  <input
                    id="1"
                    name="1"
                    type="radio"
                    value="1"
                    checked={radiob === '1'}
                    onChange={(e) => {
                      console.log(radiob)
                      setRadiob('1')
                    }}
                  />{' '}
                  <label for="1">療癒手捏陶</label>
                </div>

                <div className="radiobox">
                  <input
                    id="2"
                    name="2"
                    type="radio"
                    value="2"
                    checked={radiob === '2'}
                    onChange={(e) => {
                      console.log('按2到囉')
                      setRadiob('2')
                    }}
                  />{' '}
                  <label for="2">彩繪陶瓷容器</label>
                </div>
                <div className="radiobox">
                  <input
                    id="3"
                    name="3"
                    type="radio"
                    value="{radiob}"
                    checked={radiob === '3'}
                    onChange={(e) => {
                      console.log('按3到囉')
                      setRadiob('3')
                    }}
                  />{' '}
                  <label for="3">壓紋拓印陶盤</label>
                </div>
              </div>

              {/* 單選Radio -----------------------------*/}
            </div>
            <div className="col-4">
              {/* 月曆 */}
              <div className="experience-calendar mt-10">
                我是日曆框框
                {/* 資料庫資料 */}
                <div>
                  {course1.length &&
                    course1.map((value, index) => {
                      return (
                        <tr key={value.sid}>
                          <td>{value.time[0]}</td>
                        </tr>
                      )
                    })}
                </div>
                抓取單選日期項目
                <div className="snail-radioitem-text">{radiob}</div>
              </div>
              <button
                className="ninginfo-btn"
                onClick={() => {
                  updateCourseCartToLocalStorage({
                    ...testData1,
                    amount: 1,
                  })
                }}
              >
                立即結帳
              </button>
            </div>
          </div>

          {/* 價目表priceline */}
          <div className="container style={position:relative}">
            <div className="row">
              <div className="col-8"></div>
            </div>
            {/* //文字內容 */}
            <div className="row">
              <div className="col-lg-12">
                <div className="course-card-content">
                  <div className="course-title" id="content" name="content">
                    體驗包含
                  </div>
                  <div className="winnie-text">
                    陶藝技巧說明、練習
                    <br />
                    深入淺出地分享陶藝知識：陶杯、花器、陶盤等創作發想
                    <br />
                    自由創作陶藝，1 ~ 3 件 *燒窯費另計
                    <br />
                    建議先構想欲創作作品，現場可與老師討論 可選擇
                    捏陶或拉坯，但拉坯需時間練習，老師會從旁協助
                    <br />
                    精美手作下午茶一份，與好友共度美好的午茶創作時光
                    <br />
                    <div className></div>
                    <br />
                    <div className="ex-img">
                      <img
                        src="http://localhost:3008/snail-imgs/EX2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ex-img">
                      <img
                        src="http://localhost:3008/snail-imgs/EX3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="course-card-content">
                  <div
                    className="course-title"
                    id="description"
                    name="description"
                  >
                    詳細說明
                  </div>
                  <div className="winnie-text">
                    體驗時間：2 小時，依現場狀況為主
                    <br />
                    活動對象：13 歲以上
                    <br />
                    活動地點：台北市開封街 2 段 62 - 5 號<br />
                    {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.7512789200542!2d121.5430113679021!3d25.033900457895346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH562W5pyDIOaVuOS9jeaVmeiCsueglOeptuaJgCDmlbjkvY3kurrmiY3ln7nogrLkuK3lv4M!5e0!3m2!1szh-TW!2stw!4v1604021636624!5m2!1szh-TW!2stw"
                      width="100%"
                      height={200}
                      frameBorder={5}
                      style={{ border: 5 }}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex={0}
                    /> */}
                    <br />
                    交通方式： 【大眾運輸】捷運西門町站 6 號出口，步行約 8 分鐘
                    <br />
                    費用內含：師資 / 材料費 / 場地費 /
                    下午茶組（飲品、點心各一份）
                    <br />
                    費用不內含：燒窯費
                    <br />
                    活動成行：一人成團
                    <br />
                    注意事項：
                    <br />
                    1. 燒窯費計費方式：物件體積（單位為公分）x
                    0.21（元）；按件計費，將於現場收取費用（燒窯時若發生碎裂除外）
                    <br />
                    2. 拉坯需時間學習，一堂課比較難完成，老師會從旁協助體驗
                    <br />
                    3. 若兒童想單獨上課，請至此頁面報名
                    <br />
                    4. 若大人與小孩同時報名體驗者，建議選擇平日時段，可一同上課
                    <br />
                    5. 作品燒製完成後將另行通知體驗者自行前往領取，通知後請於 2
                    個月內領取；若超過 2 個月未領回者，作品將以福利品售出
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="course-card-content">
                  <div className="course-title" id="cancel" name="cancel">
                    取消變更
                  </div>
                  <div className="winnie-text">
                    取消辦法
                    <br />
                    出發日前 7
                    日前（不含出發日）通知取消訂單（含整筆取消及部分人數取消），將全額退回款項。
                    <br />
                    出發日前 6 日至前 4
                    日內（不含出發日）通知取消訂單（含整筆取消及部分人數取消），將扣除原價金額的
                    50% 手續費用。
                    <br />
                    出發日前 3
                    日至當日內不接受取消訂單（含整筆取消及部分人數取消），並不予退回款項。
                    <br />
                    於活動中如因非可究責主辦單位之因素中止參與活動，將不予退回款項。
                    <br />
                    如因天災等不可抗力之因素取消活動，
                    <br />
                    Niceday 將主動聯繫延期或退款。
                    <br />
                    <br />
                    <br />
                    更改辦法
                    <br />
                    出發日前 6 日至前 4
                    日內（不含出發日）可更改日期。但更改僅限一次，並僅限於同一主辦單位之活動，如更改後產生差價，費用多退少補；經改期後的活動恕不接受取消。
                    <br />
                    出發日前 3
                    日至當日內不接受更改日期；如欲增加體驗人數，須至少於出發日前
                    1 天詢問 Niceday。
                    <br />
                    如臨時有事不克前往體驗，建議您於出發日前 3
                    日內（不含出發日）將名額轉讓，否則恕無法退款；但請務必告知
                    Niceday 代理參與者的姓名及聯絡資訊。
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 課程評價與學員作品 */}
          <div className="course-title" id="work" name="work">
            課程評價與學員作品
          </div>
          <div className="course-title-sm">課程評價</div>
          <div className="row">
            {/* 留言板 */}
            <div className="col-lg-12">
              {/* 留言1 */}
              <div className="message-card border-buttom">
                <div className="avatar-photo">{/* <img src alt /> */}</div>
                <div className="message-card-content d-flex justify-content-start">
                  <span>PAPAYA</span>&nbsp;&nbsp;
                  <span>2018-05-19</span>&nbsp;&nbsp;
                  <span>5star</span>
                </div>
                <div className="message-card-content">
                  <p className="snail-message-text">
                    插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息
                  </p>
                </div>
              </div>
              {/* 留言2 */}
              <div className="message-card border-buttom">
                <div className="avatar-photo">{/* <img src alt /> */}</div>
                <div className="message-card-content d-flex justify-content-start">
                  <span>PAPAYA</span>&nbsp;&nbsp;
                  <span>2018-05-19</span>&nbsp;&nbsp;
                  <span>5star</span>
                </div>
                <div className="message-card-content">
                  <p className="snail-message-text">
                    插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息插入體驗打造上漲答案物理懂得，完了根本遵守高效，國務院給予最為有一些書記幫助警察自身評論尋求台北百姓消息
                  </p>
                </div>
              </div>
              {/* 更多按鈕 */}
              <button className="cindy-check" href="#">
                查看更多
                <i className="fas fa-angle-double-down" />
              </button>
            </div>
          </div>
          {/* 學員作品 */}
          <div className="work-card">
            <div className="course-title-sm">學員作品</div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="portfolio-box">
                  {/* <img src="./img/course-work1.jpg" alt /> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="portfolio-box">
                  {/* <img src="./img/course-work2.jpg" alt /> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="portfolio-box">
                  {/* <img src="./img/course-work1.jpg" alt /> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="portfolio-box">
                  {/* <img src="./img/course-work2.jpg" alt /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="course-title-sm">
            留言評價
            <div className="my-message-card">
              <div className="course-title-t">DIY體驗</div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlTextarea1 "
                      className="snail-inputmessage-text"
                    >
                      留言
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={2}
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <button class="cindy-btn">上傳圖片</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <button
              className="ninginfo-btn"
              onClick={() => {
                updateCourseCartToLocalStorage({
                  ...testData1,
                  amount: 1,
                })
              }}
            >
              立即結帳
            </button>
          </div>
        </div>
      </>
    </>
  )
}

export default Experience
