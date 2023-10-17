import axios from "axios";

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

export let signupAPI = (newPost) =>{
  try{
    
  }catch(err){
    console.log(err);
  }
}
