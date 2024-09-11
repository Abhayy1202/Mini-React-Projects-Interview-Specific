import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [discount, setDiscount] = useState(0)

const handleDiscount=(val)=>{
  setDiscount(discount===val?null:val);
}


useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data received:", data);
      setProducts(data.products);
    })
    .catch((error) => console.log("ERR:", error));
}, []);


  return (
    <div className='wrapper'>
        <div className='sidebar'>
          <h1>Discount Filter</h1>
         {[...Array(4)].map((_, i) =>{
          const discountVal=i+4;
          return(
            <div key={i} className='container'>
              
              <div>{discountVal}% or more</div>

              <input type='checkbox'
                onChange={()=>{handleDiscount(discountVal);}}
                checked={discount==discountVal}
              />

            </div>
          )
         })}

        </div>
         
        <div className='products'>
          {products.length>0 && (
          <div>
            {products.filter((prod)=> Math.floor(prod.discountPercentage) >= discount).map((item)=>(
              <div key={item.id} className="products__single">
                <img src={item.thumbnail} alt={item.title}/>
                <div>{item.discountPercentage}% off</div>
              </div>
            ))}
            </div>)}
        </div>

    </div>
  )
}

export default App
