import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

const init = {
  image: "",
  title: "",
  price: "",
};

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { oneMoto, getOneProduct, editProduct } = useContext(productContext);
  const [moto, setMoto] = useState(init);

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneMoto) {
      setMoto(oneMoto);
    }
  }, [oneMoto]);

  function handleChange(e) {
    const obj = {
      ...moto,
      [e.target.name]: e.target.value,
    };
    setMoto(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, moto);
    setMoto(init);
    navigate("/");
  }
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
        <button>save</button>
      </form>
    </div>
  );
}

export default EditProductPage;
