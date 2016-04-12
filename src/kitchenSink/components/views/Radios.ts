import { Card, CardTitle, CardActions, RadioButton, RadioGroup } from '@eldarlabs/cycle-ui';

export function RadiosView(sources: any) {
  return (
    Card(sources, null, [
      CardTitle(sources, { title: 'Radios (Work in progress)' } ).DOM,
      CardActions(sources, null, [
        RadioButton(sources, {
          label: 'Radio Single',
          value: 'RadioSingle',
        }).DOM,
        RadioGroup(sources, {name: 'radiosRock', value: 'RadioEasy'}, [
          RadioButton(sources, { label: 'Radio easy', value: 'RadioEasy', }),
          RadioButton(sources, { label: 'Radio is not easy', value: 'RadioHard', })
        ]).DOM,
      ]).DOM
    ]).DOM
  );
}
