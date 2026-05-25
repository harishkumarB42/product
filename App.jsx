import { useState } from "react";
import "./App.css";

function App() {
  const productData = [
      {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 4000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Shoes",
      category: "Fashion",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 4,
      name: "Backpack",
      category: "Accessories",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
    {
      id: 5,
      name: "glass",
      category: "Fashion",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1640398097288-c2cd41fef8f7?w=500",
    },
    {
      id: 6,
      name: "Wallet",
      category: "Accessories",
      price: 2000,
      image:
      "https://images.unsplash.com/photo-1624538000860-24716b9050f2?w=500",
    },

  ];

  const [products] = useState(productData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || product.category === filter)
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1 className="title">Product App</h1>

      <div className="top-bar">
        <input
          type="text"
          placeholder="Search products..."

          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Accessories">Accessories</option>
        </select>

        <div className="cart-box">
          Cart : {cart.length}
        </div>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="card-body">
              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <h3>₹ {product.price}</h3>

              <button onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;