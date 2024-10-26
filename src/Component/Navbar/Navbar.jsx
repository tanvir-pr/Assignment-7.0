import React from 'react';
import './Navbar.css'
import backgroundImage from "../../assets/bg-shadow.png";
const Navbar = ({addMoney}) => {
  return (
      <div >
        <div className='imgset bg-black mt-4 mb-8 flex flex-col rounded-xl justify-center items-center border-2 border-slate-400 mx-20'
          style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "",
        width: "",
        }}
        >
          <img className='my-3' src="../../assetss/banner-main.png" alt="" />
          <h2 className='text-white text-2xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <h4 className='text-slate-300 my-3'>Beyond Boundaries Beyond Limits</h4>
          <button onClick={() => addMoney()} className="border-2 mb-10 bg-amber-400 border-black p-2 rounded-md">Claim Free Credit</button>
        </div>  
      </div>
    );
};

export default Navbar;