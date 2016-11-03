import React from "react";
import ReactDOM from "react-dom";
import { fromJS ,List } from 'immutable';

class Layout extends React.Component{
  constructor() {
      super();
      this.people = List([
        fromJS({id:0, name:"Leonardo", age:20}),
        fromJS({id:1, name:"Neide", age:21}),
        fromJS({id:2, name: "Nathalia",age: 19})
      ]);
  }

  render(){
      console.log();
    return(
      <h1>Hello {this.people.get(0).get("name")}</h1>)
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);
