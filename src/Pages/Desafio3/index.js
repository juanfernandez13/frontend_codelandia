import './styles.css';
import img from '../../assets/Desafio3/img.svg';
import CardDesafio3 from '../../components/Desafio3';

const Desafio3 = () => {
    return (
        <div>
            <header className="header__Desafio3">

                <section className='header__components__Desafio3'>
                    <section className='header__text__Desafio3'>
                        <h2 className='header__text__title__Desafio3'>Lorem ipsum dolor sit amet</h2>
                        <p className='header__text__subtitle__Desafio3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
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
                <h2 className='footer__title__Desafio3'>Entre em contato</h2>
                <input type="text" placeholder='Nome' className='footer__input__Desafio3'></input>
                <input type="text" placeholder='E-mail' className='footer__input__Desafio3'></input>
                <input type="text" placeholder='Telefone' className='footer__input__Desafio3'></input>
                <input type="text" placeholder='Mensagem' className='footer__inputMensagem__Desafio3'></input>
                <button className='footer__button__Desafio3'>Enviar mensagem</button>
            </footer>
        </div>
    );
}

export default Desafio3;