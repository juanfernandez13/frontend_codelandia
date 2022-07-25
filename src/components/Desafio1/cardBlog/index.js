import './styles.css';
import coracao from '../../../assets/Desafio1/coracao.png';

const CardBlog = (props) => {
    return (
        <article className='main__container'>
                    <section className='main__container__inicio'>
                        <span className='main__container__inicio__data'>{props.data}</span>
                        <img className='main__container__inicio__icon' src={coracao}/>
                    </section>
                        <h2 className='main__container__title'>{props.titulo}</h2>
                        <p className='main__container__subtitle'>{props.children}</p>
                    
                </article>
    );
}

export default CardBlog;