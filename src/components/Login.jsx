import "./home/css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";

export let Login = () => {
  let navigate = useNavigate();
  let { userdata, setUserdata } = useContext(AppContext);

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [response, setResponse] = useState("");

  let loginAPI = async () => {
    try {
      let { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/${username}/${password}`
      );
      setUserdata(data.data[0]);
      return data.data[0];
    } catch (err) {
      setResponse(err.response.data.message);
    }
  };

  let handleLogin = async () => {
    let getdata = await loginAPI();
    // setUserdata(dataget);

    if (username === "" || password === "") {
      setResponse("Fill up all the container");
      return;
    }
    if (username === getdata?.USER_NAME && password === getdata?.PASSWORD) {
      navigate(`/home/${getdata?.ID}`);
    }
    // setResponse("Press again to continue...");
  };

  return (
    <div className="container-fluid">
      <div className="row p-2 justify-content-center login-row">
        <div
          id="pic-side"
          className="col-md-6 d-md-block d-none d-sm-none"
        ></div>
        <div className="col-md-6">
          <div className="row p-3">
            <div className="text-logo mt-3 mx-3">E-YORN AIRLINE</div>
            <div className="text-logo-2 mx-3">Fly with the friendly skies</div>
            <div>{userdata?.USER_NAME}</div>
          </div>

          <div className="form-container row g-3 m-5 justify-content-center align-content-center">
            <div className="col-10">
              <div className="h3 eyorn-label">Log in to E-YORN</div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    className="input-container form-control"
                    type="text"
                    placeholder="Username:"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    className="input-container form-control"
                    type="Password"
                    placeholder="Password:"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <span className="error-response">{response}</span>
              <div className="row mt-3">
                <div className="col ">
                  <button
                    onClick={handleLogin}
                    className="login-btn w-100 btn btn-primary"
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mt-2 text-end ">
                    <Link className="Create-Link" to={"/signup"}>
                      Create Account?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
