import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavigationBar from './navigation/NavigationBar';
import Home from './navigation/Home'
// import Home from './navigation/Home';
import CreateAPost from './navigation/CreateAPost';
import ShowPost from './navigation/ShowPost';

// const Home = () => {
//   return (
    
       
//         <p>Welcome to the homepage</p>
        
//   )
// }


function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index element={<Home/>}/>
        <Route path='create' element={<CreateAPost/>}/>
        <Route path='show' element={<ShowPost/>}/>
      </Route>
      

    </Routes>
  );
}

export default App;
