import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { text, withKnobs } from "@storybook/addon-knobs"

import { Centered } from "~storybook/decorators"
import InfoSection from "~screens/Planets/InfoSection"

const defaultTitle = "Fox nymphs grab quick-jived waltz."
const defaultText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

storiesOf("Planets/InfoSection", module)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add("default", () => (
    <InfoSection
      title={text("Title", defaultTitle)}
      text={text("Text", defaultText)}
    />
  ))
