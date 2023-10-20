import IconCartShopping from "../../icons/IconCart";
import FixedComponent from "./FixedComponent";
import "../../styles/layout/FixedComponent.scss";
import IconBxsUserAccount from "../../icons/IconProfile";

const ComponentesFixos = () => {
  return (
    <div className="icons-fixed">
      
      <FixedComponent descricao="Profile">
        <IconBxsUserAccount width={80} />
      </FixedComponent>

      <FixedComponent descricao="Buy Now">
        <IconCartShopping width={50} />
      </FixedComponent>

    </div>
  );
};

export default ComponentesFixos;
