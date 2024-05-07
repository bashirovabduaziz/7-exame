import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const filtered = products.filter(product =>
        product.id.toString().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const filtered = products.filter(product =>
        product.id.toString().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by ID..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <div>ID: {product.id}</div>
            <div>Title: {product.title}</div>
            <div>Price: ${product.price}</div>
            <div>Description: {product.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
