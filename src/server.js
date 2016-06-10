import { h } from 'preact'
import render from 'preact-render-to-string'
import express from 'express';
import { createStore } from 'redux'

import { selectPlan } from './shared/actions'
import ServicePlansContainer from './shared/containers/service-plans-container'
import reducer from './shared/reducer'

const app = express();
const store = createStore(reducer)

app.get('/render', function (req, res) {
  const html = render(<ServicePlansContainer store={store} selectPlan={selectPlan}/>)
  const state = JSON.stringify(store.getState())

  res.json({ html, state })
});

app.listen(3000, function () {
  console.log('React render service listening on port 3000!');
});
