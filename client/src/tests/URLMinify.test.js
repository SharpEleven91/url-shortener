import React from "react";
import expect from "expect";
import URLMinify from "../Components/URLMinify";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
  wait
} from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);
test("Component renders properly", () => {
  const { queryByTestId } = render(<URLMinify />);
  expect(queryByTestId("URLMinify")).toBeInTheDocument();
  expect(queryByTestId("logo")).toBeInTheDocument();
  expect(queryByTestId("inputForm")).toBeInTheDocument();
  expect(queryByTestId("github-button")).toBeInTheDocument();
  expect(queryByTestId("result")).not.toBeInTheDocument();
});

test("Valid input correctly renders", async () => {
  const {
    getByTestId,
    queryByTestId,
    getByPlaceholderText,
    container
  } = render(<URLMinify />);
  const mock = new MockAdapter(axios);
  const data = { shortUrl: "https://umini.herokuapp.com/ex43uzp" };
  mock.onPost("https://umini.herokuapp.com/api/url-shortener").reply(200, data);
  fireEvent.change(getByPlaceholderText("URL"), {
    target: { value: "https://www.google.com" }
  });
  expect(getByPlaceholderText("URL").value).toBe("https://www.google.com");
  expect(getByTestId("submit-button")).toBeInTheDocument();
  await wait(() => fireEvent.click(getByTestId("submit-button")));
  waitForDomChange({ container })
    .then(() => {
      expect(queryByTestId("result")).toBeInTheDocument();
      expect(queryByTestId("inputForm")).not.toBeInTheDocument();
      expect(queryByTestId("result")).toHaveTextContent(
        "https://umini.herokuapp.com/ex43uzp"
      );
    })
    .catch(err => console.log);
});
