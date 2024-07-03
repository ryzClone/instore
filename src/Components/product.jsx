import React, { useEffect } from "react";
import "../style/components/product.css";
import { product } from "../Base/product";

export default function Product() {
  useEffect(() => {
    ProductBase();
  }, []);

  function ProductBase() {
    const data = product;
    ProductView(data);
  }

  function ProductView(data) {
    const Product = document.querySelector(".product");
    data.forEach((element) => {
      console.log(element);
      const productBody = document.createElement("div");
      const productBodyImg = document.createElement("img");
      const productBodyTitle = document.createElement("div");
      const productBodyText = document.createElement("div");

      productBody.className = "productBody";

      productBodyImg.src = element.img1;
      productBodyImg.className = "productBodyImg";

      productBodyTitle.innerHTML = element.title;
      productBodyTitle.className = "productBodyTitle";

      productBodyText.innerHTML = element.text;
      productBodyText.className = "productBodyText";

      productBody.appendChild(productBodyImg);
      productBody.appendChild(productBodyTitle);
      productBody.appendChild(productBodyText);

      Product.appendChild(productBody);
    });
  }

  return (
    <div className="product-main">
      <div className="product-container">
        <div className="product"></div>
      </div>
    </div>
  );
}
