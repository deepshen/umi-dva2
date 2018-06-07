import React,{PureComponent} from 'react'
import styles from './login.less'
import {Input,Form,Button} from 'antd'
import router from 'umi/router'

const FormItem = Form.Item;

class Login extends PureComponent{
  constructor(props){
    super(props)
  }
  login = () => {
    const {getFieldsValue} = this.props.form
    const value = getFieldsValue()
    if(value.name === 'admin' && value.pass === 'admin'){
      router.push('/')
    }
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <div className={styles["login-box"]}>
        <div className={styles["in-box"]}>
          <p className={styles.title}>登录</p>
          <Form style={{padding:'0 20px'}}>
            <FormItem>
              {
                getFieldDecorator('name',{

                })(<Input placeholder='请输入用户名'/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('pass',{

                })(<Input type='password' placeholder='密码' onPressEnter={this.login}/>)
              }
            </FormItem>
            <Button className={styles.btn} type='primary'
              onClick={this.login}
            >登录</Button>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login)
