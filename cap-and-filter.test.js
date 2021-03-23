const capAndFilter = require('./cap-and-filter');

describe('Takes and array of strs and returns capitalized strings and filters out strs starting with F/f', () => {
  it('Filters and capitalizes an array', () => {
    const filtered = capAndFilter([
      'apple', 
      'Fortune', 
      'juice', 
      'dog', 
      'fruit', 
      'Cat',
    ]);

    expect(filtered).toEqual([
      'Apple',
      'Juice',
      'Dog',
      'Cat'
    ]);
  });

});
