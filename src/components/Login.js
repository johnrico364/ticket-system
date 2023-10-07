import "./home/css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";


export let Login = () => {
  let navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row p-2 justify-content-center login-row">
        <div id="pic-side" className="col-md-6 d-md-block d-none d-sm-none">
          
        </div>
        <div id="form-side" className="col-md-6">
          <div className="row p-3">
            <div className="text-logo mt-3 mx-3">E-YORN AIRLINE</div>
            <div className="text-logo-2 mx-3">Fly with the friendly skies</div>
          </div>

          <form className="form-container row g-3 m-5 justify-content-center align-content-center">
            <div className="col-10">
              <div className="h3 eyorn-label">Log in to E-YORN</div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    className="input-container form-control"
                    type="text"
                    placeholder="Email Address:"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    className="input-container form-control"
                    type="Password"
                    placeholder="Password:"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col ">
                  <button
                    onClick={() => navigate("/home/add")}
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
          </form>
        </div>
      </div>
    </div>
  );
};
