import React, { Component } from 'react';
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import MenuItem from "react-bootstrap/es/MenuItem";
import {NavLink} from "react-router-dom";
import Carousel from "react-bootstrap/es/Carousel";
import chandra1 from "./images/chandra1.jpg";
import chandra2 from "./images/chandra2.jpg";
import chandra3 from "./images/chandra3.jpg";
import chandra4 from "./images/chandra4.jpg";
import jace1 from "./images/jace1.jpg";
import jace2 from "./images/jace2.jpg";
import jace3 from "./images/jace3.jpg";
import jace4 from "./images/jace4.jpg";
import jace5 from "./images/jace5.jpg";
import jace6 from "./images/jace6.jpg";
import jace7 from "./images/jace7.jpg";
import gideon1 from "./images/gideon1.jpg";
import gideon2 from "./images/gideon2.jpg";
import gideon3 from "./images/gideon3.jpg";
import gideon4 from "./images/gideon4.jpg";
import gideon5 from "./images/gideon5.jpg";
import liliana1 from "./images/liliana1.jpg";
import liliana2 from "./images/liliana2.jpg";
import liliana3 from "./images/liliana3.jpg";
import liliana4 from "./images/liliana4.jpg";
import elspeth1 from "./images/elspeth1.jpg";
import dack1 from "./images/dack1.jpg";
import nahiri1 from "./images/nahiri1.jpg";
import venser1 from "./images/venser1.jpg";
import nissa1 from "./images/nissa1.jpg";
import nissa2 from "./images/nissa2.jpg";
import nissa3 from "./images/nissa3.jpg";

class Heading extends Component {
  render() {
    return (
      <header>
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <NavLink to="/">Academy Game</NavLink>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <NavItem componentClass={NavLink} href="/GamePlay" to="/GamePlay" eventKey={1}>GamePlay</NavItem>
                      <NavItem componentClass={NavLink} href="/Lore" to="/Lore" eventKey={2}>Story & Lore</NavItem>
                      <NavDropdown eventKey={3} title="Other Formats" id="basic-nav-dropdown">
                          <MenuItem eventKey={3.1} componentClass="p" title="Coming Soon!">Faction War</MenuItem>
                          <MenuItem eventKey={3.2} componentClass="p" title="Coming Soon!">Single Player Standard</MenuItem>
                          <MenuItem eventKey={3.3} componentClass="p" title="Coming Soon!">RPG</MenuItem>
                          <MenuItem eventKey={3.4} componentClass="p" title="Coming Soon!">Arcane Duel</MenuItem>
                          <MenuItem eventKey={3.5} componentClass="p" title="Coming Soon!">Sorcerer's Land War</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={3.6} componentClass="p" title="Coming Soon!">Master Format</MenuItem>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Carousel controls={false}>
              <Carousel.Item>
                  <img alt="Dominaria" src={jace1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={gideon1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={nissa1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={chandra1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={venser1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={liliana1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={jace2} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={jace3} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={chandra2} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={gideon2} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={liliana2} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={nissa2} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={dack1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={nahiri1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={jace4} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={chandra3} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={liliana3} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={gideon3} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={jace5} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={elspeth1} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={liliana4} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={jace6} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={chandra4} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={gideon4} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Dominaria" src={nissa3} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Mountains" src={jace7} className="imgCover" />
              </Carousel.Item>
              <Carousel.Item>
                  <img alt="Zendikar" src={gideon5} className="imgCover" />
              </Carousel.Item>
          </Carousel>
      </header>
    );
  }
}

export default Heading;
