import { useEffect, useState } from "react";
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";

export default function App() {
  let heroData = [
    {
      text1: "Mergulhe em",
      text2: "Aquilo que você ama",
    },
    {
      text1: "Deixe-se levar",
      text2: "pelas suas paixões",
    },
    {
      text1: "Viva intensamente",
      text2: "cada momento",
    },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setHeroCount((count) => {
  //       return count === 2 ? 0 : count + 1;
  //     });
  //   }, 3000);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}
