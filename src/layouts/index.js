import React,{PureComponent} from 'react';
import {Layout, Menu} from 'antd'
import styles from './index.css';
import Header from './Header';
import Sider from './Sider'
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
      <Layout className={styles.normal}>
        <Sider {...siderProps} />
        <Layout className={styles.content}>
          <Header {...headerProps}/>
          <Layout className={styles.main}>
            {children}
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


export default withRouter(MyLayout);
