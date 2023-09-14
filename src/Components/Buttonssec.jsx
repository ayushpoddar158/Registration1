import React from 'react'
import '../App.css'
import { SplitButton } from 'primereact/splitbutton';

import {Routes, Route, useNavigate} from 'react-router-dom';
import { useRef } from 'react';
//import { useRouter } from 'next/router';
// import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { Link } from 'react-router-dom';
import eventEmitter from '../Components/EventEmitter';
const Buttonssec = ({id,UniqueComponentId, setqunqid}) => {
    const handleDeleteClick = () => {
        const url = `https://sweede.app/DeliveryBoy/delete-Employee/${id.id}`;
      
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers your API may require
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Assuming the server sends a JSON response
        })
        .then(data => {
          console.log('Deleted data:', data);
          // Handle success here, e.g., update state or reload data
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors here
        });
      }
      const navigate = useNavigate();

      const handleedit = () => {
        // 👇️ navigate to /contacts
        setqunqid(id)
        // navigate('/Registrationedit');
      };


    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command:handleedit
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: handleDeleteClick
            
        }
     
   
    ];
    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };
  return (
    <div className="card flex justify-content-center tosteachbtn">
    <Toast className='' ref={toast}></Toast>
    <SplitButton className='' label="" icon="pi pi-plus"  model={items} />
</div>
  )
}

export default Buttonssec






 

  




