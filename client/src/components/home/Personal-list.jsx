import "./css/personal-list.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export let PersonalList = () => {
  let { userdata } = useContext(AppContext);

  const getcreateTicketAPI = async () => {
    try {
      let data = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/personal/${userdata.ID}`
      );
      return data.data.items;
    } catch (err) {
      console.log(err);
    }
  };

  const data = useQuery({
    queryKey: ["personal ticket"],
    queryFn: getcreateTicketAPI,
  });

  return (
    <div className="container-fluid ">
      <div className="row px-5 form-background justify-content-center">
        <div className="col-3 mt-5 parent-profile-container">
          <div className="row">
            <div className="col-12 me-2 text-center profile-container">
              <i class="profile-pic bi bi-person-circle"></i>
              <div className="profile-name">
                {userdata.FIRST_NAME} {userdata.LAST_NAME}
              </div>
              <div className="profile-details mt-1">{userdata.USER_NAME}</div>
              <div className="profile-details">{userdata.ID}</div>
            </div>
          </div>
        </div>
        <div className="col-9 mt-5">
          <div className="row">
            <div className="col-12">
              <select className="ticket-show-type">
                <option value="true">Upcoming flights</option>
                <option value="false">History</option>
              </select>
            </div>
            <div className="col-12 mt-2">
              <div className="table-discription row mb-2 me-3">
                <div className="col-5">FLIGHT NO.</div>
                <div className="col-2">DATE</div>
                <div className="col-3">DESTINATION</div>
                <div className="col-2 text-end"></div>
              </div>
              {/* Ari na mag .map */}
              <div className="overflow-auto  ticket-profile-container">
                {data.data?.map((ticket) => {
                  console.log(ticket)
                  return (
                    <div className="ms-1 table-values row mt-1 mb-3 me-3">
                      <div className="col-5 d-flex align-items-center ">
                        <span className="uuid-color">
                          {ticket.ticket_id}
                        </span>
                      </div>
                      <div className="col-2 d-flex align-items-center">
                        <span>{ticket.depart}</span>
                      </div>
                      <div className="col-3 d-flex align-items-center">
                        <span>{ticket.ticket_from} - {ticket.ticket_to}</span>
                      </div>
                      <div className="col-2 d-flex align-items-center">
                        <span className="w-100 text-end">
                          <Link
                            className="edit-link nav-link"
                            to={"/home/update"}
                          >
                            EDIT
                          </Link>
                        </span>
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
