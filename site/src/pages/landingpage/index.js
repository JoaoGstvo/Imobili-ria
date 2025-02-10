import React, { useState, useEffect } from 'react';
import './index.css';
import Cabecalho_com_pesquisa from '../../components/cabecalho_c_pesquisa/index.js';
import Card_Anunciado from '../../components/card-anunciado/index.js';


function LandingPage() {
    return (
        <main className="landing-page">
            <header>
                <Cabecalho_com_pesquisa/>
            </header>


            <section className='section-propaganda'>
                <div className='propaganda'></div>
            </section>


            <section className='section-opcoes-usuario'>

                <div className='div-opcoes-usuario'>
                    <button className='botao-opcao-usuario'>
                        Anunciar
                    </button>
                </div>

                <div className='div-opcoes-usuario'>
                    <button className='botao-opcao-usuario'>
                        Para Alugar
                    </button>
                </div>

                <div className='div-opcoes-usuario'>
                    <button className='botao-opcao-usuario'>
                        Para Comprar
                    </button>
                </div>
                <div className='div-opcoes-usuario'>
                    <button className='botao-opcao-usuario'>
                        Texto Teste
                    </button>
                </div>
            </section>


            <section className='section-card-maisvisto'>
                {/* <h3>Mais Vistos</h3> */}
                <Card_Anunciado/>
            </section>
        </main>
    );
}

export default LandingPage;
