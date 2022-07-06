import React from "react"
import { Text } from "react-native"
import renderer from "react-test-renderer"

import ListRow from "."

const onPress = () => null

test("renders correctly", () => {
  const tree = renderer
    .create(<ListRow text="Snapshot" onPress={onPress} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders custom icon", () => {
  const tree = renderer
    .create(
      <ListRow text="Snapshot" onPress={onPress} icon={<Text>Go →</Text>} />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
