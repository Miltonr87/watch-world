import React from "react";
import DATA from "../productsData";

const Product = () => {
  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" style={{ width: "18rem" }}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">${item.price}</p>
          <a href="#" class="btn btn-outline-primary">
            Check
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container psy-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
