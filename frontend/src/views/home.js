import React from 'react';
import { logo, tosa, vacinacao } from '../assets/img';

function HomeView() {
  return (
    <div>
        <section class="page-section">
            <div class="container">
                
                <img id = "logo" src={logo} alt="Pet Shop"/>
                <h2>Pet Shop</h2>
            </div>
        </section>
        <section class="page-section bg-white">
            <h2 class="h-bg-white">Serviços</h2>
            <div class="container services">
                <div class="service">
                    <h3 class="h-bg-white">Banho & Tosa</h3>
                    <img class="img-services" src={tosa} alt="Inglorious Basterds"/>
                </div>
                <div class="service">
                    <h3 class="h-bg-white">Vacinação</h3>
                    <img class="img-services" src={vacinacao} alt="Inglorious Basterds"/>
                </div>
                
                
            </div>
        </section>
        <section class="page-section">
            <h2>Produtos</h2>
            <ul class="product-list">
                <li class="product-item">Ração</li>
                <li class="product-item">Guloseimas</li>
                <li class="product-item">Brinquedos</li>
                <li class="product-item">Coleiras</li>
                <li class="product-item">Camas</li>
                <li class="product-item">Gaiolas</li>
                <li class="product-item">Aquários</li>
                
            </ul>
        </section>
    </div>
  );
}

export default HomeView;
