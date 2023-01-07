import React, { useState, useRef } from 'react';
import draggable from '../../draggable';
import team from './teamCS.json';

const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    draggable(cardRef);

    return (
        <div className="modal" ref={cardRef}>
            {children}
        </div>
    );
};


function App() {
    {/*Floor Information*/ }
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changeContent = (teamInfo) => {
        setpopupcontent([teamInfo]);
        setpopuptogle(!popuptogle);
    }
    return (
        <div>
            <div className='titleDivTeams'><img src='https://cdn.olympusgg.com/images/4301.png' width='20' />Celestial Spire Teams</div>
            <div className='greyTableTeams'>

                <div className='blackTableTeams'>
                    {
                        team.map(team => {
                            return (
                                <>
                                    {
                                        team.teamInfo.map(teamInfo => {
                                            return (
                                                <div className='floorCS' onClick={() => changeContent(teamInfo)}><img src={teamInfo.image} /></div>
                                            )
                                        })}
                                </>

                            )
                        })}
                </div>

            </div>
            <div>
                {
                    popupcontent.map(pope => {
                        return (
                            <div>
                                {
                                    pope.companion.map(companion => {
                                        return (
                                            <div className='compaContainerGrey'>
                                                <tr className='compaContainerBlack'>
                                                    <td className='marginCompaTeam'>
                                                        <img src={companion.compa1} />
                                                        <p>{companion.compa1Name}</p>
                                                    </td>
                                                    <td className='marginCompaTeam'>
                                                        <img src={companion.compa2} />
                                                        <p>{companion.compa2Name}</p>
                                                    </td>
                                                    <td className='marginCompaTeam'>
                                                        <img src={companion.compa3} />
                                                        <p>{companion.compa3Name}</p>
                                                    </td>
                                                    <td className='marginCompaTeam'>
                                                        <img src={companion.compa4} />
                                                        <p>{companion.compa4Name}</p>
                                                    </td>
                                                    <td>
                                                        hola
                                                    </td>
                                                </tr>
                                            </div>
                                        )
                                    })}
                                <div className='buffInfoTeam'>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default App;