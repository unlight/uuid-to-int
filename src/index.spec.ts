import { it, describe } from 'node:test';
import assert from 'node:assert/strict';

import { numberToUuid, uuidToNumber } from './index.ts';

describe('uuidToNumber', s => {
  it('convert 0', t => {
    assert.equal(uuidToNumber(0), '0');
    assert.equal(uuidToNumber('0'), '0');
    assert.equal(uuidToNumber(0x0), '0');
  });

  it('try incorrect value', t => {
    assert.throws(() => {
      uuidToNumber('x');
    });
  });

  it('convert max uuid', () => {
    const uuid = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
    const result = uuidToNumber(uuid);
    assert.equal(result, '340282366920938463463374607431768211455');
  });

  it('should throw type error', () => {
    try {
      uuidToNumber(null as any);
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.equal(error.constructor, TypeError);
      assert.equal(error.message, 'Cannot convert null or undefined');
    }
  });
});

describe('numberToUuid', () => {
  it('convert number to uuid', () => {
    const uuid = '585443547289696381';
    const result = numberToUuid(uuid);
    assert.equal(result, '00000000-0000-0000-081f-e9cdf03f387d');
  });

  it('should throw type error', () => {
    try {
      numberToUuid(null as any);
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.equal(error.constructor, TypeError);
      assert.equal(error.message, 'Cannot convert null or undefined');
    }
  });
});
