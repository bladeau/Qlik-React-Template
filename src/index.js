import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//For more information on React, recommended videos:
//1. https://www.youtube.com/watch?v=w7ejDZ8SWv8
//2. https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb //Playlist has internal order

//This template uses the more modern functional component - https://reactjs.org/docs/components-and-props.html
//State Management - Context API //https://academind.com/tutorials/reactjs-context-api-with-hooks
//There is no CSS Framework, Typescript, Proptypes  being used for sake of clarity, these can be added to React easily
//QIX Connectivity is through EnigmaJS and Nebula - https://qlik.dev/
//Authentication will require qlik-web-integration-id generated on the Qlik Server - https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Admin/mc-adminster-web-integrations.htm?_ga=2.262508236.1126061394.1677023203-904946953.1619484271

root.render(<App />); //NebulaJS wont work in Strict Mode https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
