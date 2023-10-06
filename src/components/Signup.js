import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home/css/Sign-up.css";

export let Signup = () => {
  let navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="sign-up-side col-md-6">
          <div className="row">
            <b className="m-3">E-YORD AIRLINE</b>
          </div>

          <form className=" row g-3 m-5">
            <div className="h3 create-account">Create account</div>
            <div className="row mt-3">
              <div className="col-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row mt-3">
              <p className="terms">
                <input type="checkbox" className="check-box"/><span className="span-text">I agree to the term of service and
                privacy policy</span>
              </p>
            </div>
            <div className="row">
              <div class="col mt-1">
                <button
                  class="w-100 btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="row text-center">
                <p>- Or Sign Up With -</p>
              </div>
              <div className="col"></div>
            </div>
          </form>
        </div>
        <div className="pic-side border col-md-6 d-md-block d-none d-sm-none">
          pic side
        </div>
      </div>
    </div>
  );
};
