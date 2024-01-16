import logo from "./logo.svg";
import "./App.css";

import { MainRoutes } from "./Component/MainRoutes";
import { Navbar } from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
