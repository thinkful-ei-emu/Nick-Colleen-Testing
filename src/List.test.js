import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [{ id: 'a', title: 'First card', content: 'lorem ipsum' },{ id: 'b', title: 'Second card', content: 'lorem ipsum' }];

// Smoke test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='Header' cards={cards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

//Snapshot
describe('<List />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<List header='Header' cards={cards}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});