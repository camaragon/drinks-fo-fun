import { Component } from 'react';
import './App.css';
import Idea from "../Idea/Idea";
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drinks: [] 
    };
  }
  
  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c")
    .then(response => response.json())
    .then(data => {
      this.setState({drinks: [...this.state.drinks, ...data.drinks]})
      console.log(data.drinks);
    })
    .catch(err => {
      console.error(err);
    });
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b")
    .then(response => response.json())
    .then(data => {
      this.setState({drinks: [...this.state.drinks, ...data.drinks]})
      console.log(data.drinks);
    })
    .catch(err => {
      console.error(err);
    });

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    .then(response => response.json())
    .then(data => {
      this.setState({ drinks: [...this.state.drinks, ...data.drinks] })
      console.log(data.drinks);
    })
    .catch(err => {
	    console.error(err);
    });
  }

  render() {
    console.log(this.state.drinks)
    return (
      <main>
        <h1>Drinks Fo Fun</h1>
        <Form />
        <Idea drinks={this.state.drinks}/>
      </main>
    );
  }
}

export default App;
