import React, { useContext, useEffect, useState } from "react";
import { QDocContext } from "./QDocProvider";

const TablePage = () => {
  const enigma = useContext(QDocContext);
  const [tableData, settableData] = useState(null);
  //Setup DOM References

  const initEnigmaAppObject = async () => {
    //https://qlik.dev/libraries-and-tools/enigmajs

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
  };

  useEffect(() => {
    initEnigmaAppObject();
  }, []);

  return (
    <>
      <table>
        {tableData
          ? tableData.map((x) => {
              return (
                <tr>
                  <td>{x[0].qText}</td>
                  <td>{x[1].qText}</td>
                  <td>{x[2].qText}</td>
                </tr>
              );
            })
          : "Loading..."}
      </table>
    </>
  );
};

export default TablePage;
