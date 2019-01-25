import React from 'react';
import expect from 'expect';
import Submit from '../Components/Submit';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);
test('Component renders properly', () => {
    const { queryByTestId } = render(<Submit onSubmit={() => null}/>);
    expect(queryByTestId("submit-button")).toHaveTextContent("MiNiFy");
});
