const Rx = require('rxjs')

const subject = new Rx.Subject();


newSubj.subscribe(val=> console.log(val))

subject.map(val => val+1).subscribe(value => console.log(value))

subject.next('')