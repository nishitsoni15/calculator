import React from 'react';
import { useState} from 'react';
import { Keypad , Display } from './components/index';

function App() {
  const[result, setResult] = useState("");

  const handleClick = (e) => {
      setResult(result + e.target.name)
  }

  const backspace = () => {
    setResult(result.slice(0,result.length - 1))
  }

  const reset = () => {
    setResult("");
  }

  const calculate = () => {
      setResult(eval(result))
  }

  // const operators = (a,b,c,d,e) => {
  //   if(a === "+"){
  //     setResult(e.target.name)
  //   }else if(b === "-"){
  //     setResult(e.target.name)
  //   }else if(c === "*"){
  //     setResult(e.target.name)
  //   }else if(d === "/"){
  //     setResult(e.target.name)
  //   }
  // }

  return (
    <div className="App">
        <Display HandleClick={handleClick} FinalValue={result}/>
        <Keypad HandleClick={handleClick} Backspace={backspace} Reset={reset} Calculate={calculate}/>
    </div>
  );
}

export default App;
