import { kitchenSinkView } from './kitchenSink';

export function main(sources: any) {
  return {
    DOM: kitchenSinkView(sources)
  };
}
