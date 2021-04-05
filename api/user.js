import request from '@/utils/request'

export const login = data => {
  return request({
    url: '/api/users/login',
    method: 'post',
    data
  })
}

export const register = data => {
  return request({
    url: '/api/users',
    method: 'post',
    data
  })
}