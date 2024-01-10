import "./css/Update.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Update = () => {
  const navigate = useNavigate();
  const { userdata, ticketdata, setTicketdata } = useContext(AppContext);

  const getOwnerAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/get-owner/${ticketdata.created_by}`
      );
      return data.items[0];
    } catch (err) {}
  };
  const approvedAPI = async (updatePost) => {
    try {
      await axios.put(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/to-confirm/update/${ticketdata.ticket_id}`,
        updatePost
      );
      return true;
    } catch (err) {}
  };
  const deleteTicketAPI = async () => {
    try {
      await axios.delete(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/to-confirm/update/${ticketdata.ticket_id}`
      );
      return true;
    } catch (err) {}
  };

  const handleApproved = async () => {
    const data = {
      approved : "yes"
    }
    const status = await approvedAPI(data);
    status && navigate("/admin/list");
  };
  const handleTerminate = async () => {
    const status = await deleteTicketAPI();
    status && navigate("/admin/list");
  };

  const data = useQuery({
    queryKey: ["owner"],
    queryFn: getOwnerAPI,
  });

  return (
    <div className="container-fluid">
      <div className="update-background">
        <div className="row justify-content-center ">
          <div className="col-md-8 border update-ticket">
            <div className="row">
              <div className="col-8">
                <div className="row mt-2">
                  <div className="col-8">
                    <div className="ticket-update-logo">E-YORN AIRLINES</div>
                    <div className="ticket-update-logo-2">
                      Fly with the friendly skies
                    </div>
                  </div>
                  <div className="col-4 ticket-update-type">
                    {ticketdata.class}
                  </div>
                  <div className="border"></div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="ticket-update-label">From</div>
                    <div className="ticket-update-value">
                      {ticketdata.ticket_from}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="ticket-update-label">To</div>
                    <div className="ticket-update-value">
                      {ticketdata.ticket_to}
                    </div>
                  </div>
                  <div className="col-6 mt-4">
                    <div className="ticket-update-label">Name</div>
                    <div className="ticket-update-value">
                      {data.data?.first_name} {data.data?.last_name}
                    </div>
                  </div>
                  <div className="col-6 mt-4">
                    <div className="ticket-update-label">User ID</div>
                    <div className="ticket-update-value">
                      {ticketdata.created_by}
                    </div>
                  </div>

                  <div className="col-3 mt-4">
                    <div className="ticket-update-label">Departure</div>
                    <div className="ticket-update-value">
                      {ticketdata.depart}
                    </div>
                  </div>
                  <div className="col-3 mt-4">
                    <div className="ticket-update-label">Return</div>
                    <div className="ticket-update-value">
                      {ticketdata.return}
                    </div>
                  </div>
                  <div className="col-6 mt-4">
                    <div className="ticket-update-label">Price</div>
                    <div className="ticket-update-value">
                      ₱ {ticketdata.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 ticket-update-picture border"></div>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-6">
                <i
                  class="bi bi-arrow-return-left return-update-btn"
                  onClick={() => navigate("/admin/list")}
                ></i>
              </div>
              <div className="col-6 p-0 text-end">
                <button className="update-btns me-4" onClick={handleTerminate}>Terminate</button>
                <button className="update-btns" onClick={handleApproved}>Approved</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
