import "./index.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
});

function Login() {
  let navigate = useNavigate();

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          let users = []
          if (localStorage.getItem("users")){
            users = JSON.parse(localStorage.getItem("users"))
            let foundUser = users.find(x => x?.email === values?.email)
            if(foundUser) {
              if (foundUser?.password === values?.password){
                navigate("/products")
                localStorage.setItem("loggedin","true")
              }else{
                alert("Invalid password")
              }
            }else{
              alert("User not available, Please signup!")
            }
          }else{
            alert("No user available")
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>

                <button class="secondary" onClick={()=>{
                    navigate("/signup")
                }} >Signup</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Login;