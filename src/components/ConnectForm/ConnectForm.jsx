import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ConnectForm = ({ setHide }) => {
  return (
    <div className="h-screen w-screen fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#000000a5]">
      <div className="h-[70%] w-[60%] bg-white rounded-xl p-6 relative">
        <button
          onClick={() => setHide(false)}
          className="absolute top-6 right-8 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          <i className="fa-regular fa-circle-xmark text-2xl"></i>
        </button>
        <div>
          <h1 className="text-xl mb-4">Enquiry Form</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              Number: "",
              Message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
              }
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.Number) {
                errors.Number = "Required";
              }
              if (!values.Message) {
                errors.Message = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 p-2 border rounded w-full"
                    aria-label="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex items-center justify-evenly">
                  {" "}
                  <div className="w-1/2 mr-8">
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 p-2 border rounded w-full"
                      aria-label="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="w-1/2 ml-8">
                    <label htmlFor="Number" className="block text-gray-700">
                      Phone Number
                    </label>
                    <Field
                      type="number"
                      name="Number"
                      id="Number"
                      className="mt-1 p-2 border rounded w-full"
                      aria-label="Number"
                    />
                    <ErrorMessage
                      name="Number"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="Message" className="block text-gray-700">
                    Message
                  </label>
                  <Field
                    type="text"
                    name="Message"
                    id="Message"
                    className="mt-1 p-2 border rounded w-full"
                    aria-label="Message"
                  />
                  <ErrorMessage
                    name="Message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
                  aria-label="Submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;
