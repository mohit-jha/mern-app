import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import Logout from "./auth/Logout";
import { connect } from "react-redux";
import PropTypes, { object } from "prop-types";
import { NavLink } from "react-router-dom";

class Appnavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  hanldClick = () => {
    console.log('hel;llo');
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
      
        <NavItem>
          <NavLink exact activeClassName="menu" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact activeClassName="menu" to="/map">
            Add Project
          </NavLink>
        </NavItem>
        <NavItem>
          <Logout  onClick={this.hanldClick} />
        </NavItem>
        <NavItem>
          {/* <span className="navbar-text "> */}
            <strong style={{color:'#CCFFE6'}}> {user ? ` ${user.name}` : ""} </strong>
          {/* </span> */}
        </NavItem>
    
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink exact activeClassName="menu" to="/Register">
          Register
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink exact activeClassName="menu" to="/Login">
          Login
          </NavLink>
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className=" w-100 mb-5">
          {/* <Container> */}
            <NavbarBrand href="/">Project list</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto " navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Appnavbar);
