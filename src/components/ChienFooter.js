import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTwitterSquare } from '@fortawesome/free-solid-svg-icons'
// import { faInstagramSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTelegram } from '@fortawesome/free-solid-svg-icons'

export const ChienFooter = () => (
  <>
    {/* footer */}
    <footer>
      <div className="chien-footer-top py-5 container-fluid">
        <div className="ch-footer-top">
          <div className="row p-3">
            <div className="col-6">
              <a className="chien-f-14 m-4 text-white" href="#">
                關於我們
              </a>
              <p className="chien-aboutus-content chien-f-14 mx-5 my-3">
                克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍急的河流，行動則是架在川上的橋樑。
              </p>
            </div>
            <div className="col-3">
              <a className="chien-f-14 m-4 text-white" href="#">
                聯絡我們
              </a>
              <p className="chien-contactus-subtitle chien-f-14 mx-5 mt-3 mb-0">
                E-Mail
              </p>
              <p className="chien-f-14 mx-5 text-white">contact@utsuwa.com</p>
              <p className="chien-contactus-subtitle chien-f-14 mx-5 mt-3 mb-0">
                Telephone
              </p>
              <p className="chien-f-14 mx-5 text-white">+886-908-000-000</p>
              <p className="chien-contactus-subtitle chien-f-14 mx-5 mt-3 mb-0">
                Office Address
              </p>
              <p className="chien-f-14 mx-5 text-white">
                2F., No. 390, Sec. 1, Fuxing S. Rd., Da’an Dist., Taipei City
                106, Taiwan (R.O.C.)
              </p>
            </div>
            <div className="col-3">
              <a className="chien-f-14 m-4 text-white" href="#">
                最新消息
              </a>
              <p className="chien-news-content chien-f-14 mx-5 mt-3 mb-1">
                克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍。
              </p>
              <p className="chien-f-12 mx-5 text-white">
                August, 25, 2018 | by Utsuwa
              </p>
              <p className="chien-news-content chien-f-14 mx-5 mt-3 mb-1">
                克雷洛夫曾經認為現實是此岸，理想是彼岸。中間隔著湍。
              </p>
              <p className="chien-f-12 mx-5 text-white">
                August, 25, 2018 | by Utsuwa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chien-footer-bottom py-3 container-fluid">
        <div className="ch-footer-bottom">
          <div className="row">
            <ul className="social-links-area nav">
              <li>
                <span className="chien-hidden-icon mx-3">
                  {/* <iFontAwesomeIcon icon={faFacebookSquare} /> */}
                </span>
              </li>
              <li>
                <span className="chien-hidden-icon mx-3">
                  {/* <iFontAwesomeIcon icon={faTwitterSquare} /> */}
                </span>
              </li>
              <li>
                <span className="chien-hidden-icon mx-3">
                  {/* <iFontAwesomeIcon icon={faInstagramSquare} /> */}
                </span>
              </li>
              <li>
                <span className="chien-hidden-icon mx-3">
                  {/* <iFontAwesomeIcon icon={faTelegram} /> */}
                </span>
              </li>
            </ul>
            <div className="mx-auto text-white copyright social-icon">
              Copyright © 2021 Utsuwa Inc.
            </div>
            <ul className="social-links-area nav">
              <li>
                <Nav.Link
                  as={NavLink}
                  to="/Facebook"
                  className="mx-3 chien-social-icon"
                  target="_blank"
                >
                  {/* <iFontAwesomeIcon icon={faFacebookSquare} /> */}
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  to="/Twitter"
                  className="mx-3 chien-social-icon"
                  target="_blank"
                >
                  {/* <iFontAwesomeIcon icon={faTwitterSquare} /> */}
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  to="/Instagram"
                  className="mx-3 chien-social-icon"
                  target="_blank"
                >
                  {/* <iFontAwesomeIcon icon={faInstagramSquare} /> */}
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={NavLink}
                  to="/Telegram"
                  className="mx-3 chien-social-icon"
                  target="_blank"
                >
                  {/* <iFontAwesomeIcon icon={faTelegram} /> */}
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    {/* footer */}
  </>
)

export default ChienFooter
