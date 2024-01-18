import Project from "../Project"

export default function Portfolio() {
    return (
      <>
        <h2 className='pageTitle'>Portfolio</h2>
        <div style={{display:'Flex', justifyContent: 'center'}}>
          <Project image="" title="Movie Selector Game" link="https://github.com/DavidRodriguez119/Movie-Selector-Game.git"/>
          <Project image="" title="Boardgame Cafe" link="https://github.com/r-basu/boardgame-cafe.git"/>
          <Project image="" title="Note Taker" link="https://github.com/DavidRodriguez119/Note-taker-app.git"/>
        </div>
      </>
    );
}