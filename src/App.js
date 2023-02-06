import { QDocProvider } from "./components/QDocProvider";
import SomeConsumer from "./components/SomeConsumer";
import "./App.css";
const App = () => (
  <>
    <QDocProvider>
      <SomeConsumer />
    </QDocProvider>
  </>
);

export default App;
