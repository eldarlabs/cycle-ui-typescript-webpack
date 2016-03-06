//import Cycle from '@cycle/core';
const Cycle = require('@cycle/core');
const {div, h1, h2, h3, makeDOMDriver} = require('@cycle/dom');
const { Input, RadioButton } = require('@eldarlabs/cycle-ui');
//TODO: how I want this to import
// import { Input, RadioButton } from '@eldarlabs/cycle-ui';
import { Observable } from 'rx';

function kitchenSinkView(sources) {
  return Observable.just(div([
    h1('.example', [`Using Cycle-UI - Kitchen Sink`]),
    h2([`Text Inputs`]),
    h3([`Default Input (no properties)`]),
    Input(sources).DOM,
    Input(sources, {
        label: `Input: Max Length`,
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
