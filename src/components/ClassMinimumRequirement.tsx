import { useEffect, useState } from 'react';
import { CLASS_LIST } from './../consts';

function ClassMinimumRequirement({className}) {
  const [classReq, setClassReq] = useState({});
  useEffect(() => {
    setClassReq(CLASS_LIST[className]);    
  },[className])

  const closeMinimumReq = () => {
    setClassReq({});
    // closeMinimumReqTab();
  }

  return (
  <div>
    {(classReq && Object.keys(classReq).length > 0) && <div>
        <h1>{className} Minimum Requirement</h1>
        <ul style={{listStyleType:'none'}}>
          {classReq && Object.keys(classReq).map((el) => {
            return (<li key={`${el}-${classReq[el]}`} >{el}: {classReq[el]}</li>)
          })}
        </ul>
        <button onClick={closeMinimumReq}> Close minimum requirements</button>
    </div> }    
    </div>);
}

export default ClassMinimumRequirement;