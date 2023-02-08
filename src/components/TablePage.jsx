import React, { useContext, useEffect } from "react";
import { QDocContext } from "./QDocProvider";

const TablePage = () => {
  const enigma = useContext(QDocContext);
  //Setup DOM References

  const initEnigmaAppObject = async () => {
    //https://qlik.dev/libraries-and-tools/enigmajs
    enigma.getObject("WTZDvr").then((api) => {
      // api is now an object with QIX interface methods for the GenericObject struct
      api.getLayout().then(() => {
        // 'getProperties' will give you the underlying properties describing
        // the generic object layout, including the hypercube/expression sources etc.:
        api.getProperties().then((props) => {
          // modify some properties to you liking:
          props.someValue = true;
          console.log(props);
          // 'setProperties' will modify the generic object state from 'valid' to
          // 'invalid' in Qlik Associative Engine, causing a 'changed' event in enigma.js:
          api.setProperties(props).then(() => {
            // the 'changed' event handler above should now have been invoked
          });
        });
      });
    });
  };

  useEffect(() => {
    initEnigmaAppObject();
  }, []);

  return (
    <>
      <div>will output jsx table</div>
    </>
  );
};

export default TablePage;
