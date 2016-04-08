const { h1, h2, h3, h4, h5, h6 } =
  require('cycle-snabbdom');
import { Card, CardTitle, CardText } from '@eldarlabs/cycle-ui';

export function HeadingsView(sources: any) {
  return (
    Card(sources, null, [
      CardTitle(sources, { title: 'Headings' } ).DOM,
      CardText(sources, null, [
        h1('Heading 1'),
        h2('Heading 2'),
        h3('Heading 3'),
        h4('Heading 4'),
        h5('Heading 5'),
        h6('Heading 6'),
      ]).DOM,
    ]).DOM
  );
}
