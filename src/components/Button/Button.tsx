import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { tw } from "~theme"

interface Props {
  isDisabled?: boolean
  onPress: () => void
  text: string
}

export const Button: React.FC<Props> = ({ isDisabled, text, onPress }) => {
  const buttonStyle = "rounded px-8 py-4"

  const ButtonText = () => (
    <Text
      style={tw`font-heading text-center text-${
        isDisabled ? "dark" : "oceanside"
      }`}>
      {text}
    </Text>
  )

  if (isDisabled) {
    return (
      <View style={tw.style(buttonStyle, "bg-stone")}>
        <ButtonText />
      </View>
    )
  } else {
    return (
      <TouchableOpacity
        onPress={isDisabled ? () => null : onPress}
        style={tw.style(buttonStyle, "bg-teal border-2 border-oceanside")}>
        <ButtonText />
      </TouchableOpacity>
    )
  }
}
