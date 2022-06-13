// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

// So, this way the dishes that I have defined in the state for
// my App component is now made available as props to my menu component. 
export default App;