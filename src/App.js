import React from 'react';
import './App.css';
// import '../src/home-work-2/home-work-2-module.css';
import '../src/home-work-4/home-work-4-module.css';
import Blog from './home-work-2/Blog.js';
import 'semantic-ui-css/semantic.min.css';
import WrapperGlide from './home-work-3/WrapperGlide.js';
import {LocalWork} from './home-work-4/LocalWork.js';
import {StatusUser} from './home-work-4/StatusUser.js';
import {ChangeTitle} from './home-work-4/ChangeTitle.js';
import BlogRout from './home-work-5/BlogRout.js'
import MyShop from './home-work-6/MyShop'
import TodoApp from './todo-list/TodoApp';
import MyApp from './home-work-7/MyApp'
// import GistsApp from './home-work-8/GistsApp';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import GistsApp from './home-work-8/GistsApp'



class App extends React.Component {

  render() {
    return (
      <div>
        <GistsApp/>
      </div>
    )
  }
}

export default App;
