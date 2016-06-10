import { h } from 'preact'
import render from 'preact-render-to-string'
import dnode from 'dnode'
import { createStore } from 'redux'

import { selectPlan } from './shared/actions'
import ServicePlansContainer from './shared/containers/service-plans-container'
import reducer from './shared/reducer'
import config from '../etc/config'

const store = createStore(reducer)

const server = dnode({
    render: (cb) => {
      const html = render(<ServicePlansContainer store={store} selectPlan={selectPlan}/>)
      const state = JSON.stringify(store.getState())

      cb({ html, state })
    }
})

server.listen(config.dnodePort)
