import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { useQuery } from "@apollo/client"
import { FlatList, Text } from "react-native"

import ListRow from "~components/ListRow"
import { PLANETS } from "~graphql/queries"
import { Planet } from "~graphql/types"
import { PlanetStackParamList } from "~navigation/PlanetsNavigator"
import { sortPlanets } from "~utils/sort"

type Props = NativeStackScreenProps<PlanetStackParamList, "PlanetList">

const PlanetList = ({ navigation }: Props) => {
  const { loading, error, data } = useQuery(PLANETS)

  if (loading) return <Text>Loading…</Text>
  if (error) return <Text>Error!</Text>

  function renderItem({ item: { id, name } }: { item: Planet }) {
    const onPress = () => navigation.navigate("PlanetDetail", { id, name })
    return <ListRow text={name} onPress={onPress} key={name} />
  }

  const planets = [...data.allPlanets.planets].sort(sortPlanets)
  return <FlatList data={planets} renderItem={renderItem} />
}

export default PlanetList
