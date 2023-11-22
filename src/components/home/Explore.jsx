import { useNavigate } from "react-router-dom";
import "./css/Explore.css";

export const Explore = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid explore-background">
        <div className="row">
          <div className="mt-5 ms-2 ">
            <div className="top-big-text">Top Destinations</div>
            <div className="top-small-text">
              Here is top recommended destination in Philippines
            </div>
          </div>
        </div>
        <div className="row destination-container mt-md-4 ">
          <div className="col-md-3 col-6">
            <div className="row h-100 ">
              <div className="col-12 px-md-2">
                <div
                  onClick={() => navigate("/home/add")}
                  className="ms-2 el-nido-container background-picture h-100 text-white d-flex flex-column"
                >
                  <div className="mt-auto picture-text-large">El Nido</div>
                  <div className="picture-text-small">Palawan</div>
                </div>
              </div>
              <div className="col-12 mt-3 px-md-2">
                <div
                  onClick={() => navigate("/home/add")}
                  className="ms-2 baguio-container background-picture h-100 text-white d-flex flex-column "
                >
                  <div className="mt-auto picture-text-large">Baguio</div>
                  <div className="picture-text-small">Benguet</div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-md-2 col-md-3 col-6 ">
            <div
              onClick={() => navigate("/home/add")}
              className="boracay-container background-picture h-100 text-white d-flex flex-column"
            >
              <div className="mt-auto picture-text-large">Boracay</div>
              <div className="picture-text-small">Aklan</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row me-2 h-100">
              <div className="col-md-12 col-6 px-md-2">
                <div
                  onClick={() => navigate("/home/add")}
                  className="puerto-pricesa-container background-picture h-100 text-white d-flex flex-column ms-md-0 ms-2 mt-md-0 mt-2"
                >
                  <div className="mt-auto picture-text-large">
                    Puerto Princesa
                  </div>
                  <div className="picture-text-small">Palawan</div>
                </div>
              </div>
              <div className="col-md-4 col-6 px-md-2 mt-md-3">
                <div
                  onClick={() => navigate("/home/add")}
                  className="zamboanga-hermosa background-picture h-100 text-white d-flex flex-column mt-md-0 mt-2"
                >
                  <div className="mt-auto picture-text-large">Fiesta Pilar</div>
                  <div className="picture-text-small">Zamboanga</div>
                </div>
              </div>
              <div className="col-md-8 col-6 px-md-2 mt-md-3">
                <div
                  onClick={() => navigate("/home/add")}
                  className="whale-watching background-picture h-100 text-white d-flex flex-column ms-md-0 ms-2 mt-md-0 mt-3"
                >
                  <div className="mt-auto picture-text-large">
                    Whale Shark Watching
                  </div>
                  <div className="picture-text-small">Cebu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
