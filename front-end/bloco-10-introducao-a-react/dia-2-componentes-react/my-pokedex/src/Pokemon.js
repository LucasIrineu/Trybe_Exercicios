import React from "react";

class Pokemon extends React.Component {
  render() {
    // const { name, type, averageWeight, measurementUnit, image } = data;

    return(
      <div className ='poke-card'>
        <div className = 'poke-card-info'>
          <p> { this.props.name } </p>
          <p> { this.props.type } </p>
          <p> Average Weight: { this.props.averageWeight.value} { this.props.averageWeight.measurementUnit}</p>
        </div>
        <div className = 'poke-card-image'>
          <img src = { this.props.image } alt = {this.props.name}/>
        </div>  
      </div>
    )
  }
}

export default Pokemon;
