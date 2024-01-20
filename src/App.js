import "./App.css";

import { MainRoutes } from "./Component/MainRoutes";
import { Navbar } from "./Component/Navbar";
import { Ai } from "./Component/Ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbar />
      <MainRoutes />
      <Ai />
      <ToastContainer />
    </div>
  );
}

export default App;
