import React from 'react';
import expect from 'expect';
import Logo from '../Components/Logo';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);
test('Component renders properly', () => {
    const { queryByTestId } = render(<Logo/>);
    expect(queryByTestId("logo")).toHaveTextContent("./URL MiNiFy");
    expect(queryByTestId("logo")).toMatchSnapshot();
});
