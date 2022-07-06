import { gql } from "@apollo/client"

export const PLANETS = gql`
  query GetAllPlanets {
    allPlanets {
      planets {
        name
        id
      }
    }
  }
`

export const PLANET = gql`
  query GetPlanet($id: ID) {
    planet(id: $id) {
      climates
      diameter
      gravity
      orbitalPeriod
      population
      rotationPeriod
      surfaceWater
      terrains
    }
  }
`
