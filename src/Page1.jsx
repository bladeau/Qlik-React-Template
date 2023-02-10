import React from "react";
import VariablesPage from "./components/VariablesPage";
import ObjectsPage from "./components/ObjectsPage";
function Page1() {
  return (
    <>
      <h1>A Textbox that updates a Qlik Variable</h1>
      <VariablesPage />
      <h1>Charts</h1>
      <ObjectsPage />
    </>
  );
}

export default Page1;
