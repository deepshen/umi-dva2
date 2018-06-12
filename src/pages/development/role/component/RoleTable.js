import React,{PureComponent} from 'react'
import {Table} from 'antd'



const columns = [
  {title:'角色名称',dataIndex:'role',key:'role'},
  {title:'备注',dataIndex:'tips',key:'tips'}
]
class RoleTable extends PureComponent{
  render(){
    return (
      <Table
        columns={columns}
        bordered
      />
    )
  }
}

export default RoleTable
