const { article, div } = require('cycle-snabbdom');
import { Observable as $ } from 'rx';
import { HeaderView } from './Header';
import { FooterView } from './Footer';
import { KitchenSinkView } from '../../demo/kitchenSink/components/views/KitchenSink';

export function MainView$(sources: any) {
  return $.just(
    div([
      HeaderView(),
      article([
        KitchenSinkView(sources),
      ]),
      FooterView()
    ])
  );
}
