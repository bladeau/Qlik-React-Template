import React, { useContext } from "react";
import { QDocContext } from "./QDoc";

const SomeConsumer = () => {
  const chartElement = React.useRef(null);

  const { nebula } = useContext(QDocContext); //Retrieve Embed instance from Context... https://qlik.dev/apis/javascript/nebulajs-stardust/#%23%2Fdefinitions%2FEmbed

  setTimeout(() => {
    // console.log(nebula.render());

    nebula.render({
      element: chartElement.current,
      id: "qZPdytp",
    });
  }, 10000);

  return (
    <>
      {" "}
      <div ref={chartElement} />
    </>
  );
};

export default SomeConsumer;
