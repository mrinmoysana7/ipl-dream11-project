import { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../../SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoinValue, coinValue }) => {
  const playersData = use(playerPromise);
  // console.log(playersData)
  const [selectedType, setSelectedType] = useState("Available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="w-9/12 container mx-auto">
      <div className="flex  flex-col md:flex-row gap-4 justify-between my-10 mx-auto items-center">
        {selectedType === "Available" ? (
          <h2 className="font-bold text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-xl">
            {" "}
            Selected Player ({selectedPlayers.length}/{playersData.length})
          </h2>
        )}
        <div className="border-none flex rounded-xl">
          <button
            onClick={() => setSelectedType("Available")}
            className={`btn border-none ${selectedType === "Available" ? "bg-[#E7FE29]" : ""} btn-ghost rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("Selected")}
            className={`btn border-none ${selectedType === "Selected" ? "bg-[#E7FE29]" : "bg-transparent"} btn-ghost rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {selectedType === "Available" ? (
          <AvailablePlayers
            setSelectedPlayers={setSelectedPlayers}
            playersData={playersData}
            setCoinValue={setCoinValue}
            coinValue={coinValue}
            selectedPlayers={selectedPlayers}
          />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setCoinValue={setCoinValue}
            coinValue={coinValue}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
