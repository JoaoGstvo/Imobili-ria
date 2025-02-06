import React, { useState, useEffect } from 'react';
import './index.css';
import Cabecalho_com_pesquisa from '../../components/cabecalho_c_pesquisa/index.js';



function LandingPage() {
    return (
        <main className="landing-page">
            <header>
                <Cabecalho_com_pesquisa/>
            </header>


            <section className='section-temporario'>
                <div className='temporario'></div>
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
        </main>
    );
}

export default LandingPage;
