// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="action-bar">
        <Link to="/agendar-servico">
          <div className="action-item">
              <i className="fa fa-calendar"></i>
              <p>Agendar serviço</p>
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
              <p>Minha conta</p>
          </div>
        </Link>
    </div>
  );
}

export default Sidebar;
