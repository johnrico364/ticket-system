import { useContext } from "react";
import "./css/TicketFrom.css";
import { AppContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TicketFrom = () => {
  const navigate = useNavigate()
  const { ticketdata } = useContext(AppContext);

  const getTicketAPI = async () => {
    try {
      const tickets = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/ticket-from/${ticketdata.ticketFrom}/${ticketdata.ticketTo}`
      );
      return tickets.data.items;
    } catch (err) {
      console.log(err);
    }
  };

  const data = useQuery({
    queryKey: ["ticket"],
    queryFn: getTicketAPI,
  });
  return (
    <div className="container-fluid">
      <div className="row ticketfrom-background">
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-10 overflow-auto ticketfrom-container px-4 border">
              <div className="row">
                <h1 className="flight-title text-center ">TICKETS FROM:</h1>
                <h1 className="text-center">
                  <span className="brand-coloring">
                    {ticketdata.ticketFrom}
                  </span>{" "}
                  to{" "}
                  <span className="brand-coloring">{ticketdata.ticketTo}</span>
                </h1>
              </div>
              <div className="row table-discription table-font-size mb-2">
                <div className="col-3 d-flex align-items-center">
                  <span>TICKET ID</span>
                </div>
                <div className="col-2">
                  <span>FROM</span>
                </div>
                <div className="col-2">
                  <span>TO</span>
                </div>
                <div className="col-1">
                  <span>DEPART</span>
                </div>
                <div className="col-1">
                  <span>RETURN</span>
                </div>
                <div className="col-2">
                  <span>CLASS</span>
                </div>
                <div className="col-1 px-1">
                  <span>APPROVED</span>
                </div>
              </div>

              {data.data?.map((ticket) => {
                return (
                  <div className="row table-values table-font-size mt-1 mb-3">
                    <div className="col-3 d-flex align-items-center">
                      <span>{ticket.ticket_id}</span>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                      <span>{ticket.ticket_from}</span>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                      <span>{ticket.ticket_to}</span>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                      <span>{ticket.depart}</span>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                      <span>{ticket.return}</span>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                      <span>{ticket.class}</span>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                      <span>{ticket.approved}</span>
                    </div>
                    <div className="col-3"></div>
                  </div>
                );
              })}
            </div>
            <div className="col-10 border">
              <i class="tktfrom-return-btn bi bi-arrow-return-left" onClick={()=> navigate("/home/profile")}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
