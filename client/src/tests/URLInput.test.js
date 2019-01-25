import React from 'react';
import expect from 'expect';
import URLInput from '../Components/URLInput'
import { render, cleanup, fireEvent, waitForDomChange } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);
test('Component renders properly', () => {
    const mockFunc = () => null;
    const { queryByTestId} = render(<URLInput handleChange={mockFunc} handleKeyPress={mockFunc}/>);
    expect(queryByTestId("url-input")).toBeInTheDocument();
});
