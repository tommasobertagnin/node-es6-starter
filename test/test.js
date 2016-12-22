import assert from 'assert';
import Test from '../src/components/test';

describe('Test', function () {
  describe('.tryTest()', function () {
    it('should return the same text passed to the constructor function', function () {
      const str = 'if you can read this it\'s good';
      const testComp = new Test(str);
      assert.equal(str, testComp.tryTest());
    });
  });
});
