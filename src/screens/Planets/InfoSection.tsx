import React from "react"
import { View } from "react-native"

import { tw } from "~theme"
import { Body, Heading } from "~components/Text"

interface Props {
  text: string
  title: string
}

const InfoSection: React.FC<Props> = ({ title, text }) => {
  return (
    <View style={tw`mb-5`}>
      <Heading style={tw`mb-1`}>{title}</Heading>
      <Body>{text}</Body>
    </View>
  )
}

export default InfoSection
