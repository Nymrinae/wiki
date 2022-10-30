// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import draggable from "../../draggable";
import psp from "./dataPartner.json";

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);

  draggable(cardRef);

  return (
    <div className="modal" ref={cardRef}>
      {children}
    </div>
  );
};

// To store the rank of each spell card to dynamically change the render when someone change the active psp
function getItemsFromSessionStorage() {
  return JSON.parse(sessionStorage.getItem("spellRank"));
}

function setItemsInSessionStorage(data) {
  sessionStorage.setItem("spellRank", JSON.stringify(data));
}

export default function App() {
  const [activePartner, setActivePartner] = useState({});
  const [toggleBox, setToggleBox] = useState(false);

  const setData = (data) => {
    setActivePartner(data);
    setToggleBox(true);
  };
  return (
    <>
      <PartnerPicker setData={setData} />
      <PartnerBox dataPartner={activePartner} toggleBox={toggleBox} />
    </>
  );
}

const PartnerPicker = ({ setData }) => {
  return (
    <>
      <h3 className="titleDiv1">Choose a Card</h3>
      <div className="greyTable1">
        <div className="tableSkills0">
          {psp.map((partner) => {
            return (
              <div className="button0" key={psp.indexOf(partner)}>
                <div
                  className="pointer"
                  key={psp.indexOf(partner)}
                  onClick={() => setData(partner)}
                >
                  <img src={partner.buttonImg} alt={partner.cardName} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const PartnerBox = ({ dataPartner, toggleBox }) => {
  const [modal, setModal] = useState(false);
  const [spellEffect, setSpellEffect] = useState({});
  if (!dataPartner.cardName && !toggleBox) return null;
  return (
    <>
      <div className="contentDiv">
        <div className="titleDiv">{dataPartner.cardName}</div>
        <div className="contentDiv greyTable">
          <LeftPartnerBox dataPartner={dataPartner} />
          <RightPartnerBox
            dataPartner={dataPartner}
            setSpellEffect={setSpellEffect}
            modal={modal}
            setModal={setModal}
          />
        </div>
      </div>
      {/*  TO FIX - SpellEffect is undefined ??? */}
      {spellEffect != {} && (
        <ModalSpellEffect
          spellEffect={spellEffect}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
};

const RightPartnerBox = ({ dataPartner, setSpellEffect, setModal, modal }) => {
  return (
    <>
      <div className="modalleft">
        <Skills
          dataPartner={dataPartner}
          skillIndex={0}
          setSpellEffect={setSpellEffect}
          setModal={setModal}
          modal={modal}
        />
      </div>
      <div className="modalMid">
        <Skills
          dataPartner={dataPartner}
          skillIndex={1}
          setSpellEffect={setSpellEffect}
          setModal={setModal}
          modal={modal}
        />
      </div>
      <div className="modalRight">
        <Skills
          dataPartner={dataPartner}
          skillIndex={2}
          setSpellEffect={setSpellEffect}
          setModal={setModal}
          modal={modal}
        />
      </div>
    </>
  );
};
// rank check need fix
const Skills = ({
  dataPartner,
  skillIndex,
  setSpellEffect,
  setModal,
  modal,
}) => {
  const skillRanks = [
    { rank: "f", color: "#EEE" },
    { rank: "e", color: "#DDE" },
    { rank: "d", color: "#0EF" },
    { rank: "c", color: "#0EF" },
    { rank: "b", color: "#0F9" },
    { rank: "a", color: "#0C0" },
    { rank: "s", color: "#FE0" },
  ];
  // We put 6 here to render the s rank by default
  const [rankIndex, setRankIndex] = useState(6);
  const [isActive, setIsActive] = useState(6);

  const changeSkill = (index, rankIndex) => {
    setIsActive(rankIndex);
    let tempStorage = getItemsFromSessionStorage();
    tempStorage = tempStorage ?? [6, 6, 6];
    tempStorage[index] = rankIndex;
    setRankIndex(rankIndex);

    sessionStorage.clear();
    setItemsInSessionStorage(tempStorage);
  };

  return (
    <>
      <div className="skillRank">
        {skillRanks.map((skillRank, index) => {
          return (
            <p
              key={index}
              className={`skillRank p ${isActive == index ? "selected" : ""}`}
              style={{ color: skillRank.color, textTransform: "uppercase" }}
              onClick={() => changeSkill(skillIndex, index)}
            >
              {skillRank.rank}
            </p>
          );
        })}
      </div>
      <Skill
        dataPartner={dataPartner}
        rankIndex={rankIndex}
        index={skillIndex}
        setSpellEffect={setSpellEffect}
        setModal={setModal}
        modal={modal}
      />
    </>
  );
};

const Skill = ({
  dataPartner,
  rankIndex,
  index,
  setSpellEffect,
  setModal,
  modal,
}) => {
  const skills = [];

  dataPartner.skills.forEach((s) => {
    let temp = [];
    for (let i = s.length - 1; i >= 0; i--) {
      temp.push(s[i]);
    }
    skills.push(temp);
  });
  const skill = skills[index][rankIndex];
  useEffect(() => {
    setSpellEffect(skill.effects[0]);
  }, [skill]);

  const renderSpellEffect = (skill) => {
    setModal(!modal);
    setSpellEffect(skill);
  };

  return (
    <>
      <div className="modalNiv">
        <div>
          <div>
            <div className="skillHeader">
              <label className="imgbasePart">
                <img src={skill.img} alt={skill.title} />
              </label>
              <p className="style-title2">{skill.title}</p>
            </div>
            {skill.fairyEffect && skill.fairyEffect != "" && (
              <p style={{ color: "#FA5" }}>{skill.fairyEffect}</p>
            )}
            <p style={{ color: "#f5c478" }}>{skill.range}</p>
            <p style={{ color: "#f5c478" }}>{skill.times}</p>
            {skill.bcard.length > 0 && (
              <>
                {skill.bcard.map((bcard) => {
                  return (
                    <p
                      style={{
                        color: "#FA5",
                        margin: "0 10px",
                        whiteSpace: "pre-wrap",
                      }}
                      key={bcard.desc}
                    >
                      {bcard.desc} {bcard.value} <br />
                    </p>
                  );
                })}
              </>
            )}
            {skill.effects.length > 0 && (
              <>
                {skill.effects.map((effect, index) => {
                  return (
                    <p
                      style={{
                        color: "#FA5",
                        margin: "0 10px",
                        whiteSpace: "pre-wrap",
                      }}
                      key={effect.desc}
                    >
                      {skill.bcardEffects[index]} <br />{" "}
                      <button
                        onClick={() => renderSpellEffect(skill.effects[index])}
                        className="button2"
                        style={{ color: "#FA5", margin: 0 }}
                      >
                        <img src={skill.effectImg[index]} />
                      </button>
                      {effect.title} {effect.rank}
                    </p>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const ModalSpellEffect = ({ spellEffect, modal, setModal }) => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setModal(!modal);
  }, [trigger]);
  return modal || spellEffect == {} || !spellEffect ? null : (
    <>
      <DraggableCard>
        <button onClick={() => setTrigger(!trigger)} className="close"></button>
        <label className="imgbase">
          <img
            src={spellEffect.img}
            alt={spellEffect.title}
            width="30px"
            height="30px"
          />
        </label>
        <p className="style-title2">
          {spellEffect.title} {spellEffect.rank}
        </p>
        <p style={{ color: "#FFF" }}>
          {spellEffect.type}
          <br />
          (Level {spellEffect.level})
        </p>
        <p style={{ color: "#f5c478" }}>
          Duration: {spellEffect.duration} seconds
        </p>
        <p style={{ color: "#FFF" }}>{spellEffect.desc}</p>
        {spellEffect.bcard && spellEffect.bcard != [] && (
          <>
            {spellEffect.bcard.map((bcard) => {
              return (
                <p
                  style={{
                    color: "#FA5",
                    margin: "5px 10px",
                    whiteSpace: "pre-wrap",
                  }}
                  key={bcard.desc}
                >
                  {bcard.desc} {bcard.value} <br />
                </p>
              );
            })}
          </>
        )}
        {spellEffect.effects && spellEffect.effects != [] && (
          <>
            {spellEffect.effects.map((effect, index) => {
              return (
                <p
                  style={{
                    color: "#FA5",
                    margin: "0 10px",
                    whiteSpace: "pre-wrap",
                  }}
                  key={effect.desc}
                >
                  {spellEffect.effects && (
                    <>{spellEffect.effects?.[index].description} </>
                  )}
                  {spellEffect.bcardEffects?.[index] + '\n'}
                  <button
                    onClick={() => renderSpellEffect(effect)}
                    className="button2"
                    style={{ color: "#FA5", margin: 0 }}
                  >
                    <img src={spellEffect.effects?.[index].img} />
                  </button>
                  {spellEffect.effects?.[index].title}{" "}
                  {spellEffect.effects?.[index].rank}
                </p>
              );
            })}
          </>
        )}
      </DraggableCard>
    </>
  );
};
const LeftPartnerBox = ({ dataPartner }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="partnerDesc">
      <div className="lefCube1">
        <p className="requParr">Information</p>
        <p className="inforPara">Partners</p>
        <div className="miniParIcon">
          {/* To change for an array in the json file */}
          <img src={dataPartner.partner1Img} className="imgParIcon" />
          <img src={dataPartner.partner2Img} className="imgParIcon" />
          <img src={dataPartner.partner3Img} className="imgParIcon" />
          <img src={dataPartner.partner4Img} className="imgParIcon" />
        </div>
              <p className="inforPara3">Additional Speed</p>
      <div className="speed"> </div>
           <div>
           Speed + {dataPartner.speed}
          </div>
        <p className="inforPara2">Resistances</p>
        <div className="resis">
          <div>
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_1.png"
            />{" "}
            {dataPartner.resistances.fire}%
          </div>
          <div>
            {dataPartner.resistances.light}%{" "}
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_3.png"
            />
          </div>
          <div>
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_2.png"
            />{" "}
            {dataPartner.resistances.water}%
          </div>
          <div>
            {dataPartner.resistances.shadow}%{" "}
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_4.png"
            />
          </div>
        </div>
      </div>
      <div className="BottomLeftBox">
        <div className="BLBoxTop">
          {dataPartner.playerBuff.title && (
            <img
              onClick={() => setModal(true)}
              className="button2p"
              src={dataPartner.playerBuff.img}
            />
          )}
          <img className="pspIcon" src={dataPartner.iconImg} />
        </div>
        <div className="BLBoxBottom">
          <img className="imgPsp" src={dataPartner.pspImg} />
        </div>
      </div>
      {dataPartner.playerBuff.title && (
        <ModalBuffEffect
          spellEffect={dataPartner.playerBuff}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

const ModalBuffEffect = ({ spellEffect, modal, setModal }) => {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setModal(false);
  }, [trigger]);

  return (
    <>
      {modal && (
        <div>
          <DraggableCard>
            <button onClick={() => setTrigger(!trigger)} className="close" />
            <label className="imgbase">
              <img src={spellEffect.img} width="30px" height="30px" />
            </label>
            {/* css need some work for the title */}
            <p className="style-title2">{spellEffect.title}</p>
            <p style={{ color: "#FFF" }}>
              {spellEffect.type}
              <br />
              (Level {spellEffect.level})
            </p>
            <p style={{ color: "#f5c478" }}>
              Duration: {spellEffect.duration} seconds
            </p>
            <p style={{ color: "#fff" }}>{spellEffect.desc}</p>
            <div style={{ marginBottom: "2em" }}>
              {spellEffect.bcard.map((bcard) => {
                return (
                  <p style={{ color: "#FA5", margin: "0.5em" }}>
                    {bcard.desc}
                    <br />
                    {bcard.value}
                  </p>
                );
              })}
            </div>
          </DraggableCard>
        </div>
      )}
    </>
  );
};
