import { Card, CardTitle, CardActions, RadioButton, RadioGroup } from '@eldarlabs/cycle-ui';
import { DemoCardView } from '../../../components/DemoCard';

export function RadiosView(sources: any) {
  return (
    DemoCardView(sources, 'Radios (Work in progress)', [
      CardActions(sources, [
        RadioButton(sources, {
          label: 'Radio Single',
          value: 'RadioSingle',
        }).DOM,
        RadioGroup(sources, {name: 'radiosRock', value: 'RadioEasy'}, [
          RadioButton(sources, { label: 'Radio easy', value: 'RadioEasy', }),
          RadioButton(sources, { label: 'Radio is not easy', value: 'RadioHard', })
        ]).DOM,
      ]).DOM
    ])
  );
}
