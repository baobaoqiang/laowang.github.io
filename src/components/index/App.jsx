/*
 * @Author: wq
 * @Date: 2020-07-07 09:10:06
 * @LastEditors: wq
 * @LastEditTime: 2020-07-07 10:54:25
 * @Description: file content
 * @FilePath: \laowang.github.io\src\components\index\App.jsx
 */
import React, {Component} from 'react';
import {NavLink, Route, Switch as Router, Redirect} from 'react-router-dom'
// import {Switch as Route} from 'react-router-dom'
import './App.less';
import RouterDate from './menuData'
import {Menu} from 'antd';
import bgImg from '../../assets/img/yanjinggirl.jpg'

const {SubMenu} = Menu;
const appBg = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat'

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'inline',
      theme: 'light',
    };
  }

  render() {
    const {mode} = this.state
    return (
      <div className="App">
        <div className={'blog-header'}>
          不想当老师的程序员不是好程序员！
        </div>
        <div className={'blog-con'}>
          <div className={'blog-left'}>
            {/*路由切换的地方*/}
            <Menu mode={mode}>
              {
                RouterDate.menuList.map((item) => {
                  if (item.subMenu.length) {
                    return (
                      <SubMenu title={item.title} key={item.title}>
                        {
                          item.subMenu.map((r) => {
                            return (
                              <Menu.Item key={r.title}>
                                <NavLink to={r.url}>
                                  {r.title}
                                </NavLink>
                              </Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  } else {
                    return (
                      <Menu.Item key={item.title}>
                        <NavLink to={item.url}>
                          {item.title}
                        </NavLink>
                      </Menu.Item>
                    )
                  }
                })
              }
            </Menu>
          </div>
          <div className={'blog-right'} style={appBg}>
            <Router>
              {/*路由显示的地方*/}
              {
                RouterDate.routeList.map((item) => {
                  return <Route key={item.path} path={item.path} component={item.component}/>
                })
              }
              {/*重定向*/}
              <Redirect to='/'/>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
