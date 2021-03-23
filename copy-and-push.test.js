const copyAndPush = require('./copy-and-push');


describe('Copies and pushes new element on to array', () => {
  it('Returns [1, 2, 3, 4] after pushing 4', () => {
    const pushed = copyAndPush([1, 2, 3], 4);

    expect(pushed).toEqual([1, 2, 3, 4]);
  });

});
