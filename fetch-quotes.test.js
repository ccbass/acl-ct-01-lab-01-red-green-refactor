const fetchQuotes = require('./fetch-quotes');

jest.mock('node-fetch');
const fetch = require('node-fetch');
const fakedResponse = [{
  'character':'Dr Zoidberg',
  'quote':'It\'s toe-tappingly tragic!',
  'image':'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png'
}];

fetch.mockImplementation(() => {
  return Promise.resolve({ json: () => Promise.resolve(fakedResponse) });
});

describe('Fetches a single quote from api', () => {
  it('Returns an single quote object', async() => {
    const quote = await fetchQuotes();

    expect(quote).toEqual(expect.any(Object));
  });

  it('Returns an object containing the proper 3 named keys', async() => {
    const quote = await fetchQuotes();

    expect(quote).toMatchObject({
      'character': expect.any(String),
      'quote': expect.any(String),
      'image': expect.any(String),
    });
  });

  // Can use toEqual here to avoid calling both match object above and object length below.

  it('Returns an object with exactly 3 keys', async() => {
    const quote = await fetchQuotes();

    expect(Object.keys(quote)).toHaveLength(3);
  });

  it('Fetches object correctly from API', async() => {
    const quote = await fetchQuotes();

    expect(quote).toEqual(fakedResponse[0]);
  });

});


