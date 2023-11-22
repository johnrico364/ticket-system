import "./css/personal-list.css";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export let PersonalList = () => {
  const navigate = useNavigate();
  const { userdata, setUserdata } = useContext(AppContext);
  const checkUser = sessionStorage.getItem("user");

  const [editprofile, setEditprofile] = useState(false);

  const getcreateTicketAPI = async () => {
    try {
      const ses = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/session/${checkUser}`
      );
      setUserdata(ses.data.items[0]);

      const data = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/personal/${checkUser}`
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
        <div className="col-4 mt-5 parent-profile-container">
          <div className="row">
            <div className="col-12 me-2 text-center profile-container">
              <i class="profile-pic bi bi-person-circle"></i>
              <div className="profile-name">
                {userdata.first_name} {userdata.last_name}
              </div>
              <div className="profile-details mt-1">{userdata.user_name}</div>
              <div className="profile-details mt-3">{userdata.id}</div>
              <div
                className="profile-details edit-link mt-5"
                onClick={() => setEditprofile(!editprofile)}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 ms-3 mt-5">
          {editprofile && (
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col">
                    <input
                      className="input-container form-control "
                      type="text"
                      placeholder="Firstname:"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <input
                      className="input-container form-control "
                      type="text"
                      placeholder="Lastname:"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <input
                      className="input-container form-control "
                      type="text"
                      placeholder="Email:"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button className="login-btn w-100 btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
