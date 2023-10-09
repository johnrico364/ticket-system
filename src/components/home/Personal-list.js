import { useParams } from "react-router-dom";

export let PersonalList = () => {
    let {profile} = useParams();
  return (
    <div>
      <div className="display-1 text-white  ">This is the personal list</div>
      <div className="h1 text-white"> for user: {profile}</div>
    </div>
  );
};
