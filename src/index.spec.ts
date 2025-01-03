import { it, describe } from 'node:test';
import assert from 'node:assert/strict';

import { intToUuid, uuidToInt } from './index.ts';

describe('uuidToInt', () => {
  it('convert 0', () => {
    assert.equal(uuidToInt(0), '0');
    assert.equal(uuidToInt('0'), '0');
    assert.equal(uuidToInt(0x0), '0');
  });

  it('try incorrect value', () => {
    assert.throws(() => {
      uuidToInt('x');
    });
  });

  it('convert max uuid', () => {
    const uuid = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
    const result = uuidToInt(uuid);
    assert.equal(result, '340282366920938463463374607431768211455');
  });

  it('should throw type error', () => {
    try {
      uuidToInt(null as any);
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.equal(error.constructor, TypeError);
      assert.equal(error.message, 'Cannot convert null or undefined');
    }
  });

  it('should throw tostring error', () => {
    assert.throws(() => {
      uuidToInt({ toString: void 0 as any });
    });
  });
});

describe('intToUuid', () => {
  it('convert number to uuid', () => {
    const uuid = '585443547289696381';
    const result = intToUuid(uuid);
    assert.equal(result, '00000000-0000-0000-081f-e9cdf03f387d');
  });

  it('should throw type error', () => {
    try {
      intToUuid(null as any);
    } catch (error) {
      assert.ok(error instanceof Error);
      assert.equal(error.constructor, TypeError);
      assert.equal(error.message, 'Cannot convert null or undefined');
    }
  });

  it('should throw tostring error', () => {
    assert.throws(() => {
      intToUuid({ toString: void 0 as any });
    });
  });
});
