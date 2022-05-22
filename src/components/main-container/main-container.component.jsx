import { useState, useEffect } from "react";

import AdviceContainer from "../advice-container/advice-container.component";
import ChangeAdvice from "../change-advice/change-advice.component";

import './main-container.styles.scss';

const Container = () => {
  const API_URL = "https://api.adviceslip.com/advice/";
  const [isLoading, setIsLoading] = useState(true);
  const [adviceSlip, setAdviceSlip] = useState([]);

  const fetchData = async () => {
    let min = 1;
    let max = 225;
    let slip_id = Math.floor(Math.random() * (max - min) + min);
    await fetch(API_URL + slip_id)
      .then((resp) => resp.json())
      .then((slip) => setAdviceSlip(slip));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <AdviceContainer
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        adviceSlip={adviceSlip.slip}
      />
      <ChangeAdvice
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        fetchData={fetchData}
      />
    </div>
  );
};

export default Container;
