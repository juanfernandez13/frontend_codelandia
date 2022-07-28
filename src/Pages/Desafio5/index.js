import logoGhibli from '../../assets/Desafio5/logo.svg'
import facebook from '../../assets/Desafio5/facebook.svg'
import instagram from '../../assets/Desafio5/instagram.svg'
import twitter from '../../assets/Desafio5/twitter.svg'
import youtube from '../../assets/Desafio5/youtube.svg'
import kaonashi from '../../assets/Desafio5/kaonashi.svg'
import './styles.css';

const Desafio5 = () => {
    return (
        <div className="body__Desafio5">

            <header className="header__Desafio5">
                <img src={logoGhibli}/>
                <nav className="nav__Desafio5">
                    <button><img src={facebook} /></button>
                    <button><img src={instagram} /></button>
                    <button><img src={twitter} /></button>
                    <button><img src={youtube} /></button>
                </nav>
            </header>

            <main className="main__Desafio5">
                <section className='main__columnText__Desafio5'>
                    <h3>HAYAO MIYAZAKI</h3>
                    <h2>A VIAGEM DE CHIHIRO</h2>
                    <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
                    <section className='main__rowButtons__Desafio5'>
                        <button>ASSISTIR AGORA</button>
                        <button>ASSISTA O TRAILER</button>
                    </section>
                </section>
                <img src={kaonashi}/>
            </main>
        </div>
    );
}

export default Desafio5;