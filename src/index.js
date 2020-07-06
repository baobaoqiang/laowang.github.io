import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './components/index/App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    {/*用BrowserRouter管理整个应用*/}
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
