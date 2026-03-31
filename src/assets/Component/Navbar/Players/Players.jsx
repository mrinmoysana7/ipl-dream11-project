import { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({playerPromise}) => {    
    const playersData = use(playerPromise)
    console.log(playersData)
    

    return (
        <div className="container mx-auto">
            <AvailablePlayers playersData={playersData}/>
        </div>

    );
};

export default Players;