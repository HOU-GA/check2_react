
import './App.css';
import {Card, Button} from 'react-bootstrap';
import Name from './components/Name';
import Description from './components/Description';
import Image from './components/Image';
import Price from './components/Price';
import smile from './assets/images/01.jpg';
function App() {
  let userName ="Houssem";
  return (
    <div className="App">
      
   {/********Message Bonjour*******************************/}
   {userName? (
    <>
    <h4>{`Bonjour ${userName}`} </h4> 
    <img src={smile} alt="smile" width="200px"/>
    </>
   ): (<h4>Bonjour!</h4>)}

     <div className="cards">
     <Card style={{ width: '18rem' }}>
     {/*****Component qui contient l image *******/}
     <Image/>
      
      <Card.Body>
        
        <Card.Title>
               {/*****Component qui contient Name *******/}
          <Name/>
          </Card.Title>
        
        <Card.Text>
               {/*****Component qui contient Description *******/}
          <Description/>
          
        </Card.Text>
        <Button variant="primary">
               {/*****Component qui contient Price *******/}
          <Price/>
          </Button>
      </Card.Body>
    </Card>
    </div>
 
    </div>
  );
}

export default App;
