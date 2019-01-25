import React from 'react';
import expect from 'expect';
import Result from '../Components/Result.js'
import { render, cleanup, fireEvent, waitForDomChange } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);
test('Component renders properly', () => {
    const { queryByTestId} = render(<Result result="test URL" reset={() => null}/>);
    expect(queryByTestId("result")).toHaveTextContent("test URL");
});

test("Copy button works", () => {
    const mockFunction = () => null;
    const { queryByTestId, container } = render(<Result result="test URL" reset={mockFunction()}/>);
    expect(queryByTestId("result")).toHaveTextContent("test URL");
    expect(queryByTestId("not-copied")).toBeInTheDocument();
    fireEvent.click(queryByTestId("copy-button"));
    waitForDomChange({ container }).then(
    () => {
        expect(queryByTestId("not-copied")).not.toBeInTheDocument();
        expect(queryByTestId("successful-copy")).toBeInTheDocument();
    });
});
