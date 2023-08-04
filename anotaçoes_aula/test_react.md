<h1 align="center"> Test React </h1>

<p> a gente utiliza test-dom do react junto com jest
<p> it e test ,demostra que estamos utilizando os test:
<p> fn = função
<p> toBe = '==='
<p> expect =
<p> toEqual = objeto ou funcao

              describe('makePoniesPink', () => {
                beforeAll(() => {
                  /* Runs before all tests */
                })
                afterAll(() => {
                  /* Runs after all tests */
                })
                beforeEach(() => {
                  /* Runs before each test */
                })
                afterEach(() => {
                  /* Runs after each test */
                })

                test('make each pony pink', () => {
                  const actual = fn(['Alice', 'Bob', 'Eve'])
                  expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
                })
              })