import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

function ProductContext({ children }) {
  const [motorCicles, setMotorCicles] = useState([]);
  const [oneMoto, setOneMoto] = useState(null);

  async function getProducts() {
    const { data } = await axios(API);
    setMotorCicles(data);
  }

  async function addProduct(newMotorCicle) {
    await axios.post(API, newMotorCicle);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    setOneMoto(data);
  }

  async function editProduct(id, newMoto) {
    await axios.patch(`${API}/${id}`, newMoto);
    getProducts();
  }

  const value = {
    getProducts: getProducts,
    motorCicles: motorCicles,
    deleteProduct: deleteProduct,
    addProduct: addProduct,
    getOneProduct: getOneProduct,
    oneMoto: oneMoto,
    editProduct: editProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
