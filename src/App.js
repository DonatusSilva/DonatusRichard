import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Introduction from './Components/Introduction/Introduction';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contacts from './Components/Contacts/Contacts';

import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navigation/>
      <Introduction/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
  );
}
}

export default App;
