import SharedCard from "../../SharedCard/SharedCard";

const AvailablePlayers = ({ playersData, setCoinValue, coinValue, selectedPlayers, setSelectedPlayers }) => {
  console.log(playersData, "Players");
  return (
    <div>
      {/* Available Players */}
      <div className="mx-auto grid gap-y-7.5 gap-x-7.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playersData.map((player, index) => {
        return (
          <h2 key={index}>
            {/* Player Card */}
            <SharedCard player={player} setCoinValue={setCoinValue} coinValue={coinValue} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></SharedCard>
          </h2>
        );
      })}
      </div>
    </div>
  );
};

export default AvailablePlayers;

// grid-cols-1 md:grid-cols-2 xl:grid-cols-4
