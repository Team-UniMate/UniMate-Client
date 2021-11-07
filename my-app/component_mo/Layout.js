
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApp } from "../redux/actions/LoginAppAction";

const Layout = ({ children }) => {
  const appU = useSelector((state)=>state)
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(loginApp())
  }, [])
  console.log(appU)


  return (
    <div className="max-w-md h-screen flex flex-col mx-auto text-gray-600 antialiased">
        {children}
   </div>
  );
};

export default Layout;