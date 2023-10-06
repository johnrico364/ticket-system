import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Outlet, Link } from "react-router-dom";

export let Home = () => {
  return (
    <div className="">
      <ul class="nav justify-content-end nav-tabs align-content-center navigation">
        <li class="nav-item">
          <Link class="nav-link link-light mx-md-3" to={"add"}>
            Add
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-light mx-md-3" to={'list'}>
            List
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-light mx-md-3" to={'about-us'}>
            About us
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-warning mx-2" to={'/'}>
            Sign out
          </Link>
        </li>
      </ul>
      <div className="display-3">
      </div>
      <Outlet />
    </div>
  );
};
