import React from "react";
import axios from "axios";

const apiService = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  timeout: 10000,
});

const apiServiceGoogleMaps = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/",
  timeout: 10000,
});

export {apiService, apiServiceGoogleMaps};
