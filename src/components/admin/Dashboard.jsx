import axios from "axios";
import "./css/Dashboard.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const Dashboard = () => {
  const [depart, setDepart] = useState([]);
  const [returning, setReturning] = useState([]);
  const today = new Date();

  const departReturnAPI = async () => {
    try {
      const yyyy = today.getFullYear();
      const mm = today.getMonth() + 1;
      const dd = today.getDate();
      const dateString = `${dd}-${mm}-${yyyy}`;

      const departNow = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/depart/${dateString}`
      );
      setDepart(departNow.data.items);
      const returnNow = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/return/${dateString}`
      );
      setReturning(returnNow.data.items);
    } catch (error) {}
  };

  const data = useQuery({
    queryKey: ["depart", "return"],
    queryFn: departReturnAPI,
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center dashboard-container overflow-auto">
        <div className="col-12 ">
          <div className="row">
            <div className="depart-title ps-4">Departing now:</div>
            <div className="border mt-2"></div>
            <div className="row depart-now-container overflow-auto justify-content-center">
              <div className="col-lg-5 mt-3 me-3 ticket-values-container">
                <div className="row">
                  <div className="col-8">
                    <div className="row mt-2">
                      <div className="col-8">
                        <div className="ticket-logo">E-YORN AIRLINES</div>
                        <div className="ticket-logo-2">
                          Fly with the friendly skies
                        </div>
                      </div>
                      <div className="col-4 ticket-type">{"ticket.class"}</div>
                      <div className="border"></div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-6">
                        <div className="ticket-label">From</div>
                        <div className="ticket-value">{"ticket.ticket_from"}</div>
                      </div>
                      <div className="col-6">
                        <div className="ticket-label">To</div>
                        <div className="ticket-value">{"ticket.ticket_to"}</div>
                      </div>
                      <div className="col-7 mt-4">
                        <div className="ticket-label">User ID</div>
                        <div className="ticket-value">{"ticket.created_by"}</div>
                      </div>
                      <div className="col-5 mt-4"></div>
                      <div className="col-3 mt-4">
                        <div className="ticket-label">Departure</div>
                        <div className="ticket-value">{"ticket.depart"}</div>
                      </div>
                      <div className="col-3 mt-4">
                        <div className="ticket-label">Return</div>
                        <div className="ticket-value">{"ticket.return"}</div>
                      </div>
                      <div className="col-6 mt-4">
                        <div className="ticket-label">Price</div>
                        <div className="ticket-value">₱ {"ticket.price"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 ticket-picture border"></div>
                </div>
              </div>
              <div className="col-lg-5 mt-3 me-3 ticket-values-container">
                <div className="row">
                  <div className="col-8">
                    <div className="row mt-2">
                      <div className="col-8">
                        <div className="ticket-logo">E-YORN AIRLINES</div>
                        <div className="ticket-logo-2">
                          Fly with the friendly skies
                        </div>
                      </div>
                      <div className="col-4 ticket-type">{"ticket.class"}</div>
                      <div className="border"></div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-6">
                        <div className="ticket-label">From</div>
                        <div className="ticket-value">{"ticket.ticket_from"}</div>
                      </div>
                      <div className="col-6">
                        <div className="ticket-label">To</div>
                        <div className="ticket-value">{"ticket.ticket_to"}</div>
                      </div>
                      <div className="col-7 mt-4">
                        <div className="ticket-label">User ID</div>
                        <div className="ticket-value">{"ticket.created_by"}</div>
                      </div>
                      <div className="col-5 mt-4"></div>
                      <div className="col-3 mt-4">
                        <div className="ticket-label">Departure</div>
                        <div className="ticket-value">{"ticket.depart"}</div>
                      </div>
                      <div className="col-3 mt-4">
                        <div className="ticket-label">Return</div>
                        <div className="ticket-value">{"ticket.return"}</div>
                      </div>
                      <div className="col-6 mt-4">
                        <div className="ticket-label">Price</div>
                        <div className="ticket-value">₱ {"ticket.price"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 ticket-picture border"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-block returning-now-container overflow-auto border">
            <div className="return-title ps-4">Returning now:</div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
