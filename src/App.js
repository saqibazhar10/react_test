// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';
import Menu from './components/MenuComponent';
import { Component } from 'react';

class  App extends Component {
  
    constructor (props){
      super(props);
      this.state ={
        dishes :DISHES

      };
  }

  render(){
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristornate COn Fusion</NavbarBrand></div> </Navbar>
          <Menu dishes ={this.state.dishes}/>   
    </div>
  );
}
}
// So, this way the dishes that I have defined in the state for
// my App component is now made available as props to my menu component. 
export default App;
