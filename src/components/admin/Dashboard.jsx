import axios from "axios";
import "./css/Dashboard.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const Dashboard = () => {
  const [depart, setDepart] = useState([]);
  const [returning, setReturning] = useState([]);
  const today = new Date();

  const departReturnAPI = async () => {
    try {
      const yyyy = today.getFullYear();
      const mm = today.getMonth() + 1;
      const dd = today.getDate();
      const dateString = `${dd}-${mm}-${yyyy}`;

      const departNow = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/depart/${dateString}`
      );
      setDepart(departNow.data.items);
      const returnNow = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/dashboard/return/${dateString}`
      );
      setReturning(returnNow.data.items);
    } catch (error) {}
  };

  const data = useQuery({
    queryKey: ["depart", "return"],
    queryFn: departReturnAPI,
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center dashboard-container">
        <div className="col-11">
          <div className="row d-block depart-now-container overflow-auto border">
            <div className="depart-title">Departing now:</div>
            <div className="col-12">
              <div className="row mx-1 mt-1 mb-3 table-values">
                <div className="col-4 d-flex align-items-center">
                  <i class="list-pic bi bi-person-circle me-1"></i>
                  <span className="uuid-color">
                    0AE58A62-9D83-03A6-E063-0311A8C00564
                  </span>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <span>27-11-2023 </span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>28-11-2023 </span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span>Cotabato - Cotabato</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>Economy Plus</span>
                </div>
              </div>
              <div className="row mx-1 mt-1 mb-3 table-values">
                <div className="col-4 d-flex align-items-center">
                  <i class="list-pic bi bi-person-circle me-1"></i>
                  <span className="uuid-color">
                    0AE58A62-9D83-03A6-E063-0311A8C00564
                  </span>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <span>27-11-2023 </span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>28-11-2023 </span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span>Cotabato - Cotabato</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>Economy Plus</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-block returning-now-container overflow-auto border">
            <div className="return-title">Returning now:</div>
            <div className="col-12">
            <div className="row mx-1 mt-1 mb-3 table-values">
              <div className="col-4 d-flex align-items-center">
                <i class="list-pic bi bi-person-circle me-1"></i>
                <span className="uuid-color">
                  0AE58A62-9D83-03A6-E063-0311A8C00564
                </span>
              </div>
              <div className="col-1 d-flex align-items-center">
                <span>27-11-2023 </span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>28-11-2023 </span>
              </div>
              <div className="col-3 d-flex align-items-center">
                <span>Cotabato - Cotabato</span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>Economy Plus</span>
              </div>
            </div>
            <div className="row mx-1 mt-1 mb-3 table-values">
              <div className="col-4 d-flex align-items-center">
                <i class="list-pic bi bi-person-circle me-1"></i>
                <span className="uuid-color">
                  0AE58A62-9D83-03A6-E063-0311A8C00564
                </span>
              </div>
              <div className="col-1 d-flex align-items-center">
                <span>27-11-2023 </span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>28-11-2023 </span>
              </div>
              <div className="col-3 d-flex align-items-center">
                <span>Cotabato - Cotabato</span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>Economy Plus</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
