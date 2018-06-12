import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import Link from 'umi/link'

const {Sider} = Layout
const {Item,SubMenu} = Menu

//递归生成sider
const getSider = siders => {
  function insider(siders) {
    return siders.map(function (item) {
      if(item.children){
        return <SubMenu title={<span><Icon type={item.icon || 'search'}></Icon><span>{item.name}</span></span>} key={item.key}>
          {insider(item.children)}
        </SubMenu>
      }else {
        return (
          <Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon || 'search'} /><span>{item.name}</span>
            </Link>
          </Item>
        )
      }
    })
  }
  return insider(siders)
}
//默认展开
const defaultOpen = (siders,pathname) => {
  let defaultData = []
  let id
  (function inid(siders) {
      siders.map(function (item) {
      if(item.children){
        if(item.key === pathname){
          id=item.id
        }else {
          inid(item.children)
        }
      }else {
        if(item.key === pathname){
          id=item.id
        }
      }
    })
  })(siders);
  (function open(siders,id) {
    siders.map(function (item) {
      if(item.children){
        if(item.id === id){
          defaultData.push(item.key)
          open(item.children)
        }
      }else {
        if(item.id === id){
          defaultData.push(item.key)
        }
      }
    })
  })(siders,id)
  return defaultData
}

function MySider({location,collapsed}) {
  const siders = [
    {
      key:'/ele',
      name:'组件管理',
      icon:'search',
      id:1,
      children:[
        {key:'/ele',name:'组件',icon:'search',id:1}
        ]
    },
    {
      key:'/system',
      name:'系统管理',
      id:2,
      children:[
        {key:'/system/structure',name:'组织架构',icon:'search',id:2},
        {key:'/system/operationlog',name:'操作日志',icon:'search',id:2}
        ]
    },
    {
      key:'/development',
      name:'开发管理',
      id:3,
      children:[
        {key:'/development/func/test',name:'测试',icon:'search',id:3},
        {key:'/development/role',name:'角色管理',icon:'user',id:3}
      ]
    }
  ]
  return (
    <Sider width={200} theme='light' collapsed={collapsed} collapsible  trigger={null}>
      <Menu mode='inline' style={{height:'100%',borderRight:0}}
            defaultSelectedKeys={[location.pathname]} defaultOpenKeys={defaultOpen(siders,location.pathname)}>
        {getSider(siders)}
      </Menu>
    </Sider>
  )
}
export default MySider
