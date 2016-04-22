const { article, div } = require('cycle-snabbdom');
import { Observable as $ } from 'rx';
import { HeaderView } from './Header';
import { FooterView } from './Footer';
import { KitchenSinkView } from '../../demo/kitchenSink/components/views/KitchenSink';
// const isolate = require('@cycle/isolate');
// import { Counter } from '../../demo/counter';
// import { Counter3 } from '../../demo/counter3';

export function MainView$(sources: any) {
  //sources.isolate = isolate;
  return $.just(
    div([
    div([
      //isolate(Counter)(sources).DOM
      //isolate(Counter3)(sources).DOM
        HeaderView(),
        article([
          KitchenSinkView(sources),
        ]),
        FooterView(),
      ])
    ])
  );
}
