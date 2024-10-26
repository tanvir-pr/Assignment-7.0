
import { useState } from 'react'
import './App.css'

import Cartcontainer from './Component/Cartcontainer/Cartcontainer'
import Navbar from './Component/Navbar/navbar';
import Footer from './Component/Footer/Footer';



function App() {
  const [isActive, setIsActive] = useState({
    Available: true,
    status:"Available"
  })

  const [selectiveProducts, setSelectiveProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const handleIncreasePrice = (pr) => {
    setPrice(price+pr)
    console.log(pr)
    console.log(price)
  }
  const handleDelatePrice = () => {
    const player = selectiveProducts.find((p) => p.name == name);
    setPrice(price-player.price)
  }
  
  const handleDelate = (name) => {
    handleDelatePrice(name)
    const newProduct = selectiveProducts.filter((p) => p.name != name);
    setSelectiveProducts(newProduct);
  }

  const handelSelectivePlayer = (player) => {
    const isexist = selectiveProducts.find((p) => p.name == player.name);
    if (isexist) {
      alert("ar na vai")
    }
    else {
      handleIncreasePrice(player.price)
      const newProducts = [...selectiveProducts, player];
      setSelectiveProducts(newProducts);
    }
  }


  const handleIsActiveState = (status) => {
  
    if (status == "Available") {
      setIsActive({
        Available: true,
    status:"Available"
      })
    }
    else {
      setIsActive({
        Available: false,
     status:"Selected"
       })
    }
}

  return (
    <>
      <Navbar price={price}></Navbar>
     
      <Cartcontainer isActive={isActive} handleIsActiveState={handleIsActiveState}
        handelSelectivePlayer={handelSelectivePlayer} selectiveProducts={selectiveProducts}
        handleDelate={handleDelate}></Cartcontainer>
      {/* <Players handelSelectivePlayer={handelSelectivePlayer}></Players> */}
      
      <Footer></Footer>
    </>
  )
}

export default App
