import React from "react";
import "../CSS/EmployeeList.css";
import { useState, useEffect } from "react";

import { useRef } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Buttonssec from "./Buttonssec";
import { useNavigate } from "react-router-dom";

const EmployeeList = ({ UniqueComponentId, setEditedData }) => {
  // For get method
  const toast = useRef(null);
  const navigate = useNavigate();
  const items = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => {
        toast.current.show({
          severity: "info",
          summary: "Add",
          detail: "Data Added",
        });
      },
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Update",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        toast.current.show({
          severity: "error",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://facebook.github.io/react/";
      },
    },
  ];

  const [data, setData] = useState(null);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://sweede.app/DeliveryBoy/Get-Employee/", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
    // console.log(data)
  }, []);
  const handleok = () => {
    console.log("hi");
    console.log(data);
  };

  const columns = [
    { field: "id", header: "id" },
    { field: "FirstName", header: "NAME" },
    { field: "DOB", header: "DOB" },
    { field: "StartDate", header: "STARTDATE" },
    { field: "EndDate", header: "ENDDATE" },
    { field: "Description", header: "DESCRIPTION" },
    {
      field: "customField",
      header: "",
      body: (id) => (
        <Buttonssec
          id={id}
          UniqueComponentId={UniqueComponentId}
          setqunqid={(data) => {
            setEditedData(data);
            navigate("/Registrationedit");
          }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="mainlist">
        <h2>Employee List</h2>

        <div className="card listdata ">
          <DataTable
            value={data}
            className="datatablelist"
            tableStyle={{ minWidth: "50rem" }}
          >
            {columns.map((col, i) => (
              <Column
                className="collist"
                key={col.field}
                field={col.field}
                header={col.header}
                body={col.body}
              />
            ))}
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
