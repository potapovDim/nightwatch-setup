import Rx from 'rxjs'
import * as events from './events'
import _ from 'lodash'

const subjects = _.mapValues(events, () => new Rx.Subject())
const getSubject = subj => subjects[subj]

const mergeEvents = subs => Rx.Observable.merge(...subs.map(sub => getSubject(sub)))

export default {
  ...subjects
}

