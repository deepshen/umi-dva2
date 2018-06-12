import React,{PureComponent} from 'react'
import {Table} from 'antd'

class OperationTable extends PureComponent{

  render(){
    const columns = [
      {title:'操作人',dataIndex:'operator',key:'operator'},
      {title:'操作功能',dataIndex:'func',key:'func'},
      {title:'日志内容',dataIndex:'content',key:'content'},
      {title:'操作时间',dataIndex:'time',key:'titme'}
    ]
    const dataSource = [
      {operator:'lw',func:'开发管理',content:'akjshdjkashd',time:'2018-12-12'}
    ]
    const rowSelection = {

    }
    const pagination = {
      current:2,
      pageSize:10,
      pageSizeOptions:['10','20','30','40'],
      total:40,
      showSizeChanger:true,
      showQuickJumper:true
    }
    return (
      <Table
        columns={columns}
        bordered
        dataSource={dataSource}
        rowSelection={rowSelection}
        pagination={pagination}
      />
    )
  }
}

export default OperationTable
