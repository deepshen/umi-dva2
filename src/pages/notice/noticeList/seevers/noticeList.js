import request from '../../../../utils/request'

export function ceshi() {
  return request('/mock/test',{method:'GET'})
}
