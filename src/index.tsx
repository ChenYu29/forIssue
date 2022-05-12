/**
 * @description: 路由
 * @author: cnn
 * @createTime: 2020/7/16 15:42
 **/
import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadIndex from './upload/UploadIndex';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UploadIndex} />
      </Switch>
    </Router>
  );
};
export default App;
