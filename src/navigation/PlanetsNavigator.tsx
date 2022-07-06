import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { PlanetDetail, PlanetList } from "~screens/Planets"
import { colors, tw } from "~theme"

export type PlanetStackParamList = {
  PlanetList: undefined
  PlanetDetail: { id: string; name: string }
}

const Stack = createNativeStackNavigator<PlanetStackParamList>()

const PlanetsNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.oceanside,
        headerTitleStyle: tw`font-heading text-dark`,
      }}>
      <Stack.Screen
        name="PlanetList"
        component={PlanetList}
        options={{ title: "Planets" }}
      />
      <Stack.Screen name="PlanetDetail" component={PlanetDetail} />
    </Stack.Navigator>
  )
}

export default PlanetsNavigator
