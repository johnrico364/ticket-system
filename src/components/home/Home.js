import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Outlet, Link } from "react-router-dom";

export let Home = () => {
  return (
    <div className=" container-fluid ">
      <div className="row">
        <div className="col-12">
          <div className="row justify-content-end ">
            <div className="col-6 text-end mt-2">
              <i class="boot-icons bi bi-facebook mx-2"></i>
              <i class="boot-icons bi bi-instagram mx-2"></i>
              <i class="boot-icons bi bi-github mx-2"></i>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div className="col-12">
          <ul class="nav align-content-center navigation">
            <li>
              <div className="nav-logo mx-2">E-YORN AIRLINES</div>
              <div className="nav-logo-2 mx-2">Fly with the friendly skies</div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"add"}>
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"list"}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"about-us"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
