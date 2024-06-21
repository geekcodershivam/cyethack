import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import List from "./pages/ListPage/List";
import ListDetails from "./pages/ListDetailsPage/ListDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute element={<Home />} />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/list" element={<PrivateRoute element={<List />} />} />
      <Route path="/list/details" element={<PrivateRoute element={<ListDetails />} />} />
    </Routes>
  );
}

export default App;
