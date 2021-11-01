import React ,{useState,useEffect} from 'react';
// import Amplify, {API,graphqlOperation} from 'aws-amplify'
// import confi from './aws-exports'
// import {listCates} from './graphql/queries'
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Home from './pages/Home'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';

// Amplify.configure(confi)

function App() {

  const [categorie ,setCategorie] = useState([])

      //  useEffect(()=>{
      //    fetchCate()
      //    console.log('useEffect')
      //  },[])
      //  const fetchCate = async () => {
      //    try {
      //      const cateData = await API.graphql(graphqlOperation((listCates)))
      //      const  catelist = cateData.data.listCates.items
      //      setCategorie(catelist)
      //      console.log('catelist',catelist)
      //    } catch (error) {
           
      //    }
      //  }
      //  console.log('categorie',categorie)


  return (
    <div className="App">
     
      
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/productlist">
        <ProductsList />
        </Route>
        <Route exact path="/product">
        <Product />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App ;
