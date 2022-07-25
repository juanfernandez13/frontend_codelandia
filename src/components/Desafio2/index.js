import './styles.css';


const CardProduto = (props) =>{
    return (
        <article className='main__body__card__Desafio2'>
            <img src={props.sapato} className ='main__body__card__img__Desafio2'/>
        </article>
    );
}

export default CardProduto;