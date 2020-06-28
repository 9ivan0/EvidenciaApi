
import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';

class GitHubUser extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://swapi.dev/api/people/20")
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }



  render() {
    const table={
      width: '390px',
      higth: '55%',
  		textAlign:'center'
  	};
  	const titulo={
  		background:'#3B578A',
  		color:'#fff'
  	};
  
    return (
      <div>
        <h1>Ejemplo API</h1>
        <h2>Ejemplo Personaje Star Wars</h2>
        <table border="3" style={table}>
	    		<tr style={titulo}>
	    			<th colspan="2">PERSONAJE STAR WARS</th>
	    		</tr>
			      <tr>
			        <th>Nombre del Personaje</th>
              <td>{this.state.data.name}</td>
			      </tr>
            <tr>
			        <th>Altura del Personaje</th>
              <td>{this.state.data.height} CM</td>
			      </tr>
            <tr>
			        <th>Masa Muscular del Personaje</th>
              <td>{this.state.data.mass} KG</td>
			      </tr>
            <tr>
			        <th>Color de Cabello del Personaje</th>
              <td>{this.state.data.hair_color}</td>
			      </tr>
            <tr>
			        <th>Color de Ojos del Personaje</th>
              <td>{this.state.data.eye_color}</td>
			      </tr>
            <tr>
			        <th>Año Nacimiento del Personaje</th>
              <td>{this.state.data.birth_year}</td>
			      </tr>
            <tr>
			        <th>Genero del Personaje</th>
              <td>{this.state.data.gender}</td>
			      </tr>
            <tr>
			        <th>Vehiculo del Personaje</th>
              <td><a href="http://swapi.dev/api/vehicles/14">{this.state.data.vehicles}</a></td>
			      </tr>
            <tr>
			        <th>Planeta del Personaje</th>
              <td><a href="http://swapi.dev/api/planets/1">{this.state.data.homeworld}</a></td>
			      </tr>
        </table>
      </div>
    );
  }

  
}



const rootElement = document.getElementById("root");
ReactDOM.render(<GitHubUser />, rootElement);