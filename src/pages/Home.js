import React from 'react';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Slider from '../Compo/Slider';
import Categories from '../Compo/Categories';
import Products from '../Compo/Products';

const Home = () => {
  return (
    <div>
     <Anouncement/> 
     < NavBar/>
     <Slider/>
     <Categories/>
     <Products/>
    </div>
  );
}

export default Home;
