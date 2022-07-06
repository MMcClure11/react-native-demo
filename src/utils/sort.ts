import { Planet } from "~graphql/types"

export const sortPlanets = (a: Planet, b: Planet) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}
