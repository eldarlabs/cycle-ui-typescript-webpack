import { Button, CardActions } from '@eldarlabs/cycle-ui';
import { DemoCardView } from '../../../components/DemoCard';

export function ButtonsView(sources: any) {
  return (
    DemoCardView(sources, 'Buttons', [
      CardActions(sources, null, [
        Button(sources, {
          label: 'Button',
        }).DOM,
        Button(sources, {
          label: 'Button Raised',
          raised: true,
        }).DOM,
      ]).DOM
    ])
  );
}
