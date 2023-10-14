import "./css/Add.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export let Add = () => {
  return (
    <div>
      <div className="container">
        <div className="row parent justify-content-center ">
          <div className="col-12 child">
            <div className="text-white p-2" style={{ fontSize: "12px" }}>
              <i class="bi bi-airplane-fill pe-1"></i> Flight
            </div>
            <div className="row add-container mx-3 mb-2 ">
              <div className="col-md-5 add-form-container me-3">
                <form className="row ">
                  <div className="col-5">
                    <label className="small-label ">From</label>
                    <input
                      className="w-100 add-input "
                      type="text"
                      placeholder="Origin"
                    />
                  </div>
                  <i class="col-1 bi bi-arrows-expand-vertical align-self-center"></i>
                  <div className="col-5">
                    <label className="small-label">To</label>
                    <input
                      className="w-100 add-input"
                      type="text"
                      placeholder="Select Distination"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 add-form-container me-3">
                <form className="row ">
                  <div className="col-5">
                    <label className="small-label ">Depart</label>
                    <input
                      className="w-100 add-input "
                      type="text"
                      placeholder="Jan, 1, 2023"
                    />
                  </div>
                  <i class="col-1 bi bi-arrows-expand-vertical align-self-center"></i>
                  <div className="col-5">
                    <label className="small-label">Class</label>
                    <select className="w-100 add-input">
                      <option>Economy</option>
                      <option>Economy Plus</option>
                      <option>Business</option>
                      <option>First Class</option>
                      <option>VIP</option>
                    </select>
                  </div>
                </form>
              </div>

              <button className="col-md-1 book-btn ms-2">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
