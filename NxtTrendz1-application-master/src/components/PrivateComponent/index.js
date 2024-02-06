import React from "react";
import Cookies from "js-cookie";
import {Navigate, Outlet} from "react-router-dom"


const PrivateComponet = () => {
   const jwtToken = Cookies.get('jwt_token')
   return jwtToken? <Outlet/>: <Navigate to = "/login" />
}

export default PrivateComponet