import React from "react"
import { Text, TextStyle } from "react-native"

import { tw } from "~theme"

interface Props {
  style?: TextStyle
}

export const Heading: React.FC<Props> = ({ children, style }) => (
  <Text
    style={tw.style(
      "font-heading text-sm text-dark tracking-wider uppercase",
      style,
    )}>
    {children}
  </Text>
)
