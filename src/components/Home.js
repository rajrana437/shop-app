import React, { useState } from 'react';
import greyHoodie from '../images/1.jpg';
import blackHoodie from '../images/2.jpg';
import blueHoodie from '../images/3.jpg';
import marvelHoodie from '../images/4.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction.js';

const Home = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <div className='image'>
        <img src={greyHoodie} alt='greyHoodie' />
        <h3>Grey Hoodie</h3>
        <h3>Rs 999</h3>
        <a
          onClick={() => props.addBasket('greyHoodie')}
          className='addToCart cart1'
          href='#'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={blackHoodie} alt='blackHoodie' />
        <h3>Black Hoodie</h3>
        <h3>Rs 999</h3>
        <a
          onClick={() => props.addBasket('blackHoodie')}
          className='addToCart cart2'
          href='#'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={blueHoodie} alt='blueHoodie' />
        <h3>Black Hoodie</h3>
        <h3>Rs 999</h3>
        <a
          onClick={() => props.addBasket('blueHoodie')}
          className='addToCart cart3'
          href='#'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={marvelHoodie} alt='marvelHoodie' />
        <h3>Marvel Hoodie</h3>
        <h3>Rs 999</h3>
        <a
          onClick={() => props.addBasket('marvelHoodie')}
          className='addToCart cart4'
          href='#'
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(Home);
