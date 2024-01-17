import { useState } from 'react';
import Header from '../Header';
import "./style.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <>
     <Header setSelectedOption={setSelectedOption}/>
     <div id='content'>
        {selectedOption === 1 && 
        <>
          <h2 className='pageTitle'>About me</h2>
          <div id="infoPicture" className="content">
                <div id='image'>
                  <img src="src\assets\picture.jpg" alt="Picture - David Rodriguez" id='picture'/>
                </div>
                <p>
                    My name is David Santiago Rodriguez, thank you for visiting my portafolio. I am a 23 year old Colombian, currently taking a coding bootcamp at the University of Toronto.
                    I have a background of Mechanical Engineering studies at Conestoga College and 2 years of work experiance as a Drafting and Quality Technician at Planitar Inc.
                    I finally give myself the change to learn to code. It rapidly became one of my passions, and I invite you to scroll down and see what I have learn so far. 
                </p>
          </div>
        </>
        }
        {selectedOption === 2 && <div>Portfolio</div>}
        {selectedOption === 3 && <div>Contact</div>}
        {selectedOption === 4 && <div>Resume</div>}
     </div>
    </>
  )
}

export default App
