import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="nav-bar">
      <div class="container">
        <Link to="/"><a class="navbar-brand" >PET SHOP</a></Link>
        <div class="nav-menu">
          <ul>
            <li class="nav-li"><Link to="/login"><a class="nav-li-a">LOGIN</a></Link></li>
            <li class="nav-li"><Link to="/contato"><a class="nav-li-a">CONTATO</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
