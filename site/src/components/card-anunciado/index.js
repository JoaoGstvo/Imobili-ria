import './index.css'

function Card_Anunciado() {
    return (
        <main className="card-anunciado">

            <div class="card">
                <div class="image-container">
                    {/* <img src="apartamento.jpg" alt="Apartamento Flat"> */}
                </div>
                <div class="card-content">
                    <p class="tipo">Apartamento Flat</p>
                    <h2 class="preco">R$ 850.000</h2>
                    <p class="condominio">Condomínio R$ 1.700</p>
                    <p class="endereco"><strong>Rua Vergueiro</strong></p>
                    <p class="localizacao">Vila Mariana, São Paulo</p>
                    <div class="info">
                        <span>📏 40 m²</span>
                        <span>🛏️ 1</span>
                        <span>🛁 1</span>
                        <span>🚗 1</span>
                    </div>
                </div>
            </div>


            {/* <section className="section-principal">
                <div className="div-imagem-card">
                    teste
                </div>

                <div className="div-principal-informacoes">
                    <div className='div-nome-categoria' id='teste'>
                        <h5> Nome </h5>
                        <p> Teste Nome </p>
                    </div>

                    <div className="teste">

                    <div className="div-preco" id='teste'>
                        <h5> Preço </h5>
                        <p>R$500</p>
                    </div>

                    <div className="div-localizacao" id='teste'>
                        <h5> Localização </h5>
                        <p> SP, São Paulo </p>
                    </div>

                    </div>

                    <div className="div-informacoes-imovel">
                        <div className="div-icone-info">
                            <p>Icone</p>
                            <p>info</p>
                        </div>

                        <div className="div-icone-info">
                            <p>Icone</p>
                            <p>info</p>
                        </div>

                        <div className="div-icone-info">
                            <p>Icone</p>
                            <p>info</p>
                        </div>

                        <div className="div-icone-info">
                            <p>Icone</p>
                            <p>info</p>
                        </div>
                        
                    </div>
                </div>
            </section> */}
        </main>
    );
}



// .card-anunciado {

//     .section-principal {
//         height:42vh;
//         border: 1px solid red;

//     .div-imagem-card {
//         /* border: 1px solid black; */
//         height: 45%;
//     }

//     .div-principal-informacoes {
//         border: 1px solid green;
//         height: auto;
//     }

//     #teste {
//         /* border: 1px solid black; */
//         margin-bottom: 0.4em;
//         margin-top: -2em;
//         margin-left: 1.5em;
//     }

//     .div-informacoes-imovel {
//         display: flex;
//         flex-direction: row;
//     }

//     .div-icone-info {
//         margin-left: 1em;
//     }

//     p {
//         font-size: 10px;

//     }

//     h5 {
//         font-size: 15px;
//         margin-bottom: -0.5em;
//         margin-top: 3em;
//     }

//     .teste {
//         display: flex;
//         flex-direction: row;
//         margin-bottom: -1em;
//     }


//     }
// }

export default Card_Anunciado;