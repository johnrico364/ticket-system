import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

export const Admin = () => {
  const checkUser = sessionStorage.getItem("user");
  const navigate = useNavigate();

  const {setUserdata} = useContext(AppContext);

  const checkAdminAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/session/${checkUser}`
      );
      if (data.items[0].status === null) {
        navigate("/home");
      }
      setUserdata(data.items[0]);
      return data.items[0];
    } catch (err) {
      console.log(err);
    }
  };

  const data = useQuery({
    queryKey: ["admin"],
    queryFn: checkAdminAPI,
  });

  return (
    <div className="container-fluid container-background">
      <ul className="nav">
        <li>
          <div className="nav-logo mx-2">E-YORN AIRLINES</div>
          <div className="nav-logo-2 mx-2">Fly with the friendly skies</div>
        </li>
        <li className="nav-item mx-1">
          <Link className="navigation-links nav-link" to={"list"}>List</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="navigation-links nav-link" to={"dashboard"}>Dashboard</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
