import { Observable } from 'rx';
const { a, h1, h2, h3, h4, h5, h6, p, article, header, section, footer } =
  require('cycle-snabbdom');
import { App, Button, Card, CardTitle, CardText, CardActions, Input,
  RadioButton, RadioGroup } from '@eldarlabs/cycle-ui';

/* tslint:disable: no-unused-variable */
// style is needed to import CSS from the webpack loader
const style = require('../style');
/* tslint:enable */

function theHeader() {
  return (
    header(`.${style.header}`, [
      h1('.example', 'Cycle-UI - Demo Site')
    ])
  );
}

function blurb() {
  return (
    h2('Kitchen Sink'),
    p([
      'Demo site for ',
      a({
        'props': {
          'href': 'https://github.com/eldarlabs/cycle-ui'
        }
      }, 'Cycle-UI'),
      ' using ',
      a({
        'props': {
          'href': 'https://github.com/eldarlabs/cycle-ui-typescript-webpack'
        }
      }, 'cycle-ui-typescript-webpack'),
      ' starter project.'
    ])
  );
}

function theButtons(sources: any) {
  return (
    Card(sources, null, [
      CardTitle(sources, { title: 'Buttons' }, [
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
    ]).DOM
  );
}

function theInputs(sources: any) {
  return (
    Card(sources, null, [
      CardTitle(sources, { title: 'Text Inputs' } ).DOM,
      CardText(sources, null, [
        h4('Default Input (no properties)'),
        Input(sources).DOM,
        Input(sources, {
            label: 'Input: Max Length',
            maxLength: 10,
        }).DOM,
      ]).DOM,
    ]).DOM
  );
}

function theRadios(sources: any) {
  return (
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
  );
}

function theHeadings(sources: any) {
  return (
    Card(sources, null, [
      CardTitle(sources, { title: 'Headings' } ).DOM,
      CardText(sources, null, [
        h1('Heading 1'),
        h2('Heading 2'),
        h3('Heading 3'),
        h4('Heading 4'),
        h5('Heading 5'),
        h6('Heading 6'),
      ]).DOM,
    ]).DOM
  );
}

function theFooter() {
  return (
    footer(`.${style.footer}`, [
      p([
        '© ',
        a({
          'props': {
            'href': 'https://eldarlabs.com'
          }
        }, `Eldar Labs`),
        ' 2016'])
    ])
  );
}

export function kitchenSinkView(sources: any) {
  return Observable.just(
    App({}, [
      article([
        theHeader(),
        section(`.${style.content}`, [
          blurb(),
          h2('Controls'),
          theButtons(sources),
          theInputs(sources),
          theRadios(sources),
          h2('Styles'),
          theHeadings(sources),
        ]),
        theFooter()
      ])
    ]).DOM
  );
}
