import { mount, configure } from 'enzyme';
import React from 'react';
import expect from 'expect';
import URLMinify from '../Components/URLMinify';
import { render } from 'react-testing-library';

test('Test', () => {
    const { container } = render(<InputForm/>);
    const text = container.firstChild;
    expect(text.textContent).toBe(" Invalid URL ");
})