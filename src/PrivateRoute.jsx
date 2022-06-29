import React from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
  const auth = useSelector((store)=> store.auth.auth);
  if(!auth){
    return <Navigate to={"/Login"} replace={false}/>
  }
  
  return children;
}

export default PrivateRoute