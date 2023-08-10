<h1 align="center"> Mock service  work</h1>

<h2>Utilizameremos biblioteca:</h2>

<p style="font-size:16px" >
Mock service work uma da mais utilizada pelo professor luiz miranda, <a href="https://mswjs.io/docs/getting-started/install"> link </a>
<p>

<li style="font-size:16px"> Comando para install: npm i msw --save-dev 

<h3> Teste assincrono </h3>
<hr>
<p style="font-size:16px"> 
  Quando temos teste assincronos geralmente precisamo utilizar : 


        describe('<Home />', () => {
          it('should render search,posts and load more',async () => {
            const { debug } = render(<Home />);
            const noMorePosts = screen.getByText('não existe posts');
            await waitForElementToBeRemoved(noMorePosts);
            debug();
             });
          });


 <li style="font-size:16px"> utilizamos o waitForElementToBeRemoved(passado onde tem requisiçao da api);

 a gente cria os handles,passarei para ele quais os tipo que url
 com isso nos fazemos nossa importação de 2 importante da 
 libs msw :
</li>
<li  style="font-size:18px">
 rest from msw & setupServer from msw/node 
</li>
<hr>

            import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
            import { Home } from './Home';
            import { rest } from 'msw';
            import { setupServer } from 'msw/node';

            const handles = [];
            const server = setupServer(...handles);
            describe('<Home />', () => {
              it('should render search,posts and load more', async () => {
                render(<Home />);
                const noMorePosts = screen.getByText('não existe posts');
                await waitForElementToBeRemoved(noMorePosts);
                screen.debug();
              });
            });

<li style="font-size:17px"> os handles são para cada chamada url exemplo :  </li>

    const handles = [
      rest.get('url do post', async(req,res,ctx) => {
        return res(ctx.json(
          adiciono os post ,seleciono no maximo 5 p/ teste
        ));
      })
    ];

<li  style="font-size:15px"> servidor de teste </li>

Para iniciar servidor utilizo onde ele vai escutar :
<hr>

                    beforeAll(() => {
                      server.listen();
                      });
Para não atrapalhar certa interrupção ou teste afete outro utilizo :
<hr>

                    afterEach(() => {
                      server.resetHandlers()
                      });

Para encerrar o servidor depois de tudo utilizo :
<hr>

                    afterAll(
                      () => {
                        server.close();
                        });


<li style="font-size:16px"> Podemos utilizar no url '*https://jsonplaceholder.typicode.com/*' assim ele ira buscar todos da url: </li>
</p>
