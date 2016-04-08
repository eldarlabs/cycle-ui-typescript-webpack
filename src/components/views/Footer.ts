const { a, footer, p } = require('cycle-snabbdom');
/* tslint:disable: no-unused-variable */
// style is needed to import CSS from the webpack loader
const style = require('../../style');
/* tslint:enable */

export function FooterView() {
  return (
    footer(`.${style.footer}`, [
      p([
        '© ',
        a({
          'props': {
            'href': 'https://eldarlabs.com'
          }
        }, `Eldar Labs`),
        ' 2016'])
    ])
  );
}
