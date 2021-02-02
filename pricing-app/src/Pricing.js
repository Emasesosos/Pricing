// import { Top } from "./components/svg/Top";
import { Toggle } from "./components/Toggle";
import { Cards } from "./components/Cards";

function Pricing() {

  return (

    <div className="pricing__container">
      {/*<div className="pricing__topl">
        <Top />
      </div>*/}
      <div className="pricing__main">
        <Toggle />
        <Cards />
      </div>
      {/*<div className="pricing__topr">
        <Top />
      </div>*/}
    </div>

  );

}

export default Pricing;
