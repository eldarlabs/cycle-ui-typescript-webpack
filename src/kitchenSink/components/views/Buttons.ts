import { Button, Card, CardTitle, CardActions } from '@eldarlabs/cycle-ui';

export function ButtonsView(sources: any) {
  return (
    Card(sources, null, [
      CardTitle(sources, { title: 'Buttons' }, [
        CardActions(sources, null, [
          Button(sources, {
            label: 'Button',
          }).DOM,
          Button(sources, {
            label: 'Button Raised',
            raised: true,
          }).DOM,
        ]).DOM
      ]).DOM
    ]).DOM
  );
}
