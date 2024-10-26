import React from 'react';
import './Cartcontainer.css'

import Players from '../Players/Players';
import Selected from '../Selected/Selected';

const Cartcontainer = ({ handleIsActiveState,isActive,handelSelectivePlayer,selectiveProducts,handleDelate}) => {
    // console.log(selectiveProducts)
    return (
        <div>
         
            <div className='flex justify-between mb-6  mx-20'>
                <div className='text-2xl font-bold'>Available Players</div>
                <div className='flex justify-between gap-5 text-center items-center'>
                <div onClick={()=>handleIsActiveState("Available")} className={`${isActive.Available?"active btn": "btn"}`}>Available</div>
                <div onClick={()=>handleIsActiveState("Selected")} className={`${isActive.Available?"btn": " active btn"}`}>Selected{selectiveProducts.length}</div>
            </div>
            </div>
           

        {isActive.Available?<Players handelSelectivePlayer={handelSelectivePlayer}></Players>:<Selected handleDelate={handleDelate} selectiveProducts={selectiveProducts}></Selected>}



            
            
            
        </div>
    );
};

export default Cartcontainer;