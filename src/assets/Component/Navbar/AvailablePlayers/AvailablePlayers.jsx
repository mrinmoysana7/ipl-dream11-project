import { Flag, UserRound } from "lucide-react";

const AvailablePlayers = ({ playersData }) => {
  console.log(playersData, "Players");
  return (
    <div>
        <h2>Available Players</h2>

      {/* Available Players */}
      <div className="p-7 grid gap-y-7.5 gap-x-7.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20">
        {playersData.map((player, index) => {
        return (
          <h2 key={index}>
            {/* Player Card */}
            <div className="p-2 card bg-base-100 shadow-sm">
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
                  <button className="btn btn-outline">Choose Player</button>
                </div>
              </div>
            </div>
          </h2>
        );
      })}
      </div>
    </div>
  );
};

export default AvailablePlayers;

// grid-cols-1 md:grid-cols-2 xl:grid-cols-4
