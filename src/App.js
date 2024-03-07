import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/cards-list/card.list";
import { Search, Searchbox } from "./components/search/search.box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
      searchFealed: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ Monsters: users });
      });
  }

  handchange=(e)=> this.setState({searchFealed : e.target.value})
  render() {
    const {Monsters,searchFealed}=this.state;
    const filterarray=Monsters.filter(Monsters=>Monsters.name.toLowerCase().includes(searchFealed.toLowerCase()));
    return (
      <div className="App">
  

      <Searchbox placeholder='search monster'  handchange={this.handchange} />
       {filterarray.length>0 && <CardList Monsters={filterarray} /> }
       {!filterarray.length>0 && <p>there is no monster</p>} 
      </div>
    );
  }
}
export default App;
