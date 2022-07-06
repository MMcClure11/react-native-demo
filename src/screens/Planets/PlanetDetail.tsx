import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { useQuery } from "@apollo/client"
import { Text, View } from "react-native"

import InfoSection from "./InfoSection"
import { PLANET } from "~graphql/queries"
import { PlanetStackParamList } from "~navigation/PlanetsNavigator"
import { formatNumber } from "~utils/format"
import { tw } from "~theme"

type Props = NativeStackScreenProps<PlanetStackParamList, "PlanetDetail">

const PlanetDetail = ({ navigation, route }: Props) => {
  const { loading, error, data } = useQuery(PLANET, {
    variables: { id: route.params.id },
  })

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [])

  if (loading) return <Text>Loading…</Text>
  if (error) return <Text>Error!</Text>

  const {
    climates,
    diameter,
    gravity,
    orbitalPeriod,
    population,
    rotationPeriod,
    surfaceWater,
    terrains,
  } = data.planet
  console.log(surfaceWater)
  const planetData = [
    ["Climates", climates.join(", ")],
    ["Diameter", diameter ? formatNumber(diameter) + " km" : "unknown"],
    ["Gravity", gravity == "unknown" ? "Unkown" : gravity + " G"],
    [
      "Orbital Period",
      orbitalPeriod ? orbitalPeriod + " standard days" : "unknown",
    ],
    ["Population", population ? formatNumber(population) : "unknown"],
    [
      "Rotation Period",
      rotationPeriod ? rotationPeriod + " standard days" : "unknown",
    ],
    ["Surface Water", surfaceWater ? surfaceWater + "%" : "0%"],
    ["Terrains", terrains.join(", ")],
  ]

  return (
    <View style={tw`p-6`}>
      {planetData.map(([title, text]) => (
        <InfoSection title={title} text={text} key={title} />
      ))}
    </View>
  )
}

export default PlanetDetail
