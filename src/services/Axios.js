import axios from "axios";
import { useNavigate } from "react-router-dom";


//SIGN UP PAGE
export let getAPI = async () => {
  try {
    let { data } = await axios.get(
      "https://apex.oracle.com/pls/apex/jao_workspace/fruits/fruits"
    );
    console.log(data.items);
    return data.items;
  } catch (err) {
    console.log(err);
  }
};

export let postAPI = async (newPost) => {
  try {
    let { data } = await axios.post(
      "https://apex.oracle.com/pls/apex/jao_workspace/fruits/fruit",
      newPost
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export let signupAPI = async (newPost) => {
  try {
    let { data } = await axios.post(
      "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/signup",
      newPost
    );
    return data;
  } catch (err) {
    console.log(err.response.data.message);
    alert(err.response.data.message);
    return;
  }
};

//LOG IN PAGE
export let getSample = async () => {
  try {
    let { data } = await axios.get("");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
