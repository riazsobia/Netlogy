import {render, screen} from '@testing-library/react';

import App from '../star-wars-app';
import People from '../people';

test('renders the element', ()=> {
    render(<App/>);
    const element = screen.getByText(/Hey, Get Star Wars People!!/i);
    expect(element).toBeInTheDocument();
});

test('should render a list!', ()=> {
    const results = [{name: 'Luke', url:'http://luke.com'}];
    render(<People data={results} />);
    const items = screen.getAllByRole('listitem');
    console.log(items[0]);
    expect(items).toHaveLength(1);
});