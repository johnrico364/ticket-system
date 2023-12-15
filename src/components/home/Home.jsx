import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

export let Home = () => {
  const checkUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (!checkUser) {
      navigate("/");
    }
  }, []);

  let { userdata } = useContext(AppContext);
  const navigate = useNavigate()

  const handleSignout = () =>{
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div className="container-fluid container-background">
      <div className="row">
        <div className="col-12 ">
          <div className="row justify-content-end mx-5">
            <div className="col-6 text-end mt-2">
              <i class="boot-icons bi bi-facebook mx-2"></i>
              <i class="boot-icons bi bi-instagram mx-2"></i>
              <i class="boot-icons bi bi-github mx-2"></i>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div className="ps-5">
          <Navbar expand="lg">
            <Navbar.Brand>
              <div className="nav-logo mx-2">E-YORN AIRLINES</div>
              <div className="nav-logo-2 mx-2">Fly with the friendly skies</div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navigation-colapse"
            />
            <Navbar.Collapse>
              <Nav className="w-75">
                <Link className="navigation-links nav-link" to="add">
                  Book Flight
                </Link>
                <Link
                  className="navigation-links nav-link"
                  to="profile"
                >
                  Profile & Destination
                </Link>
                <Link className="navigation-links nav-link" to="explore">
                  Explore
                </Link>
                <Link className="navigation-links nav-link" to="aboutus">
                  About Us
                </Link>
              </Nav>
              <Nav className="w-25 justify-content-end">
                <Nav.Link onClick={handleSignout} className="navigation-links signout-btn d-flex align-items-center ">
                  <i class="bi bi-person-circle mx-1 boot-icons "></i>
                  Sign out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
