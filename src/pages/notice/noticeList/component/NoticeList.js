import React,{PureComponent} from 'react'
import {Button} from 'antd'

class NoticeList extends PureComponent {
  constructor(props){
    super(props)
  }
  ceshi = () => {
    const {dispatch} = this.props
    dispatch({type:'noticelist/ceshi'})
  }
  render() {
    const {a} = this.props
    return (
      <div>
        <p>测试个mock数据</p>
        <Button type='primary' onClick={this.ceshi}>完整的请求+reducer</Button>
        <p>
          {a}
        </p>
      </div>
    )
  }
}
export default NoticeList
