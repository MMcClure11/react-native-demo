import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Text, TouchableOpacity, View } from "react-native"

import { tw } from "~theme"

interface Props {
  onPress: () => void
  text: string
  icon?: React.ReactNode
}

export const ListRow: React.FC<Props> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={tw`bg-white border-b border-gray flex-row items-center justify-between px-3 py-4`}>
        <Text style={tw`font-body`}>{props.text}</Text>
        {props.icon || (
          <FontAwesomeIcon icon={faChevronRight} style={tw`text-stone`} />
        )}
      </View>
    </TouchableOpacity>
  )
}
