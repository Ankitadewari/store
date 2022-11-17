import "./index.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  firstname: Yup.string()
    .required("First name is a required field"),
  lastname: Yup.string()
    .required("Last name is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not be greater than 16 characters")
});

function Signup() {
  let navigate = useNavigate();
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", firstname:"", lastname:"", password: "" }}
        onSubmit={(values) => {
          let users = []
          let user = {
            email:values.email,
            firstname:values.firstname,
            lastname:values.lastname,
            password:values.password
          }
          if (localStorage.getItem("users")){
            users = JSON.parse(localStorage.getItem("users"))
            let userExist = users.find(x => x?.email === user?.email)
            if (userExist){
              alert("User already exists, Please login!")
              return;
            }
          }
          users.push(user)
          localStorage.setItem("users",JSON.stringify(users))
          localStorage.setItem("loggedin","true")
          navigate("/products")
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
                <span>Signup</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id*"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  placeholder="Enter first name*"
                  className="form-control inp_text"
                  id="fname"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.firstname && touched.firstname && errors.firstname}
                </p>
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  placeholder="Enter last name*"
                  className="form-control inp_text"
                  id="lname"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.lastname && touched.lastname && errors.lastname}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password*"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Signup</button>

                <button class="secondary" onClick={()=>{
                  navigate("/login")
                }}>Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup;