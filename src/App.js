import { QDocProvider } from "./components/QDoc";
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
