import destination from "./css/AddFlight.css";

export const AddFlight = () => {
  return (
    <div className="container-fluid">
      <div className="row destination-background">
        <div className="px-5">
          <div className="destination-title">All FLights</div>
          <div className="border mt-2"></div>
          <div className="destination-table mt-3 px-4 overflow-auto border">
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
            <div className="row destination-value blue-color">
              <div className="col-1 d-flex align-items-center ">
                <i class="bi bi-airplane-fill"></i>
              </div>
              <div className="col-2 d-flex align-items-center ">
                <span>From</span>
              </div>
              <div className="col-2 d-flex align-items-center ">
                <span>To</span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>Seats</span>
              </div>
              <div className="col-2 d-flex align-items-center text-black">
                <span>Price</span>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-end ">
                <button className="delete-btn">Delete</button>
              </div>
            </div>
            <div className="row destination-value blue-color">
              <div className="col-1 d-flex align-items-center ">
                <i class="bi bi-airplane-fill"></i>
              </div>
              <div className="col-2 d-flex align-items-center ">
                <span>From</span>
              </div>
              <div className="col-2 d-flex align-items-center ">
                <span>To</span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <span>Seats</span>
              </div>
              <div className="col-2 d-flex align-items-center text-black">
                <span>Price</span>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-end ">
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
          <div className="pe-2 pt-1 text-end blue-color">
            <i class="post-new-destination bi bi-send-plus-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
