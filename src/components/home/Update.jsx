import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Update = () => {
  const { userdata, ticketdata, setTicketdata } = useContext(AppContext);

  console.log(ticketdata);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
