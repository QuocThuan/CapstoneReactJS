import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { loginApiFacebookAction } from "../redux/Reducers/UserReducers";

const LoginFacebook = () => {
  const dispatch = useDispatch();
  const responseFacebook = async (response) => {
    const action = loginApiFacebookAction(response);
    dispatch(action);
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="1110896646895307"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton=" Facebook"
        icon={<i className="fab fa-facebook"></i>}
      />
    </div>
  );
};

export default LoginFacebook;
