import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({ handelSelectivePlayer }) => {
//     console.log(handelSelectivePlayer)
    const [players, setPlayers] = useState([])


    useEffect(() =>{
      fetch('/players.json')
        .then(res => res.json())
        .then(data => setPlayers(data.players))
      
    }, [])
    return (
        
        <div>
            <div>
            <div className='text-2xl font-bold pb-5'>Available Players</div>
            </div>
            <div className='players w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
          
          {
              players.map(player => <Player
                  handelSelectivePlayer={handelSelectivePlayer}   key={player.name}
              player={player}
              ></Player>)
          }
      </div>
        </div>
    );
};

export default Players;