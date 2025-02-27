import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import products from './Product.json';

const ProductList = ({ products }) => {
  const navigate = useNavigate(); // Fixing the function name
  const handleSubmit = (index) => {
    const product = products[index]; // Fixing variable name
    const productName = product.name; // Fixing variable name
    alert(`${productName} has been added to cart`);
    let cookies = new Cookies();
    let existingProductInCart = cookies.get("cart_products");
    if (existingProductInCart === null || existingProductInCart === undefined) {
      cookies.set("cart_products", [product]);
    } else {
      cookies.set("cart_products", [...existingProductInCart, product]);
    }
    if (window.confirm('Want to buy this product?')) {
      navigate('/Mycart');
    }
  };

  return (
    <div className='ProductList'>
      <div style={{
         backgroundImage: 'url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzolJjM5guMXpV2fHclX_PJsVBh6Bx4CJKQ&s\')',
       // backgroundColor:'pink',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        color: 'white'
      }}>
        <h2 style={{  color:'black', fontWeight: 'bold',textAlign: 'center', margin: '20px 0' }}>Products</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product, index) => (
            <div className="main" key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center', width: '250px' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <div style={{ marginTop: '10px' }}>
                <h3 style={{color:'black',fontWeight: 'bold'}}>{product.name}</h3>
                <p style={{ color: 'Black' }}>{product.description}</p>
                <p style={{  color:'black',fontWeight: 'bold' }}>Price: ₹{product.price}</p>
                <input type="button" style={{  color:'black',fontWeight: 'bold',cursor: 'pointer' }} onClick={() => handleSubmit(index)} value="Add To Cart" className='btn btn-warning' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
