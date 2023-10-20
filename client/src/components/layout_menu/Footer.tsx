import '../../styles/layout/Footer.scss'

const Footer = () => {
    return ( 
        <footer className='footer'>
           <section>
                <div className='info-loja-footer'>
                    <h3>Mais sobre a loja</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis facilis possimus impedit amet recusandae illo.
                    </p>
                </div>
                <div>
                    <h3>Compras</h3>
                    <ul>
                        <li>Acessórios</li>
                        <li>Tecnologia</li>
                        <li>Decoração</li>
                        <li>Roupas</li>
                        <li>Móveis</li>
                    </ul>
                </div>
                <div>
                <h3>Sua Conta</h3>
                    <ul>
                        <li>Perfil</li>
                        <li>Pedidos</li>
                        <li>Endereços</li>
                        <li>Detalhes da compa</li>
                        <li>Pagamentos</li>
                    </ul>
                </div>
                <div className='input-footer'>
                    <h3>Assine a nossa newsletter.</h3>
                    <p>Receba e-mails sobre os produtos que estão em alta no momento.</p>
                    <form>
                        <input type="text" name="" id="" placeholder='Digite seu E-mail...'/>
                        <button>Enviar</button>
                    </form>
                    <img src="/pagamentos.png" alt="Métodos de pagamento." />
                </div>
           </section>
           <div id='direitos'>
           ©Direitos autoriais 2023 | Todos os direitos Reservados | Marcos Vinicius
           </div>
        </footer>
     );
}
 
export default Footer;