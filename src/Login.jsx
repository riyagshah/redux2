import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Authorised, Tokenfunc } from "./Redux/Authaction";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // eslint-disable-next-line 
      const [info, setInfo] = useState({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
      });
      const handleLogin = () => {
        const payload = info;
        axios("https://reqres.in/api/login",{
            method:"POST",
            data : payload
        })
        .then((res)=> dispatch(Tokenfunc(res.data.token)))
        .then(()=> dispatch(Authorised(true)))
        .then(()=> navigate(-2,{replace:true}))
        .catch(error => console.log(error));
      };
      return (
            <div>
                  <input
                        type="text"
                        placeholder="user email"
                        defaultValue={"eve.holt@reqres.in"}
                  />
                  <input
                        type="password"
                        placeholder="user password"
                        defaultValue={"cityslicka"}
                  />
                  <button onClick={handleLogin}>Log In</button>
            </div>
      );
}

export default Login;
