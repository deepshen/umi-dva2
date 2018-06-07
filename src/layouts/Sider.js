import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import Link from 'umi/link'

const {Sider} = Layout
const {Item,SubMenu} = Menu

function MySider({location,collapsed}) {
  return (
    <Sider width={200} theme='light' collapsed={collapsed} collapsible  trigger={null}>
      <Menu mode='inline' style={{height:'100%',borderRight:0}}
        selectedKeys={[location.pathname]}
      >
        <Item key='/'>
          <Link to='/'>
            <Icon type='home' /><span>主页</span>
          </Link>
        </Item>
        <Item key='/users'>
          <Link to='/users'>
            <Icon type='bars' /><span>users</span>
          </Link>
        </Item>
        <SubMenu key='/notice' title={<span>公告</span>}>
          <Item key='/notice/noticeList'>
            <Link to='/notice/noticeList'>
              <Icon type='search' /> <span>公告列表</span>
            </Link>
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}
export default MySider
