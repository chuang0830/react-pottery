// import React, { useState, useEffect, useMemo } from 'react'
// import {
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   Button,
//   NavDropdown,
// } from 'react-bootstrap'
// // 先安裝useScrollPosition勾子
// import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// import { NavLink } from 'react-router-dom'
// import MyNavbar from './MyNavbar'

// function SnailButton(props) {
//   // 兩個狀態切換
//   const [show, setShow] = useState(true)

//   useScrollPosition(({ prevPos, currPos }) => {
//     // 這裡可以監視目前的捲軸狀態
//     console.log(currPos.x)
//     console.log(currPos.y)
//     if (currPos.y < -1285) {
//       setShow(false)
//     } else {
//       setShow(true)
//     }
//   })
//   return (
//     <div className="row">
//       <div className="col">
//         <div
//           className="snailbtnline d-flex mb-7"
//           className={show ? 'snailbtnline' : 'snailbtnline-hide'}
//         >
//           <a href="#" className="snail-button mr-5">
//             價目表
//           </a>
//           <a href="#" className="snail-button mr-5">
//             詳細資料
//           </a>
//           <a href="#" className="snail-button mr-5">
//             更改取消
//           </a>
//           <a href="#" className="snail-button mr-5">
//             課程評價與學員作品
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default SnailButton
