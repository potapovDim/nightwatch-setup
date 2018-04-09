import Rx from 'rxjs'

import subjects from './subjects'

const initSubject = name => subjects[name] = new Rx.Subject()
const getSubject = subj => subjects[subj] || initSubject(subj)

const callSubject = (name, method, data) => getSubject(name)[method](data)

const emitEvent = (name, data) => callSubject(name, 'next', data)

const subscribeOnEvent = (name, handler, filter) => getSubject(name)
                                                      .filter(event => filter ? filter(event) : true)
                                                      .subscribe(handler)

export const EventEmitter = {
  emitEvent,
  subscribeOnEvent
}