import React from "react";
import {CollectionOverview} from "./collection-overview";
import { shallow } from "enzyme";

describe('CollectionOverview component', () => {
  test('should render CollectionOverview component', () => {
    expect(<CollectionOverview collections={[]}/>).toMatchSnapshot();
  });
});