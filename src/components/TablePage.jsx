import React, { useContext, useEffect, useState } from "react";
import { QDocContext } from "./QDocProvider";

const TablePage = () => {
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

    // Notes:
    // https://observablehq.com/@yianni-ververis/enigma-js-getobject-with-all-data
    // enigma.getObject("WTZDvr").then((api) => {
    //   // api is now an object with QIX interface methods for the GenericObject struct
    //   api.getLayout().then(() => {
    //     // 'getProperties' will give you the underlying properties describing
    //     // the generic object layout, including the hypercube/expression sources etc.:
    //     api.getProperties().then((props) => {
    //       // modify some properties to you liking:
    //       props.someValue = true;
    //       console.log(props);
    //       // 'setProperties' will modify the generic object state from 'valid' to
    //       // 'invalid' in Qlik Associative Engine, causing a 'changed' event in enigma.js:
    //       api.setProperties(props).then(() => {
    //         // the 'changed' event handler above should now have been invoked
    //       });
    //     });
    //   });
    // });
    //End Notes
  };

  useEffect(() => {
    initEnigmaAppObject();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders &&
              tableHeaders.map((column) => {
                return <th key={`column-${column.title}`}>{column.title}</th>;
              })}
          </tr>
        </thead>

        <tbody>
          {tableData ? (
            tableData.map((x, index) => {
              return (
                <tr key={index}>
                  <td key={"cell0".concat(index)}>{x[0].qText}</td>
                  <td key={"cell1".concat(index)}>{x[1].qText}</td>
                  <td key={"cell2".concat(index)}>{x[2].qText}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>"Loading Table..."</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TablePage;
