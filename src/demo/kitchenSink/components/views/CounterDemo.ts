import { CardText } from '@eldarlabs/cycle-ui';
import { Counter } from '../../../counter';
import { DemoCardView } from '../../../components/DemoCard';

export function CounterDemoView(sources: any) {
  return (
    DemoCardView(sources, 'Counter App Demo', [
      CardText(sources, [
        Counter(sources).DOM
      ]).DOM
    ])
  );
}
