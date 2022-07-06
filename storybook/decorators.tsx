import { DecoratorFunction } from "@storybook/addons"
import { View } from "react-native"
import React, { ReactNode } from "react"

import { tw } from "~theme"

export const Centered: DecoratorFunction<ReactNode> = story => (
  <View style={tw`flex-1 items-center justify-center p-8`}>{story()}</View>
)
