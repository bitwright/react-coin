import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import Modal from "./Modal";
import "./Header.css";

class Header extends Component {
  state = { openModal: false };

  toggleModal() {
    this.setState({ openModal: !this.state.openModal });
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <img
                src={logo}
                height="32"
                width="32"
                className="app-logo"
                alt="App Logo"
                style={{ margin: "0 10px 0 15px" }}
              />
              <span style={{ fontWeight: "700" }}>ReactCoin</span>
            </Link>
          </div>

          <div className="nav-right">
            <span className="nav-item">
              <button
                className="button is-dark"
                onClick={this.toggleModal.bind(this)}
                style={{ marginRight: "-15px" }}
              >
                Huh?
              </button>
            </span>
            <span className="nav-item">
              <a
                className="is-size-3"
                target="_blank"
                href="https://github.com/hunterbwright/react-coin"
                rel="noopener noreferrer"
                style={{ marginRight: "15px" }}
              >
                <i className="fa fa-github" aria-label="Github" />
              </a>
            </span>
          </div>
        </nav>

        {this.state.openModal && (
          <Modal toggleModal={this.toggleModal.bind(this)} />
        )}
      </div>
    );
  }
}

export default Header;
