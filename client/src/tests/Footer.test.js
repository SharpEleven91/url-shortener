import React from 'react';
import expect from 'expect';
import Footer from '../Components/Footer';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);
test('Component renders properly', () => {
    const { queryByTestId } = render(<Footer/>);
    expect(queryByTestId("github-button")).toBeInTheDocument();
    expect(queryByTestId("github-button")).toMatchSnapshot();
});
