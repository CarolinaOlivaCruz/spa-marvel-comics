import React from "react";
import axios from "axios";

const apiService = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  timeout: 10000,
});

export default apiService;
