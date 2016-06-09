import { h } from 'preact'

const ServicePlan = ({ plan, selectPlan }) =>
  <li
    className={'service-plan' + ( plan.selected ? ' is-selected' : '')}
    onClick={() => {
      selectPlan(plan.index)
    }}
  >
    {plan.title}
  </li>

export default ServicePlan
