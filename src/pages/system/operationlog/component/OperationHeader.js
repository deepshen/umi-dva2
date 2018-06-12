import React,{PureComponent} from 'react'
import {Row,Col,Input,DatePicker,Button} from 'antd'
import styles from './header.less'

class OperationHeader extends PureComponent{


  render(){
    return (
      <Row className={styles.header}>
        <Col span={6}>
          <span>操作人:</span>
          <Input placeholder='请输入操作人'/>
        </Col>
        <Col span={6}>
          <span>开始时间:</span>
          <DatePicker></DatePicker>
        </Col>
        <Col span={6}>
          <span>结束时间:</span>
          <DatePicker></DatePicker>
        </Col>
        <Col>
          <Button type='primary' icon='search'>
            搜索
          </Button>
        </Col>
      </Row>
    )
  }
}

export default OperationHeader
