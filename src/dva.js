//配置dva的一些配置
import {message} from 'antd'

export function config(){
  return {
    onError(err){
      err.preventDefault();
      message.error(err)
    }
  }
}
