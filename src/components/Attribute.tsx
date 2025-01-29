import { useState } from 'react';


function Attribute() {
  const [num, setNum] = useState<number>(0);
  return (
    <>
        <div>this is my attribute component</div>
    </>
  );
}

export default Attribute;