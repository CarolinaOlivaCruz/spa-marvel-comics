import React from "react";
import axios from "axios";
import md5 from "md5";

//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150;

const publicKey = "47c67153788247549eb5dcc43c36a616";
const privateKey = "45c4c36067cffe248cf71395ffb42395bf74a225";

const time = Number(new Date());

const hash = md5(time + publicKey + privateKey);

const apiService = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  timeout: 10000,
});

export default apiService;
