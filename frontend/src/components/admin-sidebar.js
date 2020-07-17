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
      <a>
        <div className="action-item">
          <i className="fa fa-cart-plus"></i>
          <p>Adicionar serviços</p>
        </div>
      </a>
      <a>
        <div className="action-item">
          <i className="fa fa-calendar-check-o"></i>
          <p>Gerenciar agendamentos</p>
        </div>
      </a>
    </div>
  );
}

export default AdminSidebar;
