import "./css/List.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const List = () => {
  const { setTicketdata, ticketdata } = useContext(AppContext);
  const navigate = useNavigate();

  const getallTicketAPI = async () => {
    try {
      let data = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/not-approved"
      );
      return data.data.items;
    } catch (err) {}
  };

  const handleUpdate = (ticket) => {
    setTicketdata(ticket);
    navigate("/admin/update");
  };

  const data = useQuery({
    queryKey: ["ticket"],
    queryFn: getallTicketAPI,
  });

  return (
    <div className="container-fluid">
      <div className="row list-background ">
        <div className="col-12 mt-5">
          <div className="row">
            <div className="col-12">
              <div className="ms-5 list-title"> All ticket to confirm</div>
              <div className="border"></div>
            </div>
            <div className="col-12 mt-2">
              <div className="row mx-5 mb-2 table-discription">
                <div className="col-4 d-flex align-items-center">
                  <span>USER I.D</span>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <span>DEPART</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>RETURN</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span>DESTINATION</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>CLASS TYPE</span>
                </div>
              </div>
              {/* .map here below */}
              <div className="overflow-auto tickets-list-container">
                {data.isLoading && <h1>Loading...</h1>}
                {data.data?.map((ticket) => {
                  return (
                    <div
                      className="row mx-5 mt-1 mb-3 table-values"
                      onClick={() => handleUpdate(ticket)}
                    >
                      <div className="col-4 d-flex align-items-center">
                        <i class="list-pic bi bi-person-circle me-1"></i>
                        <span className="uuid-color">{ticket.created_by}</span>
                      </div>
                      <div className="col-1 d-flex align-items-center">
                        <span>{ticket.depart} </span>
                      </div>
                      <div className="col-2 d-flex align-items-center">
                        <span>{ticket.return} </span>
                      </div>
                      <div className="col-3 d-flex align-items-center">
                        <span>
                          {ticket.ticket_from} - {ticket.ticket_to}
                        </span>
                      </div>
                      <div className="col-2 d-flex align-items-center">
                        <span>{ticket.class}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
