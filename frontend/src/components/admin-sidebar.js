import React from 'react';

function AdminSidebar() {
  return (
    <div className="action-bar">
      <a>
        <div className="action-item">
          <i className="fa fa-user-plus"></i>
          <p>Registrar Cliente</p>
        </div>
      </a>
      <a>
        <div className="action-item">
          <i className="fa fa-user-plus"></i>
          <p>Registrar Administrador</p>
        </div>
      </a>
      <a>
        <div className="action-item">
          <i className="fa fa-cart-plus"></i>
          <p>Adicionar produtos</p>
        </div>
      </a>
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
      <a>
        <div className="action-item">
          <i className="fa fa-refresh"></i>
          <p>Atualizar estoque</p>
        </div>
      </a>
    </div>
  );
}

export default AdminSidebar;
