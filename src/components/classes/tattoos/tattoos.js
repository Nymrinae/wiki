// @ts-nocheck
import React, { useState, useRef } from "react";
import loa from "./dataTattoos.json";
import draggable from "../../draggable";

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  draggable(cardRef);

  return (
    <div className="modal" ref={cardRef}>
      {children}
    </div>
  );
};

function getItemsFromSessionStorage() {
  return JSON.parse(sessionStorage.getItem("tattoosRank"));
}

function setItemsInSessionStorage(data) {
  sessionStorage.setItem("tattoosRank", JSON.stringify(data));
}

export default function App() {
  const [activeLoa, setActiveLoa] = useState({});
  const [activeTattoo, setActiveTattoo] = useState({});
  const [toggleTattooBox, setToggleTattooBox] = useState(false);
  const [toggleLoaBox, setToggleLoaBox] = useState(false);

  const setLoa = (data) => {
    setActiveLoa(data);
    setToggleLoaBox(true);
  };

  const setTattoo = (data) => {
    setActiveTattoo(data);
    setToggleTattooBox(true);
  };

  return (
    <div>
      <TattooPicker setLoa={setLoa} />
      {toggleLoaBox && <LoaBox dataLoa={activeLoa} setTattoo={setTattoo} />}
      {toggleTattooBox && <TattooBox dataTattoo={activeTattoo} />}
    </div>
  );
}

const TattooPicker = ({ setLoa }) => {
  return (
    <div>
      <h3 className="titleDivP" style={{ marginBottom: 0, marginRight: 0 }}>
        Choose a Tatto Pattern
      </h3>
      <div className="greyTableP">
        <div className="blackTableP">
          <div>
            {loa.map((loa, index) => {
              return (
                <div className="buttonP" key={index}>
                  <div className="pointer" onClick={() => setLoa(loa)}>
                    <img src={loa.icon} alt={loa.loaType} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoaBox = ({ dataLoa, setTattoo }) => {
  console.log(dataLoa);
  if ((!dataLoa || dataLoa == {}) && !setTattoo) return null;
  return (
    <>
      <h3 className="titleDivT" style={{ marginBottom: 0 }}>
        Tattoos
      </h3>
      <div className="greyTableT">
        <div className="blackTableT">
          <div>
            {dataLoa.tattos.map((tattoo, index) => {
              return (
                <div
                  onClick={() => setTattoo(tattoo)}
                  key={index}
                  className="buttonT"
                >
                  <img src={tattoo.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const TattooBox = ({ dataTattoo }) => {
  const [rank, setRank] = useState(getItemsFromSessionStorage() || 0);
  const maxRank = 10;

  const changeRank = (newRank) => {
    setRank(newRank);
    sessionStorage.clear();
    setItemsInSessionStorage(newRank);
  }

  return (
    <div className="nivbotTab">
      <div className="sumCont">
        {[...Array(maxRank)].map((e, i) => {
          return (
            <div className="miniSum miniSum:hover" onClick={() => changeRank(i)} key={i}>
              <span className="inSum">+{i}</span>
            </div>
          );
        })}
      </div>
      <div className='modalGen'>
        <img className='imgbase' src={dataTattoo.icon} />
        <p className="style-title">{dataTattoo.name} +{rank}</p>
        <p style={{margin: 0}}>{dataTattoo.buffType}<br />(Level {dataTattoo.level})</p>
        <p style={{ color: '#f5c478'}}>Duration: {dataTattoo.duration} seconds.</p>
        <p style={{ width: '80%', whiteSpace: 'break-spaces', margin: '1em auto'}}>{dataTattoo.description}</p>
        <div style={{width: '80%', height: '55px', whiteSpace: 'break-spaces', margin: "auto"}}>{
          dataTattoo.bcard.map((bcard, index) => {
            return (
              <p style={{ color: '#FA5', marginBottom: 0}} key={index}>
              {bcard.description} {bcard.value[rank]}
              </p>
            )
          })
        }
         {dataTattoo.bcardEffect.name && (
          <p style={{ color: '#FA5', marginBottom: 0}}>
            There is {dataTattoo.bcardEffect.chance[rank]} chance to cause <img className="button2" src={dataTattoo.bcardEffect.icon}/> {dataTattoo.bcardEffect.name}
          </p>
         )}
        </div>
      </div>
    </div>
  );
};
