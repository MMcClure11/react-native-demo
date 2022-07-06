import React from "react"
import renderer from "react-test-renderer"

import Button from "."

const onPress = () => null

test("renders correctly", () => {
  const tree = renderer
    .create(<Button text="Snapshot" onPress={onPress} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders as disabled", () => {
  const tree = renderer
    .create(<Button text="Snapshot" onPress={() => null} isDisabled />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
