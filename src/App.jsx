import React, { useState } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";


export default function App() {
  const [showModal, setShowModal] = useState(false);
  const {time, start: timerStart, stop: timerStop, reset: timerReset, } = useTimer(0); 
  const [previousTime, setPreviousTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  
  //ToDo Notes:  
  //need to show previous time/ done
  //Stop counting and don't show timer/ done
  //lower time should overwrite previous time /check this.
  //check game function!!
  //all tests passed.

  const startGameTimer= () => {
    timerReset();
    timerStart();
    setPreviousTime()
  };

  const stopGameTimer = () => {
    timerStop();
    setPreviousTime(time);
    if (bestTime === null || time <bestTime) {setBestTime(time);}
    timerReset(); 
  };

  const resetGameTimer = () => {// work on this next?
    setPreviousTime(time); 
  }

  const cardTexts = [
    "Bunny 🐰",
    "Frog 🐸",
    "Panda 🐼",
    "Doggy 🐶",
    "Kitty 😺",
    "Duck 🦆",
  ];

  return (
    <>
      <Header
        // add time, bestTime, previousTime props
       time={time}
       bestTime={bestTime}
       previousTime={previousTime}
       openModal={() => setShowModal(true)}

      />
      <CardGame
        // add onGameStart, onGameEnd props
        cardTexts={cardTexts}
        onGameStart={startGameTimer}
        onGameEnd={stopGameTimer}
      />
      <Modal isShown={showModal} close={() => setShowModal(false)} 
        
      />

    </>
  );
}

