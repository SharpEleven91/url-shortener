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

test('Input correctly updates field', () => {
    const mockFunc = () => null;
    const { queryByTestId, getByPlaceholderText } = render(<URLInput handleChange={mockFunc} handleKeyPress={mockFunc}/>);
    expect(queryByTestId("url-input")).toHaveTextContent("");
    fireEvent.change(getByPlaceholderText("URL"), { target: {value: "https://www.google.com" }});
    expect(getByPlaceholderText("URL").value).toBe("https://www.google.com");
});