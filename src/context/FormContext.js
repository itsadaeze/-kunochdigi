import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    errors: {}, 
  });

  const setFieldValue = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setFieldError = (name, error) => {
    setFormState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

  return (
    <FormContext.Provider value={{ formState, setFieldValue, setFieldError }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
