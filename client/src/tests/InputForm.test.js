import React from "react";
import expect from "expect";
import InputForm from "../Components/InputForm";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
afterEach(cleanup);
test("Component renders properly", () => {
  const dummyFunction = () => null;
  const { queryByTestId } = render(
    <InputForm
      handleClick={dummyFunction}
      handleKeyPress={dummyFunction}
      onSubmit={dummyFunction}
    />
  );
  expect(queryByTestId("inputForm")).toBeInTheDocument();
  expect(queryByTestId("inputForm")).toMatchSnapshot();
});
