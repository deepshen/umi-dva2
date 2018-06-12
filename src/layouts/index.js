import React,{PureComponent} from 'react';
import {Layout, Menu,LocaleProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import styles from './index.css';
import Sider from './Sider'
import Header from './Header'
import withRouter from 'umi/withRouter';
import Login from '../pages/login'

class MyLayout extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      collapsed:false
    }
  }
  toggle = () => {
    let collapsed = !this.state.collapsed
    this.setState({
      collapsed,
    })
  }

  render(){
    const {location,children} = this.props
    const headerProps = {
      collapsed:this.state.collapsed,
      location,
      toggle:this.toggle
    }
    const siderProps = {
      collapsed:this.state.collapsed,
      location
    }
    const pathName = location.pathname;
    if(pathName === '/login'){
      return (
        <Login />
      )
    }
    return (
      <LocaleProvider locale={zh_CN}>
        <Layout className={styles.normal}>
          <Header {...headerProps}/>
          <Layout className={styles.content}>
            <Sider {...siderProps} />
            <Layout className={styles.main}>
              {children}
            </Layout>
          </Layout>
        </Layout>
      </LocaleProvider>

    );
  }
}


export default withRouter(MyLayout);
