import './styles.css';
import CardProduto from '../../components/Desafio2';
import sapato1 from '../../assets/Desafio2/sapato1.svg';
import sapato2 from '../../assets/Desafio2/sapato2.svg';
import sapato3 from '../../assets/Desafio2/sapato3.svg';
import sapato4 from '../../assets/Desafio2/sapato4.svg';
import sapato5 from '../../assets/Desafio2/sapato5.svg';
import sapato6 from '../../assets/Desafio2/sapato6.svg';
import sapato7 from '../../assets/Desafio2/sapato7.svg';
import sapato8 from '../../assets/Desafio2/sapato8.svg';


function desafio2() {
    return (
        <div className='body__Desafio2'>
            <header className='header__Desafio2'>
                <section className='header__sectionBlack__Desafio2'>
                    <span className='header__sectionBlack__text__Desafio2'>Ganhe R$ 10,00 de desconto no frete</span>
                </section>
                <section className='header__sectionWhite__Desafio2'>
                    <h2 className='header__sectionWhite__text__Desafio2'>Jordanshoes</h2>
                </section>
            </header>


            <main className='main__Desafio2'>
                <article className='main__Banner__Desafio2'>
                    <section className='main__Banner__text__Desafio2'>
                        <h2 className='main__Banner__text__title__Desafio2'>A melhor loja de Jordan</h2>
                        <p className='main__Banner__text__subtitle__Desafio2'>O tênis Jordan é fruto de uma velha e forte <br/>parceria entre Nike e o jogador Michael Jordan.</p>
                    </section>
                </article>

                <section className='main__body__Desafio2'>
                    <section className='main__body__destaques__Desafio2'>
                        <h2 className='main__body__destaques__title__Desafio2'>Destaques</h2>
                        <span className='main__body__destaques__subtitle__Desafio2'>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
                    </section>    

                    <section className='main__body__products__Desafio2'>

                    <CardProduto sapato = {sapato1}></CardProduto>
                    <CardProduto sapato = {sapato2}></CardProduto>
                    <CardProduto sapato = {sapato3}></CardProduto>
                    <CardProduto sapato = {sapato4}></CardProduto>
                    <CardProduto sapato = {sapato5}></CardProduto>
                    <CardProduto sapato = {sapato6}></CardProduto>
                    <CardProduto sapato = {sapato7}></CardProduto>
                    <CardProduto sapato = {sapato8}></CardProduto>

                    </section>  
                </section>
            </main>


            <footer className='footer__Desafio2'>
                <span className='footer__text__Desafio2'>Todos os direitos reservados</span>
            </footer>
        </div>
    );
};

export default desafio2;