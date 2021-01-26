import React from 'react';
import './App.css';
import '../src/home-work-2/home-work-2-module.css';
import '../src/home-work-4/home-work-4-module.css';
import Blog from './home-work-2/Blog.js';
import 'semantic-ui-css/semantic.min.css';
import WrapperGlide from './home-work-3/WrapperGlide.js';
import {LocalWork} from './home-work-4/LocalWork.js';
import {StatusUser} from './home-work-4/StatusUser.js';
import {ChangeTitle} from './home-work-4/ChangeTitle.js';
import BlogRout from './home-work-5/BlogRout.js'


class App extends React.Component {

  render() {
    return (
      <div>
        <LocalWork />
      </div>
    )
  }
}

export default App;
