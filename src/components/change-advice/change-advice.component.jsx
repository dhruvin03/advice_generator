import { ReactComponent as DiceIcon } from "../../assets/icon-dice.svg";

import './change-advice.styles.scss';

const ChangeAdvice = ({isLoading, setIsLoading, fetchData}) => {
    return (
        <div
          className="change__advice"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => fetchData(), 1000);
          }}
        >
          {!isLoading ? (
            <DiceIcon className="dice__icon" />
          ) : (
            <DiceIcon className="dice__icon loading" />
          )}
        </div>
    )
}

export default ChangeAdvice;