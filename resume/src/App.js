import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Contact from './components/contact';
import Skill from './components/skill';
import Quote from './components/quote';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <Quote></Quote>
            <About></About>
            <Timeline></Timeline>
         `<Skill></Skill>`

          <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;