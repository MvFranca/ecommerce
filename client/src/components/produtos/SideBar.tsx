import "../../styles/produtos/SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>Produtos</h2>

      <section>
        <h3>Pesquise por categoria</h3>
        <ul>
          <li>Novos Produtos</li>
          <li>Dispositivos</li>
          <li>Acessórios</li>
          <li>Eletrônicos</li>
          <li>Outros</li>
        </ul>
      </section>

      <section>
        <h3>Compra por cor</h3>
        <ul>
          <li>
            <div className="cores-sidebar verde"/>
            <p>Verde</p>
          </li>
          <li>
          <div className="cores-sidebar azul"/>
            <p>Azul</p>
          </li>
          <li>
          <div className="cores-sidebar vermelho"/>
            <p>Vermelho</p>
          </li>
          <li>
          <div className="cores-sidebar rosa"/>
            <p>Rosa</p>
          </li>
          <li>
          <div className="cores-sidebar preto"/>
            <p>Preto</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Compra por marca</h3>
        <ul>
          <li>Apple</li>
          <li>Xiaomi</li>
          <li>Adidas</li>
          <li>NewEra</li>
          <li>Nike</li>
        </ul>
      </section>

      <section>
        <h3>Compra por preço</h3>
        <ul>
          <li>U$0,00 - U$49,90</li>
          <li>U$49,90 - U$99,90</li>
          <li>U$99,90 - U$149,90</li>
          <li>U$149,90 - U$199,90</li>
          <li>U$199,00 - U$1000,00</li>
          
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
