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
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");

  const [response, setResponse] = useState("");

  const getcreateTicketAPI = async () => {
    try {
      const ses = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/session/${checkUser}`
      );
      setUserdata(ses.data.items[0]);

      const data = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/add-flight`
      );
      return data.data.items;
    } catch (err) {}
  };
  const updateUserAPI = async (newPost) => {
    try {
      await axios.put(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/profile/${userdata.id}`,
        newPost
      );
      return true;
    } catch (err) {
      setResponse(err.response.data.message);
    }
  };

  const handleUpdate = async () => {
    const update = {
      fname: fname === "" ? userdata.first_name : fname,
      lname: lname === "" ? userdata.last_name : lname,
      username: username === "" ? userdata.user_name : username,
    };
    console.log(update);
    const status = await updateUserAPI(update);

    status && setEditprofile(!editprofile);
  };

  const data = useQuery({
    queryKey: ["personal ticket"],
    queryFn: getcreateTicketAPI,
    refetchInterval: 2000,
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
                {editprofile ? "Cancel" : "Edit"}
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 ms-3 mt-5">
          <div className="row">
            <div className="col-12 edit-container">
              {editprofile && (
                <div className="row">
                  <div className="col-12 p-0">
                    <div className="row">
                      <div className="col">
                        <input
                          className="input-container form-control "
                          type="text"
                          placeholder="Firstname:"
                          defaultValue={userdata?.first_name}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <input
                          className="input-container form-control "
                          type="text"
                          placeholder="Lastname:"
                          defaultValue={userdata?.last_name}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <input
                          className="input-container form-control "
                          type="text"
                          placeholder="Email:"
                          defaultValue={userdata?.user_name}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="error-response">{response}</div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <button
                          className="login-btn w-100 btn btn-primary"
                          onClick={handleUpdate}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 p-0 mt-1 ">
              <h4 className="fw-bold">Available Flights</h4>
              <div className="overflow-auto approved-ticket-container px-3">
                <div className="row mb-3 destination-columns">
                  <div className="col-1 d-flex align-items-center "></div>
                  <div className="col-3 d-flex align-items-center">
                    <span>From</span>
                  </div>
                  <div className="col-3 d-flex align-items-center ">
                    <span>To</span>
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    <span>Seats</span>
                  </div>
                  <div className="col-2 d-flex align-items-center ">
                    <span>Price</span>
                  </div>
                  <div className="col-1 d-flex align-items-center justify-content-end "></div>
                </div>
                {/* Map here */}
                {data?.data?.map((destination) => {
                  return (
                    <div className="row destination-value blue-color">
                      <div className="col-1 d-flex align-items-center ">
                        <i class="bi bi-airplane-fill"></i>
                      </div>
                      <div className="col-3 d-flex align-items-center ">
                        <span>{destination.d_from}</span>
                      </div>
                      <div className="col-3 d-flex align-items-center ">
                        <span>{destination.d_to}</span>
                      </div>
                      <div className="col-2 d-flex align-items-center">
                        <span>{destination.seats}</span>
                      </div>
                      <div className="col-2 d-flex align-items-center text-black">
                        <span>₱ {destination.price}</span>
                      </div>
                      <div className="col-1 d-flex align-items-center justify-content-end "></div>
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
