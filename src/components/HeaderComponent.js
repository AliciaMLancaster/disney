import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Jumbotron,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Disney World</h1>
                <h2>The Happiest Place on Earth</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar className="navbar" dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/mickeyears.jpeg"
                height="30"
                width="30"
                alt="Logo"
              />
            </NavbarBrand>
            <Collapse navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="park-link" to="/park">
                    <i className="fa fa-list fa-lg" /> Parks
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
