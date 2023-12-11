import axios from "axios";
import "./css/AddFlight.css";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const AddFlight = () => {
  const navigate = useNavigate();

  const getDestinationAPI = async () => {
    try {
      const { data } = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/add-flight"
      );
      return data.items;
    } catch (err) {}
  };
  const deleteDestinationAPI = async (id) => {
    try {
      await axios.delete(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/add-flight/${id}`
      );
      return true;
    } catch (err) {}
  };

  const handleDelete = async (id) => {
    const status = await deleteDestinationAPI(id);
    status && data.refetch();
  };

  const data = useQuery({
    queryKey: ["destinationAPI"],
    queryFn: getDestinationAPI,
  });

  return (
    <div className="container-fluid">
      <div className="row destination-background">
        <div className="px-5">
          <div className="destination-title">All FLights</div>
          <div className="border mt-2"></div>
          <div className="destination-table mt-3 px-4 overflow-auto">
            <div className="row mb-3 destination-columns">
              <div className="col-1 d-flex align-items-center "></div>
              <div className="col-2 d-flex align-items-center ">
                <span>From</span>
              </div>
              <div className="col-2 d-flex align-items-center ">
                <span>To</span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>Seats</span>
              </div>
              <div className="col-2 d-flex align-items-center ">
                <span>Price</span>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-end "></div>
            </div>
            {/* Map here */}
            {data?.data?.map((destination) => {
              return (
                <div className="row destination-value blue-color">
                  <div className="col-1 d-flex align-items-center ">
                    <i class="bi bi-airplane-fill"></i>
                  </div>
                  <div className="col-2 d-flex align-items-center ">
                    <span>{destination.d_from}</span>
                  </div>
                  <div className="col-2 d-flex align-items-center ">
                    <span>{destination.d_to}</span>
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    <span>{destination.seats}</span>
                  </div>
                  <div className="col-2 d-flex align-items-center text-black">
                    <span>₱ {destination.price}</span>
                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-end ">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(destination.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pe-2 pt-1 text-end blue-color">
            <i
              class="post-new-destination bi bi-send-plus-fill"
              onClick={() => navigate("/admin/flight/add")}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddFlightDestination = () => {
  const navigate = useNavigate();

  const [dfrom, setDfrom] = useState("");
  const [dto, setDto] = useState("");
  const [dprice, setDprice] = useState(null);
  const [dseats, setDseats] = useState(null);
  const [response, setResponse] = useState("");

  const addFlightAPI = async (newPost) => {
    try {
      await axios.post(
        "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/add-flight",
        newPost
      );
      return true;
    } catch (err) {
      setResponse(err.response.data.message);
      return false;
    }
  };

  const handleSubmit = async () => {
    const data = {
      dfrom: dfrom,
      dto: dto,
      price: parseInt(dprice),
      seats: parseInt(dseats),
    };
    const status = await addFlightAPI(data);
    status && navigate("/admin/flight");
  };
  return (
    <div className="container-fluid">
      <div className="destination-background">
        <div className="row justify-content-center ">
          <div className="col-md-8">
            <div className="row destination-form-container align-items-center">
              <div className="col-12">
                <div className="row mb-3 px-3">
                  <div className="add-flight">Add Flight</div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 px-4">
                    <select
                      className="w-100 add-input input-destination"
                      onChange={(e) => setDfrom(e.target.value)}
                    >
                      <option disabled selected>
                        From
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
                  <div className="col-md-6 px-4">
                    <select
                      className="w-100 add-input input-destination"
                      onChange={(e) => setDto(e.target.value)}
                    >
                      <option disabled selected>
                        To
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
                <div className="row mb-3">
                  <div className="col px-4">
                    <input
                      type="number"
                      className="w-100 input-destination"
                      placeholder="Price:"
                      onChange={(e) => setDprice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col px-4">
                    <input
                      type="number"
                      className="w-100 input-destination"
                      placeholder="Seats:"
                      onChange={(e) => setDseats(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3 px-3 pt-2">
                  <div className="text-danger">{response}</div>
                </div>
                <div className="row">
                  <div className="col-12 px-4">
                    <button className="add-flight-btn" onClick={handleSubmit}>
                      Add Flight
                    </button>
                    <div className="mt-3 text-end">
                      <Link to={"/admin/flight"}>Back to Add Flight</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
