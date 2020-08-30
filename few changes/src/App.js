import React from 'react';

import Register from './Components/Register'

import Login from './Components/Login'

import PostPage from './Components/PostPage'

import CreatePost from './Components/createPost'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'






function App() {
  return (
   <Router>
<Switch>
      
      <Route exact path = "/" component={Register}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/Posts" component = {PostPage}/>
      <Route exact path = "/createPost" component = {CreatePost}/>
    </Switch>
   </Router>
    
  );
}

export default App;
