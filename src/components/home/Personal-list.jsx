import "./css/personal-list.css";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";

export let PersonalList = () => {
  let { profile } = useParams();
  let { userdata, sample } = useContext(AppContext);

  let [personaldata, Setpersonaldata] = useState({});

  useEffect(() => {
    console.log(userdata);
    Setpersonaldata(userdata)
  }, []);
  return (
    <div className="container-fluid form-background">
      <div className="row">
        <div>Sample</div>
        <div>username: "{personaldata.USER_NAME}"</div>
        <div>{sample}</div>
        <div></div>
      </div>
    </div>
  );
};
