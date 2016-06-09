import { h } from 'preact'
import ServicePlan from './service-plan'

const ServicePlans = ({ plans, selectPlan }) =>
  <ul className="service-plans">
    {plans.map(plan =>
      <ServicePlan plan={plan} selectPlan={selectPlan}/>
    )}
  </ul>

export default ServicePlans
