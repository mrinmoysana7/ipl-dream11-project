import { Trash } from "lucide-react";

const SelectedPlayers = ({selectedPlayers}) => {
    console.log(selectedPlayers)
    return (
        <div className="w-12/12 mx-auto space-y-6 ">
            {/* <h1>Selected Players</h1> */}
            {
                selectedPlayers.map((player, index) => {
                    return <div key={index} className="flex justify-between p-6 border border-gray-200 items-center rounded-2xl shadow-lg">
                        <div className="flex items-center">
                            <img className="w-20 h-20 mr-6 rounded-2xl" src={player.playerImage} alt="" />
                            <div>
                                <h2>{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>

                        </div>
                        <button className="text-[red] btn rounded-full bg-transparent shadow-md">
                            <Trash></Trash>
                        </button>
                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;