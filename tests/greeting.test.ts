import {describe, expect, test} from '@jest/globals';
import {greeting} from '../src/greeting';

test('greeting', () => {
  expect(greeting('Saeid')).toBe('Hello Saeid, 3');
});
