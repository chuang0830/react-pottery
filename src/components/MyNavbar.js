import React, { useState, useEffect } from 'react'

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

// 用react-scroll的連結元件
import { Link } from 'react-scroll'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
        z-index="9998"
        position="fixed"
      >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-5 snailbtnline">
            {/* 用name對應to */}
            <li className="nav-item snail-button">
              <Link
                href="#coursestyle"
                to="coursestyle"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                樣式選擇
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#content"
                to="content"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                體驗包含
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#description"
                to="description"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                詳細說明
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#cancel"
                to="cancel"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                取消變更
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#work"
                to="work"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                課程評價與學員作品
              </Link>
            </li>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
