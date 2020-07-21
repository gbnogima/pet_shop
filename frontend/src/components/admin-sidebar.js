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
      <a>
        <div className="action-item">
          <i className="fa fa-calendar-check-o"></i>
          <p>Gerenciar agendamentos</p>
        </div>
      </a>
      <Link to="/minha-conta">
        <div className="action-item">
            <i className="fa fa-user"></i>
            <a><p>Minha conta</p></a>
        </div>
        </Link>
    </div>
  );
}

export default AdminSidebar;
