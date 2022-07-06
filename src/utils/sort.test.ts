import { Planet } from "~graphql/types"
import { sortPlanets } from "~utils/sort"

const planet = {
  climates: ["arid"],
  diameter: 1,
  id: "1",
  name: "Alpha",
  orbitalPeriod: 1,
  population: 1,
  rotationPeriod: 1,
  surfaceWater: 1,
  terrains: ["desert"],
}

test("sorts planets", () => {
  const alpha: Planet = { ...planet, name: "Alpha" }
  const beta: Planet = { ...planet, name: "beta" }

  expect(sortPlanets(alpha, beta)).toBe(-1)
  expect(sortPlanets(beta, alpha)).toBe(1)
  expect(sortPlanets(alpha, alpha)).toBe(0)
})
