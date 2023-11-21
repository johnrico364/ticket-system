import "./css/personal-list.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export let PersonalList = () => {
  const navigate = useNavigate();
  const { userdata } = useContext(AppContext);

  const checkUser = sessionStorage.getItem("user");

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
  const handleEdit = async () => {
    alert("sds");
  };

  const data = useQuery({
    queryKey: ["personal ticket"],
    queryFn: getcreateTicketAPI,
  });

    
  return (
    <div className="container-fluid ">
      <div className="row px-5 form-background justify-content-center">
        <div className="col-4 mt-5 parent-profile-container">
          <div className="row">
            {checkUser && (
              <div className="col-12 me-2 text-center profile-container">
                <i class="profile-pic bi bi-person-circle"></i>
                <div className="profile-name">
                  {userdata.FIRST_NAME} {userdata.LAST_NAME}
                </div>
                <div className="profile-details mt-1">{userdata.USER_NAME}</div>
                <div className="profile-details mt-3">{userdata.ID}</div>
                <div
                  className="profile-details edit-link mt-5"
                  onClick={handleEdit}
                >
                  Edit
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-8 mt-5">
          <div className="row">
            <div className="col-12">NAme here</div>
          </div>
        </div>
      </div>
    </div>
  );
};
