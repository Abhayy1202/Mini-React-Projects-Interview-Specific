import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);

  const deleteProduct = (id) => {
    setProduct((prev) => prev.filter((prod) => prod.id !== id));
  };

  const toggleComplete = (id) => {
    setProduct((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, completed: !prod.completed } : prod
      )
    );
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const items = response.data.products.map((product) => ({
          ...product,
          completed: false,
        }));
        setProduct(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        {product.map((item) => (
          <div key={item.id} className="container">
            <div
              className="title"
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              <div>Title: {item.title}</div>
              <div>Price: {item.price}</div>
            </div>
            <div className="actions">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              <button onClick={() => deleteProduct(item.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// Using this API endpoint - https://dummyjson.com/products, Display the data in a list with a checkbox and button delete with each item, Before displaying the items, add a feild completed: false in the JSON, It should be able to delete the item on click of delete button, on click of checkbox it should mark the item as completed with line-through to the item marking it as complete.
