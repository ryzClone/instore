import React, { useEffect, useState } from "react";
import "../style/components/product.css";
import { product, product2, product3 } from "../Base/product";

export default function Product() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active index

  useEffect(() => {
    ProductBase();
  }, [activeIndex]);

  function ProductBase() {
    let data = []; // Initialize data as an empty array
    switch (activeIndex) {
      case 0:
        data = product;
        break;
      case 1:
        data = product2;
        break;
      case 2:
        data = product3;
        break;
      default:
        break;
    }
    ProductView(data);
  }

  function ProductView(data) {
    const Product = document.querySelector(".product");
    Product.innerHTML = "";
    data.forEach((element) => {
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

  const handleToggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="product-main">
      <div className="product-container">
        <div className="category-product">
          <span
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleToggleActive(0)}
          >
            Tea set
          </span>
          <span
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleToggleActive(1)}
          >
            Dress
          </span>
          <span
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleToggleActive(2)}
          >
            Atlas
          </span>
        </div>
        <div className="product"></div>
      </div>
    </div>
  );
}
