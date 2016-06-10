import { h, render } from 'preact'
import { createStore, bindActionCreators } from 'redux'

import ServicePlansContainer from '../shared/containers/service-plans-container'
import { selectPlan } from '../shared/actions'
import reducer from '../shared/reducer'

const id = 'service-plans'
const store = createStore(reducer, window[id])
const actions = bindActionCreators({ selectPlan }, store.dispatch)
const rootEl = document.getElementById(id)

rootEl.innerHTML = ''
render(<ServicePlansContainer store={store} {...actions}/>, rootEl)
