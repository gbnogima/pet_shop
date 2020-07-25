// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="action-bar">
      <Link to="/registrar-usuario">
        <div className="action-item">
          <i className="fa fa-user-plus"></i>
          <p>Registrar Usuário</p>
        </div>
      </Link>
      <Link to="/gerenciar-produtos">
        <div className="action-item">
          <i className="fa fa-cart-plus"></i>
          <p>Gerenciar Produtos</p>
        </div>
      </Link>
      <Link to="/gerenciar-servicos">
        <div className="action-item">
          <i className="fa fa-cart-plus"></i>
          <p>Gerenciar serviços</p>
        </div>
      </Link>
      <Link to="/conta-adm">
        <div className="action-item">
            <i className="fa fa-user"></i>
            <p>Minha conta</p>
        </div>
      </Link>
    </div>
  );
}

export default AdminSidebar;
