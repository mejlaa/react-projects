import axios from "axios";

const contactApi = axios.create({ baseURL: "https://randomuser.me/api/" });

export default contactApi;
