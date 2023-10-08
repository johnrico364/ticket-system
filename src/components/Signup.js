import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home/css/Sign-up.css";
import "./home/css/Login.css";

export let Signup = () => {
  let navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div id="form-side" className="sign-up-side col-md-6">
          <div className=" row p-3">
            <div className="text-logo mt-3 mx-3">E-YORD AIRLINE</div>
            <div className="text-logo-2 mx-3">Fly with the friendly skies</div>
          </div>

          <form className="form-container row m-5">
            <div className="h3 create-account">Create account</div>
            <div className="row ">
              <div className="col-6">
                <input
                  type="text"
                  class="input_Container form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-6">
                <input
                  type="text"
                  class="input_Container form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="row ">
              <div class="col">
                <input
                  type="text"
                  class="input_Container form-control"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="row">
              <div class="col">
                <input
                  type="password"
                  class="input_Container form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row">
              <p className="terms">
                <input type="checkbox" className="check-box" />
                <span className="span-text">
                  I agree to the term of service and privacy policy
                </span>
              </p>
            </div>
            <div className="row">
              <div class="col mt-1">
                <button
                  class="signup-btn w-100 btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="row text-center justify-content-center ">
                <p className="col-6">- Or Sign Up With -</p>
                <div className="col-8">
                  <Link
                    to={"https://www.google.com/account/about/"}
                    class="google-icon bi bi-google mx-2"
                    style={{ fontSize: "35px" }}
                  ></Link>
                  <Link
                    to={"https://www.facebook.com/"}
                    class="fb-icon bi bi-facebook mx-2"
                    style={{ fontSize: "35px" }}
                  ></Link>
                  <Link
                    to={"https://github.com/"}
                    class="gitbub-icon bi bi-github mx-2"
                    style={{ fontSize: "35px" }}
                  ></Link>
                </div>
                <div className="col-8">
                  <p>
                    Already have an account? <Link to={"/ "}>Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          id="pic-side"
          className="pic-side border col-md-6 d-md-block d-none d-sm-none"
        ></div>
      </div>
    </div>
  );
};
