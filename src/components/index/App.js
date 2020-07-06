import React, {Component} from 'react';
import './App.less';
import {Button} from "antd";
import menuList from './menuData'
import {Menu, Switch, Divider} from 'antd';

const {SubMenu} = Menu;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      mode: 'inline',
      theme: 'light',
    };
  }

  render() {
    const {mode, theme} = this.state
    return (
      <div className="App">
        <div className={'blog-header'}>
          不想当老师的程序员不是好程序员！
        </div>
        <div className={'blog-con'}>
          <div className={'blog-left'}>
            <Menu mode={mode}>
              {
                menuList.map((item, index) => {
                  if (item.subMenu.length) {
                    return (
                      <SubMenu title={item.title}>
                        {
                          item.subMenu.map((item, i) => {
                            return <Menu.Item>{item.title}</Menu.Item>
                          })
                        }
                      </SubMenu>
                    )
                  } else {
                    return <Menu.Item>{item.title}</Menu.Item>
                  }
                })
              }
            </Menu>
          </div>
          <div className={'blog-right'}></div>
        </div>
      </div>
    )
  }
}

export default App;
