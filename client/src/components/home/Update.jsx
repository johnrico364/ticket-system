import "./css/Update.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Update = () => {
  const { userdata, ticketdata, setTicketdata } = useContext(AppContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-white ">
          This is update
        </div>
      </div>
    </div>
  );
};
