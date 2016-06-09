import { SELECT_PLAN } from './constants'

const initialState = {
  plans: [{ title: 'F-Mobile' }, { title: 'Mobaphone' }, { title: 'Bye' }],
  selected: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLAN:
      return { ...state, selected: action.index }
    default:
      return state
  }
}
