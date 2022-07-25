import './styles.css';
import lupa from '../../assets/Desafio1/lupa.png';
import CardBlog from '../../components/Desafio1/cardBlog';

function desafio1 (){
    return (
        <div className="desafio1__body">
            <header className="desafio1__header">
                    <section className="desafio1__header__superior">
                        <h3>Codelândia</h3>
                        <h3>Blog</h3>
                    </section>
                    
                    <section className='desafio1__header__inferior'>
                        <section className='desafio1__header__inferior__search'>
                            <img src={lupa}/>
                            <input type='text' placeholder='Pesquisar no blog'></input>
                        </section>
                    </section>
            </header>

            <main className='main'>
                <CardBlog data='22, jul de 2022' titulo='teste testado 1'>
                Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Mé faiz elementum girarzis, nisi eros vermeio.Detraxit consequat et quo num tendi nada.Per aumento de cachacis, eu reclamis.
                </CardBlog>
                <CardBlog data='22, jul de 2022' titulo='teste testado 2'>
                Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.Quem num gosta di mim que vai caçá sua turmis!
                </CardBlog>
                <CardBlog data='22, jul de 2022' titulo='teste testado 3'>
                Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.Quem manda na minha terra sou euzis!Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Viva Forevis aptent taciti sociosqu ad litora torquent.
                </CardBlog>
                <CardBlog data='22, jul de 2022' titulo='teste testado 4'>
                Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Suco de cevadiss deixa as pessoas mais interessantis.Paisis, filhis, espiritis santis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
                </CardBlog>
            </main>

        </div>
    );
} 

export default desafio1;