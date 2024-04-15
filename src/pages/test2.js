import {useMemo, useState} from "react";

export function TestPage2(){
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    setProducts([...products, {name, price}]);
  };

  const total = useMemo(() => products.reduce((acc, product) => {
    console.log('calculate total ... ');
    return acc + product.price
  }, 0), [products]);

  return (
    <>
      <div className="product-from">
        <input type="text" placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" placeholder="Product price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button onClick={handleAddProduct}>Add product</button>

        <hr/>

        <h1>Total order: {total}</h1>
        {
          products.map((product, index) => {
            return (
              <div key={index}>
                <h3>{product.name} - {product.price}</h3>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
