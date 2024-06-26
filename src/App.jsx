import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modul from "./Application/Component/Modul";


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Modul />} />
    </Routes>
  </Router>
);

export default App;
