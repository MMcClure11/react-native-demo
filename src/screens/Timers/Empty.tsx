import React from "react"
import { View } from "react-native"

import { Heading } from "~components/Text"
import { tw } from "~theme"

const Empty = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Heading style={tw`mb-4`}>Empty</Heading>
    </View>
  )
}

export default Empty
