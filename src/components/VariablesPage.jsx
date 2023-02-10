import React, { useContext, useEffect, useState } from "react";
import { QDocContext } from "./QDocProvider";

const VariablesPage = () => {
  const [QlikVariable, setQlikVariable] = useState(null);
  const [LocalVariable, setLocalVariable] = useState("Loading...");
  const enigma = useContext(QDocContext);

  //Setup DOM References
  const handleChange = (e) => {
    //QlikVariable.setDualValue(e.target.value, 1);
    setLocalVariable(e.target.value);
    QlikVariable.setStringValue(e.target.value);

    //  QlikVariable.SetStringValue(e.target.value);
  };
  const initEnigmaAppObject = async () => {
    //https://qlik.dev/libraries-and-tools/enigmajs

    // Get Variable
    const _QlikVariable = await enigma.getVariableByName("vMyVariable"); // It's a GenericVariable... https://help.qlik.com/en-US/sense-developer/May2021/Subsystems/NetSDKAPIref/Content/Qlik.Engine.GenericVariable.htm
    setQlikVariable(_QlikVariable);
    _QlikVariable.getLayout().then((res) => {
      setLocalVariable(res.qText);
    });
  };

  useEffect(() => {
    initEnigmaAppObject();
  }, []);

  return (
    <>
      <input type="text" value={LocalVariable} onChange={handleChange} />
    </>
  );
};

export default VariablesPage;
