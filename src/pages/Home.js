import React from 'react';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Slider from '../Compo/Slider';
import Categories from '../Compo/Categories';

const Home = () => {
  return (
    <div>
     <Anouncement/> 
     < NavBar/>
     <Slider/>
     <Categories/>
    </div>
  );
}

export default Home;
