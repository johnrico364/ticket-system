import "./css/Add.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export let Add = () => {
  let [type, setType] = useState("");
  let navigate = useNavigate();

  let Type = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-white">Add page</div>
          </div>
        </div>
      </div>
    </div>
  );
};
