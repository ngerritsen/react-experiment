import { h, render } from 'preact'
import { createStore } from 'redux'

import ServicePlansContainer from './shared/containers/service-plans-container'
import { selectPlan } from './shared/actions'
import reducer from './shared/reducer'

const store = createStore(reducer, window.initialState)
const rootEl = document.getElementById('root')

rootEl.innerHTML = ''
render(<ServicePlansContainer store={store} selectPlan={selectPlan}/>, rootEl)
