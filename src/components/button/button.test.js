import React from "react";
import CustomButton from "./button";
import { shallow } from "enzyme";

describe("CustomButton tests", () => {
  test("expect CustomButton renders properly", () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
  });
  
});
