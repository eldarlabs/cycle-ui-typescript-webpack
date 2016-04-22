import { Button, Card, CardText, CardTitle, Drawer, Input } from '@eldarlabs/cycle-ui';
import { Observable as $ } from 'rx';
const { p, h5 } = require('cycle-snabbdom');
//import { CycleComponent } from '@eldarlabs/cycle-ui/helpers/cycleDomInterfaces';
import { DemoCardView } from '../../../components/DemoCard';

export function Drawers(sources: any) {
  const DOM = sources.DOM;

  const showDrawerClick$ = DOM.select('.showDrawer').events('click').
    map( (ev: Event) => 'show').
    do((x: any) => console.log('show: ' + x));

  const drawerClose$ = sources.DOM.select('dialog').events('close').
    startWith(false).
    map(() => false).
    do((x: any) => console.log('drawerCloseFromApp: ' + x));

  const isDrawerActive$: $<boolean> = $.merge<boolean>(
    showDrawerClick$.map(true)
    , drawerClose$.map(false)
  ).startWith(false);

  function view(isDrawerActive: boolean) {
    const drawer = (
      Drawer(sources, { isolate: false, className: 'drawer', active: isDrawerActive, type: 'left' }, [
        h5('This is a left drawer'),
        p('A drawer can have multiple children controls'),
        Input(sources, { label: 'Input in a Drawer' }).DOM,
      ])
    );

    // (<any>drawer).closeEvent$.subscribe( (x: any) => {
    //   console.log('close obs event: ' + x);
    // });

    return (
      Card(sources, { isolate: false, className: 'demoDrawers' }, [
        CardTitle(sources, { isolate: false, title: 'Drawers (Work in progress)' }, [
          CardText(sources, { isolate: true }, [
            Button(sources, { isolate: false, className: 'showDrawer', label: 'Show Drawer',
              raised: true }).DOM,
            p('is active: ' + isDrawerActive),
            drawer.DOM,
          ]).DOM
        ]).DOM
      ]).DOM
    );
  }

  const vtree$ = (
  //  $.combineLatest(drawerClose$, isDrawerActive$, (drawerClose: boolean, isDrawerActive: boolean) => {
    isDrawerActive$.map( (isDrawerActive: boolean) => {
      return view(isDrawerActive);
    })
  );

  return {
    DOM: vtree$,
  };
}
