import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('<Home />', () => {
  it('should render search,posts and load more', () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText('não existe posts');
    debug();
  });
});
