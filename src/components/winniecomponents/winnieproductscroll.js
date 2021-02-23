import React from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(this.props.location.pathname, prevProps.location.pathname)
    console.log(this.props.location.pathname !== prevProps.location.pathname)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
      console.log(1111)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
