import React, { useContext, useEffect } from "react";
import { QDocContext } from "./QDocProvider";

const styles = {
  chart: { position: "relative", display: "inline-block", height: "600px", width: "calc(50% - 8px)" },
};

const SomeConsumer = () => {
  const nebula = useContext(QDocContext);
  //Setup DOM References
  const chart1 = React.useRef();
  const chart2 = React.useRef();

  const initCharts = async () => {
    //Retrieve Embed instance from Context... https://qlik.dev/apis/javascript/nebulajs-stardust/#%23%2Fdefinitions%2FEmbed
    // Seems to execute before the Context Provider is done... Need to Check if ready
    if (nebula) {
      await nebula.render({
        element: chart1.current,
        id: "yUGVAa",
      });

      await nebula.render({
        element: chart2.current,
        id: "nnGZJp",
      });
    }
  };
  useEffect(() => {
    initCharts();
  });

  return (
    <>
      ChildTop
      <div ref={chart1} style={styles.chart} />
      Some Text
      <div ref={chart2} style={styles.chart} />
      ChildBottom
    </>
  );
};

export default SomeConsumer;
