import React from "react"
import { storiesOf } from "@storybook/react-native"
import { text, withKnobs } from "@storybook/addon-knobs"

import { Body } from "."
import { Centered } from "~storybook/decorators"

const defaultText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

storiesOf("Text/Body", module)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add("default", () => <Body>{text("Text", defaultText)}</Body>)
