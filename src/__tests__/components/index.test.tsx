import * as React from "react";
import { shallow } from "enzyme";
import App from "./../../components/index";

it("renders the heading", () => {
  const result = shallow(<App />).contains(<h1>Kickstart</h1>);
  expect(result).toBeTruthy();
});
