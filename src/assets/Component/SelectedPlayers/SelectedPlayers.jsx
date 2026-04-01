import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoinValue,
  coinValue,
}) => {
  console.log(selectedPlayers, "selectedPlayers");
  const handleDeleteSelectedPlayer = (player) => {
    console.log(selectedPlayers, "selectedPlayers");
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    console.log(filteredPlayers, "filteredPlayers");
    setSelectedPlayers(filteredPlayers);
    setCoinValue(coinValue + player.price);
  };
  return (
    <div className="w-12/12 mx-auto space-y-6 ">
      {/* <h1>Selected Players</h1> */}
      {selectedPlayers.length === 0 ? (
        <div className="h-100 flex justify-center items-center flex-col gap-4">
          <h2 className="font-semibold text-xl">No Players Selected Yet</h2>
        </div>
      ) : (
        selectedPlayers.map((player, index) => {
          return (
            <SelectedCard
              key={index}
              player={player}
              handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
            ></SelectedCard>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
