import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.slice(0, 6).map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
