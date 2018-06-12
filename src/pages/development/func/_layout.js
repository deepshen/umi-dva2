import React from 'react'
import {Layout} from 'antd'
import Tree from '../../../components/Tree'
import BtnGroup from './component/BtnGroup'
const {Sider,Content} = Layout


export default props => (
  <Layout style={{height:'100%',backgroundColor:'#fff'}}>
    <Sider>
      <BtnGroup />
      <Tree />
    </Sider>
    <Content>
      {props.children}
    </Content>
  </Layout>
)
