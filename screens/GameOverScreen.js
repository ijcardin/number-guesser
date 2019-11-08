import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Image
                style={{ width: 200, height: 200, padding: 10 }}
                source={require('../img/logo.png')}/>
            <View style={styles.newGameButton}>
                <Button title='NEW GAME' onPress={props.onRestart}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newGameButton: {
        padding: 10
    }
})

export default GameOverScreen