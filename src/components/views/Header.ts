const { h1, header } = require('cycle-snabbdom');
/* tslint:disable: no-unused-variable */
// style is needed to import CSS from the webpack loader
const style = require('../../style');
/* tslint:enable */

export function HeaderView() {
  return (
    header(`.${style.header}`, [
      h1('.example', 'Cycle-UI - Demo Site')
    ])
  );
}
