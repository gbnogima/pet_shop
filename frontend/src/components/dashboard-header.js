import React from 'react';

class DashboardHeader extends React.Component {
  render() {
    return (
      <nav class="nav-bar">
        <div class="container">
          <a class="navbar-brand">PET SHOP</a>
          <div class="nav-menu">
            <ul>
              <li class="nav-li"><a onClick={this.props.onLogoutSuccessful} class="nav-li-a">LOGOUT</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default DashboardHeader
