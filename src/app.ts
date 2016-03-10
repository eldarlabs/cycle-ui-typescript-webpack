//import Cycle from '@cycle/core';
const Cycle = require('@cycle/core');
const { h1, h2, h3, makeDOMDriver } = require('@cycle/dom');
import { App, Input, RadioButton, RadioGroup } from '@eldarlabs/cycle-ui';
import { Observable } from 'rx';
/* tslint:disable: no-unused-variable */
// style is needed to import CSS from the webpack loader
const style = require('./style');
/* tslint:enable */

function kitchenSinkView(sources: Object) {
  return Observable.just(
    App({}, [
      h1('.example', [`Using Cycle-UI - Kitchen Sink`]),
      h2([`Text Inputs`]),
      h3([`Default Input (no properties)`]),
      Input(sources).DOM,
      Input(sources, {
          label: `Input: Max Length`,
          maxLength: 10,
      }).DOM,
      RadioButton(sources, {
        label: 'Radio Single',
        value: 'RadioSingle',
      }).DOM,
      RadioGroup(sources, {name: 'radiosRock', value: 'RadioEasy'}, [
        { label: 'Radio easy', value: 'RadioEasy', },
        { label: 'Radio is not easy', value: 'RadioHard' }
        // { RadioButton, { label: 'Radio easy', value: 'RadioEasy', } },
        // { RadioButton, { label: 'Radio is not easy', value: 'RadioHard', } }
        // RadioButton(sources, {
        //   label: 'Radio easy',
        //   value: 'RadioEasy',
        // }).DOM,
        // RadioButton(sources, {
        //   label: 'Radio is not easy',
        //   value: 'RadioHard',
        // }).DOM
      ]).DOM
    ]).DOM
  );
}
function main(sources) {
  return {
    DOM: kitchenSinkView(sources)
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
