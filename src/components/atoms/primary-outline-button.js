
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { PRIMARY, WHITE } from '../../styles/colors'
import { PRIMARY_BUTTON_TEXT, PRIMARY_OUTLINE_BUTTON_TEXT } from '../../styles/typography'

export default function PrimaryOutlineButton({ onPress, title }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
          <Text style={[PRIMARY_OUTLINE_BUTTON_TEXT]}>{title}</Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor : 'transparent',
        width: '100%',
        borderColor: PRIMARY,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 8,
        height: 50
    },
})