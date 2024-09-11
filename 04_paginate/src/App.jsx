import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  // const fetchproducts=()=>{
  // const res = fetch("https://dummyjson.com/products").then((data)=>{
  //   console.log(data);
  //   return data.json();
  // }).catch((err)=>console.log(err))

  //   setProducts(res);
  // }
  const handlePage = (currPage) => {
    if (
      currPage >= 1 &&
      currPage <= Math.ceil(products.length / 10) &&
      currPage !== page
    )
      setPage(currPage);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Data received:", data);
        setProducts(data.products);
      })
      .catch((error) => console.log("ERR:", error));
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <span key={prod.id} className="products__single">
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page >1 ? "" : "show-button"}
            onClick={() => handlePage(page - 1)}
          >
            ◀
          </span>

          {[...Array(Math.ceil(products.length / 10))].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination_selected" : ""}
                key={i}
                onClick={() => handlePage(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < products.length / 10 ? "" : "show-button"}
            onClick={() => handlePage(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
