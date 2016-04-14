// Example adapted from https://github.com/cyclejs/examples/tree/master/counter

import { Observable as $ } from 'rx';
const { div, p } = require('cycle-snabbdom');
import { Button } from '@eldarlabs/cycle-ui';

export function Counter(sources: any) {
  const { DOM } = sources;

  const action$ = $.merge(
    DOM.select('.decrement').events('click').map( (ev: any) => -1),
    DOM.select('.increment').events('click').map( (ev: any) => +1)
  );
  let count$ = action$.startWith(0).scan((x: any, y: any) => x + y);
  return {
    DOM: count$.map(count =>
        div([
          Button(sources, { className: 'decrement', label: 'Decrement' }).DOM,
          Button(sources, { className: 'increment', label: 'Increment' }).DOM,
          p('Counter: ' + count)
        ])
      )
  };
}
