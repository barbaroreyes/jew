import React from 'react';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Slider from '../Compo/Slider';
import Categories from '../Compo/Categories';
import Products from '../Compo/Products';
import NewLetter from '../Compo/NewLetter';
const Home = () => {
  return (
    <div>
     <Anouncement/> 
     < NavBar/>
     <Slider/>
     <Categories/>
     <Products/>
     <NewLetter/>
    </div>
  );
}

export default Home;
