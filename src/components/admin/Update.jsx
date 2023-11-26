import "./css/Update.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Update = () => {
  const navigate = useNavigate()
  const { userdata, ticketdata, setTicketdata } = useContext(AppContext);
  const [ticketowner, setTicketowner] = useState({});

  const getOwnerAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/get-owner/${ticketdata.created_by}`
      );
      return data.items[0];
    } catch (err) {}
  };

  const data = useQuery({
    queryKey: ["owner"],
    queryFn: getOwnerAPI,
  });

  return (
    <div className="container-fluid">
      <div className="row update-background">
        <div className="col-12">
          <div className="row mt-3 justify-content-center ">
            <div className="col-6 owner-information border">
              <h3>Ticket Details:</h3>
              {console.log(data.data)}
              <p>Ticket ID: {ticketdata.ticket_id}</p>
              <p>Owner: {data.data?.first_name} {data.data?.last_name}</p>
              <p>Owner's ID: {data.data?.id}</p>
              <p>Seat Type: {ticketdata.class}</p>
              <p>To Depart: {ticketdata.depart}</p>
              <p>To Return: {ticketdata.return}</p>
              <i class="bi bi-arrow-return-left" onClick={() => navigate("/admin/list")}></i>
            </div>
            <div className="col-6">sd</div>
          </div>
        </div>
      </div>
    </div>
  );
};
