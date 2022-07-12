import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Countdown, Empty } from "~screens/Timers"
import { colors, tw } from "~theme"

export type TimerStackParamList = {
  Countdown: undefined
  Empty: undefined
}

const Stack = createNativeStackNavigator<TimerStackParamList>()

const TimersNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.oceanside,
        headerTitleStyle: tw`font-heading text-dark`,
      }}>
      <Stack.Screen
        name="Countdown"
        component={Countdown}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Empty"
        component={Empty}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  )
}

export default TimersNavigator
