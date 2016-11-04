import React from "react";
import ReactDOM from "react-dom";


//Import components
import Title from './components/Title.js';
import Container from './components/Container.js';
import Card from './components/Card.js';

class Layout extends React.Component{

  render(){
  
    return(
      <div>
        <Title/>
        <Container>

          <Card
            title="First card"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            link1="Link 1"
            link2="Link 2" />

          <Card
           title="Second card"
           text="Some quick example text to build on the card title and make up the bulk of the card's content."
           link1="Link 1"
           link2="Link 2"
           />

          <Card
            title="Third card"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            link1="Link 1"
            link2="Link 2"
          />
        </Container>
      </div>
    )
  }
}

const app = document.getElementById('root');
ReactDOM.render(<Layout/>,app);
