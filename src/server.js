import { h } from 'preact'
import render from 'preact-render-to-string'
import dnode from 'dnode'
import { selectPlan } from './shared/actions'
import store from './shared/store'
import ServicePlansContainer from './shared/containers/service-plans-container'

const server = dnode({
    render: (cb) => {
      cb(render(<ServicePlansContainer store={store} selectPlan={selectPlan}/>))
    }
})

server.listen(9001)
