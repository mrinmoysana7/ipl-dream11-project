import { Trash, UserRound } from "lucide-react";
const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return (
        <div>
            <div
            
            className="flex justify-between p-6 border border-gray-200 items-center rounded-2xl shadow-lg"
          >
            <div className="flex items-center">
              <img
                className="w-20 h-20 mr-6 rounded-2xl"
                src={player.playerImage}
                alt=""
              />
              <div>
                <div className="flex items-center justify-center gap-2">
                  <UserRound />
                  <h2>{player.playerName}</h2>
                </div>
                <p className="text-center">{player.playerType}</p>
              </div>
            </div>
            <button
              className="text-[red] btn rounded-full bg-transparent shadow-md"
              onClick={() => handleDeleteSelectedPlayer(player)}
            >
              <Trash></Trash>
            </button>
          </div>
        </div>
    );
};

export default SelectedCard;