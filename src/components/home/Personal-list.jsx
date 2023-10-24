import "./css/personal-list.css";
import { useParams } from "react-router-dom";

export let PersonalList = () => {
    let {profile} = useParams();
  return (
    <div className="container-fluid">
      <div className="row form-background">
        <div className="display-1">Sample</div>
      </div>
    </div>
  );
};
