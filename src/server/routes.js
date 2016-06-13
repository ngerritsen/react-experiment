import { h } from 'preact'
import render from 'preact-render-to-string'
import express from 'express'
import { createStore, bindActionCreators } from 'redux'

import { selectPlan } from '../shared/actions'
import ServicePlansContainer from '../shared/containers/service-plans-container'
import reducer from '../shared/reducer'
import createCache from './cache'

const CACHE_DURATION = 10
const servicePlansCache = createCache(CACHE_DURATION)

export function servicePlans(req, res) {
  if (!servicePlansResultCache.isValid()) {
    const store = createStore(reducer)
    const actions = bindActionCreators({ selectPlan }, store.dispatch)
    const html = render(<ServicePlansContainer store={store} {...actions}/>)
    const state = JSON.stringify(store.getState())
    const id = 'service-plans'

    servicePlansCache.refresh({ html, state, id })
  }

  res.json(servicePlansCache.getData())
}
