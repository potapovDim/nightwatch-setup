require('rxjs/Rx')

const EVENTS = {
  SHARD_DATA: 'SHARD_DATA'
}

const events = { ...EVENTS }

const getEvent = (eventName) => events[eventName]
const callEvent = (name, method, data) => getEvent(name)[method](data)

const emit = (name, data) => callEvent(name, 'next', data)

const subscribe = (name, handler, filter) => getEvent(name)
  .filter((event) => filter ? filter(event) : true)
  .subscribe(handler)


module.exports = {
  emit,
  subscribe,
}
