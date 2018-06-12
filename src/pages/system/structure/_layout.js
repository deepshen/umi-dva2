import React from 'react'
import Tree from './component/Tree'
import {Layout} from 'antd'
const {Sider} = Layout

export default (props) => {
  return (
    <Layout style={{height:'100%',backgroundColor:'#fff'}}>
      <Sider style={{backgroundColor:'#fff'}}>
        <Tree {...props}/>
      </Sider>
      <Layout>
        {props.children}
      </Layout>
    </Layout>
  )
}
