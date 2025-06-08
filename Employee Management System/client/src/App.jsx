import React, {createContext, useState} from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmp from "./component/AddEmp";
import ListEmp from "./component/ListEmp";
import ViewEmp from "./component/ViewEmp";
import EditEmp from "./component/EditEmp";
import "./App.css";

const listContext = createContext();

const App = () => {

  const [Employeelist, setEmployeeList] = useState([]);

  return (
    <>
      <listContext.Provider value={{ Employeelist, setEmployeeList }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ListEmp />} />
            <Route path="/add" element={<AddEmp />} />
            <Route path="/view/:id" element={<ViewEmp />} />
            <Route path="/edit/:id" element={<EditEmp />} />
          </Routes>
        </Router>
      </listContext.Provider>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { listContext };

export default App;
