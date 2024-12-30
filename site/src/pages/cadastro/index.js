import './index.css'

function Cadastro() {
    return(
        <main className="cadastro">
            <section className="lado-esquerdo-cadastro">
                <img className="logo-cadastro" src="/images/Logo.png" alt="" />

                <h1>NomeLugar</h1>

                <div className="inputs-cadastro">
                    <input type="text" placeholder='Nome' id="input" />
                    <input type="text" placeholder='Sobrenome' id="input" />
                    <input type="email" placeholder='Email' id="input" />
                    <input type="password" placeholder='Senha' id="input" />
                    <input type="text" placeholder='Telefone' id="input" />
                </div>

                <button className="botao-cadastrar">Cadastrar</button>
                <p className="texto-cadastro">Já tem uma conta? <a className="entrar-cadastro" href='./landingpage/index.js'>Entrar</a></p>

            </section>

            <section className="lado-direito-cadastro">
                
            </section>

        </main>
    )    
}

export default Cadastro