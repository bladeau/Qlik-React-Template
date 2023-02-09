import React, { useContext, useEffect, useState } from "react";
import { QDocContext } from "./QDocProvider";

const VariablesPage = () => {
  const [QlikVariable, setQlikVariable] = useState(null);

  const enigma = useContext(QDocContext);

  //Setup DOM References

  const initEnigmaAppObject = async () => {
    //https://qlik.dev/libraries-and-tools/enigmajs

    // Get Table and Data
    const aVariable = await enigma.getVariableByName("vMyVariable"); // It's a Variable
    const contentOfVariable = await aVariable.getRawContent();
    console.log(contentOfVariable);
    setQlikVariable(contentOfVariable);
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
      <br />
      <div>The Variable Value is: {QlikVariable && QlikVariable}</div>
    </>
  );
};

export default VariablesPage;
