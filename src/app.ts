const { run } = require('@cycle/core');
import { main } from './main';
const { makeDOMDriver, modules } = require('cycle-snabbdom');
const {
  StyleModule, PropsModule,
  AttrsModule, ClassModule,
  HeroModule, EventsModule,
} = modules;

run(main, {
  DOM: makeDOMDriver('#app', {
    modules: [
      StyleModule, PropsModule,
      AttrsModule, ClassModule,
      HeroModule, EventsModule
    ]
  })
});
