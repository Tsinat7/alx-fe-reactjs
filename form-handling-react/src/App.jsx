import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-6">
      <h1>User Registration</h1>

      {/* Controlled Component Form */}
      <h2>Controlled Form</h2>
      <RegistrationForm />

      <hr className="my-6" />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;