import React from 'react';
import expect from 'expect';
import Error from '../Components/Error';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);
test('Component renders properly', () => {
    const { queryByTestId } = render(<Error checked={true}/>);
    expect(queryByTestId("error-display")).toHaveTextContent("Invalid URL");
});
