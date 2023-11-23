import "./css/Update.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Update = () => {
  const { userdata, ticketdata, setTicketdata } = useContext(AppContext);

  console.log(ticketdata);
  return (
    <div className="container-fluid">
      <div className="row update-background">
        <div className="col-12">
          <div className="row m-3 border w-50">
            <div className="col-12 h4">Ticket Information</div>
            <div className="col-12">Ticket ID: {ticketdata.ticket_id}</div>
            <div className="col-12">Owner's UUID: {ticketdata.created_by}</div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                className="input-container form-control"
                type="date"
                placeholder="Depart:"
              />
            </div>
            <div className="col-12">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
