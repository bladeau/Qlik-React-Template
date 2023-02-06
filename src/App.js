import { QDocProvider } from "./components/QDocProvider";
import ObjectsPage from "./components/ObjectsPage";
import "./App.css";
import TablePage from "./components/TablePage";
const App = () => (
  <>
    <QDocProvider>
      <h1>Objects</h1>
      <ObjectsPage />
      <h1>Tables</h1>
      <TablePage />
    </QDocProvider>
  </>
);

export default App;
