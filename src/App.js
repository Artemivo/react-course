import React from 'react';
import './App.css';
import '../src/home-work-2/home-work-2-module.css'
import Blog from './home-work-2/Blog.js';
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Blog />
      </div>
    )
  }
}

export default App;
