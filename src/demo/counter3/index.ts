import { Observable as $ } from 'rx';
const { div, p } = require('cycle-snabbdom');
//import { Button } from '@eldarlabs/cycle-ui';
const isolate = require('@cycle/isolate');
import { Button } from '@eldarlabs/cycle-ui';

// function Button({DOM, label$, value$}) {
//   const click$ = DOM.select('button').events('click')
//     .flatMapLatest(() => value$);
//
//   const view$ = label$.map((label: any) => {
//     return button({}, label);
//   });
//
//   return {
//     click$,
//     DOM: view$
//   };
// }

export function Counter3(sources: any) {
  const { DOM } = sources;

  const decrement: any = Button(sources,
    { isolate: true, className: 'decrement', label: 'Decrement' });
  const increment = Button(sources,
    { isolate: true, className: 'increment', label: 'Increment' });

  const action$ = $.merge(
    DOM.select('.counter').select('.decrement').events('click').map( (ev: any) => -1),
    DOM.select('.counter').select('.increment').events('click').map( (ev: any) => +1)
  );

  //const action$ = decrement.click$.merge(increment.click$);
  const count$ = action$.startWith(0).scan((x: any, y: any) => x + y);

  const view$ = count$.combineLatest(decrement.DOM, increment.DOM,
    (count: any, dec: any, inc: any) => div('.counter', {}, [
      dec,
      inc,
      p({}, `Counter: ${count}`)
    ])
  );

  return {
    DOM: view$
  };
}
