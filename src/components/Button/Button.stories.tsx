import { Alert } from "react-native"
import React from "react"
import { storiesOf } from "@storybook/react-native"
import { boolean, text, withKnobs } from "@storybook/addon-knobs"

import Button from "."
import { Centered } from "~storybook/decorators"

const onPress = () => Alert.alert("Boop!")

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add("default", () => (
    <Button
      text={text("Text", "Tap Me")}
      onPress={onPress}
      isDisabled={boolean("Disabled?", false)}
    />
  ))
  .add("disabled", () => (
    <Button
      text={text("Text", "Untappable")}
      onPress={onPress}
      isDisabled={boolean("Disabled?", true)}
    />
  ))
