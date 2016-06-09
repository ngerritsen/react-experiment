import { h, Component } from 'preact'
import ServicePlans from '../components/service-plans'

export default class ServicePlansContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: [{ title: 'F-Mobile' }, { title: 'Mobaphone' }, { title: 'Bye' }],
      selected: 0
    }
    this.selectPlan = this.selectPlan.bind(this)
  }

  selectPlan(planIndex) {
    this.setState({ selected: planIndex })
  }

  render() {
    const plans = this.state.plans.map((plan, index) => ({
      ...plan,
      selected: this.state.selected === index,
      index
    }))

    return <ServicePlans plans={plans} selectPlan={this.selectPlan}/>
  }
}
