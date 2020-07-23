import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="action-bar">
        <Link to="/agendar-servico">
          <div className="action-item">
              <i className="fa fa-calendar"></i>
              <a><p>Agendar serviço</p></a>
          </div>
        </Link>
        <Link to="/comprar-produtos">
            <div className="action-item">
                <i className="fa fa-cart-plus"></i>
                <p>Comprar Produtos</p>
            </div>
        </Link>
        <Link to="/meus-pets">
          <div className="action-item">
              <i className="fa fa-paw"></i>
              <p>Meus pets</p>
          </div>
        </Link>
        <Link to="/minha-conta">
          <div className="action-item">
              <i className="fa fa-user"></i>
              <a><p>Minha conta</p></a>
          </div>
        </Link>
    </div>
  );
}

export default Sidebar;
