const assert = require('assert');
require('../math');

describe('Math.clamp', function() {
  it('returns min when number is below min', function() {
    assert.strictEqual(Math.clamp(2, 5, 10), 5);
  });

  it('returns max when number is above max', function() {
    assert.strictEqual(Math.clamp(12, 5, 10), 10);
  });

  it('returns number when within range', function() {
    assert.strictEqual(Math.clamp(7, 5, 10), 7);
  });
});

describe('Math.moveTowards', function() {
  it('moves up towards target by amountUp but not past', function() {
    assert.strictEqual(Math.moveTowards(0, 10, 5, 3), 5);
    assert.strictEqual(Math.moveTowards(8, 10, 5, 3), 10);
  });

  it('moves down towards target by amountDown but not past', function() {
    assert.strictEqual(Math.moveTowards(20, 10, 5, 3), 17);
    assert.strictEqual(Math.moveTowards(12, 10, 5, 3), 10);
  });

  it('returns current when already at target', function() {
    assert.strictEqual(Math.moveTowards(10, 10, 5, 3), 10);
  });
});
