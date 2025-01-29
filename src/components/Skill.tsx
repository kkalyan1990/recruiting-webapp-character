import { useEffect, useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST, SKILL_MODIFIER } from './../consts';
import { calculateAttributeModifier } from '../Utils';


function Skill({Intelligence, attributes}) {
  const [intelligenceModifier, setIntelligenceModifier] = useState(0);
  const [availablePoints, setAvailablePoints] = useState(intelligenceModifier);
  const [skills,setSkills] = useState({
    "Acrobatics": 0,
    "Animal Handling": 0,
    "Arcana": 0,
    "Athletics": 0,
    "Deception": 0,
    "History": 0,
    "Insight": 0,
    "Intimidation": 0,
    "Investigation": 0,
    "Medicine": 0,
    "Nature": 0,
    "Perception": 0,
    "Performance": 0,
    "Persuasion": 0,
    "Religion": 0,
    "Sleight of Hand": 0,
    "Stealth": 0,
    "Survival": 0
  });
  useEffect(() => {
    const pointsToSpend = 10 + 4*calculateAttributeModifier(Intelligence);
    if(pointsToSpend > 0) {
      setIntelligenceModifier(pointsToSpend);
    } else {
      setIntelligenceModifier(0);
    }
    setAvailablePoints(intelligenceModifier);
  },
  [Intelligence])

  const incrementSkill = (el) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [el]: prevSkills[el] + 1
    }))
    setAvailablePoints(availablePoints - 1);
  }

  const decrementAttribute = (el) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [el]: prevSkills[el] - 1
    }))
    setAvailablePoints(availablePoints + 1);
  }

  return (
    <>
    <h1>Skills</h1>
    <label> Total skill points available: {availablePoints} </label>
    <ul>
      {Object.keys(skills).map((el) => {
        return (<li key={`${el}-${skills[el]}`} style={{listStyleType:'none'}}>
          <label className='update-value-variable'>{el} :{skills[el]}</label> 
           ( Modifier: {SKILL_MODIFIER[el]} {calculateAttributeModifier(attributes[SKILL_MODIFIER[el]])})
           <div className='button-container'>
            <button onClick={() => incrementSkill(el)}>+</button>
            <button onClick={() => decrementAttribute(el)}>-</button>
          </div>
          <label>total: {skills[el] + calculateAttributeModifier(attributes[SKILL_MODIFIER[el]])}</label>
          </li>);
      })}
    </ul>      
    </>
  );
}

export default Skill;