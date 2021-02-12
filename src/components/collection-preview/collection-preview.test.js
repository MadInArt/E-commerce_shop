import React from "react";
import { shallow } from "enzyme";

import { CollectionPreview } from "./collection-preview";

describe("CollectionPreview component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = "hats";

  const mockProps = {
    match: mockMatch,
    history: mockHistory,
    routeName: mockRouteName,
    title: "hats",
    items: [],
  };

  wrapper = shallow(<CollectionPreview {...mockProps} />);

  test("should render CollectionPreview component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
