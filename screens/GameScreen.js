import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandom = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandom(min, max, exclude)
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userChoice))

    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const [rounds, setRounds] = useState(0)
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }

        const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(rounds => rounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />
                </View>
                <View style={styles.button}>
                    <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')} />
                </View>
            </Card>

        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    button: {
        width: 100
    }
})

export default GameScreen