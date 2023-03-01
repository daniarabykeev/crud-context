import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

function HomePage() {
  const navigate = useNavigate();
  const { motorCicles, getProducts, deleteProduct } =
    useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {motorCicles.map((item) => {
        return (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "8px",
              marginLeft: "30px",
              width: "300px",
            }}
            key={item.id}
          >
            <div>
              <img
                src={item.image}
                alt=""
                style={{ width: "300px", borderRadius: "8px" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>{item.title}</h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-20px",
              }}
            >
              <h1>$ {item.price}</h1>
            </div>
            <button
              onClick={(e) => {
                navigate(`/edit/${item.id}`);
              }}
            >
              edit
            </button>
            <button
              onClick={(e) => {
                deleteProduct(item.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
