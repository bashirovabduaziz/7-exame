import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice"
import cartSlice, { addToCart } from "../../context/cartSlice";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';


function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch()
  const wishes = useSelector(state => state.wishlist.value)

  

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const filteredResults = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(products);
    }
  }, [searchTerm, products]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleSearch = () => {
    const filteredResults = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search Products by Title</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search products by title..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className='search'>
        {searchResults.map(el => (
          <div key={el.id} className='product__cart'>
    
          <img src={el.thumbnail} alt="" className='product__img'/>
         
          <div className='product__left'>
              <Link to={`/single-product/${el.id}`} className='product__link'>
          <p className='product__title'>{el.title}</p>
          </Link>
            
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      
          <div className="product__prices">
          <p className='product__price' >${el.price}</p>
          <del className="product__old">$1000</del>
          <div className='product__hiddens'>
          <button onClick={()=> dispatch(toggleToWishes(el))} className='product__like'>
                  {
                      wishes.some(w => w.id === el.id) ?
                      <FaHeart className='product__wish'/>:
                      <FaRegHeart className='product__wish' />
                  }
              </button>
              <button className='product__like' onClick={() => dispatch(addToCart(el))}>
             <BsCart2 className='product__wish'/>
             </button>
          </div>
          </div>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
