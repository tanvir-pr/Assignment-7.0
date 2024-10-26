import React from 'react';
import './Navbar.css'
import backgroundImage from "../../assets/bg-shadow.png";
const Navbar = ({price}) => {
    return (
        <div>
        <nav className="flex justify-between mx-20  pt-10">
          
          <div>
          <img src="../../assets/logo.png" alt="" />
          </div>
          
          <div className="flex justify-center items-center gap-10">  
            <div>Home</div>
            <div>Fixture</div>
            <div>Teams</div>
            <div>Schedules</div>
            <div className="flex justify-evenly gap-2">
              <div id="myBalance">{ price}</div>
              <div>Coin</div>
              <img src="../../assets/coin.png" alt="" />
            </div>          
          </div>

          
          
        </nav>
        <div className=' imgset bg-black mt-4 mb-8 flex flex-col  justify-center items-center border-2 border-slate-400 mx-20'
          style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        }}
        >
          <img className='my-3' src="../../assets/banner-main.png" alt="" />
          <h2 className='text-white text-2xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <h4 className='text-slate-300 my-3'>Beyond Boundaries Beyond Limits</h4>
          <button className="border-2 mb-10 bg-amber-400 border-black p-2 rounded-md">Claim Free Credit</button>

        </div>
        

        </div>
    );
};

export default Navbar;