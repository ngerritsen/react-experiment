import { h } from 'preact'
import render from 'preact-render-to-string'
import dnode from 'dnode'

import ServicePlansContainer from './shared/containers/service-plans-container'

const server = dnode({
    render: (cb) => {
      cb(render(<ServicePlansContainer/>))
    }
})

server.listen(9001)
