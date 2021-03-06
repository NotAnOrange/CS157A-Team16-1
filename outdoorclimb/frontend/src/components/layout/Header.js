import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isExplorerAuthenticated, isAuthenticated, user } = this.props.auth;

    const explorerLinks = (
      <ul className="navbar-nav mc-auto">
        <li className="navitem">
          <Link to="/addpark" className="nav-link">
            Add Park
          </Link>
        </li>
        <li className="navitem">
          <Link to="/addroute" className="nav-link">
            Add Route
          </Link>
        </li>
      </ul>
    );

    const userLinks = (
      <ul className="navbar-nav mc-auto">
        <li className="navitem">
          <Link to="/parksbrowse" className="nav-link">
            Browse Parks
          </Link>
        </li>
      </ul>
    );

    const logoutLink = (
      <ul className="navbar-nav ml-auto">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ``}</strong>
        </span>
        <li className="navitem">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="navitem">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="navitem">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Outdoor Climbing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isExplorerAuthenticated ? explorerLinks : null}
            {isAuthenticated ? userLinks : null}
            {isAuthenticated ? logoutLink : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { logout })(Header);
