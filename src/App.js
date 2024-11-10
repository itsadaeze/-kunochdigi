import React from "react";
import { FormProvider } from "./context/FormContext";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

function App() {
  return (
    <FormProvider>
      <div className="App">
        <Dashboard />
        <Form />
      </div>
    </FormProvider>
  );
}

export default App;
