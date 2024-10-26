
import { useState } from 'react'
import './App.css'

import Cartcontainer from './Component/Cartcontainer/Cartcontainer'
import Navbar from './Component/Navbar/navbar';
import Footer from './Component/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navhead from './Component/Navhead/Navhead';



function App() {

  const notify1 = () => toast("Player removed");
  const notify2 = () =>toast.success('🦄 Add money your account', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const notify4 = () =>toast.success('🦄 Add player your account', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  const notify3= () => toast.warn('🦄No money available!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  
  });
  const notify5= () => toast.warn('Already exist your account!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  
  });
  const notify6= () => toast.warn('You cross max player', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  
    });


  const [isActive, setIsActive] = useState({
    Available: true,
    status:"Available"
  })

  const [selectiveProducts, setSelectiveProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const addMoney = () => {
    setPrice(price + 600000)
    notify2()
  }

  const handleIncreasePrice = (pr) => {
    setPrice(price-pr)
    console.log(pr)
    console.log(price)
  }
  // const handleDelatePrice = () => {
  //   const player = selectiveProducts.find((p) => p.name == name);
  //   setPrice(price-player.price)
  // }
  
  const handleDelate = (name) => {
    // handleDelatePrice(name)
    const newProduct = selectiveProducts.filter((p) => p.name != name);
    setSelectiveProducts(newProduct);
    notify1()
  }

  const handelSelectivePlayer = (player) => {
    const isexist = selectiveProducts.find((p) => p.name == player.name);
    if (isexist) {
      // alert("more no add")
      notify5()
    }
    else {
      if (player.price < price) {
       
        if (selectiveProducts.length < 6) {
          handleIncreasePrice(player.price)
          const newProducts = [...selectiveProducts, player];
          setSelectiveProducts(newProducts);
          notify4()
        }
        else {
          // alert("besi khanar iccha ka")
          notify6()
        }
      }
      else {
        // alert("no money available")
        notify3()
      }
     
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
      <Navhead  price={price}></Navhead>
    <Navbar addMoney={addMoney}></Navbar>
     
      <Cartcontainer isActive={isActive} handleIsActiveState={handleIsActiveState}
        handelSelectivePlayer={handelSelectivePlayer} selectiveProducts={selectiveProducts}
        handleDelate={handleDelate}></Cartcontainer>
      {/* <Players handelSelectivePlayer={handelSelectivePlayer}></Players> */}
      
      <Footer></Footer>
      {/* <button onClick={notify1}>Notify!</button> */}
      <ToastContainer />
    
    </>
  )
}

export default App
