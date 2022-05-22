import { Fragment } from "react";

import Container from "./components/main-container/main-container.component";
import Attribute from "./components/attribution/attribution.component";

import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Container />
      <Attribute />
    </Fragment>
  );
};

export default App;
