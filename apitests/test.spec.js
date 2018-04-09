const { expect } = require('chai')
const { asyncPostData, asyncGetData } = require('./utils')
const RxUtil = require('./rx-util')

describe('Register user and login test ', () => {
  let password
  let token
  let id
  const name = 'testName'
  it('register user', async () => {
    const postData = JSON.stringify({
      name
    })
    const options = {
      hostname: 'localhost',
      port: 4422,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = await asyncPostData(postData, options)
    expect(data.message).to.eql('user.success.created')
    expect(data.yourPassword).to.exist
    password = data.yourPassword
  })
  it('login user', async () => {
    const postData = JSON.stringify({
      name, password
    })
    const options = {
      hostname: 'localhost',
      port: 4422,
      path: '/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = await asyncPostData(postData, options)
    expect(data.id).to.exist
    expect(data.token).to.exist
    expect(data.username).to.eql(name)
    expect(data.message).to.eql('ok')
    id = data.id
    token = data.token
  })
})
