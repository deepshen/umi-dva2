import request from '../../../../utils/request'

export function ceshi() {
  return request('/api/shop/cart',{method:'GET'})
}
