import { PostCard } from './PostCard';
import { postCardPropMock } from './mock';
const { render,screen  } = require('@testing-library/react');


const props = postCardPropMock;
describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
   render(<PostCard {...props} />);
   /* img */
   expect(screen.getByRole('img' , { name: /title_1/i}))
   .toHaveAttribute('src','img/img.png');
    /* heading */
   expect(screen.getByRole('heading' , { name: 'title_1'}))
   .toBeInTheDocument();
   /*  texto */
   expect(screen.getByText('body 1'))
   .toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const {container} = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();

  })
})