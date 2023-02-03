import React, { useContext } from "react";
import { QDocContext } from "./QDoc";

const SomeConsumer = () => {
  const { nebula } = useContext(QDocContext); //Retrieve Embed instance from Context... https://qlik.dev/apis/javascript/nebulajs-stardust/#%23%2Fdefinitions%2FEmbed

  setTimeout(() => {
    console.log(nebula.getRegisteredTypes());
  }, 10000);

  return <></>;
};

export default SomeConsumer;
