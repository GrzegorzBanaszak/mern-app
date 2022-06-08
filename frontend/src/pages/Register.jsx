import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import FormGroupe from "../components/FormGroupe";
const defFormData = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(defFormData);

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <FormGroupe value={name} name="name" onChange={onChange}>
            Enter your name
          </FormGroupe>
          <FormGroupe
            value={email}
            type="email"
            name="email"
            onChange={onChange}
          >
            Enter your email
          </FormGroupe>
          <FormGroupe
            value={password}
            type="password"
            name="password"
            onChange={onChange}
          >
            Enter password
          </FormGroupe>
          <FormGroupe
            value={password2}
            type="password"
            name="password2"
            onChange={onChange}
          >
            Confirm password
          </FormGroupe>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
