import { QDocProvider } from "./components/QDocProvider";
import ObjectsPage from "./components/ObjectsPage";
import "./App.css";
import TablePage from "./components/TablePage";
import VariablesPage from "./components/VariablesPage";
const App = () => (
  <>
    <QDocProvider>
      <h1>A Textbox that updates a Qlik Variable</h1>
      <VariablesPage />
      <h1>Chart</h1>
      <ObjectsPage />
      <h1>Getting data from a Qlik Sense Table to create a custom table in the mashup</h1>
      <TablePage />

      <h1>Router</h1>
    </QDocProvider>
  </>
);

export default App;
