import { Suspense } from "react";
import "./App.css";
import Banner from "./assets/Component/Navbar/Homepage/Banner/Banner";
import Navbar from "./assets/Component/Navbar/Navbar";
import Players from "./assets/Component/Navbar/Players/Players";

// const playerData = async () => {
//   const res = await fetch('../public/playerData.json');
//   return res;
// }

const playerPromise = fetch('playerData.json')
  .then(res => res.json());


function App() {
  // playerPromise = playerData()
  return (
    <>
     
     <Navbar></Navbar>

     <Banner></Banner>

     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Players playerPromise={playerPromise}></Players>
     </Suspense>

    </>
  );
}

export default App;
