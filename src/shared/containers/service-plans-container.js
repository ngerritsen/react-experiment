import { h, Component } from 'preact'
import ServicePlans from '../components/service-plans'

export default class ServicePlansContainer extends Component {
  constructor(props) {
    super(props)
    const { store, selectPlan } = this.props

    this.state = store.getState()
    this.selectPlan = index => store.dispatch(selectPlan(index))
    store.subscribe(() => this.setState(store.getState()))
  }

  render() {
    const state = this.state
    const plans = state.plans.map((plan, index) => ({
      ...plan,
      selected: state.selected === index,
      index
    }))

    return <ServicePlans plans={plans} selectPlan={this.selectPlan}/>
  }
}
