import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { text, withKnobs } from "@storybook/addon-knobs"

import { Centered } from "~storybook/decorators"
import { Heading } from "."

const defaultText = "Fox nymphs grab quick-jived waltz."

storiesOf("Text/Heading", module)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add("default", () => <Heading>{text("Text", defaultText)}</Heading>)
