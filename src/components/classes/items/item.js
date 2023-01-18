import React, { useState, useRef } from 'react';
import Items from './items.json';
import SwordSPS from '../swordSPS/specialists-sword.json';
import ArcherSPS from '../archerSPS/specialists-archer.json';
import MageSPS from '../mageSPS/specialists-mage.json';
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

function App (itemId, height, width) {

    {/*Item Table*/ }
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changeContent = (item) => {
        setpopupcontent([item]);
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
    {/*Buff popup Table 1*/ }
    const [popupcontentMini, setpopupcontentMini] = useState([]);
    const [popuptogleMini, setpopuptogleMini] = useState(false);
    const changeContentMini = (popMin) => {
        setpopupcontentMini([popMin]);
        setpopuptogleMini(!popuptogleMini);
    }
    {/*Buff popup Table 2*/ }
    const [popupcontentMini2, setpopupcontentMini2] = useState([]);
    const [popuptogleMini2, setpopuptogleMini2] = useState(false);
    const changeContentMini2 = (popMin2) => {
        setpopupcontentMini2([popMin2]);
        setpopuptogleMini2(!popuptogleMini2);
    }
    {/*Buff popup Table 3*/ }
    const [popupcontentMini3, setpopupcontentMini3] = useState([]);
    const [popuptogleMini3, setpopuptogleMini3] = useState(false);
    const changeContentMini3 = (popMin3) => {
        setpopupcontentMini3([popMin3]);
        setpopuptogleMini3(!popuptogleMini3);
    }
        
    return (
        <div class="item-popup">
            <div>
                {
                    Items.map(Items => {
                        return (
                            Items.item.map(item => {
                                if (item.id == itemId) {
                                return (
                                    <div className='item-button'>
                                        <div title={item.title} className='pointer' onClick={() => changeContent(item)} ><img src={'https://cdn.olympusgg.com/images/' + itemId + '.png'} height={height + 'px'} width={width + 'px'}/></div>
                                    </div>
                                )}
                            })
                        )
                    })}
            </div>
            <div>
                {
                    popuptogle &&
                    <div>
                        {
                            /*Popup*/
                            popupcontent.map(popup => {
                                if (popup.type == "consumable") {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContent} className='close'></button>
                                            <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                            <p class="popup-title">{popup.title}</p><br/>
                                            <a style={{ color: '#f5c478' }}>{popup.category}</a>
                                            <a style={{ color: '#f5c478' }}>{popup.restrictions}</a><br/>
                                            <a style={{ color: '#ff323d' }}>{popup.price}</a><br/><br/>
                                            <p>{popup.description}</p>
                                        </DraggableCard>
                                    </div>
                                )}
                                if (popup.type == "equipment") {
                                    return (
                                        <div>
                                            <DraggableCard>
                                                <button onClick={changeContent} className='close'></button>
                                                <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                                <p class="popup-title">{popup.title}</p><br/>
                                                <p>{popup.requirements}</p>
                                                <a style={{ color: '#f5c478' }}>{popup.restrictions}</a>
                                                <a style={{ color: '#f5c478' }}>{popup.stats}</a>
                                                <a style={{ color: '#ff323d' }}>{popup.price}</a><br/><br/>
                                                <p style={{ color: '#ff862c' }}>
                                                    {popup.bcard}
                                                    {popup.buffBcard1}{
                                                        popup.buff ? (
                                                            popup.buff.map(buff => {
                                                            return (
                                                                <button onClick={() => changeContentMini(buff)} className='button2'><img src={buff.img} /></button>
                                                            )
                                                        })) : (<a></a>)
                                                    }{popup.buffBcard2}
                                                </p>
                                                <p>{popup.description}</p>
                                            </DraggableCard>
                                            <div>
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
                                                </div>
                                            }
                                            </div>
                                        </div>
                                )}
                                if (popup.type == "resistance") {
                                    return (
                                        <div>
                                            <DraggableCard>
                                                <button onClick={changeContent} className='close'></button>
                                                <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                                <p class="popup-title">{popup.title}</p>
                                                <p>{popup.restrictions}
                                                <a style={{ color: '#f5c478' }}>{popup.combination}</a>
                                                </p>
                                                <a style={{ color: '#f5c478' }}>{popup.stats}</a><br/><br/>
                                                <a style={{ color: '#f5c478' }}>{popup.resistances}</a><br/><br/>
                                                <a style={{ color: '#ff323d' }}>{popup.price}</a><br/><br/>
                                                <a style={{ color: '#ff862c' }}>{popup.bcard}</a><br/><br/>
                                                <p>{popup.description}</p>
                                            </DraggableCard>
                                        </div>
                                )}
                                if (popup.type == "fairy") {
                                    return (
                                        <div>
                                            <DraggableCard>
                                                <button onClick={changeContent} className='close'></button>
                                                <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                                <p class="popup-title">{popup.title}</p>
                                                <p style={{ color: '#f5c478' }}>
                                                {popup.attribute}<br/>
                                                {popup.element}
                                                {popup.restrictions}
                                                </p>
                                                <a style={{ color: '#ff862c' }}>{popup.bcard}</a><br/><br/>
                                                <p>{popup.description}</p>
                                            </DraggableCard>
                                        </div>
                                )}
                                if (popup.type == "accessory") {
                                    return (
                                        <div>
                                            <DraggableCard>
                                                <button onClick={changeContent} className='close'></button>
                                                <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                                <p class="popup-title">{popup.title}</p>
                                                <p>{popup.level}<br/>
                                                <a style={{ color: '#f5c478' }}>{popup.optionLevel}</a><br/>
                                                <a style={{ color: '#f5c478' }}>{popup.optionCount}</a>
                                                </p>
                                                <a style={{ color: '#ff323d' }}>{popup.price}</a><br/><br/><br/>
                                                <a style={{ color: '#ff862c' }}>{popup.bcard}</a><br/><br/>
                                                <p>{popup.description}</p>
                                            </DraggableCard>
                                        </div>
                                )}
                                if (popup.type == "buff") {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContent} className='close'></button>
                                            <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                            <p class="popup-title">{popup.title}</p>
                                            <p>{popup.subtitle}
                                            <a style={{ color: '#f5c478' }}>{popup.duration}</a></p>
                                            <p>{popup.desc}</p>
                                            <p style={{ color: '#ff862c' }}>
                                                {popup.bcard1}
                                                {popup.subBcard1}{
                                                    popup.subBuff ? (
                                                    popup.subBuff.map(subBuff => {
                                                        return (
                                                            <button onClick={() => changeContentMini2(subBuff)} className='button2'><img src={subBuff.img} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }{popup.subBcard2}
                                                {popup.subBonusSkillBcard1}{
                                                    popup.subBonusSkill ? (
                                                    popup.subBonusSkill.map(subBonusSkill => {
                                                        return (
                                                            <button onClick={() => changeContentT2(subBonusSkill)} className='button2'><img src={subBonusSkill.image} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }{popup.subBonusSkillBcard2}
                                                <a style={{ color : '#f5c478' }}>{popup.sideEff}</a>
                                                {popup.sideEffbcard1}{
                                                    popup.sideEffbuff ? (
                                                    popup.sideEffbuff.map(sideEffbuff => {
                                                        return (
                                                            <button onClick={() => changeContentMini2(sideEffbuff)} className='button2'><img src={sideEffbuff.img} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }{popup.sideEffbcard2}
                                                {popup.bonusSkillBcard1}{
                                                    popup.bonusSkill ? (
                                                    popup.bonusSkill.map(bonusSkill => {
                                                        return (
                                                            <button onClick={() => changeContentT2(bonusSkill)} className='button2'><img src={bonusSkill.image} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }{popup.bonusSkillBcard2}
                                            </p>
                                            <p style={{ color: '#ff862c' }}>
                                                {
                                                    popup.releaseBuff ? (
                                                    popup.releaseBuff.map(releaseBuff => {
                                                        return (
                                                            <button onClick={() => changeContentMini2(releaseBuff)} className='button2'><img src={releaseBuff.img} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }
                                                <a style={{ color : '#f5c478' }}>{popup.release}</a>
                                            </p>
                                        </DraggableCard>
                                    </div>
  
                                )}
                                if (popup.type == "skill") {
                                return (
                                    <div>
                                        <div>
                                            <DraggableCard>
                                                <button onClick={changeContent} className='close'></button>                                            
                                                <div>
                                                    <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                                    <p class="popup-title">{popup.title}</p>
                                                    <p>
                                                        {popup.job}<br/>
                                                        <a style={{ color: '#f5c478' }}>{popup.cp}</a><br/><br/>
                                                        <a style={{ color: '#ff862c' }}>{popup.fairy}</a>
                                                        <a style={{ color: '#f5c478' }}>{popup.range}</a><br/>
                                                        <a style={{ color: '#f5c478' }}>{popup.target}</a><br/><br/>
                                                        <a style={{ color: '#f5c478' }}>{popup.cast}</a><br/>
                                                        <a style={{ color: '#f5c478' }}>{popup.cool}</a><br/>
                                                        <a style={{ color: '#f5c478' }}>{popup.mp}</a><br/>
                                                        <a style={{ color: '#ff323d' }}>{popup.price}</a><br/>
                                                    </p>
                                                    <p style={{ color: '#ff862c' }}>
                                                        {popup.bcard1}
                                                        {popup.bcard2}
                                                        {popup.bcard3}{
                                                            popup.buff ? (
                                                            popup.buff.map(buff => {
                                                                return (
                                                                    <button onClick={() => changeContentMini(buff)} className='button2'><img src={buff.img} /></button>
                                                                )
                                                            })) : (<a></a>)
                                                        }{popup.bcard4}
                                                            {popup.bcard5}{
                                                                popup.buff2 ? (
                                                                popup.buff2.map(buff2 => {
                                                                    return (
                                                                        <button onClick={() => changeContentMini2(buff2)} className='button2'><img src={buff2.img} /></button>
                                                                    )
                                                                })) : (<a></a>)
                                                            }{popup.bcard6}
                                                        {popup.bcard7}{
                                                            popup.buff3 ? (
                                                                popup.buff3.map(buff3 => {
                                                                return (
                                                                    <button onClick={() => changeContentMini3(buff3)} className='button2'><img src={buff3.img} /></button>
                                                                )
                                                            })) : (<a></a>)
                                                        }{popup.bcard8}
                                                        {popup.bcard9}{
                                                            popup.comboskill ? (
                                                            popup.comboskill.map(comboskill => {
                                                                return (
                                                                    <button onClick={() => changeContentT3(comboskill)} className='button2'><img src={comboskill.image} /></button>
                                                                )
                                                            })) : (<a></a>)
                                                        }{popup.bcard10}
                                                    </p>
                                                    <p>{popup.desc}</p>
                                                </div>
                                            </DraggableCard>
                                        </div>
                                        <div>
                                            {   /*Buff popup 1*/
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
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            {   /*Buff popup 2*/
                                                popuptogleMini2 &&
                                                <div>
                                                    {
                                                        popupcontentMini2.map(popmin2 => {
                                                            return (
                                                                <div>
                                                                    <DraggableCard>
                                                                        <button onClick={changeContentMini2} className='close'></button>
                                                                        <img class="imgbase" src={popmin2.img} />
                                                                        <p class="popup-title">{popmin2.title}</p>
                                                                        <p>{popmin2.subtitle}
                                                                        <a style={{ color: '#f5c478' }}>{popmin2.duration}</a></p>
                                                                        <p>{popmin2.desc}</p>
                                                                        <p style={{ color: '#ff862c' }}>
                                                                            {popmin2.bcard1}
                                                                            {popmin2.subBcard1}{
                                                                                popmin2.subBuff ? (
                                                                                popmin2.subBuff.map(subBuff => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentMini3(subBuff)} className='button2'><img src={subBuff.img} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin2.subBcard2}
                                                                            {popmin2.subBonusSkillBcard1}{
                                                                                popmin2.subBonusSkill ? (
                                                                                popmin2.subBonusSkill.map(subBonusSkill => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentT2(subBonusSkill)} className='button2'><img src={subBonusSkill.image} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin2.subBonusSkillBcard2}
                                                                            <a style={{ color : '#f5c478' }}>{popmin2.sideEff}</a>
                                                                            {popmin2.sideEffbcard1}{
                                                                                popmin2.sideEffbuff ? (
                                                                                popmin2.sideEffbuff.map(sideEffbuff => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentMini3(sideEffbuff)} className='button2'><img src={sideEffbuff.img} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin2.sideEffbcard2}
                                                                            {popmin2.bonusSkillBcard1}{
                                                                                popmin2.bonusSkill ? (
                                                                                popmin2.bonusSkill.map(bonusSkill => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentT2(bonusSkill)} className='button2'><img src={bonusSkill.image} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin2.bonusSkillBcard2}
                                                                        </p>
                                                                        <p style={{ color: '#ff862c' }}>
                                                                            {
                                                                                popmin2.releaseBuff ? (
                                                                                popmin2.releaseBuff.map(releaseBuff => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentMini3(releaseBuff)} className='button2'><img src={releaseBuff.img} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }
                                                                            <a style={{ color : '#f5c478' }}>{popmin2.release}</a>
                                                                        </p>
                                                                    </DraggableCard>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            {   /*Buff popup 3*/
                                                popuptogleMini3 &&
                                                <div>
                                                    {
                                                        popupcontentMini3.map(popmin3 => {
                                                            return (
                                                                <div>
                                                                    <DraggableCard>
                                                                        <button onClick={changeContentMini3} className='close'></button>
                                                                        <img class="imgbase" src={popmin3.img} />
                                                                        <p class="popup-title">{popmin3.title}</p>
                                                                        <p>{popmin3.subtitle}
                                                                        <a style={{ color: '#f5c478' }}>{popmin3.duration}</a></p>
                                                                        <p>{popmin3.desc}</p>
                                                                        <p style={{ color: '#ff862c' }}>
                                                                            {popmin3.bcard1}
                                                                            {popmin3.subBcard1}{
                                                                                popmin3.subBuff ? (
                                                                                popmin3.subBuff.map(subBuff => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentMini2(subBuff)} className='button2'><img src={subBuff.img} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin3.subBcard2}
                                                                            {popmin3.subBonusSkillBcard1}{
                                                                                popmin3.subBonusSkill ? (
                                                                                popmin3.subBonusSkill.map(subBonusSkill => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentT2(subBonusSkill)} className='button2'><img src={subBonusSkill.image} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin3.subBonusSkillBcard2}
                                                                            <a style={{ color : '#f5c478' }}>{popmin3.sideEff}</a>
                                                                            {popmin3.sideEffbcard1}{
                                                                                popmin3.sideEffbuff ? (
                                                                                popmin3.sideEffbuff.map(sideEffbuff => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentMini2(sideEffbuff)} className='button2'><img src={sideEffbuff.img} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin3.sideEffbcard2}
                                                                            {popmin3.bonusSkillBcard1}{
                                                                                popmin3.bonusSkill ? (
                                                                                popmin3.bonusSkill.map(bonusSkill => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentT2(bonusSkill)} className='button2'><img src={bonusSkill.image} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }{popmin3.bonusSkillBcard2}
                                                                        </p>
                                                                        <p style={{ color: '#ff862c' }}>
                                                                            {
                                                                                popmin3.releaseBuff ? (
                                                                                popmin3.releaseBuff.map(releaseBuff => {
                                                                                    return (
                                                                                        <button onClick={() => changeContentMini2(releaseBuff)} className='button2'><img src={releaseBuff.img} /></button>
                                                                                    )
                                                                                })) : (<a></a>)
                                                                            }
                                                                            <a style={{ color : '#f5c478' }}>{popmin3.release}</a>
                                                                        </p>
                                                                    </DraggableCard>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            }
                                        </div>
                                    </div>
  
                                )}
                                if (popup.type == "spSkill") {
                                return (
                                    <div >                                             
                                        <div>
                                            <DraggableCard>
                                            <button onClick={changeContent} className='close'></button> 
                                            <img className='imgbase' src={'https://cdn.olympusgg.com/images/' + itemId + '.png'}/>
                                            <p class="popup-title">{popup.title}</p>
                                            <p>
                                                {popup.job}<br/>
                                                <a style={{ color: '#f5c478' }}>{popup.cp}</a><br/><br/>
                                                <a style={{ color: '#ff862c' }}>{popup.fairy}</a>
                                                <a style={{ color: '#f5c478' }}>{popup.range}</a><br/>
                                                <a style={{ color: '#f5c478' }}>{popup.target}</a><br/><br/>
                                                <a style={{ color: '#f5c478' }}>{popup.cast}</a><br/>
                                                <a style={{ color: '#f5c478' }}>{popup.cool}</a><br/>
                                                <a style={{ color: '#f5c478' }}>{popup.mp}</a><br/>
                                                <a style={{ color: '#ff323d' }}>{popup.price}</a><br/>
                                            </p>
                                            <p style={{ color: '#ff862c' }}>
                                                {popup.bcard1}
                                                {popup.bcard2}
                                                {popup.bcard3}{
                                                    popup.buff ? (
                                                    popup.buff.map(buff => {
                                                        return (
                                                            <button onClick={() => changeContentMini(buff)} className='button2'><img src={buff.img} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }{popup.bcard4}
                                                    {popup.bcard5}{
                                                        popup.buff2 ? (
                                                        popup.buff2.map(buff2 => {
                                                            return (
                                                                <button onClick={() => changeContentMini2(buff2)} className='button2'><img src={buff2.img} /></button>
                                                            )
                                                        })) : (<a></a>)
                                                    }{popup.bcard6}
                                                    {popup.bcard7}{
                                                        popup.buff3 ? (
                                                        popup.buff3.map(buff3 => {
                                                            return (
                                                                <button onClick={() => changeContentMini(buff3)} className='button2'><img src={buff3.img} /></button>
                                                            )
                                                        })) : (<a></a>)
                                                    }{popup.bcard8}
                                                {popup.bcard9}{
                                                    popup.comboskill ? (
                                                    popup.comboskill.map(comboskill => {
                                                        return (
                                                            <button onClick={() => changeContentT2(comboskill)} className='button2'><img src={comboskill.image} /></button>
                                                        )
                                                    })) : (<a></a>)
                                                }{popup.bcard10}
                                            </p>
                                            <p>{popup.desc}</p>
                                            </DraggableCard>
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
                                )}
                                })}
                    </div>
                }
            </div>
        </div>)
}

export default ({itemId, height = "25", width = "25"}) => (
    App (itemId, height, width)
);