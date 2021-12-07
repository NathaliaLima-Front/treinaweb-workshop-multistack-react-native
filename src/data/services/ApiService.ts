import axios from "axios";

// const url = "https://ediaristas-workshop.herokuapp.com/";
const url = "http://192.168.15.1:8000";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
