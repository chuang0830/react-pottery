import React from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(this.props.location.pathname, prevProps.location.pathname)
    //console.log(this.props.location.pathname !== prevProps.location.pathname)
    if (
      //如果網址列變為this則直接return，不觸發scrollTo
      this.props.location.pathname ===
      '/CourseCategory/OnlineCourse/PlayPage/playcontent'
    )
      return
    if (
      //如果網址列變為this則直接return，不觸發scrollTo
      this.props.location.pathname === '/CheckOutP3'
    ) {
      window.scrollTo(0, 1500)
    }
    if (
      this.props.location.pathname ===
      '/CourseCategory/OnlineCourse/PlayPage/playmessage'
    )
      return
    if (
      this.props.location.pathname ===
      '/CourseCategory/OnlineCourse/PlayPage/playreview'
    )
      return
    if (this.props.location.pathname !== prevProps.location.pathname) {
      //如果跳轉頁面則scrollTo(0, 0)
      window.scrollTo(0, 0)
      console.log('scrollToTOP測試')
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
