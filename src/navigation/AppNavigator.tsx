import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  faBook,
  faHome,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons"

import Home from "~screens/Home"
import PlanetsNavigator from "~navigation/PlanetsNavigator"
import { colors, tw } from "~theme"

import StorybookRootUI from "../../storybook"

const Tab = createBottomTabNavigator()

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.silver,
        tabBarInactiveTintColor: colors.teal,
        tabBarIcon: ({ size, color }) => {
          let icon

          if (route.name === "Home") {
            icon = faHome
          } else if (route.name === "Planets") {
            icon = faUserAstronaut
          } else if (route.name === "Storybook") {
            icon = faBook
          }

          if (!icon) return null
          return <FontAwesomeIcon icon={icon} size={size} color={color} />
        },
        tabBarStyle: tw`bg-oceanside`,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Planets" component={PlanetsNavigator} />
      <Tab.Screen name="Storybook" component={StorybookRootUI} />
    </Tab.Navigator>
  )
}

export default AppNavigator
