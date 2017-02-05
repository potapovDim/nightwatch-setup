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
  const string = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let pass = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for(let i =0; i <12; i++){
    pass += string[rand()]
  }
  return pass
}


module.exports = {
  equalUser,
  passgenerator
}