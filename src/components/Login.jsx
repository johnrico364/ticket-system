import "./home/css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";

export let Login = () => {
  const checkUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (checkUser) {
      navigate("home/profile");
    }
  }, []);

  let navigate = useNavigate();
  let { userdata, setUserdata } = useContext(AppContext);

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [response, setResponse] = useState("");

  let loginAPI = async () => {
    try {
      let { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/login/${username}/${password}`
      );
      setUserdata(data.data[0]);
      return data.data[0];
    } catch (err) {
      setResponse(err.response.data.message);
      return false;
    }
  };

  let handleLogin = async () => {
    if (username === "" || password === "") {
      setResponse("Fill up all the container");
      return;
    }
    const getdata = await loginAPI();

    const user = sessionStorage.setItem("user", getdata.USER_NAME);
    if (getdata.STATUS === "admin") {
      navigate("/admin/list");
    } else if (getdata.USER_NAME === username) {
      navigate("/home/profile");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row p-2 justify-content-center login-row">
        <div className="pic-side pic-side-login col-md-6 d-md-block d-none d-sm-none"></div>
        <div className="login-side col-md-6">
          <div className="row p-3">
            <div className="text-logo mt-3 mx-3">E-YORN AIRLINE</div>
            <div className="text-logo-2 mx-3">Fly with the friendly skies</div>
          </div>

          <div className="form-container row g-3 m-5 justify-content-center align-content-center">
            <div className="col-10">
              <div className="h3 eyorn-label">Log in to E-YORN</div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    className="input_Container form-control"
                    type="text"
                    placeholder="Username:"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    className="input_Container form-control"
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
