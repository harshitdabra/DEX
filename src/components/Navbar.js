import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {

  handleRefresh = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.reload(); // Refresh the page
  }

  render() {
    const identiconUrl = this.props.account 
      ? `data:image/png;base64,${new Identicon(this.props.account, 35).toString()}`
      : '/bored.jpeg'; // Fallback URL to the image in the public folder

    return (
      <nav className="navbar navbar-dark fixed-top bg-gradient p-3 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 text-white font-weight-bold"
          href="#"
          onClick={this.handleRefresh}
        >
          DEX-SWAP
        </a>

        <ul className="navbar-nav px-3 ml-auto">
          <li className="nav-item text-nowrap d-none d-sm-block">
            <small className="text-muted">
              <span id="account">{this.props.account}</span>
            </small>

            {this.props.account && (
              <a
                href={identiconUrl} // Link to the image URL
                target="_blank" // Open in a new tab
                rel="noopener noreferrer"
              >
                <img
                  className="ml-2 rounded-circle border border-light"
                  width='35'
                  height='35'
                  src={identiconUrl}
                  alt={`Identicon for account ${this.props.account}`}
                />
              </a>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
