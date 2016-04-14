const { a, h2, p } =
  require('cycle-snabbdom');

export function SpielView() {
  return (
    h2('Kitchen Sink'),
    p([
      'Demo site for ',
      a({
        'props': {
          'href': 'https://github.com/eldarlabs/cycle-ui'
        }
      }, 'Cycle-UI'),
      ' using ',
      a({
        'props': {
          'href': 'https://github.com/eldarlabs/cycle-ui-typescript-webpack'
        }
      }, 'cycle-ui-typescript-webpack'),
      ' starter project.'
    ])
  );
}
