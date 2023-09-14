import React, { useState } from "react";
import "../CSS/Registration.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css";
import { json } from "react-router-dom";

const Registration = () => {
  let name, value;
  const [obj, setObj] = useState({
    name: "",
    lastname: "",
    dob: "",
    study: "",
    startdate: "",
    enddate: "",
    currentsal: "",
    desc: "",
  });
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setObj({ ...obj, [name]: value });
  };

const [descii,setdescii]=useState("");
  const { quill, quillRef } = useQuill();
  const [age, setAge] = React.useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
    name = e.target.name;
    // console.log(quill);
    value = e.target.value;
    setObj({ ...obj, [name]: value });
  };

  const handlesubmit = () => {
    var body = {
      FirstName: obj.name,
      LastName: obj.lastname,

      DOB: obj.dob,
      Study: obj.study,
      StartDate: obj.startdate,
      EndDate: obj.enddate,
      CurrentSalary: parseInt(obj.currentsal),
      Description: descii,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://sweede.app/DeliveryBoy/Add-Employee/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
// console.log(obj)
  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const html = quill.root.innerHTML;
        const text = quill.getText();
        setdescii(html)
        // handleInput({target:{name:"desc",value:html}})
        // console.log('HTML:', html);
        // console.log('Text:', text);
      });
    }
  }, [quill]);

  return (
    <div className="div">
      <b className="employee-registration-form">Employee Registration Form</b>
      <div className="child" />
      <div className="item" />
      <div className="enter-your-name inpname">
        <input
          onChange={handleInput}
          type="text"
          name="name"
          value={obj.name}
          placeholder="enter name"
        />
      </div>
      <div className="first-name">First Name*</div>
      <div className="inner" />
      <div className="enter-your-name1 inpname">
        <input
          onChange={handleInput}
          type="text"
          name="lastname"
          value={obj.lastname}
          placeholder="enter last name"
        />
      </div>
      <div className="last-name">Last Name*</div>
      <div className="rectangle-div" />
      {/* <div className="select-employee">Select employee</div> */}
      <div className="rectangle-div" />
      <div className="enter-your-dob">
        <input onChange={handleInput} type="date" name="dob" value={obj.dob} />
      </div>
      <div className="dob">Dob</div>
      <div className="child2" />
      {/* <div className="select-employee1">Select employee</div> */}
      <div className="child2" />
      <div className="be">
        <Box sx={{}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              name="study"
              onChange={handleChange}
            >
              <MenuItem value={"BE"}>BE</MenuItem>
              <MenuItem value={"MECH"}>MECH</MenuItem>
              <MenuItem value={"CSE"}>CSE</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="study">Study</div>
      <div className="child4" />
      <div className="current-salary ">Current Salary</div>
      <div className="div1 currinp">
        <input
          onChange={handleInput}
          type="number"
          name="currentsal"
          value={obj.currentsal}
          placeholder="30000"
        />
      </div>
      <div className="child5" />
      <div className="child6" />
      <div className="child7" />
      <div className="description">Description</div>

      {/* <div className="select-employee2">Select employee</div> */}
      <div className="child8" />
      <div className="div2 inpdate1">
        <input
          onChange={handleInput}
          type="date"
          name="startdate"
          value={obj.startdate}
        />
      </div>
      <div className="start-date">Start Date</div>
      <div className="rectangle-parent2">
        <div className="group-child2" />
        {/* <img className="vector-icon" alt="" src="/undefined5.png" /> */}
      </div>
      {/* <div className="select-employee3">Select employee</div> */}
      <div className="child9" />
      <div className="div3 inpdate1">
        <input
          onChange={handleInput}
          type="date"
          name="enddate"
          value={obj.enddate}
        />
      </div>
      <div className="end-date">End Date</div>
      <div className="rectangle-parent3">
        <div className="group-child2" />
        {/* <img className="vector-icon" alt="" src="/undefined6.png" /> */}
      </div>
      <div className="child10 " />
      <div className="child11 " />
      <Button className="save butts1" onClick={handlesubmit}>
        Save
      </Button>
      <Button className="cancel butts2">Cancel</Button>
      {/* <img className="path-140-icon" alt="" src="/undefined7.png" /> */}

      {/* <img className="path-141-icon" alt="" src="/undefined8.png" /> */}
      <b className="b">
        {" "}
        <div style={{ width: 500, height: 300 }}>
          <div ref={quillRef} />
        </div>
      </b>

      {/* <img className="child12" alt="" src="/undefined17.png" /> */}
    </div>
  );
};

export default Registration;
