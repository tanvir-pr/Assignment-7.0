import React from 'react';
import Player from '../Player/Player';

const Selected = ({ selectiveProducts,handleDelate }) => {
    // console.log(handleDelate)
    return (
        <div>
          
            {
                selectiveProducts.map((player) => (
                    
                    <div className='flex flex-row justify-between border-2 gap-4 my-4 p-2 mx-10 bg-slate-100 rounded-xl'>
                    <div className='flex flex-row gap-3'>
                        <img className=' border-2 h-20 w-20 border-red-200 rounded-full'  src={player.picture} alt="" />
                        <div className='flex flex-col'>
                            <h2>{player.name}</h2>
                            <h2>{player.type}</h2>
                            </div>
                           
                        </div>
                       <button onClick={() => handleDelate(player.name)}><i class="fa-solid fa-trash"></i></button>
                            
                            
                </div>

                ) )
        }
        </div>
    );
};

export default Selected;