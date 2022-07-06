import { withKnobs } from "@storybook/addon-knobs"
import {
  addDecorator,
  configure,
  getStorybookUI,
} from "@storybook/react-native"

import "./rn-addons"

import { loadStories } from "./stories"

addDecorator(withKnobs)

configure(loadStories, module)

export default getStorybookUI({ asyncStorage: null })
