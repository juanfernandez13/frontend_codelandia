import imgUsers from '../../assets/Desafio4/imgUsers.svg';
import iconGoogle from '../../assets/Desafio4/iconGoogle.svg';
import './styles.css'

function Desafio4(){
    return (
        <div className="body__Desafio4">
            <main className="main__Desafio4">
                <section className='main__imgUsers__Desafio4'>
                <img src={imgUsers}/>
                </section>
                <section className='main__login__Desafio4'>
                <section className='main__loginComponents__Desafio4'>
                    
                    <section className='main__title__Desafio4'>
                        <h3>Bem vindo de volta</h3>
                        <h2>Faça login na sua conta</h2>
                        
                    </section>

                    <section className='main__loginSectionInput__Desafio4'>
                        <span>E-mail</span>
                        <input type='text'></input>
                    </section>

                    <section className='main__loginSectionInput__Desafio4'>
                        <span>Senha</span>
                        <input type='password'></input>
                    </section>

                    <section className='main__loginSectionOptions__Desafio4'>
                        <section><input type='radio'/>Lembre de mim</section>
                        <a className='main__a__Desafio4' href='http://google.com'>Esqueceu sua senha?</a>
                    </section>

                    <button className='main__button__Desafio4'>Entrar</button>
                    <button className='main__buttonGoogle__Desafio4'><img src={iconGoogle}/>Ou faça login com o Google </button>
                </section>
                <span className='main__criarConta__Desafio4'>Não tem uma conta?<a className='main__a__Desafio4' href='http://google.com'>Cadastre-se</a></span>
                </section>
                
            </main>
        </div>
    );
}

export default Desafio4;