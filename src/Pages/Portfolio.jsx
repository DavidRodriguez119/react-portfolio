import Project from "../Project"
import MovieSelector from "../assets/GameOverPage.png"
import codingQuiz from "../assets/Quiz.png"
import NoteTaker from "../assets/NoteTaker.png"
export default function Portfolio() {
    return (
      <>
        <h2 className='pageTitle'>Portfolio</h2>
        <div style={{display:'Flex', justifyContent: 'center', flexWrap: `wrap`}}>
          <Project image={MovieSelector} deployed="https://davidrodriguez119.github.io/Movie-Selector-Game/" title="Movie Selector Game" link="https://github.com/DavidRodriguez119/Movie-Selector-Game.git"/>
          <Project image={codingQuiz} deployed="https://davidrodriguez119.github.io/Coding-Quiz/" title="Coding-Quiz" link="https://github.com/DavidRodriguez119/Coding-Quiz.git"/>
          <Project image={NoteTaker} deployed="https://note-taking-app-d-5a75575cca1a.herokuapp.com/" title="Note Taker" link="https://github.com/DavidRodriguez119/Note-taker-app.git"/>
        </div>
      </>
    );
}