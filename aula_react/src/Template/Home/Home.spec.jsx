import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from './Home';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handles = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
        },
        {
          userId: 1,
          id: 2,
          title: 'title2',
          body: 'body2',
        },
        {
          userId: 1,
          id: 3,
          title: 'title3',
          body: 'body3',
        },
      ]),
    );
  }),
  /* teste img */
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          url: 'img.jpg',
        },
        {
          url: 'img.jpg',
        },
        {
          url: 'img.jpg',
        },
      ]),
    );
  }),
];
const server = setupServer(...handles);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());
  afterAll(() => {
    server.close();
  });

  it('should render search,posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('não existe posts');
    await waitForElementToBeRemoved(noMorePosts);
    // screen.debug();
  });
});
