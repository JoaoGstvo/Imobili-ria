import React, { useState, useEffect } from 'react';
import './index.css';

function LandingPage() {
    const [placeholder, setPlaceholder] = useState(''); // Placeholder atual
    const [placeholderIndex, setPlaceholderIndex] = useState(0); // Index do placeholder atual
    const [charIndex, setCharIndex] = useState(0); // Index do caractere sendo digitado
    const placeholders = ['Buscar Apartamento', 'Buscar Casa', 'Buscar Imóvel'];
    const typingSpeed = 150; // Velocidade da digitação (em ms)
    const pauseTime = 1000; // Pausa entre palavras (1 segundo)

    useEffect(() => {
        const currentPlaceholder = placeholders[placeholderIndex];

        if (charIndex < currentPlaceholder.length) {
            // Digitar letra por letra
            const timeout = setTimeout(() => {
                setPlaceholder((prev) => prev + currentPlaceholder[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        } else {
            // Após completar a palavra, aguardar 1 segundo e começar a próxima palavra
            const timeout = setTimeout(() => {
                setPlaceholder('');
                setCharIndex(0);
                setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
            }, pauseTime);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, placeholderIndex]); // Executar o efeito sempre que o charIndex ou placeholderIndex mudar



    return (
        <main className="landing-page">
            <header className="cabecalho">

                <section className='lado-direito-cabecalho'>

                    <div className="image-logo">
                        <img className="logo" src="/images/Logo.png" alt="" />
                    </div>


                    <div className="barra-pesquisa">
                        <input
                            className="input-pesquisa"
                            type="text"
                            placeholder={placeholder} />
                        <label className="label-icone-pesquisa">
                            <img className="icone-pesquisa" src="/images/icons/lupa.png" alt="" />
                        </label>
                    </div>

                </section>

                <section className='lado-esquerdo-cabecalho'>

                <div className='div-botoes-usuario'>
                    <button className='botao-usuario' id='login'>Login</button>
                    <button className='botao-usuario' id='cadastro'>Cadastre-se</button>
                </div>

                </section>
            </header>
        </main>
    );
}

export default LandingPage;
