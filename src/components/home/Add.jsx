import "./css/Add.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import axios from "axios";

export let Add = () => {
  const { userdata } = useContext(AppContext);
  const navigate = useNavigate()

  let [origin, setOrigin] = useState("");
  let [destination, setDestination] = useState("");
  let [depart, setDepart] = useState("");
  let [classSeat, setClassSeat] = useState("");

  const [response, setResponse] = useState("");
  const [isadd, setIsadd] = useState("");

  const ticketAPI = async (newPost) => {
    try {
      const data = await axios.post(
        "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/create",
        newPost
      );
      return true
      setIsadd(data.data.message);
    } catch (err) {
      setResponse(err.response.data.message);
      return false
    }
  };
  const handleBook = async () => {
    const data = {
      createdBy: userdata.ID,
      ticketFrom: origin,
      ticketTo: destination,
      depart: depart,
      class: classSeat,
    };

    const status = await ticketAPI(data);
    status && navigate("/home/ticketfrom")
  };

  const handleDepart = (e) => {
    //mga alert validation, need to display in UI
    let inputDate = e.target.value;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    if (year < yyyy) {
      setResponse("Invalid year");
      return;
    }
    if (year == yyyy && month < mm) {
      setResponse("Invalid month");
      return;
    }
    if (month == mm && day <= dd) {
      setResponse("Invalid day");
      return;
    }
    if (month == mm && day >= dd) {
      setResponse("");
    }
    //Code above, is validation para di siya kapili ug date na before sa current date
    setDepart(formattedDate);
  };

  return (
    <div>
      <div className="container">
        <div className="row parent justify-content-center ">
          <div className="col-12 child">
            <div className="text-white p-2" style={{ fontSize: "12px" }}>
              <i class="bi bi-airplane-fill pe-1"></i> Flight
              <span className="is-add"> {isadd === "" || `! ${isadd}`} </span>
            </div>
            <div className="row add-container mx-3 mb-2">
              <div className="col-md-5 add-form-container me-3">
                <div className="row ">
                  <div className="col-5">
                    <label className="small-label">From</label>
                    <select
                      className="w-100 add-input"
                      onChange={(e) => setOrigin(e.target.value)}
                    >
                      <option disabled selected>
                        Origin
                      </option>
                      <option>Baguio</option>
                      <option>Boracay</option>
                      <option>Cagayan de Oro</option>
                      <option>Cebu</option>
                      <option>Cotabato</option>
                      <option>Davao</option>
                      <option>Dumaguete</option>
                      <option>General Santos</option>
                      <option>Iloilo</option>
                      <option>Kalibo</option>
                      <option>Manila</option>
                      <option>Masbate</option>
                      <option>Palawan</option>
                      <option>Tacloban</option>
                      <option>Zamboanga</option>
                    </select>
                  </div>
                  <i class="col-1 bi bi-arrows-expand-vertical align-self-center"></i>
                  <div className="col-5">
                    <label className="small-label">To</label>
                    <select
                      className="w-100 add-input"
                      onChange={(e) => setDestination(e.target.value)}
                    >
                      <option disabled selected>
                        Select Distination
                      </option>
                      <option>Baguio</option>
                      <option>Boracay</option>
                      <option>Cagayan de Oro</option>
                      <option>Cebu</option>
                      <option>Cotabato</option>
                      <option>Davao</option>
                      <option>Dumaguete</option>
                      <option>General Santos</option>
                      <option>Iloilo</option>
                      <option>Kalibo</option>
                      <option>Manila</option>
                      <option>Masbate</option>
                      <option>Palawan</option>
                      <option>Tacloban</option>
                      <option>Zamboanga</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-5 add-form-container me-3">
                <div className="row ">
                  <div className="col-5">
                    <label className="small-label ">Depart</label>
                    <input
                      className="w-100 add-input "
                      type="date"
                      onChange={handleDepart}
                    />
                  </div>
                  <i class="col-1 bi bi-arrows-expand-vertical align-self-center"></i>
                  <div className="col-5">
                    <label className="small-label">Class</label>
                    <select
                      className="w-100 add-input"
                      onChange={(e) => setClassSeat(e.target.value)}
                    >
                      <option disabled>Class Type</option>
                      <option>Economy</option>
                      <option>Economy Plus</option>
                      <option>Business</option>
                      <option>First Class</option>
                      <option>VIP</option>
                    </select>
                  </div>
                </div>
              </div>

              <button onClick={handleBook} className="col-md-1 book-btn ms-2">
                Search Flight
              </button>
              <div className="book-response p-0 mt-2">
                {response === "" || `! ${response}`}
              </div>
            </div>
          </div>
        </div>
        <div className="ui-row row justify-content-center">
          <div className="col-md-5">
            <h4>Why Everyone Flies</h4>
            <p style={{ fontSize: "12px" }}>
              E-yorn operates the widest network in the Philippines, offering
              flights to Manila, Cebu, Davao, Iloilo, Clark, and more! With
              flexible bookings, low fares, and global best safety practices,
              the airline continues to boost travel confidence for every Juan by
              providing connectivity to key cities in Asia, Australia, and
              Middle East.
            </p>
          </div>
          <div className="col-md-4 footer-picture"></div>
        </div>
      </div>
    </div>
  );
};
