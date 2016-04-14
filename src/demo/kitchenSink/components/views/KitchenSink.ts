const { section, h2 } = require('cycle-snabbdom');
import { ButtonsView } from './Buttons';
import { CounterDemoView } from './CounterDemo';
import { Dialogs } from './Dialogs';
import { HeadingsView } from './Headings';
import { InputsView } from './Inputs';
import { SpielView } from './Spiel';
import { RadiosView } from './Radios';
/* tslint:disable: no-unused-variable */
// style is needed to import CSS from the webpack loader
const style = require('../../../../style'); /* tslint:enable */

export function KitchenSinkView(sources: any) {
  return (
    section(`.${style.content}`, [
      SpielView(),
      CounterDemoView(sources),
      h2('Controls'),
      Dialogs(sources).DOM,
      ButtonsView(sources),
      InputsView(sources),
      RadiosView(sources),
      h2('Styles'),
      HeadingsView(sources),
    ])
  );
}
