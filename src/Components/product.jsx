import React, { useEffect, useState } from "react";
import "../style/components/product.css";
import { product, product2, product3 } from "../Base/product";
import FullScreenModal from "./modal";

export default function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsArray = [product, product2, product3];

  useEffect(() => {
    ProductBase();
  }, [activeIndex]);

  function ProductBase() {
    const data = productsArray[activeIndex];
    ProductView(data);
  }

  function ProductView(data) {
    const Product = document.querySelector(".product");
    Product.innerHTML = "";
    data.forEach((element, index) => {
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

      productBody.addEventListener("click", () => handleProductClick(element));

      Product.appendChild(productBody);
    });
  }

  const handleToggleActive = (index) => {
    setActiveIndex(index);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setSelectedProduct(null);
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
        {selectedProduct && (
          <FullScreenModal
            isActive={modalActive}
            onClose={closeModal}
            product={selectedProduct}
          />
        )}
      </div>
    </div>
  );
}
