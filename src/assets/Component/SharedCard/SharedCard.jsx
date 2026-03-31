import { Flag, UserRound } from "lucide-react";
import { useState } from "react";
const SharedCard = ({player, setCoinValue, coinValue, selectedPlayers, setSelectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);
    const setPlayerCoinValue = () => {
            const newValue = coinValue - player.price;
            if(newValue >= 0){
                setCoinValue(coinValue - player.price)
            } else {
                alert("You don't have enough money to purchase" );
                return; 
            }
            

            alert(`${player.playerName} is selected`)
            setIsSelected(true); 
            // setCoinValue(coinValue - player.price);
            setSelectedPlayers([...selectedPlayers, player])
        };

    

    return ( 

        
        
        
        
            <div className="p-2 card bg-base-100 shadow-lg">
                
                {/* Player Image */}
              <figure>
                <img src={player.playerImage} alt="" />
              </figure>
              <div className="card-body space-y-0">
                <div className="flex items-center gap-2">
                    {/* Player Details */}
                  <div>
                    <UserRound />
                  </div>
                  <h2 className="card-title">{player.playerName}</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flag />
                    <p>{player.playerCountry}</p>
                  </div>
                  <button className="btn btn-ghosts">{player.playerType}</button>
                </div>

                <div className="divider"></div>

                <h2>Rating: {player.rating}</h2>
                <div className="flex items-center justify-between text-right">
                  <h2 className="flex flex-wrap text-left">{player.battingStyle}</h2>
                  <h2 className="flex flex-wrap text-right">{player.bowlingStyle}</h2>
                </div>
                
                <div className="flex items-center justify-between">
                  <h2>Price: ${player.price}</h2>

                  
                  
                  <button 
                  onClick={setPlayerCoinValue} 
                  className="btn " 
                  disabled={isSelected}
                  > 
                  {isSelected ? "Selected" : "Choose Player"}
                  </button>
                </div>
              </div>
            </div>       
    );
};

export default SharedCard;