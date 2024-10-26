import './Player.css'

const Player = ({ player, handelSelectivePlayer }) => {
    // console.log(handelSelectivePlayer)
    const { name, country, rating, price, status, type, picture } = player;
    return (
        <div className="bottle border-gray-200 rounded-md p-5 border-2">
            <img className='rounded-md image ' src={picture} alt="" />
             <div><i className="fa-solid fa-user"></i>{name}</div>
            <div className='flex justify-between'>
                
                <div><i className="fa-solid fa-flag">{country}</i></div>
                <div>{type}</div>

            </div>
            
            <div>Rating{rating}</div>
            <div className='flex justify-between'>
                <div>Left-Hand-Bat</div>
                <div>Left-Hand-Bat</div>
            </div>
            <div className='flex justify-between'>
                
                <div>Price{price}</div>
                <button onClick={() =>handelSelectivePlayer(player)} className='bg-slate-600 rounded-md border-2'>Choose Player</button>
            </div>
            
        </div>
    );
};

export default Player;