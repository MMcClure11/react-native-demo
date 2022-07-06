import React from "react"
import renderer from "react-test-renderer"

import { Body } from "."

test("renders correctly", () => {
  const tree = renderer.create(<Body>Snapshot</Body>).toJSON()
  expect(tree).toMatchSnapshot()
})
