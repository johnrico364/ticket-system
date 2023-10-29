import "./css/Explore.css";

export let Explore = () => {
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
        <div className="destination-container row ms-2 me-5">
          <div className="col-3">
            <div className="row h-100 ">
              <div className="col-12 bg-primary my-1">sd</div>
              <div className="col-12 bg-warning my-1">sd</div>
            </div>
          </div>
          <div className="col-3 bg-success my-1">
            sadsa
          </div>
          <div className="col-6">
            <div className="row me-2 h-100">
              <div className="col-12 bg-danger my-1">sd</div>
              <div className="col-4 bg-secondary my-1">sds</div>
              <div className="col-8 bg-info my-1 ">df</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
