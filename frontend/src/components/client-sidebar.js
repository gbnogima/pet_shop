import React from 'react';

function Sidebar() {
  return (
    <div className="action-bar">
        <div className="action-item">
            <i className="fa fa-calendar"></i>
            <a><p>Agendar serviço</p></a>
        </div>
        <div className="action-item">
            <i className="fa fa-shopping-cart"></i>
            <a><p>Comprar produtos</p></a>
        </div>
        <div className="action-item">
            <i className="fa fa-paw"></i>
            <a><p>Meus pets</p></a>
        </div>
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
