import React, { useState, useEffect } from 'react'
import { Route, withRouter, Switch, Link } from 'react-router-dom'
import PlayMessage from './PlayMessage'

function PlayPage(props) {
  // console.log(props.match.pathname)
  const url = props.match.url
  const path = props.match.path

  return (
    <>
      <Link to={`${url}/playmessage`}>到課程內容</Link>

      <Switch>
        <Route exact path={path}>
          <PlayMessage />
        </Route>
        <Route path={`${url}/playmessage`}>
          <PlayMessage />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(PlayMessage)
