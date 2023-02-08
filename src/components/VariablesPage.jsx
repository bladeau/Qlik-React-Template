import React, { useContext, useEffect, useState } from "react";
import { QDocContext } from "./QDocProvider";

const VariablesPage = () => {
  const enigma = useContext(QDocContext);
  const [tableHeaders, settableHeaders] = useState(null);
  const [tableData, settableData] = useState(null);
  //Setup DOM References

  const initEnigmaAppObject = async () => {
    //https://qlik.dev/libraries-and-tools/enigmajs

    // Get Table and Data
    const model = await enigma.getObject("WTZDvr"); // It's a table
    const modelLayout = await model.getLayout();
    const data = [];
    const columns = modelLayout.qHyperCube.qSize.qcx;
    const totalheight = modelLayout.qHyperCube.qSize.qcy;

    // Replace pageheight & numberOfPages number with the comments to get all data
    const pageheight = Math.floor(10000 / columns);
    const numberOfPages = Math.ceil(totalheight / pageheight);

    for (let i = 0; i < numberOfPages; i++) {
      const page = {
        qTop: pageheight * i,
        qLeft: 0,
        qWidth: columns,
        qHeight: pageheight,
      };
      const row = await model.getHyperCubeData("/qHyperCubeDef", [page]);
      data.push(...row[0].qMatrix);
    }

    settableData(data);

    // Get Table Headers
    const dimensionInfo = modelLayout.qHyperCube.qDimensionInfo.map((item) => {
      return {
        title: item.qFallbackTitle,
      };
    });
    const measureInfo = modelLayout.qHyperCube.qMeasureInfo.map((item) => {
      return {
        title: item.qFallbackTitle,
      };
    });

    settableHeaders(dimensionInfo.concat(measureInfo));
  };

  useEffect(() => {
    initEnigmaAppObject();
  }, []);

  return (
    <>
      <div>
        <select>
          <option value="option1">Option 1</option>

          <option value="option2">Option 2</option>

          <option value="option3">Option 3</option>
        </select>
      </div>
    </>
  );
};

export default VariablesPage;
