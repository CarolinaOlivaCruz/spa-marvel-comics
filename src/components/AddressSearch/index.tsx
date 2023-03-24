import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "dotenv/config";
import search from "../../assets/img/search.png";
import StyledContainer from "./style";

const AddressSearch = () => {
  const [address, setAddress] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");

  const handleAddressChange = (event: any) => {
    setAddress(event.target.value);
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_KEY}`
      );
      const formattedAddress: any = response.data.results[0].formatted_address;
      setFormattedAddress(formattedAddress);
      toast.success("Endereço dicionado com sucesso");
    } catch (error) {
      toast.error("Ops! Endereço não encontrado ou inválido");
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            id="address-input"
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Digite aqui o seu endereço..."
          />
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </div>
      </form>
      {formattedAddress && (
        <div>
          <p>Endereço:</p>
          <p>{formattedAddress}</p>
        </div>
      )}
    </StyledContainer>
  );
};

export default AddressSearch;
