import "./css/personal-list.css";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";

export let PersonalList = () => {
  let { profile } = useParams();
  let { userdata } = useContext(AppContext);

  return (
    <div className="container-fluid form-background">
      <div className="row">
        Details:
        <h3>username: "{userdata.USER_NAME}"</h3>
        <p>{userdata.FIRST_NAME} {userdata.LAST_NAME}</p>
        <i>{userdata.ID}</i>
        <div></div>
      </div>
    </div>
  );
};
