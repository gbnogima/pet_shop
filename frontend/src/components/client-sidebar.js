import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="action-bar">
        <div className="action-item">
            <i className="fa fa-calendar"></i>
            <a><p>Agendar serviço</p></a>
        </div>
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
        <div className="action-item">
            <i className="fa fa-paw"></i>
            <a><p>Adicionar novo pet</p></a>
        </div>
        <div className="action-item">
            <i className="fa fa-user"></i>
            <a><p>Minha conta</p></a>
        </div>
    </div>
  );
}

export default Sidebar;
