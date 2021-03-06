const getName = require('./get-name');


describe('Gets name property from object', () => {
  it('Returns spot from object', () => {
    const name = getName({ name: 'spot', age: 5, weight: '20 lbs' });

    expect(name).toEqual('spot');
  });
  it('Returns Aang from object', () => {
    const name = getName({ _id: '5cf5679a915ecad153ab68c9', name: 'Aang' });

    expect(name).toEqual('Aang');
  });
});
