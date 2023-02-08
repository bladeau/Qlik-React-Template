import { QDocProvider } from "./components/QDocProvider";
import ObjectsPage from "./components/ObjectsPage";
import "./App.css";
import TablePage from "./components/TablePage";
import VariablesPage from "./components/VariablesPage";
const App = () => (
  <>
    <QDocProvider>
      <h1>Chart</h1>
      <ObjectsPage />
      <h1>Getting data from a Qlik Sense Table to create a custom table in the mashup</h1>
      <TablePage />
      <h1>A drop down to toggle a variable in Qlik</h1>
      <VariablesPage />
      <h1>Router</h1>
    </QDocProvider>
  </>
);

export default App;
