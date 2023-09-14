import React, { useState } from "react";
import Registration from "./Components/Registration";
import EmployeeList from "./Components/EmployeeList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dropdown from "./Components/Dropdown";
import Registrationedit from "./Components/Registrationedit";
const App = () => {
  const [UniqueComponentId, setqunqid] = useState("");
  const [editedData, seteditedData] = useState({});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route
          path="/EmployeeList"
          UniqueComponentId={UniqueComponentId}
          setqunqid={setqunqid}
          element={
            <EmployeeList
              setEditedData={(data) => {
                seteditedData(data);
              }}
            />
          }
        ></Route>
        <Route path="Dropdown" element={<Dropdown />}></Route>

        <Route
          path="/Registrationedit"
          UniqueComponentId={UniqueComponentId}
          element={<Registrationedit editedData={editedData} />}
        ></Route>
      </Routes>
    </Router>

    //  <Registration/>
    // <EmployeeList/>
  );
};

export default App;
