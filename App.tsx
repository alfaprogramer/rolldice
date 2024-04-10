/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import { ImageSourcePropType, StyleSheet, View, Image, Pressable, Text } from 'react-native';

import DiceOne from '../assets/one.png'
import DiceTwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'



type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}






function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceontap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;


      default:
        setDiceImage(DiceOne)
        break;

    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceontap}>
        <Text style={styles.rollDiceBtnText}>
        Roll the dice
        </Text>
        
      </Pressable>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'black',

  },

  diceContainer: {
    margin: 12,

  },

  diceImage: {
    width: 200,
    height: 200,
  },

  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
})

export default App;
