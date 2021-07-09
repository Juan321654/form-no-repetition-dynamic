import React, { useState } from 'react'
import './App.css';
import Product from './Product'
import User from './User'

function App() {
  const [userInputs, setUserInputs] = useState({})

  console.log(userInputs);

  function handleChange(e) {
    const { value, name } = e.target
    let capFirstLetter = name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1))
    let noSpaceWord = capFirstLetter.join('')
    setUserInputs(prevState => ({
      ...prevState,
      [noSpaceWord]: value
    }))
  }

  function handleInputNaming(name) {
    let capitilizedWord = name.charAt(0).toUpperCase() + name.slice(1);
    return (<input placeholder={capitilizedWord} name={name} value={userInputs[name]} onChange={handleChange} />)
  }

  return (
    <div className="App">
      <h2>Products: </h2>
      <Product handleInputNamingFunc={handleInputNaming} />
      <h2>Users: </h2>
      <User handleInputNamingFunc={handleInputNaming} />
    </div>
  );
}

export default App;
