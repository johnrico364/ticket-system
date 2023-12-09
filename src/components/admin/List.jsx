import "./css/List.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { computeHeadingLevel } from "@testing-library/react";

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
              {/* .map here below */}
              <div className="overflow-auto tickets-list-container">
                {data.isLoading && <h1>Loading...</h1>}
                <div className="row mx-1 justify-content-center">
                  {data?.data?.map((ticket) => {
                    return (
                      <div className="col-lg-5 mt-3 me-3 ticket-values-container" onClick={() => handleUpdate(ticket)}>
                        <div className="row">
                          <div className="col-8">
                            <div className="row mt-2">
                              <div className="col-8">
                                <div className="ticket-logo">
                                  E-YORN AIRLINES
                                </div>
                                <div className="ticket-logo-2">
                                  Fly with the friendly skies
                                </div>
                              </div>
                              <div className="col-4 ticket-type">
                                {ticket.class}
                              </div>
                              <div className="border"></div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-6">
                                <div className="ticket-label">From</div>
                                <div className="ticket-value">
                                  {ticket.ticket_from}
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="ticket-label">To</div>
                                <div className="ticket-value">
                                  {ticket.ticket_to}
                                </div>
                              </div>
                              <div className="col-7 mt-4">
                                <div className="ticket-label">User ID</div>
                                <div className="ticket-value">
                                  {ticket.created_by}
                                </div>
                              </div>
                              <div className="col-5 mt-4"></div>
                              <div className="col-3 mt-4">
                                <div className="ticket-label">Departure</div>
                                <div className="ticket-value">
                                  {ticket.depart}
                                </div>
                              </div>
                              <div className="col-3 mt-4">
                                <div className="ticket-label">Return</div>
                                <div className="ticket-value">
                                  {ticket.return}
                                </div>
                              </div>
                              <div className="col-6 mt-4">
                                <div className="ticket-label">Price</div>
                                <div className="ticket-value">
                                  ₱ {ticket.price}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 ticket-picture border"></div>
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
    </div>
  );
};
