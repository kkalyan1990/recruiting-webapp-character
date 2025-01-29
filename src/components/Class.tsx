import { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './../consts';
import ClassMinimumRequirement from './ClassMinimumRequirement';

function Class({classCriteriaReq}) {
  const [showClass,setShowClass] = useState('');

  const showMinimumRequirement = (el) => {
    setShowClass(el);
  }
  
  return (
    <div className='class-container'>
      <div>
          <h1>Classes</h1>
          {Object.keys(CLASS_LIST).map((el) => {
            return (<div key={el} className={classCriteriaReq[el] ? 'active' : 'inactive'} onClick={() => showMinimumRequirement(el)}>
              {el}</div>)
          })}
                  
      </div>
      <div className='class-min-req'>
      <ClassMinimumRequirement className={showClass}></ClassMinimumRequirement>
    </div>
  </div>
  );
}

export default Class;