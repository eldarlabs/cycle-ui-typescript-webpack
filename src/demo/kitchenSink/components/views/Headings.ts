const { h1, h2, h3, h4, h5, h6 } = require('cycle-snabbdom');
import { CardText } from '@eldarlabs/cycle-ui';
import { DemoCardView } from '../../../components/DemoCard';

export function HeadingsView(sources: any) {
  return (
    DemoCardView(sources, 'Headings', [
      CardText(sources, [
        h1('Heading 1'),
        h2('Heading 2'),
        h3('Heading 3'),
        h4('Heading 4'),
        h5('Heading 5'),
        h6('Heading 6'),
      ]).DOM,
    ])
  );
}
