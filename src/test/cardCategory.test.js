import { render, screen, fireEvent } from '@testing-library/react';
import CardRestaurant from '../components/cardRestaurant/cardRestaurant';

const props = {
    restaurant: {
        url: 'http://localhost:3000/',
        image_url: 'http://localhost:3000/',
        name: 'test',
        rating: 5,
        price: '$',
    },
};
describe('CardCategory component', () => {
    let card;
    let link;
    let button;
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<CardRestaurant {...props} />);
        card = screen.getByRole('banner', { name: 'cardRestaurant' });
        button = screen.getByRole('banner', { name: 'button' });
        link = screen.getByRole('banner', { name: 'linkRestaurant' });
    });
    test('The component is in the document', () => {
        expect(card).toBeInTheDocument();
    });
    test('The button can be clickeable', () => {
        fireEvent.click(button);
    });
    test('<a> has property href and target', () => {
        fireEvent.click(link);
        expect(link).toHaveProperty('href', props.restaurant.url);
    });
});
