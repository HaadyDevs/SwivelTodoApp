
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { PRIMARY, WHITE } from '../../styles/colors'
import { PRIMARY_BUTTON_TEXT } from '../../styles/typography'

export default function PrimaryButton({ onPress, title }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
          <Text style={PRIMARY_BUTTON_TEXT}>{title}</Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor : PRIMARY,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 8,
        height: 55
    },
})