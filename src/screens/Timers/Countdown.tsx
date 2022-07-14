import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Animated, Dimensions, StyleSheet, View } from "react-native"
import React, { useEffect, useRef, useState } from "react"

import { Heading } from "~components/Text"
import { TimerStackParamList } from "~navigation/TimersNavigator"
import { colors, tw } from "~theme"

type Props = NativeStackScreenProps<TimerStackParamList, "Countdown">

const DURATION_IN_SECONDS = 5

const Countdown = ({ navigation }: Props) => {
  const [timerSeconds, setTimerSeconds] = useState(DURATION_IN_SECONDS)
  const initialBarWidth = Dimensions.get("screen").width
  const barWidth = useRef(new Animated.Value(initialBarWidth - 32)).current

  useEffect(() => {
    setTimeout(() => {
      if (timerSeconds > 0) {
        setTimerSeconds(timerSeconds - 1)
      } else {
        navigation.navigate("Empty")
      }
    }, 1000)
  }, [timerSeconds])

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: 0,
      duration: (DURATION_IN_SECONDS + 1) * 1000,
      useNativeDriver: false,
    }).start()
  }, [])

  return (
    <View style={tw`flex-1 items-center justify-center px-4`}>
      <Heading style={tw`mb-4`}>Countdown</Heading>
      <Heading style={tw`mb-8`}>{timerSeconds}</Heading>
      <View style={tw`flex-row justify-end`}>
        <View style={tw`bg-teal h-1.5 rounded w-full`}></View>
        <View style={tw`absolute flex-row justify-end`}>
          <Animated.View style={[styles.progressBar, { width: barWidth }]} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  progressBar: {
    height: 6,
    backgroundColor: colors.oceanside,
    borderRadius: 5,
    position: "absolute",
    zIndex: 9999,
  },
})

export default Countdown
