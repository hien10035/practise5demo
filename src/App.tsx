import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './component/parent/Parent';
import Child from './component/child/Child';




const CommandTexts = [
  {name:'Add', style: {backgroundColor: 'violet', fontSize: '16px', color: 'white'}},
  {name:'Update', style: {backgroundColor: 'grey', fontSize: '16px', color: 'blue'}},
  {name:'Delete', style: {backgroundColor: 'red', fontSize: '16px', color: '#fff'}},
  {name:'Filter', style: {backgroundColor: 'purple', fontSize: '16px', color: 'green'}}
];
function App() {
  return (
    <div className="App">
      <Parent><Child names={CommandTexts}/></Parent>
    </div>
  );
}

export default App;
