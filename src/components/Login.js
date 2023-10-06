import "./home/css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";

export let Login = () => {
  let navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="text-logo">E-YORN AIRLINE</div>
      <div className="row p-2 justify-content-center  login-row align-items-center">
        <div className="col-md-6">
          <div className="row justify-content-center border">
            <div className="col-md-8 border">
              <div className="p-2">
                <h3 className="eyorn-label">Log in to E-YORN</h3>
                <input
                  className="input-container mt-3 w-100 my-2 d-block "
                  type="text"
                  placeholder="Email Address:"
                />

                <input
                  className="input-container mt-3 w-100 my-2 d-block"
                  type="Password"
                  placeholder="Password:"
                />
                <button
                  onClick={() => navigate("/home/add")}
                  className="w-100 mt-2 btn btn-primary"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 text-end ">
            Don't have account?
            <Link className=" align-self-end " to={"/signup"}>
              Sign up
            </Link>
          </div>
        </div>
        <div className="col-md-6">Pic side</div>
      </div>
    </div>
  );
};
