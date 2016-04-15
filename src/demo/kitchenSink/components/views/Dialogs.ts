import { Button, Card, CardTitle, CardText, Dialog } from '@eldarlabs/cycle-ui';
import { Observable as $ } from 'rx';
const { p } = require('cycle-snabbdom');
//import { CycleComponent } from '@eldarlabs/cycle-ui/helpers/cycleDomInterfaces';

export function Dialogs(sources: any) {
  const DOM = sources.DOM;

  const cancelClick$ = DOM.select('.cancel').events('click').
    map( (ev: Event) => 'cancel');
  const saveClick$ = DOM.select('.save').events('click').
    map( (ev: Event) => 'save').
    do((x: any) => console.log('save: ' + x));

  const showDialogClick$ = DOM.select('.showDialog').events('click').
    map( (ev: Event) => 'show').
    do((x: any) => console.log('show: ' + x));

  const isDialogActive$: $<boolean> = $.merge<boolean>(
    cancelClick$.map(false),
    saveClick$.map(false),
    showDialogClick$.map(true)
  ).startWith(false);

  const cancelButton = Button(sources, { className: 'cancel', label: 'Cancel' } );
  const saveButton = Button(sources, { className: 'save', label: 'Save' } );

  function view(isDialogActive: boolean) {
    return (
      Card(sources, null, [
        CardTitle(sources, { title: 'Dialogs (Work in progress)' }, [
          CardText(sources, [
            Button(sources, { className: 'showDialog', label: 'Show Modal Dialog',
              raised: true }).DOM,
            p('is active:' + isDialogActive),
            Dialog({ title: 'Test Dialog', active: isDialogActive,
              actions: [cancelButton.DOM, saveButton] }, [
                p('This is a dialog'),
                p('A dialog can have multiple children controls')
              ]
            ).DOM
          ]).DOM
        ]).DOM
      ]).DOM
    );
  }

  const vtree$ = (
    isDialogActive$.map( (isDialogActive) => {
      return view(isDialogActive);
    })
  );

  return {
    DOM: vtree$,
  };
}
