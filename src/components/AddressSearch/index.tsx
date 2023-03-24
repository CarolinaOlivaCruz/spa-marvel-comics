import React, { useState } from "react";
import axios from "axios";
import search from "../../assets/img/search.png"

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
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAeNyW-RXa1f5u-uI7DNnj4O6XcHdrflbQ`
      );
      const formattedAddress: any = response.data.results[0].formatted_address;
      setFormattedAddress(formattedAddress);

      console.log(formattedAddress);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="address-input">Address:</label>
        <input
          id="address-input"
          type="text"
          value={address}
          onChange={handleAddressChange}
        />
        <button type="submit"><img src={search} alt="" /></button>
      </form>
      {formattedAddress && (
        <div>
          <p>Endereço: {formattedAddress}</p>
        </div>
      )}
    </div>
  );
};

export default AddressSearch;
