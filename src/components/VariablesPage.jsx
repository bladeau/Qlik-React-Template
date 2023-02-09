import React, { useContext, useEffect, useState } from "react";
import { QDocContext } from "./QDocProvider";

const VariablesPage = () => {
  const enigma = useContext(QDocContext);

  //Setup DOM References

  const initEnigmaAppObject = async () => {
    //https://qlik.dev/libraries-and-tools/enigmajs

    // Get Table and Data
    const aVariable = await enigma.getVariableByName("vMyVariable"); // It's a table
    console.log(aVariable);
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
