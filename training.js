const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value:3
    }
  }
}


//while loop
const printList = (listArg) => {
  let list = listArg
  while (list) {
    console.log(list.value)
    list = list.next
  }
}
//recursion
const printListRec = (list) => {
  console.log(list.value)
  list.next && printListRec(list.next)
}
//revert recursin
const printListRecReverse = (list) => {
  list.next && printListRec(list.next)
  console.log(list.value)
}



// printListRec(list)
// printList(list)
//printListRecReverse(list)



const promiseResolver = (arg, done) => {
  let a
  Promise.resolve(arg).then(ar =>{ 
    a = ar
    console.log(a)})
  
  while(!a){
   console.log('wait')
   setTimeout(() => {
    done()
   }, 1123)
  }
  if(a){
    console.log('in return')
    return a
  }
}
const x = promiseResolver(1, () => {})
console.log(x)
