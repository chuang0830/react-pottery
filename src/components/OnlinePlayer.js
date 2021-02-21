import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class OnlinePlayer extends Component {
  render() {
    return (
      <ReactPlayer url="https://www.youtube.com/watch?v=HgzGwKwLmgM" playing />
    )
  }
}

export default OnlinePlayer
