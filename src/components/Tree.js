import React from 'react'
import {Tree} from 'antd'
const {TreeNode} = Tree

//递归生成树状
const renderTree = trees =>{
  function intree(trees) {
    return trees.map(function (item) {
      if(item.children){
        return <TreeNode title={item.title} key={item.key}>
          {intree(item.children)}
        </TreeNode>
      }else {
        return <TreeNode title={item.title} key={item.key}/>
      }
    })
  }
  return <Tree showLine>
    {intree(trees)}
  </Tree>
}
export default props => {
  const test = [
    {title:'123',key:'444',children:[{title:'123',key:'321',children:[{title:'333',key:'444'}]}]},
    {title:'444',key:'555'},
    {title:'555',key:'777'}
  ]

  return (
    renderTree(test)
  )
}
