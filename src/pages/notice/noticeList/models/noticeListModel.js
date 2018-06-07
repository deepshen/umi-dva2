import * as noticelistserver from '../seevers/noticeList'
export const namespace = 'noticelist'
export default {
  namespace,
  state:{
    ceshi:1,
    a:'等我拿到mock的数据',
  },
  effects:{
    *ceshi({payload},{call,put}){
      const value = yield call(noticelistserver.ceshi);
      yield put({type:'ceshireducer',value})
    }
  },
  reducers:{
    ceshireducer:(state,payload)=>{
      let value = payload.value.data;
      return {
        ...state,
        a:JSON.stringify(value),
      }
    }
  }
}
