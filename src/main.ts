import { MainView$ } from './components/views/Main';

export function main(sources: any) {
  return {
    DOM: MainView$(sources)
  };
}
