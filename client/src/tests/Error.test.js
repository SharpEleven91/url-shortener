import React from 'react';
import expect from 'expect';
import Error from '../Components/Error';
import { render } from 'react-testing-library';
import "jest-dom/extend-expect";

test('Component renders properly', () => {
    const { queryByTestId, container } = render(<Error checked={true}/>);
    expect(queryByTestId("error-display")).toHaveTextContent("Invalid URL");
})