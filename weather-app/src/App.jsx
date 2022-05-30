import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Main } from './Components/Main';
import { useState } from 'react';

function App() {

  const [item2, setItem2] = useState("");

  function getItemParent(x){
      setItem2(x);
  }


  return (
    <div className="App">    
      <Navbar getItemParent = {getItemParent}/>
      <Main value = {item2}/>
    </div>
  );
}

export default App;
