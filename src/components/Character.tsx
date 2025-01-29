

import { useState } from 'react';
import { CLASS_LIST } from './../consts';
import { AttributeType } from '../types.js';
import Class from './Class';
import './../App.css';
import { characterMeetsMinReq, calculateAttributeModifier } from '../Utils';
import Skill from './Skill';


function Character() {
    const [attributes,setAttributes] = useState({
        'Strength' : 0,
        'Dexterity' : 0,
        'Constitution' : 0,
        'Intelligence' : 0,
        'Wisdom' : 0,
        'Charisma' : 0
    });
    

    const [classCriteriaReq, setClassCriteriaReq] = useState({
        Barbarian: false,
        Wizard: false,
        Bard:false,
    });

    const incrementAttribute = (evt: AttributeType) => { 
        setAttributes((prevAttributes) => {
            const newAttributes = { ...prevAttributes };
            newAttributes[evt] = (newAttributes[evt] || 0) + 1;
            return newAttributes;
        });
        onAttributeUpdate(attributes);
    }
    const decrementAttribute = (evt) => {
        setAttributes((prevAttributes) => {
            const newAttributes = { ...prevAttributes };
            newAttributes[evt] = (newAttributes[evt] || 0) - 1;
            return newAttributes;       
        });
        onAttributeUpdate(attributes);
    }

    const onAttributeUpdate = (attributes) => {
        console.log(attributes);
        Object.keys(CLASS_LIST).forEach(el => {
            const meetsClassReq: boolean = characterMeetsMinReq(attributes,CLASS_LIST[el]);                       
                setClassCriteriaReq((prevClassCriteriaReq) => ({
                    ...prevClassCriteriaReq,
                    [el]: meetsClassReq
                }))
        })
    }
  return (
    <div className='container'>    
       <section className="attribute-list column">      
        {Object.keys(attributes).map((el : AttributeType,val) => (
            <div key={el}>
                <label className='update-value-variable'>{el} {attributes[el]}</label>
                <button onClick={() => incrementAttribute(el)}>+</button>
                <button onClick={() => decrementAttribute(el)}>-{<br/>}</button>
                <label>( Modifier: {calculateAttributeModifier(attributes[el])} )</label>
            </div>
        ))}
       </section>
       <section className="class=list column">
            <Class classCriteriaReq={classCriteriaReq}></Class>
       </section>
       <section>
            <Skill Intelligence={attributes.Intelligence} attributes={attributes}></Skill>
       </section>
    </div>
  );
}

export default Character;