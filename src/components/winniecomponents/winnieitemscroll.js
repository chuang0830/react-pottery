import React from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方
class ScrollToItem extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(this.props.location, prevProps.location)
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 1950)
      
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToItem)
