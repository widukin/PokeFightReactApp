import FightController from './fight-controller';

import './style.css';
import './blink.css';
import { useState, useEffect } from 'react';

export default function PokemonFight({ fightingPoke }) {
  const [counter, setCounter] = useState(4);
  const [resultDisplay, setResultDisplay] = useState(8);
  const [viewCounter, setViewCounter] = useState(false);
  const [viewResult, setViewResult] = useState(false);
  const [winnerObj, setWinnerObj] = useState([]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (!timer) {
      setViewCounter(true);
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  useEffect(() => {
    const resultTimer =
      resultDisplay > 0 &&
      setInterval(() => setResultDisplay(resultDisplay - 1), 1000);
    if (!resultTimer) {
      setViewResult(true);
      setWinnerObj(FightController(fightingPoke)); 
    }
    return () => {
      clearInterval(resultTimer);
    };
  }, [resultDisplay]);

  

  //console.log(winnerObj)
  if (fightingPoke.length === 2) {
    return (
      <>
        <div
          className={`${
            viewCounter ? 'hideThis' : 'showThis'
          } fightWrapper counterDesign `}>
          Fight Preparation: {counter}
        </div>
        <div
          className={`${viewCounter ? 'showThis' : 'hideThis'} fightWrapper `}>
          <div
            className={`${
              viewResult ? 'showThis' : 'hideThis'
            } tableOfContent wrapperPane `}>
            More Statistics:
            <span className="toc hiddenWinner">
              <span className="tocLabel" id="winner">
                The Winner:
              </span>{' '}
              {fightingPoke[1].name.english}{' '}
            </span>
            <span className="toc">
              <span className="tocLabel" id="looser">
                The Looser:
              </span>{' '}
              {winnerObj.length > 0 ? winnerObj[0].loser : ''}
            </span>
            <span className="toc">
              <span className="tocLabel" id="date">
                The Date:
              </span>
              {winnerObj.length > 0 ? winnerObj[0].date : ''}
            </span>
            <span className="toc">
              <span className="tocLabel">More Info:</span> More Info{' '}
            </span>
          </div>

          <div className="pokefight-wrapper wrapperPane ">
            <div
              className={`${
                viewResult ? 'hideThis' : 'showThis'
              } animationtime`}>
              <span className="blink">Animation</span>
            </div>
            <div className="pokefight-top-wrapper">
              <div className="pokefight-top-name-wrapper">
                <h2
                  onClick={() => {
                    setWinnerObj(FightController(fightingPoke));
                  }}>
                  {fightingPoke[1].name.english}
                </h2>
                <progress
                  id="hp"
                  value="100"
                  max={fightingPoke[1].base.HP}></progress>
                <p class="pokefight-stats">Hp: {fightingPoke[1].base.HP}</p>
                <p class="pokefight-stats">
                  Speed: {fightingPoke[1].base.Speed}
                </p>
                <p class="pokefight-stats">
                  Attack: {fightingPoke[1].base.Attack}
                </p>
                <p class="pokefight-stats">
                  Defense: {fightingPoke[1].base.Defense}
                </p>
                <p class="pokefight-stats">
                  Sp.Attack: {fightingPoke[1].base['Sp. Attack']}
                </p>
                <p class="pokefight-stats">
                  Sp.Defense: {fightingPoke[1].base['Sp. Defense']}
                </p>
              </div>
              <img
                className="pokefight-top-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fightingPoke[1].id}.png`}
                alt="second-poke"
              />
            </div>
            <div className="pokefight-bot-wrapper">
              <img
                className="pokefight-bot-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${fightingPoke[0].id}.png`}
                alt="first-poke"
              />
              <div className="pokefight-bot-name-wrapper">
                <h2>{fightingPoke[0].name.english}</h2>
                <progress
                  id="hp"
                  value="100"
                  max={fightingPoke[0].base.HP}></progress>
                <p className="pokefight-stats">Hp: {fightingPoke[0].base.HP}</p>
                <p className="pokefight-stats">
                  Speed: {fightingPoke[0].base.Speed}
                </p>
                <p className="pokefight-stats">
                  Attack: {fightingPoke[0].base.Attack}
                </p>
                <p className="pokefight-stats">
                  Defense: {fightingPoke[0].base.Defense}
                </p>
                <p className="pokefight-stats">
                  Sp.Attack: {fightingPoke[0].base['Sp. Attack']}
                </p>
                <p className="pokefight-stats">
                  Sp.Defense: {fightingPoke[0].base['Sp. Defense']}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              winnerObj ? 'showThis' : 'hideThis'
            } winner wrapperPane `}>
            THE WINNER IS
            <span id="winner">
              {winnerObj.length > 0 ? winnerObj[0].winner : ''}
            </span>
          </div>
        </div>
        <audio
          src="https://play.pokemonshowdown.com/audio/hgss-johto-trainer.mp3"
          class="poke-audio"
          volume="0.1"
          controls
          autoPlay></audio>
      </>
    );
  } else {
    return <h1>Sorry select pokemon to fight</h1>;
  }
}
