//import Cycle from '@cycle/core';
const Cycle = require('@cycle/core');
const { a, h1, h2, h4, p, article, header, section, footer, makeDOMDriver }
  = require('@cycle/dom');
import { App, Button, Card, CardTitle, CardText, CardActions, Input,
  RadioButton, RadioGroup } from '@eldarlabs/cycle-ui';
import { Observable } from 'rx';
/* tslint:disable: no-unused-variable */
// style is needed to import CSS from the webpack loader
const style = require('./style');
/* tslint:enable */

function theHeader() {
  return [
    header(`.${style.header}`, [
      h1('.example', ['Cycle-UI - Demo Site']),
    ])
  ];
}

function blurb() {
  return [
    h2(['Kitchen Sink']),
    p([
      'Demo site for ',
      a({
        'attributes': {
          'href': 'https://github.com/eldarlabs/cycle-ui'
        }
      }, ['Cycle-UI']),
      ' using ',
      a({
        'attributes': {
          'href': 'https://github.com/eldarlabs/cycle-ui-typescript-webpack'
        }
      }, ['cycle-ui-typescript-webpack']),
      ' starter project.'
    ])
  ];
}

function theButtons(sources: Object) {
  return [
    Card(sources, null, [
      CardTitle(sources, { title: 'Buttons' } ).DOM,
      CardActions(sources, null, [
        Button(sources, {
          label: 'Button',
        }).DOM,
        Button(sources, {
          label: 'Button Raised',
          raised: true,
        }).DOM,
      ]).DOM
    ]).DOM
  ];
}

function theInputs(sources: Object) {
  return [
    Card(sources, null, [
      CardTitle(sources, { title: 'Text Inputs' } ).DOM,
      CardText(sources, null, [
        h4(['Default Input (no properties)']),
        Input(sources).DOM,
        Input(sources, {
            label: 'Input: Max Length',
            maxLength: 10,
        }).DOM,
      ]).DOM,
    ]).DOM
  ];
}

function theRadios(sources: Object) {
  return [
    Card(sources, null, [
      CardTitle(sources, { title: 'Radios' } ).DOM,
      CardActions(sources, null, [
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
        ]).DOM,
      ]).DOM
    ]).DOM
  ];
}

function theFooter() {
  return [
    footer(`.${style.footer}`, [
      p([
        '© ',
        a({
          'attributes': {
            'href': 'https://eldarlabs.com'
          }
        }, [`Eldar Labs`]),
    ' 2016'])
    ])
  ];
}

function kitchenSinkView(sources: Object) {
  return Observable.just(
    App({}, [
      article([
        theHeader(),
        section(`.${style.content}`, [
          blurb(),
          h2(['Controls']),
          theButtons(sources),
          theInputs(sources),
          theRadios(sources)
        ]),
        theFooter()
      ])
    ]).DOM
  );
}

function main(sources: any) {
  return {
    DOM: kitchenSinkView(sources)
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
