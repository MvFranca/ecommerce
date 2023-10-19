import IconCartShopping from "../../icons/IconCart";
import IconMenuLeft from "../../icons/IconMenu";
import IconSearch from "../../icons/IconSearch";
import IconBxsUser from "../../icons/IconUser";
import "../../styles/layout/Busca.scss";

const Busca = () => {
  return (
    <section className="busca">
      <div>
        <IconMenuLeft height={20} width={20}/>
        <aside>Busque por categoria</aside>
      </div>

      <div className="campoDeBusca">
        <input type="text" placeholder="Pesquise por algum produto"/>
        <IconSearch  id="lupa" height={35} width={35}/>
      </div>

      <div className="iconsBusca">
        <IconBxsUser height={23} width={23}/>
        <IconCartShopping height={23} width={23}/>
      </div>
    </section>
  );
};

export default Busca;
