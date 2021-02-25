import axios from "axios";

export const getAllProducts = async () => {
  console.log("process.env.API_URL::", process.env.API_URL);
  //const authHeaders = { headers: { authorization: `bearer ${localStorage.getItem('token')}` } }
  const { data } = await axios.get(`http://localhost:3001/api/v1/products`);
  console.log("dddddddddd::", data.data);
  return data.data;
};
