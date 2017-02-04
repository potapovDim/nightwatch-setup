const equalUser = (users, enterUser ) => {
  let equal = false;
  for(user of users ){
    if(user.name === enterUser.name){
      equal = true
    }
  }
  return equal
}


module.exports ={
  equalUser
}