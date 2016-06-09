import { h, render } from 'preact'
import ServicePlansContainer from './shared/containers/service-plans-container'
import store from './shared/store'
import { selectPlan } from './shared/actions'

render(
  <ServicePlansContainer store={store} selectPlan={selectPlan}/>,
  document.getElementById('root')
)
