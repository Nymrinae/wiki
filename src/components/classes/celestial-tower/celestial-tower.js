import React, { useState } from 'react';
import cs from './celestial-tower.json';

function App() {
    {/*Floor Information*/ }
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changeContent = (csInfo) => {
        setpopupcontent([csInfo]);
        setpopuptogle(!popuptogle);
    }
    return (
        <div>
            <div className='titleDivCS'><img src='https://cdn.olympusgg.com/images/4301.png' width='20' /> Celestial Spire Floors</div>
            <div className='greyTableCS'>

                <div className='blackTableCS'>
                    {
                        cs.map(cs => {
                            return (
                                <div className='floorCS' onClick={() => changeContent(cs)}>{cs.floor}</div>
                            )
                        })}
                </div>

            </div>
            <div>
                {
                    popupcontent.map(cs1 => {
                        return (
                            <div className='infotableCS'>
                                {cs1.information.map(information => {
                                    return (
                                        <div>
                                            <div className='titleDivCSInfo'>Celestial Spire - Floor {information.number}</div>
                                            <div className='bodyInfoCS'>
                                                <div className='divRequCS'>
                                                    <p className='minititleCS'>Required</p>
                                                    <p className='levelCS'>Level</p>
                                                    <p className='levelCS2'> 99 - 99</p>
                                                    <p className='timeCS'>Minimun Time</p>
                                                    <p className='timeCS2'>{information.time}s</p>
                                                    <p className='timeCS'>Items to enter</p>
                                                    <a className='blackminiBackground'>
                                                        <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4301.png' />
                                                        <p className='miniAmountCS'>1</p>
                                                    </a>
                                                </div>
                                                <div className='divRewardCS'>
                                                    <p className='minititleCS'>Rewards</p>
                                                    <p className='levelCS'>Gold</p>
                                                    <a className='blackminiBackgroundRight'>
                                                        <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/1046.png' />
                                                        <p className='miniAmountCS'>{information.gold}</p>
                                                    </a>
                                                    <p className='reputationCS'>Reputation</p>
                                                    <a className='blackminiBackgroundRight'>
                                                        <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/1091.png' />
                                                        <p className='miniAmountCS'>{information.reputation}</p>
                                                    </a>
                                                    <p className='reputationCS'>Random</p>
                                                    <div className='randomContainerCS'>
                                                        <a className='blackminiBackgroundRight'>
                                                            <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4300.png' />
                                                            <p className='miniAmountCS'>2</p>
                                                        </a>
                                                        <a className='blackminiBackgroundRight'>
                                                            <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4300.png' />
                                                            <p className='miniAmountCS'>1</p>
                                                        </a>
                                                        <a className='blackminiBackgroundRight'>
                                                            <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4301.png' />
                                                            <p className='miniAmountCS'>3</p>
                                                        </a>
                                                    </div>

                                                    <p className='reputationCS'>Bonus</p>
                                                    <div className='randomContainerCS'>
                                                        <a className='blackminiBackgroundRight'>
                                                            <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4300.png' />
                                                            <p className='miniAmountCS'>{information.bonusCoin}</p>
                                                        </a>
                                                        <a className='blackminiBackgroundRight'>
                                                            <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4303.png' />
                                                            <p className='miniAmountCS'>{information.bonusBox}</p>
                                                        </a>
                                                        <a className='blackminiBackgroundRight'>
                                                            <img className='imageinsideBackground' src='https://cdn.olympusgg.com/images/4307.png' />
                                                            <p className='miniAmountCS'>{information.bonusFrag}</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default App;