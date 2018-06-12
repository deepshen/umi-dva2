import React,{PureComponent} from 'react'

import Header from './OperationHeader'
import Table from './OperationTable'
class Operation extends PureComponent {

  render(){
    return (
      <div>
        <Header />
        <Table />
      </div>
    )
  }
}

export default Operation
