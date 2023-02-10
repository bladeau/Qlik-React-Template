import { QDocProvider } from "./components/QDocProvider";

import "./App.css";
import TablePage from "./components/TablePage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Page1";

const App = () => (
  <>
    <QDocProvider>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/table" element={<TablePage />}></Route>
        </Routes>
      </BrowserRouter>
    </QDocProvider>
  </>
);

export default App;
