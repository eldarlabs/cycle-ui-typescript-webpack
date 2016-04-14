const { article } = require('cycle-snabbdom');
import { Observable as $ } from 'rx';
import { HeaderView } from './Header';
import { FooterView } from './Footer';
import { KitchenSinkView } from '../../demo/kitchenSink/components/views/KitchenSink';
import { App } from '@eldarlabs/cycle-ui';

export function MainView$(sources: any) {
  return $.just(
    App([
      HeaderView(),
      article([
        KitchenSinkView(sources),
      ]),
      FooterView()
    ]).DOM
  );
}
