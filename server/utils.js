const equalUser = (users, enterUser ) => {
  let equal = false;
  for(user of users ){
    if(user.name === enterUser.name){
      equal = true
    }
  }
  return equal
}

const passgenerator = () => {
  const stringPass = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let pass = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for(let i =0; i <12; i++){
    pass += stringPass[rand()]
  }
  return pass
}

const testTokenGenerator = () => {
  const stringToken = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890.'
  let token = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for(let i =0; i <33; i++){
    token += string[rand()]
  }
  return token
}

module.exports = {
  equalUser,
  passgenerator,
  testTokenGenerator
}