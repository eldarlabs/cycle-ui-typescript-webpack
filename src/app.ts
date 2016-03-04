//import Cycle from '@cycle/core';
const Cycle = require('@cycle/core');
//import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
const {div, label, input, hr, h3, makeDOMDriver} = require('@cycle/dom');
//import { Input, RadioButton } from '@eldarlabs/cycle-ui';
const { Input, RadioButton } = require('@eldarlabs/cycle-ui');
import { Observable } from 'rx';
//import style from './style';
const style = require('./style');

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
