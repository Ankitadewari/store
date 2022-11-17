import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Entry() {
  let navigate = useNavigate();
  let loggedin = localStorage.getItem("loggedin")
  useEffect(() => {
    if (loggedin && loggedin == true) {
        navigate("/products")
     } else {
        navigate("/login")
     }
  }, [loggedin])
  
  
  return <div> </div>
}

export default Entry