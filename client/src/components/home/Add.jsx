import "./css/Add.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import axios from "axios";

export let Add = () => {
  const { userdata } = useContext(AppContext);

  let [origin, setOrigin] = useState("");
  let [destination, setDestination] = useState("");
  let [depart, setDepart] = useState("");
  let [classSeat, setClassSeat] = useState("");

  const ticketAPI = async (newPost) => {
    try {
      await axios.post("", newPost);
    } catch (err) {
      console.log(err);
    }
  };

  let handleOrigin = (e) => {
    setOrigin(e.target.value);
  };
  let handleDestination = (e) => {
    setDestination(e.target.value);
  };

  let handleDepart = (e) => {
    //mga alert validation, need to display in UI
    let inputDate = e.target.value;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    if (year < yyyy) {
      alert("Invalid year");
      return;
    }
    console.log("day " + day);
    if (year == yyyy && month < mm) {
      alert("invalid month");
      return;
    }
    if (month == mm && day <= dd) {
      alert("invalid day");
      return;
    }
    //Code above, is validation para di siya kapili ug date na before sa current date
    setDepart(formattedDate);
  };

  let handleClass = (e) => {
    setClassSeat(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <p className="text-warning">
          {origin} || {destination} || {depart} -- {classSeat} === {userdata.ID}
        </p>
        <div className="row parent justify-content-center ">
          <div className="col-12 child">
            <div className="text-white p-2" style={{ fontSize: "12px" }}>
              <i class="bi bi-airplane-fill pe-1"></i> Flight
            </div>
            <div className="row add-container mx-3 mb-2 ">
              <div className="col-md-5 add-form-container me-3">
                <div className="row ">
                  <div className="col-5">
                    <label className="small-label">From</label>
                    <select className="w-100 add-input" onChange={handleOrigin}>
                      <option disabled selected>
                        Origin
                      </option>
                      <option>Baguio</option>
                      <option>Boracay (Caticlan)</option>
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
                      onChange={handleDestination}
                    >
                      <option disabled selected>
                        Select Distination
                      </option>
                      <option>Baguio</option>
                      <option>Boracay (Caticlan)</option>
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
                    <select className="w-100 add-input" onChange={handleClass}>
                      <option>Economy</option>
                      <option>Economy Plus</option>
                      <option>Business</option>
                      <option>First Class</option>
                      <option>VIP</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="col-md-1 book-btn ms-2">Book</button>
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
