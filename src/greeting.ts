import {sum} from './sum';

function greeting(name) {
  return `Hello ${name}, ${sum(1,2)}`;
}

export {greeting};
