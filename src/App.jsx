import { useState, useEffect } from 'react'
import './App.css'
    

    

function App() {
  
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const pickColor = () => {
    const actualColor = random_hex_color_code()

    setColor(actualColor)

    setAnswers([actualColor, random_hex_color_code(), random_hex_color_code()].sort(() => 0.5 - Math.random() ))

  }


  useEffect(() => {
    pickColor()
  }, [])

  function handleClick(answer) {
    if ( answer === color ){
      setWrongAnswer(false)
      pickColor()
    } else {
      setWrongAnswer(true)
    }
  }
  const choices = answers.map(answer => (
   <button 
      key={answer}
      onClick={() => handleClick(answer)}
    >{answer}</button> 
  ))
  return (
    <div className="App">
        <div className='guess-box' style={{backgroundColor: color}}>
        </div>
        <div className='buttons'>
          {choices}
        </div> 
        {wrongAnswer && <div>wrong answer</div>}
     
    </div>
  )
}

export default App
