import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export let Home = () => {
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
            <Navbar.Brand href="/">
              <div className="nav-logo mx-2">E-YORN AIRLINES</div>
              <div className="nav-logo-2 mx-2">Fly with the friendly skies</div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ backgroundColor: "#EAEAEA" }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="navigation-links" href="add">
                  Book
                </Nav.Link>
                <Nav.Link className="navigation-links" href=":profile">
                  Manage
                </Nav.Link>
                <Nav.Link className="navigation-links" href="list">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="navigation-links" href="explore">
                  Explore
                </Nav.Link>
                <Nav.Link className="navigation-links" href="aboutus">
                  About
                </Nav.Link>
                <Nav.Link className="navigation-links ms-md-5" href="/">
                  <i
                    class=" bi bi-person-circle mx-1"
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
