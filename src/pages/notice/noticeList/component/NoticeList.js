import React,{PureComponent} from 'react'
import {Button} from 'antd'

class NoticeList extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const {a} = this.props
    return (
      <div>
        <p>测试个mock数据</p>
        <Button type='primary'>完整的请求+reducer</Button>
        <p>
          {a}
        </p>
      </div>
    )
  }
}
export default NoticeList
