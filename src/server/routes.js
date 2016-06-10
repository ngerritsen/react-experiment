import { h } from 'preact'
import render from 'preact-render-to-string'
import express from 'express'
import { createStore, bindActionCreators } from 'redux'

import { selectPlan } from '../shared/actions'
import ServicePlansContainer from '../shared/containers/service-plans-container'
import reducer from '../shared/reducer'

export function servicePlans(req, res) {
  const store = createStore(reducer)
  const actions = bindActionCreators({ selectPlan }, store.dispatch)
  const html = render(<ServicePlansContainer store={store} {...actions}/>)
  const state = JSON.stringify(store.getState())
  const id = 'service-plans'

  res.json({ html, state, id })
}
