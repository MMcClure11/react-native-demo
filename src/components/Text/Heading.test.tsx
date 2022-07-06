import React from "react"
import renderer from "react-test-renderer"

import { Heading } from "."

test("renders correctly", () => {
  const tree = renderer.create(<Heading>Snapshot</Heading>).toJSON()
  expect(tree).toMatchSnapshot()
})
