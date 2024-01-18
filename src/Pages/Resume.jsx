export default function Resume() {
    return (
      <>
        <h2 className='pageTitle'>About me</h2>
        <div id="resumeContent">          
          <p id="download">Download my<a href="https://drive.google.com/file/d/1HjkRX47H1O-A0SID5B637kP6It5G6jnq/view?usp=sharing" id="resumeLink">resume</a></p>
          <h3>Front-End Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>REACT</li>
            <li>Bootstrap</li>          
          </ul>
          <h3>Back-End Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </>
    );
  }