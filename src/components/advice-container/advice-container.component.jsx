import { Fragment } from "react";

import { ReactComponent as DividerMobile } from "../../assets/pattern-divider-mobile.svg";
import { ReactComponent as DividerDesktop } from "../../assets/pattern-divider-desktop.svg";

import "./advice-container.styles.scss";

const AdviceContainer = ({isLoading, adviceSlip}) => {
  
  return (
    <div className="advice__container">
      {isLoading ? (
        <h1 className="advice">Fetching Advice...</h1>
      ) : (
        <Fragment>
          <p className="advice__number">Advice #{adviceSlip.id}</p>
          <h1 className="advice">&ldquo;{adviceSlip.advice}&rdquo;</h1>
        </Fragment>
      )}

      <div className="divider__mobile">
        <DividerMobile />
      </div>
      <div className="divider__desktop">
        <DividerDesktop />
      </div>
    </div>
  );
};

export default AdviceContainer;
