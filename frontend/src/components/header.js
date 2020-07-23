// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="nav-bar">
      <div className="container">
        <Link className="navbar-brand" to="/">PET SHOP</Link>
        <div className="nav-menu">
          <ul>
            <li className="nav-li"><Link className="nav-li-a" to="/cadastro">CADASTRO</Link></li>
            <li className="nav-li"><Link className="nav-li-a" to="/login">LOGIN</Link></li>
            <li className="nav-li"><Link className="nav-li-a" to="/contato">CONTATO</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
