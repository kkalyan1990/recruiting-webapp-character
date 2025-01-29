import { useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './../consts.js';


function Attribute() {
  const [num, setNum] = useState<number>(0);
  return (
    <>
        <div>this is my attribute component</div>
    </>
  );
}

export default Attribute;