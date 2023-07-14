import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./login.scss";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const handleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="header">Welcome Back</div>
        <div className="text">
          For the purpose of industry regulation, your details are required.
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="label">
            Email address
            <input
              type="text"
              onChange={handleChange("email")}
              value={values.email}
            />
          </label>

          <label className="label">
            Password
            <div className="flex">
              <input
                type={values.showPassword ? "text" : "password"}
                onChange={handleChange("password")}
                value={values.password}
                placeholder="8-characters"
              />
              <span className="icon" onClick={handleShowPassword}>
                <>
                  {values.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </>
              </span>
            </div>
          </label>
          <button type="submit" className="btn">
            SIGN IN
          </button>
        </form>
      </div>
      <div className="foot">
        <p className="footer">Forgot your Password ? Ask for Help</p>
      </div>
    </div>
  );
};

export default Login;
