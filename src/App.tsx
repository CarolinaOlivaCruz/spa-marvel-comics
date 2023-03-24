import React from "react";
import RoutesComponent from "./routes";
import GlobalStyle from "./styles/globalStyle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "dotenv/config";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RoutesComponent />
      <div>
      <ToastContainer />
      ...
    </div>
    </div>
  );
}

export default App;
