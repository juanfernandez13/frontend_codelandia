import logoGhibli from '../../assets/Desafio5/logo.svg'
import facebook from '../../assets/Desafio5/facebook.svg'
import instagram from '../../assets/Desafio5/instagram.svg'
import twitter from '../../assets/Desafio5/twitter.svg'
import youtube from '../../assets/Desafio5/youtube.svg'
import kaonashi from '../../assets/Desafio5/kaonashi.svg'
import playIcon from '../../assets/Desafio5/playIcon.svg'
import './styles.css';

const Desafio5 = () => {
    return (
        <div className="body__Desafio5">

            <header className="header__Desafio5">
                <img src={logoGhibli}/>
                <nav className="nav__Desafio5">
                    <button className='nav__Button'><img src={facebook} /></button>
                    <button className='nav__Button'><img src={instagram} /></button>
                    <button className='nav__Button'><img src={twitter} /></button>
                    <button className='nav__Button'><img src={youtube} /></button>
                </nav>
            </header>

            <main className="main__Desafio5">
                <section className='main__columnText__Desafio5'>
                    <h3>HAYAO MIYAZAKI</h3>
                    <h2>A VIAGEM <br /> DE CHIHIRO</h2>
                    <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
                    <section className='main__rowButtons__Desafio5'>
                        <div className='button__assistir__Desafio5'><img src={playIcon} /><span>assistir agora</span></div>
                        <div className='button__trailer__Desafio5'><span>ASSISTA O TRAILER</span></div>
                        
                    </section>
                </section>
                <img src={kaonashi}/>
            </main>
        </div>
    );
}

export default Desafio5;