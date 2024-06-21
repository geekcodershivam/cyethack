import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import SearchBar from "./SearchBar";
import TableComponent from "./TableComponent";

const Lists = () => {
  const students = useSelector((state) => state.student.students);
  const navigate = useNavigate();
  const handleRowClick = (itemId) => {
    sessionStorage.setItem("selectedItemId", itemId);
    navigate("/list/details");
  };

  return (
    <div>
      <div>
        <SearchBar />
        <NavBar />
      </div>
      <TableComponent students={students} handleRowClick={handleRowClick} />
    </div>
  );
};

export default Lists;


