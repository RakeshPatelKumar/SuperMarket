import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function MyCart() {
  const [price, setPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [qtyMap, setQtyMap] = useState(new Map());
  const [productMap, setProductMap] = useState(new Map());

  useEffect(() => {
    const cookies = new Cookies();
    const existingProductInCart = cookies.get("cart_products");
    setCartItems(existingProductInCart || []);
  }, []);

  useEffect(() => {
    const x = new Map();
    const y = new Map();
    let totalPrice = 0;

    cartItems.forEach(product => {
      const productQty = x.get(product.name) || 0;
      x.set(product.name, productQty + 1);
      y.set(product.name, product);
      totalPrice += product.price;
    });

    setQtyMap(x);
    setProductMap(y);
    setPrice(totalPrice);
  }, [cartItems]);

  const productTlt = (productTitle) => {
    const newProductArray = cartItems.filter(product => product.name !== productTitle);
    setCartItems(newProductArray);
    const cookies = new Cookies();
    cookies.set("cart_products", newProductArray);
  };

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle buying a product
  const handleBuy = () => {
    // You can implement the buying process here
    // For example, you can redirect the user to a checkout page
    navigate('/checkout'); // Redirect to the checkout page
  };

  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          {Array.from(productMap.entries()).map(([prodTitle, data]) => (
            <div className="bg-white p-4 rounded-md shadow-md" key={prodTitle}>
              <img src={data.image} className="mx-auto w-64 h-64 object-cover rounded-md" alt={data.name} />
              <h3 className="text-lg font-semibold mt-2">{data.name}</h3>
              <h4 className="text-sm">Quantity {qtyMap.get(data.name)}</h4>
              <h5 className="text-sm">Price {data.price} * {qtyMap.get(data.name)} = {data.price * qtyMap.get(data.name)}</h5>
              <button onClick={() => productTlt(data.name)} className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">Delete</button>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2">Product Name</th>
                  <th className="py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {Array.from(productMap.entries()).map(([prodTitle1, obj1]) => (
                  <tr key={prodTitle1}>
                    <td className="py-2">{obj1.name}</td>
                    <td className="py-2">{obj1.price}</td>
                  </tr>
                ))}
                <tr>
                  <td className="font-semibold py-2">SubTotal</td>
                  <td className="font-semibold py-2">{price}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center py-4">
                    <button onClick={handleBuy} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Buy Now</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
