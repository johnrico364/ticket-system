import "./css/Add.css";
import { useNavigate} from "react-router-dom";
import {useState} from 'react';

export let Add = () => {
  let [type,setType] = useState('');
  let navigate = useNavigate();

  let Type = (event) =>{
    setType(event.target.value);
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-5 justify-content-center ">
          <div class="col-md-7 ">
            <label class="form-label">Name:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-7">
            <label class="form-label">Distination:</label>
            <input type="text" class="form-control" />
          </div>
          <div className="col-md-7 mt-3">
            <label className="label">Type:</label>
              <select onChange={Type}  className="select">
                <option>Economy</option>
                <option>Economy+</option>
                <option>First Class 1</option>
                <option>First Class 2</option>
                <option>VIP</option>
                <option>SVIP</option>
              </select>
              <p className="display-2">{type}</p>
          </div>
          <div className="col-md-7 mt-4">
            <button onClick={() => navigate("/home/list")} className="btn btn-primary ">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};
