import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
   return <TextInput{...props} style={{...styles.input, ...props.style}} /> 
}

const styles = StyleSheet.create({
    input: {
        width: 50,
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: "center"
    }
})

export default Input;