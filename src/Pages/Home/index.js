import './styles.css';

function Home(){
    return (
    <div className="home"> 
        <section className='container'>
            <a href='http://localhost:3000/Desafio1'><button className='container__button'>Desafio 1</button></a>
            <a href='http://localhost:3000/Desafio2'><button className='container__button'>Desafio 2</button></a>
            <a href='http://localhost:3000/Desafio3'><button className='container__button'>Desafio 3</button></a>
            <a href='http://localhost:3000/Desafio4'><button className='container__button'>Desafio 4</button></a>
      </section>
    </div>
    );
}

export default Home;