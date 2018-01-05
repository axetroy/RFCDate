import test from 'ava';
import { Now, Parse, Time } from './index';

test('basic', t => {
  const now = Now();
  t.true(now.date instanceof Date);
});

test('.toString()', t => {
  const d = new Date();
  const time = new Time(d);
  t.deepEqual(time.toString(), d.toString());
});

test('.valueOf()', t => {
  const d = new Date();
  const time = new Time(d);
  t.deepEqual(time.valueOf(), d.valueOf());
});

test('.format()', t => {
  const now = new Date();
  for (let RFC in Time) {
    if (Time.hasOwnProperty(RFC)) {
      const layer = Time[RFC];
      const dateStr = new Time(now).format(layer);
      console.log(RFC, '>>>', dateStr);
      const d = Parse(dateStr, layer);
      t.true(d instanceof Date);
    }
  }
  t.pass();
});

test('new Time()', t => {
  const d = new Time(void 0);
  t.pass();
});
