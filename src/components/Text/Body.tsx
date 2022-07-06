import React from "react"
import { Text } from "react-native"

import { tw } from "~theme"

export const Body: React.FC = ({ children }) => (
  <Text style={tw`font-body leading-relaxed text-dark`}>{children}</Text>
)
