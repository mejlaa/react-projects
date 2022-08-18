import axios from "axios";

const contactApi = axios.create({ baseURL: "https://randomuser.me/api/" });

const recipeApi = axios.create({ baseURL: "https://api.edamam.com" });

export { contactApi, recipeApi };
