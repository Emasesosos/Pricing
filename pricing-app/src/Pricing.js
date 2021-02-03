import { useState } from "react";
import { Top } from "./components/svg/Top";
import { Toggle } from "./components/Toggle";
import { Cards } from "./components/Cards";

function Pricing() {

  const [changePrice, setChangePrice] = useState('M');

  const togglePrice = () => {
    if(changePrice === 'A') {
      setChangePrice('M');
    } else {
      setChangePrice('A');
    }
    console.log(changePrice);
  };

  return (

    <div className="pricing__container">
      <div className="pricing__topl">
        <Top />
      </div>
      <div className="pricing__main">
        <Toggle 
          togglePrice={ togglePrice }
        />
        <Cards 
          changePrice={ changePrice }
        />
      </div>
      <div className="pricing__topr">
        <Top />
      </div>
    </div>

  );

}

export default Pricing;
