import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'reactstrap'
import { logout } from '../../actions/authAction'
import PropTypes from 'prop-types';
import { Link, Redirect } from "react-router-dom";

class Logout extends Component {

    state={
        check:true
    }
    static propTypes = {
        logout:PropTypes.func.isRequired
    }
    
    
    render() {
        return (
           <Fragment>
               <Link onClick={this.props.logout} to='/' >
                   Logout
               </Link>
           </Fragment>
        )
    }
}

export default connect(
    null,
    { logout }

)(Logout);