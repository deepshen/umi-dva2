import NoticeList from './component/NoticeList'
import {connect} from 'dva'
import {namespace} from './models/noticeListModel'

const mapStateToProps = state => ({
  ceshi:state[namespace].ceshi,
  a:state[namespace].a,
});

export default connect(mapStateToProps)(NoticeList)
