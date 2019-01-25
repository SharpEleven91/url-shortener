import { mount, configure } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Error from '../Components/Error';
import { render } from 'react-testing-library';

test('Component displays error properly', () => {
    const { container } = render(<Error/>);
    const text = container.firstChild;
    expect(text.textContent).toBe(" Invalid URL ");
})