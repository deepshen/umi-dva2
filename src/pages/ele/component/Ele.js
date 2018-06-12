import React,{PureComponent} from 'react'

import {Table} from 'antd'

class Ele extends PureComponent{


  render(){
    const columns = [
      {
        title:'组名Code',
        dataIndex:'code'
      },
      {
        title:'是否开启',
        dataIndex:'open',
      },
      {
        title:'组名名称',
        dataIndex:'name',
      },
      {
        title:'组件类型',
        dataIndex:'type',
      },
      {
        title:'参数管理',
        dataIndex:'admin',
      },
      {
        title:'顺序',
        dataIndex:'order'
      }
    ]
    const dataSource = [
      {
        code:'123',open:'是',name:'测试组件1',type:'日志',admin:'参数编辑',order:'1'
      },
      {
        code:'123',open:'否',name:'测试组件2',type:'日志',admin:'参数编辑',order:'1'
      }
    ]
    return (
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
        />

      </div>
    )
  }
}

export default Ele
