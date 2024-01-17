import { useState } from 'react';
import Header from '../Header'
import "./style.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <>
     <Header setSelectedOption={setSelectedOption}/>
     <div id='content'>
        {selectedOption === 1 && <div>About me</div>}
        {selectedOption === 2 && <div>Portfolio</div>}
        {selectedOption === 3 && <div>Contact</div>}
        {selectedOption === 4 && <div>Resume</div>}
     </div>
    </>
  )
}

export default App
