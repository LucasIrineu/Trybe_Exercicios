import React from 'react';

class About extends React.Component {
  render() {

    const skills = ["HTML", 'Javascript', 'CSS', 'React'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

    return (
      <div>
        <h1>
          {'Lucas Irineu'} 
        </h1> 
        <p> 
          {'menino gente boa, tocador de cordas e corações'}
        </p>
        <h2>
          {'Minhas Habilidades'}
        </h2>
        <ul>
          {jsxSkills}
        </ul>
      </div>
      );
  }
}

export default About;