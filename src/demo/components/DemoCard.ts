import { Card, CardTitle } from '@eldarlabs/cycle-ui';

export function DemoCardView(sources: any, title: string, children: any[]) {
  return (
    Card(sources, [
      CardTitle(sources, { title },
        children
      ).DOM
    ]).DOM
  );
}
