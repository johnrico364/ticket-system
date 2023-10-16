import axios from "axios";

export let signupAPI = async (newPost) => {
  try {
    let {data} = await axios.post(
      "https://apex.oracle.com/pls/apex/kentoy_cs_workspace/users/register",
      newPost
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
