import axios from "axios";
import "./css/Dashboard.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const Dashboard = () => {
  const [depart, setDepart] = useState([]);
  const [returning, setReturning] = useState([]);
  const [dashboardData, setDashboardData] = useState({});
  const today = new Date();

  const departReturnAPI = async () => {
    try {
      const yyyy = today.getFullYear();
      const mm = today.getMonth() + 1;
      let dd = today.getDate();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      const dateString = `${dd}-${mm}-${yyyy}`;

      const departNow = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/depart/${dateString}`
      );
      setDepart(departNow.data.items);

      const returnNow = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/return/${dateString}`
      );
      setReturning(returnNow.data.items);

      const dashboard_Data = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/data"
      );
      setDashboardData(dashboard_Data.data);
      console.log(dashboardData);
      
    } catch (error) {}
  };

  const data = useQuery({
    queryKey: ["depart", "return"],
    queryFn: departReturnAPI,
    refetchInterval: 2000,
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center dashboard-container overflow-auto">
        <div className="col-12 ">
          <div className="row mt-3 data-dashboard">
            <div className="col-3 ps-3 px-2">
              <div className="total-sales data-height text-center pt-2">
                <h4>
                  <span>Total Sales</span>
                  <i class="bi bi-cash-coin data-icons px-2"></i>
                </h4>
                <div className="display-3 mt-4">₱ {dashboardData.total_sales}</div>
              </div>
            </div>
            <div className="col-3 px-2">
              <div className="total-users data-height text-center pt-2">
                <h4>
                  <span>Total Users</span>
                  <i class="bi bi-people-fill data-icons px-2"></i>
                </h4>
                <div className="display-3 mt-4">{dashboardData.total_users}</div>
              </div>
            </div>
            <div className="col-3 px-2">
              <div className="total-flights data-height text-center pt-2">
                <h4>
                  <span>Total Flights</span>
                  <i class="bi bi-airplane-fill data-icons px-2"></i>
                </h4>
                <div className="display-3 mt-4">{dashboardData.total_flights}</div>
              </div>
            </div>
            <div className="col-3 px-2 pe-3">
              <div className="total-approved data-height text-center pt-2">
                <h4>
                  <span>Total Apporoved</span>
                  <i class="bi bi-ticket-perforated-fill data-icons px-2"></i>
                </h4>
                <div className="display-3 mt-4">{dashboardData.total_approved}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="depart-title ps-4">Departing now:</div>
            <div className="border mt-2"></div>
            <div className="row depart-now-container overflow-auto justify-content-center border">
              {depart?.map((ticket) => {
                return (
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
                            <div className="ticket-value">{ticket.depart}</div>
                          </div>
                          <div className="col-3 mt-4">
                            <div className="ticket-label">Return</div>
                            <div className="ticket-value">{ticket.return}</div>
                          </div>
                          <div className="col-6 mt-4">
                            <div className="ticket-label">Price</div>
                            <div className="ticket-value">₱ {ticket.price}</div>
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
          <div className="row mt-3">
            <div className="return-title ps-4">Returning now:</div>
            <div className="border mt-2"></div>
            <div className="row returning-now-container overflow-auto justify-content-center border">
              {returning?.map((ticket) => {
                return (
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
                            <div className="ticket-value">{ticket.depart}</div>
                          </div>
                          <div className="col-3 mt-4">
                            <div className="ticket-label">Return</div>
                            <div className="ticket-value">{ticket.return}</div>
                          </div>
                          <div className="col-6 mt-4">
                            <div className="ticket-label">Price</div>
                            <div className="ticket-value">₱ {ticket.price}</div>
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
  );
};
