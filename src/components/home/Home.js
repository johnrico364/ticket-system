import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../../App";

export let Home = () => {
  let { userdata } = useContext(AppContext);

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
        <div className="">
          <Navbar expand="lg">
            <Navbar.Brand>
              <div className="nav-logo mx-2">E-YORN AIRLINES</div>
              <div className="nav-logo-2 mx-2">Fly with the friendly skies</div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ backgroundColor: "#EAEAEA" }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="navigation-links nav-link" to="add">
                  Book
                </Link>
                <Link
                  className="navigation-links nav-link"
                  to={`${userdata.ID}`}
                >
                  Manage
                </Link>
                <Link className="navigation-links nav-link " to="list">
                  Dashboard
                </Link>
                <Link className="navigation-links nav-link" to="explore">
                  Explore
                </Link>
                <Link className="navigation-links nav-link" to="aboutus">
                  About
                </Link>
              </Nav>
              <Nav className="w-100 justify-content-end  mx-sm-5">
                <Nav.Link className="navigation-links mx-sm-3 " href="/">
                  <i
                    class="bi bi-person-circle mx-1"
                    style={{ fontSize: "15px" }}
                  ></i>
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
