import React,{PureComponent} from 'react'
import {Tree} from 'antd'
import router from 'umi/router'
import {connect} from 'dva'
const {TreeNode} = Tree
class MyTree extends PureComponent{
  onhandlerchange = (selectedKeys)=> {
    const pathname = this.props.match.path;
    router.push(pathname+'/'+selectedKeys.join(''))


  }
  render(){
    return(
      <Tree defaultExpandAll={true} onSelect={this.onhandlerchange} showLine showIcon>
        <TreeNode title='多管' key='1'>
          <TreeNode title='财务部' key='finance'></TreeNode>
          <TreeNode title='技术部' key='1-2'>
            <TreeNode title='产品部' key='1-2-1'></TreeNode>
            <TreeNode title='开发部' key='1-2-2'></TreeNode>
          </TreeNode>
          <TreeNode title='行政部' key='1-3'></TreeNode>
        </TreeNode>
      </Tree>
    )
  }
}

export default connect()(MyTree)
