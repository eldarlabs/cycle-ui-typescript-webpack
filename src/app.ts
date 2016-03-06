//import Cycle from '@cycle/core';
const Cycle = require('@cycle/core');
const {div, h3, makeDOMDriver} = require('@cycle/dom');
const { Input, RadioButton } = require('@eldarlabs/cycle-ui');
//TODO: how I want this to import
// import { Input, RadioButton } from '@eldarlabs/cycle-ui';
import { Observable } from 'rx';

function kitchenSinkView(sources) {
  return Observable.just(div([
    h3('.example', [`Using Cycle-UI - Kitchen Sink`]),
    Input(sources, {
        label: `Answer to life`,
        maxLength: 50,
    }).DOM,
    RadioButton(sources, {
      label: 'Radio easy',
      checked: false,
    }).DOM,
  ]));
}
function main(sources) {
  return {
    DOM: kitchenSinkView(sources)
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
