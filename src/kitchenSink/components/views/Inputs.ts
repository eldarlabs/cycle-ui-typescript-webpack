const { h4 } = require('cycle-snabbdom');
import { Card, CardTitle, CardText, Input } from '@eldarlabs/cycle-ui';

export function InputsView(sources: any) {
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
