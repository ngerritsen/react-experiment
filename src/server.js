import { h } from 'preact'
import render from 'preact-render-to-string'
import ServicePlansContainer from './containers/service-plans-container'

const html = render(<ServicePlansContainer/>)
console.log(html)
