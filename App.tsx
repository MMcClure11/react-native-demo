import { ApolloProvider } from "@apollo/client"
import { NavigationContainer } from "@react-navigation/native"
import Sentry from "@sentry/react-native"
import env from "react-native-config"
import React, { ComponentType } from "react"
import { StatusBar, useColorScheme } from "react-native"

import AppNavigator from "~navigation/AppNavigator"
import { client } from "~services/network"

const App = () => {
  const isDarkMode = useColorScheme() === "dark"

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <AppNavigator />
      </NavigationContainer>
    </ApolloProvider>
  )
}

let Entry: ComponentType = App

if (!__DEV__) {
  Sentry.init({
    dsn: env.SENTRY_DSN,
    environment: env.IS_PRODUCTION ? "production" : "staging",
  })

  Entry = Sentry.wrap(App)
}

export default Entry
