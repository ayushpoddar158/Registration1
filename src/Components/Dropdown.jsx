import React from 'react'
import '../CSS/Dropdown.css'
import { useState ,useEffect} from "react";
import { MultiSelect } from 'primereact/multiselect';


import Select from 'react-select';
import { colourOptions } from '../assets/data';



const Dropdown = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch('https://sweede.app/DeliveryBoy/Get-Employee/')
      .then(response => response.json())
      .then(data => {
        const employeeData = data.map(employee => ({
          label: employee.FirstName,
          value: employee.FirstName
        }));
        setOptions(employeeData);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

 
  return (
  <div className="maindrop">
    <div className="side1">
<h3>Select employee dropdown</h3>
<div className="card flex justify-content-center">
<MultiSelect
      value={selectedOptions}
      options={options}
      onChange={(e) => setSelectedOptions(e.value)}
      filter
      placeholder="Select employees"
      className='multiselectdropdown'
    />
        </div>
    </div>
    <div className="side2">
<h3>Date picker</h3>
<input className='datedropdown' type="date" placeholder='select date' />
    </div>
  </div>
  )
}

export default Dropdown