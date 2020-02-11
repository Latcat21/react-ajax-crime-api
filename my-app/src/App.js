import React, { Component } from 'react';
import CrimeList from './CrimeList';


class App extends Component {
 
  constructor(){
    super();

    this.state = {
      crimes: []
    }
  }

  getCrimes = async () => {
    try{
      const crimes = await fetch(`https://data.cityofchicago.org/resource/crimes.json`);
      const crimesJson = await crimes.json();
      this.setState({crimes: crimesJson});
    }catch(err){
      console.log(err, 'error in catch block')
      return err
    }
  }

  componentDidMount(){
    this.getCrimes()
  }

  deleteItem = (index, e) => {
    // console.log(index,  ' this is the index')
    this.setState((previousState) => (
      {crimes: previousState.crimes.filter((crime, i) => i !== index )
        }));
    }
  


  render(){
    return (
      <div>
      <CrimeList crimes={this.state.crimes} deleteItem={this.deleteItem}/>


      </div>
    )
  }




}



export default App;
