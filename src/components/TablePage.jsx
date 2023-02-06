import React, { useContext, useEffect } from "react";
import { QDocContext } from "./QDocProvider";
import baseConfig from "./configureChartsNebula";

const styles = {
  filter: { width: "100%" },
  chart: { position: "relative", display: "inline-block", height: "600px", width: "calc(50% - 8px)" },
};

const TablePage = () => {
  const enigma = useContext(QDocContext);
  //Setup DOM References
  const selectionElement = React.useRef(null);
  const chart1 = React.useRef(null);
  const chart2 = React.useRef(null);

  const initCharts = async () => {
    console.log(enigma);
    const nebula = await baseConfig(enigma);
    //Retrieve Enigma Context and Nebula/Embed... https://qlik.dev/apis/javascript/nebulajs-stardust/#%23%2Fdefinitions%2FEmbed
    if (nebula) {
      const selections = await nebula.selections();
      selections.mount(selectionElement.current);

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
    console.log("use Effect runs");

    if ((selectionElement, chart1 && chart2)) initCharts();
  }, [selectionElement, chart1, chart2]);

  return (
    <>
      ChildTop
      <div ref={selectionElement} style={styles.filter} />
      <div ref={chart1} style={styles.chart} />
      Some Text
      <div ref={chart2} style={styles.chart} />
      ChildBottom
    </>
  );
};

export default TablePage;
