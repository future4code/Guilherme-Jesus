import React, { useState } from 'react';
import Home from './components/Home/Home';
import Matches from './components/Matches/Matches'

function App() {
 const [currentPage,setCurrent]= useState('home')
  

const changePage = (pageName)=>{
  setCurrent(pageName)
}


 const choosePage = () =>{
  switch(currentPage){
    case 'home':
      return <Home changePage={changePage}/>
    case 'matches':
      return <Matches changePage={changePage}/>
    default:
      return <Home/>
  }
 }
    
  return (
    <div>
      <Home changePage ={changePage}/>
   {choosePage()}
    </div>
  );
}

export default App;
