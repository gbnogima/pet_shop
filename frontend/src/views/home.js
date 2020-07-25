// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { logo, tosa, vacinacao } from '../assets/img';

function HomeView() {
  return (
    <div>
        <section className="page-section">
            <div className="container">
                
                <img id = "logo" src={logo} alt="Pet Shop"/>
                <h2>Pet Shop</h2>
            </div>
        </section>
        <section className="page-section bg-white">
            <h2 className="h-bg-white">Serviços</h2>
            <div className="container services">
                <div className="service">
                    <h3 className="h-bg-white">Banho & Tosa</h3>
                    <img className="img-services" src={tosa} alt="Inglorious Basterds"/>
                </div>
                <div className="service">
                    <h3 className="h-bg-white">Vacinação</h3>
                    <img className="img-services" src={vacinacao} alt="Inglorious Basterds"/>
                </div>
                
                
            </div>
        </section>
        <section className="page-section">
            <h2>Produtos</h2>
            <ul className="product-list">
                <li className="product-item">Ração</li>
                <li className="product-item">Guloseimas</li>
                <li className="product-item">Brinquedos</li>
                <li className="product-item">Coleiras</li>
                <li className="product-item">Camas</li>
                <li className="product-item">Gaiolas</li>
                <li className="product-item">Aquários</li>
                
            </ul>
        </section>
    </div>
  );
}

export default HomeView;
