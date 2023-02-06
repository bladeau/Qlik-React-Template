import React, { useContext } from "react";
import { QDocContext } from "./QDoc";

const SomeConsumer = () => {
  const chartElement = React.useRef();

  const nebula = useContext(QDocContext); //Retrieve Embed instance from Context... https://qlik.dev/apis/javascript/nebulajs-stardust/#%23%2Fdefinitions%2FEmbed
  // Seems to execute before the Context Provider is done... Need to Check if ready
  if (nebula) {
    nebula.render({
      element: chartElement.current,
      id: "yUGVAa",
    });
  }
  return (
    <>
      <div ref={chartElement} />
    </>
  );
};

export default SomeConsumer;
