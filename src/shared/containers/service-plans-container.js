import { h, Component } from 'preact'
import ServicePlans from '../components/service-plans'

export default class ServicePlansContainer extends Component {
  constructor(props) {
    super(props)
    const store = this.props.store
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }

  render() {
    const { selected, plans } = this.state
    const enhancedPlans = this.state.plans.map((plan, index) => ({
      ...plan,
      selected: this.state.selected === index,
      index
    }))

    return <ServicePlans plans={enhancedPlans} selectPlan={this.props.selectPlan}/>
  }
}
