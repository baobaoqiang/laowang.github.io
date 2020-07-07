/*
 * @Author: wq
 * @Date: 2020-07-07 09:10:06
 * @LastEditors: wq
 * @LastEditTime: 2020-07-07 10:34:20
 * @Description: file content
 * @FilePath: \laowang.github.io\src\components\index\App.js
 */
import React, { Component } from 'react';
import './App.less';
import { Button } from "antd";
import menuList from './menuData'
import { Menu, Switch, Divider } from 'antd';
import bgImg from '../../assets/img/yanjinggirl.jpg'

const { SubMenu } = Menu;
const appBg = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover'

}

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      mode: 'inline',
      theme: 'light',
    };
  }

  render() {
    const { mode, theme } = this.state
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
          <div className={'blog-right'} style={appBg}>4444</div>
        </div>
      </div>
    )
  }
}

export default App;
