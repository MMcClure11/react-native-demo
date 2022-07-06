import React from "react"
import { storiesOf } from "@storybook/react-native"
import { Alert, FlatList, Text } from "react-native"

import ListRow from "."

const cryptids = [
  "Barmanou",
  "Chuchunya",
  "Chupacabra",
  "Dobhar-chú",
  "Lizard Man of Scape Ore Swamp",
  "Mamlambo",
  "Mothman",
  "Ningen",
  "Thunderbird",
]

storiesOf("ListRow", module)
  .add("default", () => {
    const renderItem = ({ item }: { item: string }) => (
      <ListRow text={item} onPress={() => Alert.alert(item)} key={item} />
    )
    return <FlatList data={cryptids} renderItem={renderItem} />
  })
  .add("with custom icon", () => {
    const renderItem = ({ item }: { item: string }) => (
      <ListRow
        text={item}
        onPress={() => Alert.alert(item)}
        key={item}
        icon={<Text style={{ opacity: 0.4 }}>Go →</Text>}
      />
    )
    return <FlatList data={cryptids} renderItem={renderItem} />
  })
