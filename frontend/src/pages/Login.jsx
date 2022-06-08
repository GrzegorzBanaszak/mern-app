import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import FormGroupe from "../components/FormGroupe";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
const defFormData = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Login = () => {
  const [formData, setFormData] = useState(defFormData);
  const { email, password } = formData;

  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      nav("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, nav, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
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

export default Login;
