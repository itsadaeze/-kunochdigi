import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Table from "./components/Table";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
           
            <Sidebar />
            
            <div className="flex-1 overflow-auto p-4 md:p-10">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/table" element={<Table />} />
                <Route path="/form" element={<Form />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
