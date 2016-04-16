const { h4 } = require('cycle-snabbdom');
import { CardText, Input } from '@eldarlabs/cycle-ui';
import { DemoCardView } from '../../../components/DemoCard';

export function InputsView(sources: any) {
  return (
    DemoCardView(sources, 'Text Inputs', [
      CardText(sources, [
        h4('Default Input (no properties)'),
        Input(sources).DOM,
        Input(sources, {
            label: 'Input: Max Length',
            maxLength: 10,
        }).DOM,
      ]).DOM,
    ])
  );
}
