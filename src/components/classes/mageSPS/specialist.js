import React, { useState, useRef } from 'react';
import pat from './specialists-mage.json';
import draggable from '../../draggable';

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

    {/*Specialist Table*/ }
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changeContent = (specialist) => {
        setpopupcontent([specialist]);
        setpopuptogle(!popuptogle);
    }
    {/*Skill Table*/ }
    const [popupcontentT, setpopupcontentT] = useState([]);
    const [popuptogleT, setpopuptogleT] = useState(false);
    const changeContentT = (skill1) => {
        setpopupcontentT([skill1]);
        setpopuptogleT(!popuptogleT);
    }
    {/*Skill Table 2*/ }
    const [popupcontentT2, setpopupcontentT2] = useState([]);
    const [popuptogleT2, setpopuptogleT2] = useState(false);
    const changeContentT2 = (skill2) => {
        setpopupcontentT2([skill2]);
        setpopuptogleT2(!popuptogleT2);
    }
    {/*Skill Table 3*/ }
    const [popupcontentT3, setpopupcontentT3] = useState([]);
    const [popuptogleT3, setpopuptogleT3] = useState(false);
    const changeContentT3 = (skill3) => {
        setpopupcontentT3([skill3]);
        setpopuptogleT3(!popuptogleT3);
    }
    {/*Debuff popup Table*/ }
    const [popupcontentMini, setpopupcontentMini] = useState([]);
    const [popuptogleMini, setpopuptogleMini] = useState(false);
    const changeContentMini = (popMin) => {
        setpopupcontentMini([popMin]);
        setpopuptogleMini(!popuptogleMini);
    }
    {/*Debuff popup Table 2*/ }
    const [popupcontentMini2, setpopupcontentMini2] = useState([]);
    const [popuptogleMini2, setpopuptogleMini2] = useState(false);
    const changeContentMini2 = (popMin2) => {
        setpopupcontentMini2([popMin2]);
        setpopuptogleMini2(!popuptogleMini2);
    }
    return (
        <div>
            <div className='titleDivP'><b>Choose a Specialist</b></div>
            <div className='greyTableP'>
                <div className='blackTableP'>
                    <div>
                        {
                            pat.map(pat => {
                                return (
                                    <div className='buttonP'>
                                        {
                                            pat.specialist.map(specialist => {
                                                return (
                                                    <div title={specialist.title} className='pointer' onClick={() => changeContent(specialist)} ><img src={specialist.image} /></div>
                                                )
                                            })}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <div>
                {
                    popupcontent.map(pop1 => {
                        return (
                            <div>
                                <br/>
                                <div className='titleDivS'><b>{pop1.title}</b></div>
                                <div className='greyTableS'>
                                    <div className='blackTableS'>
                                        <p>
                                            <img src={pop1.image}/><br/>
                                            {pop1.reputation}<img src={pop1.repIcon}/>{pop1.job}<br/>
                                            {pop1.desc}<br/>
                                            <a style={{ color: '#ff862c' }}>{pop1.speed}</a>
                                            <img src={"https://cdn.olympusgg.com/images/element_1.png"}/><b> {pop1.fireRes} </b>
                                            <img src={"https://cdn.olympusgg.com/images/element_2.png"}/><b> {pop1.waterRes} </b>
                                            <img src={"https://cdn.olympusgg.com/images/element_3.png"}/><b> {pop1.lightRes} </b>
                                            <img src={"https://cdn.olympusgg.com/images/element_4.png"}/><b> {pop1.darkRes} </b>
                                        </p>
                                    </div>
                                </div>
                                <div className='titleDivT'><b>Skills</b></div>
                                <div className='greyTableT'>
                                    <div className='blackTableT'>
                                        <div >
                                            {
                                                [pop1.skill1.map(skill1 => {
                                                    return (
                                                        <a title={skill1.title} onClick={() => changeContentT(skill1)} className='buttonT' ><img src={skill1.image} /></a>
                                                    )
                                                }),
                                                pop1.skill2.map(skill2 => {
                                                    return (
                                                        <a title={skill2.title} onClick={() => changeContentT(skill2)} className='buttonT' ><img src={skill2.image} /></a>
                                                    )
                                                }),
                                                pop1.skill3.map(skill3 => {
                                                    return (
                                                        <a title={skill3.title} onClick={() => changeContentT(skill3)} className='buttonT' ><img src={skill3.image} /></a>
                                                    )
                                                }),
                                                pop1.skill4.map(skill4 => {
                                                    return (
                                                        <a title={skill4.title} onClick={() => changeContentT(skill4)} className='buttonT' ><img src={skill4.image} /></a>
                                                    )
                                                }),
                                                pop1.skill5.map(skill5 => {
                                                    return (
                                                        <a title={skill5.title} onClick={() => changeContentT(skill5)} className='buttonT' ><img src={skill5.image} /></a>
                                                    )
                                                }),
                                                pop1.skill6.map(skill6 => {
                                                    return (
                                                        <a title={skill6.title} onClick={() => changeContentT(skill6)} className='buttonT' ><img src={skill6.image} /></a>
                                                    )
                                                }),
                                                pop1.skill7.map(skill7 => {
                                                    return (
                                                        <a title={skill7.title} onClick={() => changeContentT(skill7)} className='buttonT' ><img src={skill7.image} /></a>
                                                    )
                                                }),
                                                pop1.skill8.map(skill8 => {
                                                    return (
                                                        <a title={skill8.title} onClick={() => changeContentT(skill8)} className='buttonT' ><img src={skill8.image} /></a>
                                                    )
                                                }),
                                                pop1.skill9.map(skill9 => {
                                                    return (
                                                        <a title={skill9.title} onClick={() => changeContentT(skill9)} className='buttonT' ><img src={skill9.image} /></a>
                                                    )
                                                }),
                                                pop1.skill10.map(skill10 => {
                                                    return (
                                                        <a title={skill10.title} onClick={() => changeContentT(skill10)} className='buttonT' ><img src={skill10.image} /></a>
                                                    )
                                                }),
                                                pop1.skill11.map(skill11 => {
                                                    return (
                                                        <a title={skill11.title} onClick={() => changeContentT(skill11)} className='buttonT' ><img src={skill11.image} /></a>
                                                    )
                                                }),
                                                pop1.skill12 ? (
                                                pop1.skill12.map(skill12 => {
                                                    return (
                                                        <a title={skill12.title} onClick={() => changeContentT(skill12)} className='buttonT' ><img src={skill12.image} /></a>
                                                    )
                                                })) : (<a></a>),
                                                pop1.skill13 ? (
                                                pop1.skill13.map(skill13 => {
                                                    return (
                                                        <a title={skill13.title} onClick={() => changeContentT(skill13)} className='buttonT' ><img src={skill13.image} /></a>
                                                    )
                                                })) : (<a></a>),
                                                pop1.skill14 ? (
                                                pop1.skill14.map(skill14 => {
                                                    return (
                                                        <a title={skill14.title} onClick={() => changeContentT(skill14)} className='buttonT' ><img src={skill14.image} /></a>
                                                    )
                                                })) : (<a></a>),
                                                pop1.skill15 ? (
                                                pop1.skill15.map(skill15 => {
                                                    return (
                                                        <a title={skill15.title} onClick={() => changeContentT(skill15)} className='buttonT' ><img src={skill15.image} /></a>
                                                    )
                                                })) : (<a></a>),
                                                pop1.skill16 ? (
                                                pop1.skill16.map(skill16 => {
                                                    return (
                                                        <a title={skill16.title} onClick={() => changeContentT(skill16)} className='buttonT' ><img src={skill16.image} /></a>
                                                    )
                                                })) : (<a></a>),
                                                ]
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        /*Skill popup */
                                        popupcontentT.map(pop1 => {
                                            return (
                                                <div className='nivbotTab'>                                             
                                                    <div className='modalGen'>
                                                        <img className='imgbase' src={pop1.image}/>
                                                        <p class="skill-title">{pop1.title}</p>
                                                        <p>
                                                            {pop1.job}<br/>
                                                            <a style={{ color: '#f5c478' }}>{pop1.cp}</a><br/><br/>
                                                            <a style={{ color: '#ff862c' }}>{pop1.fairy}</a>
                                                            <a style={{ color: '#f5c478' }}>{pop1.range}</a><br/>
                                                            <a style={{ color: '#f5c478' }}>{pop1.target}</a><br/><br/>
                                                            <a style={{ color: '#f5c478' }}>{pop1.cast}</a><br/>
                                                            <a style={{ color: '#f5c478' }}>{pop1.cool}</a><br/>
                                                            <a style={{ color: '#f5c478' }}>{pop1.mp}</a><br/>
                                                            <a style={{ color: '#ff323d' }}>{pop1.price}</a><br/>
                                                        </p>
                                                        <p style={{ color: '#ff862c' }}>
                                                            {pop1.bcard1}
                                                            {pop1.bcard2}
                                                            {pop1.bcard3}{
                                                                pop1.buff ? (
                                                                pop1.buff.map(buff => {
                                                                    return (
                                                                        <button onClick={() => changeContentMini(buff)} className='button2'><img src={buff.img} /></button>
                                                                    )
                                                                })) : (<a></a>)
                                                            }{pop1.bcard4}
                                                                {pop1.bcard5}{
                                                                    pop1.buff2 ? (
                                                                    pop1.buff2.map(buff2 => {
                                                                        return (
                                                                            <button onClick={() => changeContentMini2(buff2)} className='button2'><img src={buff2.img} /></button>
                                                                        )
                                                                    })) : (<a></a>)
                                                                }{pop1.bcard6}
                                                                {pop1.bcard7}{
                                                                    pop1.buff3 ? (
                                                                    pop1.buff3.map(buff3 => {
                                                                        return (
                                                                            <button onClick={() => changeContentMini(buff3)} className='button2'><img src={buff3.img} /></button>
                                                                        )
                                                                    })) : (<a></a>)
                                                                }{pop1.bcard8}
                                                            {pop1.bcard9}{
                                                                pop1.comboskill ? (
                                                                pop1.comboskill.map(comboskill => {
                                                                    return (
                                                                        <button onClick={() => changeContentT2(comboskill)} className='button2'><img src={comboskill.image} /></button>
                                                                    )
                                                                })) : (<a></a>)
                                                            }{pop1.bcard10}
                                                        </p>
                                                        <p>{pop1.desc}</p>
                                                    </div>
                                                    {/*Combo Skill popup 1*/
                                                        popuptogleT2 &&
                                                            <div>
                                                                {
                                                                    popupcontentT2.map(pop2 => {
                                                                    return (
                                                                        <div>
                                                                            <DraggableCard>
                                                                                <button onClick={changeContentT2} className='close'></button>                                            
                                                                                <div>
                                                                                    <img className='imgbase' src={pop2.image}/>
                                                                                    <p class="popup-title">{pop2.title}</p>
                                                                                    <p>
                                                                                        {pop2.job}<br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop2.cp}</a><br/><br/>
                                                                                        <a style={{ color: '#ff862c' }}>{pop2.fairy}</a>
                                                                                        <a style={{ color: '#f5c478' }}>{pop2.range}</a><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop2.target}</a><br/><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop2.cast}</a><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop2.cool}</a><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop2.mp}</a><br/>
                                                                                        <a style={{ color: '#ff323d' }}>{pop2.price}</a><br/>
                                                                                    </p>
                                                                                    <p style={{ color: '#ff862c' }}>
                                                                                        {pop2.bcard1}
                                                                                        {pop2.bcard2}
                                                                                        {pop2.bcard3}{
                                                                                            pop2.buff ? (
                                                                                            pop2.buff.map(buff => {
                                                                                                return (
                                                                                                    <button onClick={() => changeContentMini(buff)} className='button2'><img src={buff.img} /></button>
                                                                                                )
                                                                                            })) : (<a></a>)
                                                                                        }{pop2.bcard4}
                                                                                            {pop2.bcard5}{
                                                                                                pop2.buff2 ? (
                                                                                                pop2.buff2.map(buff2 => {
                                                                                                    return (
                                                                                                        <button onClick={() => changeContentMini2(buff2)} className='button2'><img src={buff2.img} /></button>
                                                                                                    )
                                                                                                })) : (<a></a>)
                                                                                            }{pop2.bcard6}
                                                                                        {pop2.bcard7}{
                                                                                            pop2.buff3 ? (
                                                                                                pop2.buff3.map(buff3 => {
                                                                                                return (
                                                                                                    <button onClick={() => changeContentMini(buff3)} className='button2'><img src={buff3.img} /></button>
                                                                                                )
                                                                                            })) : (<a></a>)
                                                                                        }{pop2.bcard8}
                                                                                        {pop2.bcard9}{
                                                                                            pop2.comboskill ? (
                                                                                            pop2.comboskill.map(comboskill => {
                                                                                                return (
                                                                                                    <button onClick={() => changeContentT3(comboskill)} className='button2'><img src={comboskill.image} /></button>
                                                                                                )
                                                                                            })) : (<a></a>)
                                                                                        }{pop2.bcard10}
                                                                                    </p>
                                                                                    <p>{pop2.desc}</p>
                                                                                </div>
                                                                            </DraggableCard>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>}
                                                    {/*Combo Skill popup 2*/
                                                    popuptogleT3 &&
                                                            <div>
                                                                {
                                                                    popupcontentT3.map(pop3 => {
                                                                    return (
                                                                        <div>
                                                                            <DraggableCard>
                                                                                <button onClick={changeContentT3} className='close'></button>                                            
                                                                                <div>
                                                                                    <img className='imgbase' src={pop3.image}/>
                                                                                    <p class="popup-title">{pop3.title}</p>
                                                                                    <p>
                                                                                        {pop3.job}<br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop3.cp}</a><br/><br/>
                                                                                        <a style={{ color: '#ff862c' }}>{pop3.fairy}</a>
                                                                                        <a style={{ color: '#f5c478' }}>{pop3.range}</a><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop3.target}</a><br/><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop3.cast}</a><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop3.cool}</a><br/>
                                                                                        <a style={{ color: '#f5c478' }}>{pop3.mp}</a><br/>
                                                                                        <a style={{ color: '#ff323d' }}>{pop3.price}</a><br/>
                                                                                    </p>
                                                                                    <p style={{ color: '#ff862c' }}>
                                                                                        {pop3.bcard1}
                                                                                        {pop3.bcard2}
                                                                                        {pop3.bcard3}{
                                                                                            pop3.buff ? (
                                                                                            pop3.buff.map(buff => {
                                                                                                return (
                                                                                                    <button onClick={() => changeContentMini(buff)} className='button2'><img src={buff.img} /></button>
                                                                                                )
                                                                                            })) : (<a></a>)
                                                                                        }{pop3.bcard4}
                                                                                            {pop3.bcard5}{
                                                                                                pop3.buff2 ? (
                                                                                                pop3.buff2.map(buff2 => {
                                                                                                    return (
                                                                                                        <button onClick={() => changeContentMini2(buff2)} className='button2'><img src={buff2.img} /></button>
                                                                                                    )
                                                                                                })) : (<a></a>)
                                                                                            }{pop3.bcard6}
                                                                                        {pop3.bcard7}{
                                                                                            pop3.buff3 ? (
                                                                                                pop3.buff3.map(buff3 => {
                                                                                                return (
                                                                                                    <button onClick={() => changeContentMini(buff3)} className='button2'><img src={buff3.img} /></button>
                                                                                                )
                                                                                            })) : (<a></a>)
                                                                                        }{pop3.bcard8}
                                                                                        {pop3.bcard9}{
                                                                                            pop3.comboskill ? (
                                                                                            pop3.comboskill.map(comboskill => {
                                                                                                return (
                                                                                                    <button onClick={() => changeContentT2(comboskill)} className='button2'><img src={comboskill.image} /></button>
                                                                                                )
                                                                                            })) : (<a></a>)
                                                                                        }{pop3.bcard10}
                                                                                    </p>
                                                                                    <p>{pop3.desc}</p>
                                                                                </div>
                                                                            </DraggableCard>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>}
                                                    {   /*Buff popup */
                                                        popuptogleMini &&
                                                        <div>
                                                            {
                                                                popupcontentMini.map(popMin => {
                                                                    return (
                                                                        <div>
                                                                            <DraggableCard>
                                                                                <button onClick={changeContentMini} className='close'></button>
                                                                                <img class="imgbase" src={popMin.img} />
                                                                                <p class="popup-title">{popMin.title}</p>
                                                                                <p>{popMin.subtitle}
                                                                                <a style={{ color: '#f5c478' }}>{popMin.duration}</a></p>
                                                                                <p>{popMin.desc}</p>
                                                                                <p style={{ color: '#ff862c' }}>
                                                                                    {popMin.bcard1}
                                                                                    {popMin.subBcard1}{
                                                                                        popMin.subBuff ? (
                                                                                        popMin.subBuff.map(subBuff => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentMini2(subBuff)} className='button2'><img src={subBuff.img} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }{popMin.subBcard2}
                                                                                    {popMin.subBonusSkillBcard1}{
                                                                                        popMin.subBonusSkill ? (
                                                                                        popMin.subBonusSkill.map(subBonusSkill => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentT2(subBonusSkill)} className='button2'><img src={subBonusSkill.image} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }{popMin.subBonusSkillBcard2}
                                                                                    <a style={{ color : '#f5c478' }}>{popMin.sideEff}</a>
                                                                                    {popMin.sideEffbcard1}{
                                                                                        popMin.sideEffbuff ? (
                                                                                        popMin.sideEffbuff.map(sideEffbuff => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentMini2(sideEffbuff)} className='button2'><img src={sideEffbuff.img} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }{popMin.sideEffbcard2}
                                                                                    {popMin.bonusSkillBcard1}{
                                                                                        popMin.bonusSkill ? (
                                                                                        popMin.bonusSkill.map(bonusSkill => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentT2(bonusSkill)} className='button2'><img src={bonusSkill.image} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }{popMin.bonusSkillBcard2}
                                                                                </p>
                                                                                <p style={{ color: '#ff862c' }}>
                                                                                    {
                                                                                        popMin.releaseBuff ? (
                                                                                        popMin.releaseBuff.map(releaseBuff => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentMini2(releaseBuff)} className='button2'><img src={releaseBuff.img} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }
                                                                                    <a style={{ color : '#f5c478' }}>{popMin.release}</a>
                                                                                </p>
                                                                            </DraggableCard>
                                                                        </div>
                                                                    )
                                                                })}
                                                        </div>}
                                                    {   /*Buff popup 2*/
                                                        popuptogleMini2 &&
                                                    <div>
                                                        {
                                                            popupcontentMini2.map(popMin2 => {
                                                                return (
                                                                    <div>
                                                                        <DraggableCard>
                                                                            <button onClick={changeContentMini2} className='close'></button>
                                                                            <img class="imgbase" src={popMin2.img} />
                                                                            <p class="popup-title">{popMin2.title}</p>
                                                                            <p>{popMin2.subtitle}
                                                                            <a style={{ color: '#f5c478' }}>{popMin2.duration}</a></p>
                                                                            <p>{popMin2.desc}</p>
                                                                            <p style={{ color: '#ff862c' }}>{popMin2.bcard1}
                                                                                    {popMin2.subBcard1}{
                                                                                        popMin2.subBuff ? (
                                                                                            popMin2.subBuff.map(subBuff => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentMini(subBuff)} className='button2'><img src={subBuff.img} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }{popMin2.subBcard2}
                                                                                    <a style={{ color : '#f5c478' }}>{popMin2.sideEff}</a>
                                                                                    {popMin2.sideEffbcard1}{
                                                                                        popMin2.sideEffbuff ? (
                                                                                            popMin2.sideEffbuff.map(sideEffbuff => {
                                                                                            return (
                                                                                                <button onClick={() => changeContentMini2(sideEffbuff)} className='button2'><img src={sideEffbuff.img} /></button>
                                                                                            )
                                                                                        })) : (<a></a>)
                                                                                    }{popMin2.sideEffbcard2}
                                                                                </p>
                                                                            <p style={{ color: '#ff862c' }}>
                                                                                {
                                                                                    popMin2.releaseBuff ? (
                                                                                    popMin2.releaseBuff.map(releaseBuff => {
                                                                                        return (
                                                                                            <button onClick={() => changeContentMini(releaseBuff)} className='button2'><img src={releaseBuff.img} /></button>
                                                                                        )
                                                                                    })) : (<a></a>)
                                                                                }
                                                                                <a style={{ color : '#f5c478' }}>{popMin2.release}</a>
                                                                            </p>
                                                                        </DraggableCard>
                                                                    </div>
                                                                )
                                                            })}
                                                    </div>}
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>

    )

}
export default App;