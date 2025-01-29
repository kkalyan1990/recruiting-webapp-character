import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Character from './components/Character';


function App() {
  const [character, setCharacter] = useState<string>('1');
  // const [classes, setClasses] = useState(CLASS_LIST);
  const [attributes,setAttributes] = useState({
    'Strength' : 0,
    'Dexterity' : 0,
    'Constitution' : 0,
    'Intelligence' : 0,
    'Wisdom' : 0,
    'Charisma' : 0
});
  // const onAttributeUpdate = (attributes) => {
  //   console.log('in parent component', attributes);

  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
          <Character></Character>
      </section>
    </div>
  );
}

export default App;
