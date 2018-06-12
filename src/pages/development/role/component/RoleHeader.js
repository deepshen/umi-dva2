import React,{PureComponent} from 'react'
import {Input,Row,Col,Button} from 'antd'


class RoleHeader extends PureComponent{
  render(){
    return (
      <Row>
        <Col span={7}>
          <span>角色名称：</span>
          <Input placeholder='请输入角色名称'/>
        </Col>
        <Col>
          <Button type='primary' icon='search'>搜索</Button>
          <Button icon='plus'>新增</Button>
          <Button icon='edit'>修改</Button>
          <Button icon='delete'>删除</Button>
        </Col>
      </Row>
    )
  }
}

export default RoleHeader

