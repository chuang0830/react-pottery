// mouse
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

// mouse
function Cursor2(props) {
  const cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (e) => {
    cursor.setAttribute(
      'style',
      'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
    )
  })

  document.addEventListener('click', () => {
    cursor.classList.add('expand')

    setTimeout(() => {
      cursor.classList.remove('expand')
    }, 500)
  })
  // **************************************************

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseenter', onMouseEnter)
    document.removeEventListener('mouseleave', onMouseLeave)
    document.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('mouseup', onMouseUp)
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const cursorClasses = classNames('cursor', {
    'cursor--clicked': clicked,
    'cursor--hidden': hidden,
    'cursor--link-hovered': linkHovered,
  })

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => setLinkHovered(true))
      el.addEventListener('mouseout', () => setLinkHovered(false))
    })
  }

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}
// mouse
// const Cursor = () => {
//   return <div className="cursor" />
// }

// ReactDOM.render(
//   <div className="App">
//     <Cursor />
//   </div>,
//   document.getElementById('root')
// )
export default Cursor2
