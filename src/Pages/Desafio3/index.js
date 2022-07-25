import './styles.css';
import img from '../../assets/Desafio3/img.svg';
import CardDesafio3 from '../../components/Desafio3';

const Desafio3 = () => {
    return (
        <div>
            <header className="header__Desafio3">

                <section className='header__components__Desafio3'>
                    <section className='header__text__Desafio3'>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                        <button className='header__text__button__Desafio3'>Botão</button>
                    </section>
                    <img src={img} className='header__img__Desafio3'/>
                </section>

            </header>

            <main className="main__Desafio3">
                
                <CardDesafio3></CardDesafio3>
                <CardDesafio3></CardDesafio3>
                <CardDesafio3></CardDesafio3>
                <CardDesafio3></CardDesafio3>
                <CardDesafio3></CardDesafio3>
                <CardDesafio3></CardDesafio3>
            </main>
            <footer className="footer__Desafio3">
                <h2>Entre em contato</h2>
                <input type="text" placeholder='Nome'></input>
                <input type="text" placeholder='E-mail'></input>
                <input type="text" placeholder='Telefone'></input>
                <input type="text" placeholder='Mensagem'></input>
                <button>Enviar mensagem</button>
            </footer>
        </div>
    );
}

export default Desafio3;