import React from 'react';

const Navhead = ({price}) => {
    return (
        <div>
            <div className="sticky top-4 inset-0 backdrop-blur">
        <nav className="flex justify-between mx-20  pt-10 sticky inset-0 backdrop-blur">
          
          <div>
          <img src="../../assetss/logo.png" alt="" />
          </div>
          
          <div className="flex justify-center items-center gap-10">  
            <div>Home</div>
            <div>Fixture</div>
            <div>Teams</div>
            <div>Schedules</div>
            <div className="flex justify-evenly gap-2">
              <div id="myBalance">{ price}</div>
              <div>Coin</div>
              <img src="../../assetss/coin.png" alt="" />
            </div>          
          </div>

          
          
        </nav>
        </div>
        </div>
    );
};

export default Navhead;