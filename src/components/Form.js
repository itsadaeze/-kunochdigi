import React, { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import Modal from "./Modal";  

const Form = () => {
  const { formState, setFieldValue, setFieldError } = useFormContext();
  const [showModal, setShowModal] = useState(false); 

  // Regex for validating email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // List of known email providers 
  const commonEmailProviders = ['gmail.com', 'yahoo.com', 'outlook.com'];

  // Function to check if the email domain is a common email provider
  const isCommonEmailProvider = (email) => {
    const domain = email.split('@')[1];
    return commonEmailProviders.includes(domain);
  };

  useEffect(() => {
   
    setFieldError("name", "");
    setFieldError("email", "");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

 
  const resetFormState = () => {
    setFieldValue("name", "");
    setFieldValue("email", "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setFieldError("name", "");
    setFieldError("email", "");

    let isValid = true;

    // Validate name
    if (!formState.name) {
      setFieldError("name", "Name is required");
      isValid = false;
    }

    // Validate email (using regex)
    if (!formState.email) {
      setFieldError("email", "Email is required");
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      setFieldError("email", "Please enter a valid email address");
      isValid = false;
    } else if (!isCommonEmailProvider(formState.email)) {
      // Warn the user if the email domain is not a common provider
      setFieldError("email", "The email domain is suspicious or uncommon");
      isValid = false;
    }

    if (isValid) {
      // Form is valid, submit the form
      console.log("Form Submitted!", formState);

    
      setShowModal(true);

      // Reset the form state manually
      resetFormState();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-10 border rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Form Section</h1>
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFieldValue("name", e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {formState.errors.name && (
            <span className="text-red-500 text-sm">{formState.errors.name}</span>
          )}
        </div>
        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            value={formState.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {formState.errors.email && (
            <span className="text-red-500 text-sm">{formState.errors.email}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <h2 className="text-xl md:text-2xl font-bold text-center">Form Submitted Successfully!</h2>
          <p className="text-center">Your form has been submitted successfully.</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Form;



