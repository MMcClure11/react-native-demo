import React from "react"
import { Linking, Text, View } from "react-native"

import Button from "~components/Button"
import Logo from "~assets/images/na-logo.svg"
import { REPO_URL } from "~constants"
import { tw } from "~theme"

const Home: React.FC = () => {
  return (
    <View style={tw`bg-silver flex-1 items-center justify-center`}>
      <Logo width={160} height={101} style={tw`mb-8`} />

      <Text style={tw`font-heading mb-12 text-3xl text-dark`}>
        React Native Starter
      </Text>

      <Button text="Learn More" onPress={() => Linking.openURL(REPO_URL)} />
    </View>
  )
}

export default Home
