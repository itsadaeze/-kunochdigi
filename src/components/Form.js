import React, { useEffect } from "react";
import { useFormContext } from "../context/FormContext";

const Form = () => {
  const { formState, setFieldValue, setFieldError } = useFormContext();

  // This useEffect runs only once when the component mounts
  useEffect(() => {
    // You can clear the errors only once here if needed
    setFieldError("name", "");
    setFieldError("email", "");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  // Empty dependency array ensures this runs only once after mount

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only set errors when necessary
    if (!formState.name) {
      setFieldError("name", "Name is required");
    }
    if (!formState.email) {
      setFieldError("email", "Email is required");
    }

    // If everything is good, submit form data
    if (formState.name && formState.email) {
      console.log("Form Submitted!", formState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 border rounded-lg shadow-lg">
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
  );
};

export default Form;
