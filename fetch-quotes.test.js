const fetchQuotes = require("./fetch-quotes");


describe('Fetches a single quote from api', () => {
     it('Returns an single quote object', async () => {
        const quote = await fetchQuotes();

        expect(quote).toEqual(expect.any(Object))
    });

     it('Returns an object with 3 keys', async () => {
        const quote = await fetchQuotes();

        expect(quote).toMatchObject(expect.objectContaining({
           "character": expect.any(String),
            "quote": expect.any(String),
            "image": expect.any(String),
        }))
    });

})