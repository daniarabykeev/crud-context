import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

const init = {
  image: "",
  title: "",
  price: "",
};

function AddProductPage() {
  const navigate = useNavigate();
  const [moto, setMoto] = useState(init);
  const { addProduct } = useContext(productContext);

  function handleChange(e) {
    let obj = {
      ...moto,
      [e.target.name]: e.target.value,
    };
    setMoto(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addProduct(moto);
    setMoto(init);
    navigate("/");
  }
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          name="image"
          value={moto.image}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="title"
          value={moto.title}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="price"
          value={moto.price}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default AddProductPage;
